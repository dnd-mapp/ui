import {
    booleanAttribute,
    ChangeDetectionStrategy,
    Component,
    computed,
    DestroyRef,
    effect,
    ElementRef,
    inject,
    input,
    signal,
    untracked,
    ViewEncapsulation,
} from '@angular/core';
import { Announcer } from '../a11y/announcer';
import { SPINNER_GLYPH_PATH } from './spinner-glyph';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * How long a button loads before the spinner appears, in milliseconds, so fast actions show no spinner.
 */
export const SPINNER_DELAY = 300;

/**
 * How long the spinner stays once it appears, in milliseconds, so slow actions never flash it.
 */
export const SPINNER_MIN_DURATION = 500;

/**
 * Triggers an action. Use `primary` for the one main action in a view, and `secondary` for other actions beside it.
 * Use `ghost` for minor actions that should stay quiet, and `danger` for actions that destroy or remove something.
 *
 * Put an icon before or after the label to add a leading or trailing icon.
 */
@Component({
    selector: 'button[dma-button]',
    templateUrl: './button.html',
    styleUrl: './button.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class]': 'classes()',
        '[attr.disabled]': 'disabled() && !disabledInteractive() ? "" : null',
        '[attr.aria-disabled]': 'ariaDisabled() ? "true" : null',
    },
})
export class Button {
    public readonly variant = input<ButtonVariant>('primary');

    public readonly size = input<ButtonSize>('medium');

    /**
     * Disables the button.
     */
    public readonly disabled = input(false, { transform: booleanAttribute });

    /**
     * Keeps a disabled button focusable, with `aria-disabled="true"` in place of `disabled`. Use it when the button
     * must still show a tooltip, or explain on focus why it's disabled.
     */
    public readonly disabledInteractive = input(false, { transform: booleanAttribute });

    /**
     * Shows that the button is busy with the action it started. It blocks clicks at once, and shows the spinner after
     * a short delay.
     */
    public readonly loading = input(false, { transform: booleanAttribute });

    /**
     * The word that screen readers announce when the spinner appears, such as "Saving".
     */
    public readonly loadingLabel = input('Loading');

    protected readonly spinnerPath = SPINNER_GLYPH_PATH;

    protected readonly spinnerVisible = signal(false);

    protected readonly ariaDisabled = computed(
        () => (this.disabled() && this.disabledInteractive()) || this.loading() || this.spinnerVisible(),
    );

    protected readonly classes = computed(() => {
        const classes = ['dma-button', `dma-button-${this.variant()}`, `dma-button-${this.size()}`];

        if (this.disabled()) {
            classes.push('dma-button-disabled');
        }
        if (this.spinnerVisible()) {
            classes.push('dma-button-loading');
        }
        return classes.join(' ');
    });

    private readonly announcer = inject(Announcer);

    private spinnerTimeout: ReturnType<typeof setTimeout> | undefined;

    private spinnerShownAt = 0;

    constructor() {
        const element = inject<ElementRef<HTMLButtonElement>>(ElementRef).nativeElement;

        // Listen in the capture phase, so a blocked click never reaches the listeners of the app.
        const blockClick = (event: MouseEvent) => {
            if (this.ariaDisabled()) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        };

        element.addEventListener('click', blockClick, { capture: true });

        inject(DestroyRef).onDestroy(() => {
            element.removeEventListener('click', blockClick, { capture: true });
            clearTimeout(this.spinnerTimeout);
        });

        effect(() => {
            const loading = this.loading();

            untracked(() => this.scheduleSpinner(loading));
        });
    }

    private scheduleSpinner(loading: boolean): void {
        clearTimeout(this.spinnerTimeout);

        if (loading && !this.spinnerVisible()) {
            this.spinnerTimeout = setTimeout(() => this.showSpinner(), SPINNER_DELAY);
        } else if (!loading && this.spinnerVisible()) {
            const remaining = this.spinnerShownAt + SPINNER_MIN_DURATION - Date.now();

            this.spinnerTimeout = setTimeout(() => this.spinnerVisible.set(false), Math.max(0, remaining));
        }
    }

    private showSpinner(): void {
        this.spinnerShownAt = Date.now();
        this.spinnerVisible.set(true);
        this.announcer.announce(this.loadingLabel());
    }
}
