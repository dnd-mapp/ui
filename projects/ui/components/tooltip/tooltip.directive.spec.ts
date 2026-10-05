import { Component, signal } from '@angular/core';
import { tokens, values } from '@dnd-mapp/design-tokens';
import { TooltipHarness } from '@dnd-mapp/ui/components/testing';
import { IconPlusComponent, IconXmarkComponent } from '@dnd-mapp/ui/icons';
import { resolveStyle, setupHarness } from '@dnd-mapp/ui/testing';
import { page, userEvent } from 'vitest/browser';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { DEFAULT_TOOLTIP_PLACEMENT, type TooltipPlacement } from './tooltip-placement';
import { TooltipDirective } from './tooltip.directive';

// The padding leaves room for the tooltip on every side of the first icon button.
@Component({
    template: `<div style="padding: 160px 150px">
        <button
            dma-icon-button
            type="button"
            aria-label="Close panel"
            variant="ghost"
            [dmaTooltip]="text()"
            [dmaTooltipPlacement]="placement()"
            [disabled]="disabled()"
            (click)="clicks.set(clicks() + 1)"
        >
            <dma-icon-xmark />
        </button>
        <button dma-icon-button type="button" aria-label="Add layer" variant="ghost" dmaTooltip="Add layer">
            <dma-icon-plus />
        </button>
    </div>`,
    imports: [IconButtonComponent, IconXmarkComponent, IconPlusComponent, TooltipDirective],
})
class TestHostComponent {
    public readonly text = signal('Close panel');
    public readonly placement = signal<TooltipPlacement>(DEFAULT_TOOLTIP_PLACEMENT);
    public readonly disabled = signal(false);
    public readonly clicks = signal(0);
}

// The icon button sits in the top-left corner, so a tooltip above or left of it doesn't fit.
@Component({
    template: `<button
        dma-icon-button
        type="button"
        aria-label="Close panel"
        [dmaTooltip]="'Close panel'"
        [dmaTooltipPlacement]="placement()"
    >
        <dma-icon-xmark />
    </button>`,
    imports: [IconButtonComponent, IconXmarkComponent, TooltipDirective],
})
class CornerTestHostComponent {
    public readonly placement = signal<TooltipPlacement>(DEFAULT_TOOLTIP_PLACEMENT);
}

@Component({
    template: `<div style="padding: 160px 150px">
        <button type="button" dmaTooltip="Close panel" dmaTooltipPlacement>X</button>
    </div>`,
    imports: [TooltipDirective],
})
class BarePlacementTestHostComponent {}

@Component({
    template: `@if (shown()) {
        <button type="button" dmaTooltip="Close panel">X</button>
    }`,
    imports: [TooltipDirective],
})
class RemovableTestHostComponent {
    public readonly shown = signal(true);
}

/** Returns the bubble of the tooltip with the given text, or `null` while it's hidden. */
function findBubble(text: string): HTMLElement | null {
    return (
        [...document.querySelectorAll<HTMLElement>('dma-tooltip')].find(
            (bubble) => bubble.textContent.trim() === text,
        ) ?? null
    );
}

/** Returns the bubble of the tooltip with the given text. */
function getBubble(text: string): HTMLElement {
    const bubble = findBubble(text);

    if (bubble === null) {
        throw new Error(`The tooltip "${text}" doesn't show.`);
    }
    return bubble;
}

/** Sends a pointer event of a finger to `element`. */
function touch(element: Element, type: 'pointerdown' | 'pointerup' | 'pointercancel') {
    element.dispatchEvent(new PointerEvent(type, { pointerType: 'touch', bubbles: true, cancelable: true }));
}

