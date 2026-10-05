import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { hasModifierKey } from '@angular/cdk/keycodes';
import {
    createFlexibleConnectedPositionStrategy,
    createOverlayRef,
    createRepositionScrollStrategy,
    type ConnectedPosition,
    type FlexibleConnectedPositionStrategy,
    type OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
    DestroyRef,
    Directive,
    DOCUMENT,
    effect,
    ElementRef,
    inject,
    Injector,
    input,
    Renderer2,
    type ComponentRef,
} from '@angular/core';
import { createTooltipLabel, removeTooltipLabel } from './tooltip-label';
import {
    DEFAULT_TOOLTIP_PLACEMENT,
    oppositePlacement,
    tooltipPlacementAttribute,
    type TooltipPlacement,
} from './tooltip-placement';
import { TooltipWarmUpService } from './tooltip-warm-up.service';
import { TooltipComponent } from './tooltip.component';

/** How long the pointer rests on a trigger before its tooltip shows. */
const SHOW_DELAY = 500;

/** How long a tooltip stays after the pointer leaves, so the pointer can move onto it. */
const HIDE_DELAY = 100;

/** How long a finger holds a trigger before its tooltip shows. */
const TOUCH_HOLD_DELAY = 500;

/** How long a tooltip stays after the finger that held its trigger lifts. */
const TOUCH_HIDE_DELAY = 1500;

/** The space that a tooltip keeps from the edges of the viewport. It's `spacing/8`, in the pixels the CDK takes. */
const VIEWPORT_MARGIN = 8;

let nextId = 0;

/**
 * Shows a tooltip with the name of the control it's on, after the `Tooltip` Figma component. Put it on a control
 * that has no visible label, such as an icon button, and set its text to the name of the control.
 *
 * The text is the accessible name of the control, through `aria-labelledby`. The tooltip shows after 500ms of hover,
 * or at once on keyboard focus, and right away for 300ms after another tooltip closes. It hides 100ms after the
 * pointer leaves, so the pointer can move onto it, and on `Escape`. On touch, holding the control for 500ms shows it
 * without pressing the control, and it hides 1.5s after the finger lifts.
 *
 * It shows above the control by default, and flips to the opposite side when it doesn't fit.
 */
@Directive({
    selector: '[dmaTooltip]',
    host: {
        'class': 'dma-tooltip-trigger',
        '[attr.aria-labelledby]': 'labelId',
        '[attr.data-tooltip-id]': 'id',
        '(pointerenter)': 'onPointerEnter($event)',
        '(pointerleave)': 'onPointerLeave($event)',
        '(pointerdown)': 'onPointerDown($event)',
        '(pointerup)': 'onPointerRelease($event)',
        '(pointercancel)': 'onPointerRelease($event)',
        '(contextmenu)': 'onContextMenu($event)',
    },
})
export class TooltipDirective {
    /** The text of the tooltip, which is the accessible name of the control, such as `'Close panel'`. */
    public readonly text = input.required<string>({ alias: 'dmaTooltip' });

    /** The side of the control that the tooltip shows on. It flips to the opposite side when it doesn't fit. */
    public readonly placement = input(DEFAULT_TOOLTIP_PLACEMENT, {
        alias: 'dmaTooltipPlacement',
        transform: tooltipPlacementAttribute,
    });

    /** The id of the bubble, while it shows. */
    protected readonly id = `dma-tooltip-${nextId++}`;

    /** The id of the hidden label that names the control. */
    protected readonly labelId = `${this.id}-label`;

    private readonly injector = inject(Injector);
    private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    private readonly renderer = inject(Renderer2);
    private readonly directionality = inject(Directionality);
    private readonly warmUp = inject(TooltipWarmUpService);
    private readonly label = createTooltipLabel(inject(DOCUMENT), this.labelId);

    /** Closes the tooltip at once. The warm-up service calls it when another tooltip shows. */
    private readonly close = () => this.hide();

    private overlayRef: OverlayRef | null = null;
    private positionStrategy: FlexibleConnectedPositionStrategy | null = null;

    /** The bubble, while it shows. */
    private tooltipRef: ComponentRef<TooltipComponent> | null = null;

    /** Positions the bubble again when its size changes, such as when its text changes or its font loads. */
    private resizeObserver: ResizeObserver | null = null;

    /** The placements that the bubble can take, in the order the CDK tries them: the preferred one, then its opposite. */
    private placements: readonly TooltipPlacement[] = [];
    private positions: readonly ConnectedPosition[] = [];

    /** The timer that shows or hides the tooltip after a delay. */
    private timer: ReturnType<typeof setTimeout> | undefined;

    private pointerOverTrigger = false;
    private pointerOverTooltip = false;

    /** Whether the control has focus from the keyboard or from a script, which keeps the tooltip shown. */
    private focused = false;

    /** Whether a finger holds the control. */
    private touchHeld = false;

    /** Whether holding the control showed the tooltip. */
    private touchShown = false;

    /** Whether to ignore the click that follows the release of a hold that showed the tooltip. */
    private suppressClick = false;

    public constructor() {
        const focusMonitor = inject(FocusMonitor);
        const destroyRef = inject(DestroyRef);

        focusMonitor.monitor(this.host).subscribe((origin) => {
            if (origin === 'keyboard' || origin === 'program') {
                this.onFocus();
            } else if (origin === null) {
                this.onBlur();
            }
        });

        // A hold that showed the tooltip doesn't press the control. The listener captures the click before it
        // reaches the listeners of the app or submits a form.
        const stopListening = this.renderer.listen(
            this.host,
            'click',
            (event: Event) => {
                if (this.suppressClick) {
                    this.suppressClick = false;
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }
            },
            { capture: true },
        );

        effect(() => {
            const text = this.text();

            this.label.textContent = text;
            this.tooltipRef?.setInput('text', text);
        });

        effect(() => {
            const placement = this.placement();

            if (this.tooltipRef !== null) {
                this.position(placement);
                this.overlayRef?.updatePosition();
            }
        });

        destroyRef.onDestroy(() => {
            this.hide();
            focusMonitor.stopMonitoring(this.host);
            stopListening();
            this.overlayRef?.dispose();
            removeTooltipLabel(this.label);
        });
    }

    protected onPointerEnter(event: PointerEvent): void {
        if (event.pointerType === 'touch') {
            return;
        }
        this.pointerOverTrigger = true;
        this.onPointerArrive();
    }

    protected onPointerLeave(event: PointerEvent): void {
        if (event.pointerType === 'touch') {
            return;
        }
        this.pointerOverTrigger = false;
        this.hideWhenUnused();
    }

    protected onPointerDown(event: PointerEvent): void {
        this.suppressClick = false;

        if (event.pointerType !== 'touch') {
            return;
        }
        this.touchHeld = true;
        this.touchShown = false;
        this.schedule(() => {
            this.touchShown = true;
            this.show();
        }, TOUCH_HOLD_DELAY);
    }

    protected onPointerRelease(event: PointerEvent): void {
        if (event.pointerType !== 'touch') {
            return;
        }
        this.touchHeld = false;
        // A tap that ends before the hold delay presses the control as usual. A cancelled hold, such as one that
        // turns into a scroll, sends no click.
        this.suppressClick = this.touchShown && event.type === 'pointerup';

        if (this.tooltipRef === null) {
            clearTimeout(this.timer);
        } else {
            // The tooltip of an earlier hold may still show during a tap, so the release hides whichever shows.
            this.schedule(() => this.hide(), TOUCH_HIDE_DELAY);
        }
    }

    protected onContextMenu(event: Event): void {
        // Holding a control can open the context menu of the browser, which would cover the tooltip.
        if (this.touchHeld || this.touchShown) {
            event.preventDefault();
        }
    }

    private onFocus(): void {
        this.focused = true;
        this.show();
    }

    private onBlur(): void {
        this.focused = false;

        if (!this.pointerOverTrigger && !this.pointerOverTooltip) {
            this.hide();
        }
    }

    /** Shows the tooltip once the pointer rests on the trigger or the bubble, or keeps it when it already shows. */
    private onPointerArrive(): void {
        clearTimeout(this.timer);

        if (this.tooltipRef !== null) {
            return;
        }
        if (this.warmUp.isWarm()) {
            this.show();
        } else {
            this.schedule(() => this.show(), SHOW_DELAY);
        }
    }

    /** Hides the tooltip after a short delay once nothing keeps it: no pointer over it or its trigger, and no focus. */
    private hideWhenUnused(): void {
        if (this.pointerOverTrigger || this.pointerOverTooltip || this.focused) {
            return;
        }
        if (this.tooltipRef === null) {
            // The pointer left before the tooltip showed.
            clearTimeout(this.timer);
        } else {
            this.schedule(() => this.hide(), HIDE_DELAY);
        }
    }

    private schedule(action: () => void, delay: number): void {
        clearTimeout(this.timer);
        this.timer = setTimeout(action, delay);
    }