describe('TooltipDirective', () => {
    async function setup() {
        const setup = await setupHarness(TestHostComponent, TooltipHarness.with({ text: 'Close panel' }));
        const trigger = setup.element.querySelector('button');
        const other = setup.element.querySelector('button:last-of-type');

        if (trigger === null || other === null) {
            throw new Error('The host renders no icon buttons.');
        }
        return { ...setup, trigger, other };
    }

    /** Lets `time` milliseconds pass, and lets Angular render what changed. */
    async function wait(fixture: { whenStable(): Promise<void> }, time: number) {
        vi.advanceTimersByTime(time);
        await fixture.whenStable();
    }

    beforeEach(() => {
        vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout', 'Date'] });
    });

    afterEach(async () => {
        vi.useRealTimers();
        // The pointer stays where a test left it, which would hover the next test's trigger.
        await userEvent.unhover(document.body);
    });

    it('is hidden until the user interacts with its trigger', async () => {
        const { harness } = await setup();

        expect(await harness.isOpen()).toBe(false);
    });

    describe('accessible name', () => {
        it('names its trigger with its text, through aria-labelledby', async () => {
            const { trigger } = await setup();
            const labelId = trigger.getAttribute('aria-labelledby') ?? '';

            expect(document.getElementById(labelId)?.textContent).toBe('Close panel');
            await expect.element(page.getByRole('button', { name: 'Close panel' })).toBeInTheDocument();
        });

        it('takes the name from its own text over the aria-label of the trigger', async () => {
            const { fixture } = await setup();

            fixture.componentInstance.text.set('Close the layer panel');
            await fixture.whenStable();

            await expect.element(page.getByRole('button', { name: 'Close the layer panel' })).toBeInTheDocument();
        });

        it('reads its text while it is hidden', async () => {
            const { harness } = await setup();

            expect(await harness.getText()).toBe('Close panel');
        });

        it('updates the text of the bubble that shows', async () => {
            const { fixture, harness } = await setup();

            await harness.show();
            fixture.componentInstance.text.set('Close map');
            await fixture.whenStable();

            expect(await harness.getText()).toBe('Close map');
            expect(findBubble('Close map')).not.toBeNull();
        });

        it('removes its label from the page once its trigger goes away', async () => {
            const { fixture, element } = await setupHarness(RemovableTestHostComponent, TooltipHarness);
            const labelId = element.querySelector('button')?.getAttribute('aria-labelledby') ?? '';

            expect(document.getElementById(labelId)).not.toBeNull();

            fixture.componentInstance.shown.set(false);
            await fixture.whenStable();

            expect(document.getElementById(labelId)).toBeNull();
            expect(document.getElementById('dma-tooltip-labels')).toBeNull();
        });
    });

    describe('on hover', () => {
        it('shows after 500ms', async () => {
            const { fixture, harness, trigger } = await setup();

            await userEvent.hover(trigger);
            await wait(fixture, 499);

            expect(await harness.isOpen()).toBe(false);

            await wait(fixture, 1);

            expect(await harness.isOpen()).toBe(true);
        });

        it("doesn't show when the pointer leaves within 500ms", async () => {
            const { fixture, harness, trigger } = await setup();

            await userEvent.hover(trigger);
            await wait(fixture, 300);
            await userEvent.unhover(trigger);
            await wait(fixture, 500);

            expect(await harness.isOpen()).toBe(false);
        });

        it('hides 100ms after the pointer leaves', async () => {
            const { fixture, harness, trigger } = await setup();

            await userEvent.hover(trigger);
            await wait(fixture, 500);
            await userEvent.unhover(trigger);
            await wait(fixture, 99);

            expect(await harness.isOpen()).toBe(true);

            await wait(fixture, 1);

            expect(await harness.isOpen()).toBe(false);
        });

        it('stays while the pointer moves onto it', async () => {
            const { fixture, harness, trigger } = await setup();

            await userEvent.hover(trigger);
            await wait(fixture, 500);
            await userEvent.hover(getBubble('Close panel'));
            await wait(fixture, 1000);

            expect(await harness.isOpen()).toBe(true);

            await userEvent.unhover(getBubble('Close panel'));
            await wait(fixture, 100);

            expect(await harness.isOpen()).toBe(false);
        });

        it('shows on a disabled trigger', async () => {
            const { fixture, harness, trigger } = await setup();

            fixture.componentInstance.disabled.set(true);
            await fixture.whenStable();
            await userEvent.hover(trigger);
            await wait(fixture, 500);

            expect(await harness.isOpen()).toBe(true);
        });
    });

    describe('on focus', () => {
        it('shows at once on keyboard focus', async () => {
            const { harness } = await setup();

            await userEvent.tab();

            expect(await harness.isOpen()).toBe(true);
        });

        it('shows at once on keyboard focus of a disabled trigger', async () => {
            const { fixture, harness } = await setup();

            fixture.componentInstance.disabled.set(true);
            await fixture.whenStable();
            await userEvent.tab();

            expect(await harness.isOpen()).toBe(true);
        });

        it("doesn't show at once when a click focuses the trigger", async () => {
            const { fixture, harness, trigger } = await setup();

            await userEvent.click(trigger);
            await fixture.whenStable();

            expect(await harness.isOpen()).toBe(false);
        });

        it('hides once the trigger loses focus', async () => {
            const { harness } = await setup();

            await harness.show();
            await userEvent.tab();

            expect(await harness.isOpen()).toBe(false);
        });

        it('stays while the trigger has focus and the pointer leaves', async () => {
            const { fixture, harness, trigger } = await setup();

            await harness.show();
            await userEvent.hover(trigger);
            await userEvent.unhover(trigger);
            await wait(fixture, 1000);

            expect(await harness.isOpen()).toBe(true);
        });
    });

    describe('Escape', () => {
        it('closes the tooltip of the focused trigger', async () => {
            const { fixture, harness } = await setup();

            await userEvent.tab();
            await userEvent.keyboard('{Escape}');
            await fixture.whenStable();

            expect(await harness.isOpen()).toBe(false);
        });

        it('closes the tooltip of the hovered trigger', async () => {
            const { fixture, harness, trigger } = await setup();

            await userEvent.hover(trigger);
            await wait(fixture, 500);
            await userEvent.keyboard('{Escape}');
            await fixture.whenStable();

            expect(await harness.isOpen()).toBe(false);
        });

        it('lets Escape through while the tooltip is hidden', async () => {
            const { trigger } = await setup();
            const event = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });

            trigger.dispatchEvent(event);

            expect(event.defaultPrevented).toBe(false);
        });

        it('ignores Escape with a modifier key', async () => {
            const { fixture, harness } = await setup();

            await userEvent.tab();
            await userEvent.keyboard('{Shift>}{Escape}{/Shift}');
            await fixture.whenStable();

            expect(await harness.isOpen()).toBe(true);
        });
    });

    describe('warm-up', () => {
        it('shows the next tooltip at once while one shows', async () => {
            const { fixture, loader, trigger, other } = await setup();
            const addLayer = await loader.getHarness(TooltipHarness.with({ text: 'Add layer' }));

            await userEvent.hover(trigger);
            await wait(fixture, 500);
            await userEvent.hover(other);
            await fixture.whenStable();

            expect(await addLayer.isOpen()).toBe(true);
        });

        it('shows one tooltip at a time', async () => {
            const { fixture, harness, trigger, other } = await setup();

            await userEvent.hover(trigger);
            await wait(fixture, 500);
            await userEvent.hover(other);
            await fixture.whenStable();

            expect(await harness.isOpen()).toBe(false);
            expect(document.querySelectorAll('dma-tooltip')).toHaveLength(1);
        });

        it('shows the next tooltip at once within 300ms after one closes', async () => {
            const { fixture, loader, trigger, other } = await setup();
            const addLayer = await loader.getHarness(TooltipHarness.with({ text: 'Add layer' }));

            await userEvent.hover(trigger);
            await wait(fixture, 500);
            await userEvent.unhover(trigger);
            await wait(fixture, 100 + 299);
            await userEvent.hover(other);
            await fixture.whenStable();

            expect(await addLayer.isOpen()).toBe(true);
        });

        it('waits 500ms for the next tooltip from 300ms after one closes', async () => {
            const { fixture, loader, trigger, other } = await setup();
            const addLayer = await loader.getHarness(TooltipHarness.with({ text: 'Add layer' }));

            await userEvent.hover(trigger);
            await wait(fixture, 500);
            await userEvent.unhover(trigger);
            await wait(fixture, 100 + 300);
            await userEvent.hover(other);
            await fixture.whenStable();

            expect(await addLayer.isOpen()).toBe(false);

            await wait(fixture, 500);

            expect(await addLayer.isOpen()).toBe(true);
        });
    });

    describe('on touch', () => {
        it('shows after holding the trigger for 500ms', async () => {
            const { fixture, harness, trigger } = await setup();

            touch(trigger, 'pointerdown');
            await wait(fixture, 499);

            expect(await harness.isOpen()).toBe(false);

            await wait(fixture, 1);

            expect(await harness.isOpen()).toBe(true);
        });

        it("doesn't press the trigger on the release of the hold", async () => {
            const { fixture, trigger } = await setup();

            touch(trigger, 'pointerdown');
            await wait(fixture, 500);
            touch(trigger, 'pointerup');
            trigger.click();

            expect(fixture.componentInstance.clicks()).toBe(0);

            touch(trigger, 'pointerdown');
            touch(trigger, 'pointerup');
            trigger.click();

            expect(fixture.componentInstance.clicks()).toBe(1);
        });

        it('presses the trigger on a tap while the tooltip of a hold still shows', async () => {
            const { fixture, harness, trigger } = await setup();

            touch(trigger, 'pointerdown');
            await wait(fixture, 500);
            touch(trigger, 'pointerup');
            trigger.click();
            touch(trigger, 'pointerdown');
            await wait(fixture, 200);
            touch(trigger, 'pointerup');
            trigger.click();

            expect(fixture.componentInstance.clicks()).toBe(1);

            await wait(fixture, 1500);

            expect(await harness.isOpen()).toBe(false);
        });

        it('hides 1.5s after the release', async () => {
            const { fixture, harness, trigger } = await setup();

            touch(trigger, 'pointerdown');
            await wait(fixture, 500);
            touch(trigger, 'pointerup');
            await wait(fixture, 1499);

            expect(await harness.isOpen()).toBe(true);

            await wait(fixture, 1);

            expect(await harness.isOpen()).toBe(false);
        });

        it('presses the trigger on a tap, without showing', async () => {
            const { fixture, harness, trigger } = await setup();

            touch(trigger, 'pointerdown');
            await wait(fixture, 200);
            touch(trigger, 'pointerup');
            trigger.click();
            await wait(fixture, 500);

            expect(fixture.componentInstance.clicks()).toBe(1);
            expect(await harness.isOpen()).toBe(false);
        });

        it("doesn't show when the hold turns into a scroll", async () => {
            const { fixture, harness, trigger } = await setup();

            touch(trigger, 'pointerdown');
            await wait(fixture, 200);
            touch(trigger, 'pointercancel');
            await wait(fixture, 500);

            expect(await harness.isOpen()).toBe(false);
        });

        it('keeps the context menu of the browser closed during the hold', async () => {
            const { trigger } = await setup();
            const event = new MouseEvent('contextmenu', { bubbles: true, cancelable: true });

            touch(trigger, 'pointerdown');
            trigger.dispatchEvent(event);

            expect(event.defaultPrevented).toBe(true);
        });

        it('leaves the context menu of the browser alone without a hold', async () => {
            const { trigger } = await setup();
            const event = new MouseEvent('contextmenu', { bubbles: true, cancelable: true });

            trigger.dispatchEvent(event);

            expect(event.defaultPrevented).toBe(false);
        });
    });

    describe('placement', () => {
        /** Returns how far the bubble sits from the trigger, and how far their centers are apart on the other axis. */
        function measure(trigger: Element) {
            const outer = trigger.getBoundingClientRect();
            const inner = getBubble('Close panel').getBoundingClientRect();

            return {
                above: outer.top - inner.bottom,
                below: inner.top - outer.bottom,
                before: outer.left - inner.right,
                after: inner.left - outer.right,
                centerX: inner.left + inner.width / 2 - (outer.left + outer.width / 2),
                centerY: inner.top + inner.height / 2 - (outer.top + outer.height / 2),
            };
        }

        function gap(element: HTMLElement) {
            return parseFloat(resolveStyle('margin', tokens.spacing['8'], element));
        }

        it('shows centered above its trigger, spacing/8 away, by default', async () => {
            const { element, harness, trigger } = await setup();

            await harness.show();

            const { above, centerX } = measure(trigger);

            expect(await harness.getPlacement()).toBe('top');
            expect(above).toBeCloseTo(gap(element), 0);
            expect(centerX).toBeCloseTo(0, 0);
        });

        it('shows below its trigger', async () => {
            const { fixture, element, harness, trigger } = await setup();

            fixture.componentInstance.placement.set('bottom');
            await harness.show();

            const { below, centerX } = measure(trigger);

            expect(await harness.getPlacement()).toBe('bottom');
            expect(below).toBeCloseTo(gap(element), 0);
            expect(centerX).toBeCloseTo(0, 0);
        });

        it('shows left of its trigger', async () => {
            const { fixture, element, harness, trigger } = await setup();

            fixture.componentInstance.placement.set('left');
            await harness.show();

            const { before, centerY } = measure(trigger);

            expect(await harness.getPlacement()).toBe('left');
            expect(before).toBeCloseTo(gap(element), 0);
            expect(centerY).toBeCloseTo(0, 0);
        });

        it('shows right of its trigger', async () => {
            const { fixture, element, harness, trigger } = await setup();

            fixture.componentInstance.placement.set('right');
            await harness.show();

            const { after, centerY } = measure(trigger);

            expect(await harness.getPlacement()).toBe('right');
            expect(after).toBeCloseTo(gap(element), 0);
            expect(centerY).toBeCloseTo(0, 0);
        });

        it('stays centered when its text changes while it shows', async () => {
            const { fixture, element, harness, trigger } = await setup();

            await harness.show();
            fixture.componentInstance.text.set('Close the layer panel');
            await fixture.whenStable();
            // The resize observer reports the new size of the bubble after the next layout.
            await new Promise((resolve) => requestAnimationFrame(resolve));
            await new Promise((resolve) => requestAnimationFrame(resolve));

            const bubble = getBubble('Close the layer panel').getBoundingClientRect();
            const outer = trigger.getBoundingClientRect();

            expect(bubble.left + bubble.width / 2 - (outer.left + outer.width / 2)).toBeCloseTo(0, 0);
            expect(outer.top - bubble.bottom).toBeCloseTo(gap(element), 0);
        });

        it('moves when the placement changes while it shows', async () => {
            const { fixture, element, harness, trigger } = await setup();

            await harness.show();
            fixture.componentInstance.placement.set('right');
            await fixture.whenStable();

            expect(await harness.getPlacement()).toBe('right');
            expect(measure(trigger).after).toBeCloseTo(gap(element), 0);
        });

        it('shows on the top side when the trigger sets the attribute without a value', async () => {
            const { harness } = await setupHarness(BarePlacementTestHostComponent, TooltipHarness);

            await harness.show();

            expect(await harness.getPlacement()).toBe('top');
        });

        it('flips below its trigger when it does not fit above', async () => {
            const { element, harness } = await setupHarness(CornerTestHostComponent, TooltipHarness);
            const trigger = element.querySelector('button') ?? element;

            await harness.show();

            expect(await harness.getPlacement()).toBe('bottom');
            expect(measure(trigger).below).toBeCloseTo(gap(element), 0);
        });

        it('flips right of its trigger when it does not fit left', async () => {
            const { fixture, element, harness } = await setupHarness(CornerTestHostComponent, TooltipHarness);
            const trigger = element.querySelector('button') ?? element;

            fixture.componentInstance.placement.set('left');
            await harness.show();

            expect(await harness.getPlacement()).toBe('right');
            expect(measure(trigger).after).toBeCloseTo(gap(element), 0);
        });

        it('keeps spacing/8 from the edge of the viewport, at the font size of the page', async () => {
            const root = document.documentElement;

            root.style.fontSize = '20px';

            try {
                const { harness } = await setupHarness(CornerTestHostComponent, TooltipHarness);

                await harness.show();

                // The bubble is wider than the trigger in the corner, so centering it would cross the left edge.
                expect(getBubble('Close panel').getBoundingClientRect().left).toBeCloseTo(
                    parseFloat(values.spacing['8']) * 20,
                    0,
                );
            } finally {
                root.style.removeProperty('font-size');
            }
        });
    });

    it('hides when its trigger goes away', async () => {
        const { fixture, harness } = await setupHarness(RemovableTestHostComponent, TooltipHarness);

        await harness.show();

        expect(findBubble('Close panel')).not.toBeNull();

        fixture.componentInstance.shown.set(false);
        await fixture.whenStable();

        expect(findBubble('Close panel')).toBeNull();
    });
});