    private show(): void {
        clearTimeout(this.timer);

        if (this.tooltipRef !== null) {
            return;
        }
        const overlayRef = this.overlayRef ?? this.createOverlay();
        const placement = this.placement();

        this.position(placement);

        // The CDK positions the bubble once it renders, so the inputs set here apply before it measures the bubble.
        const tooltipRef = overlayRef.attach(new ComponentPortal(TooltipComponent, null, this.injector));
        const bubble = (tooltipRef.location as ElementRef<HTMLElement>).nativeElement;

        tooltipRef.setInput('text', this.text());
        tooltipRef.setInput('placement', placement);
        this.renderer.setAttribute(bubble, 'id', this.id);
        this.resizeObserver?.observe(bubble);
        this.tooltipRef = tooltipRef;
        this.warmUp.opened(this.close);
    }

    private hide(): void {
        clearTimeout(this.timer);
        this.touchShown = false;
        this.suppressClick = false;

        if (this.tooltipRef === null) {
            return;
        }
        // A bubble that goes away under the pointer sends no `pointerleave`.
        this.pointerOverTooltip = false;
        this.resizeObserver?.disconnect();
        this.tooltipRef = null;
        this.overlayRef?.detach();
        this.warmUp.closed(this.close);
    }

    /** Points the bubble at the side of the trigger that `placement` names, with its opposite as the fallback. */
    private position(placement: TooltipPlacement): void {
        const rtl = this.directionality.value === 'rtl';

        this.placements = [placement, oppositePlacement(placement)];
        this.positions = this.placements.map((side) => connectedPosition(side, rtl));
        this.positionStrategy?.withPositions([...this.positions]);
        this.tooltipRef?.setInput('placement', placement);
    }

    private createOverlay(): OverlayRef {
        const positionStrategy = createFlexibleConnectedPositionStrategy(this.injector, this.host)
            .withFlexibleDimensions(false)
            .withViewportMargin(VIEWPORT_MARGIN);

        // When the bubble flips, its gap moves to the side that faces the trigger. The bubble keeps its size, so the
        // CDK doesn't need to measure it again.
        positionStrategy.positionChanges.subscribe(({ connectionPair }) => {
            const index = this.positions.findIndex((position) => position === connectionPair);

            if (this.tooltipRef !== null && index !== -1) {
                this.tooltipRef.setInput('placement', this.placements[index]);
                this.tooltipRef.changeDetectorRef.detectChanges();
            }
        });

        const overlayRef = createOverlayRef(this.injector, {
            positionStrategy,
            scrollStrategy: createRepositionScrollStrategy(this.injector, { scrollThrottle: 20 }),
        });

        // The CDK sends a key press to the overlay on top only, so `Escape` closes the tooltip before a dialog that
        // the trigger sits in.
        overlayRef.keydownEvents().subscribe((event) => {
            if (event.key === 'Escape' && !hasModifierKey(event)) {
                event.preventDefault();
                event.stopPropagation();
                this.hide();
            }
        });

        // The pane around the bubble includes its gap, so the pointer can cross the gap from the trigger.
        this.renderer.listen(overlayRef.overlayElement, 'pointerenter', () => {
            this.pointerOverTooltip = true;
            this.onPointerArrive();
        });
        this.renderer.listen(overlayRef.overlayElement, 'pointerleave', () => {
            this.pointerOverTooltip = false;
            this.hideWhenUnused();
        });

        // The CDK measures the bubble once, when it attaches. A flip doesn't change its size, because the gap is a
        // margin outside the box that the observer watches.
        this.resizeObserver = new ResizeObserver(() => overlayRef.updatePosition());
        this.positionStrategy = positionStrategy;
        this.overlayRef = overlayRef;

        return overlayRef;
    }
}

/**
 * Returns the position of a bubble on the side of its trigger that `placement` names, centered along that side. The
 * CDK reads `start` and `end` in the direction of the page, so left and right swap their values in right-to-left.
 */
function connectedPosition(placement: TooltipPlacement, rtl: boolean): ConnectedPosition {
    const left = rtl ? 'end' : 'start';
    const right = rtl ? 'start' : 'end';

    switch (placement) {
        case 'top':
            return { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom' };
        case 'bottom':
            return { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top' };
        case 'left':
            return { originX: left, originY: 'center', overlayX: right, overlayY: 'center' };
        case 'right':
            return { originX: right, originY: 'center', overlayX: left, overlayY: 'center' };
    }
}
