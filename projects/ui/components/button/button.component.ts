import { booleanAttribute, Component, DestroyRef, ElementRef, inject, input, Renderer2 } from '@angular/core';
import { ICON_SIZE, IconCircleNotchComponent } from '@dnd-mapp/ui/icons';
import { injectLoadingState } from '../loading/loading-state';
import { buttonSizeAttribute, DEFAULT_BUTTON_SIZE } from './button-size';
import { buttonVariantAttribute, DEFAULT_BUTTON_VARIANT } from './button-variant';

/**
 * A button that starts an action, such as saving a map. Put it on a native `button` element, and give it a
 * label as its content.
 *
 * It has the variants and the sizes of the `Button` Figma component. Use `primary` for the one main action in a
 * view, `secondary` for other actions beside it, `ghost` for minor actions that should stay quiet, and `danger`
 * for actions that destroy or remove something. Use `medium` unless the layout around the button calls for a
 * `small` or a `large` one.
 *
 * Put an icon before the label, after it, or both, like the `Leading icon` and `Trailing icon` switches of the
 * Figma component. An icon that sets no `size` takes the size of the button.
 *
 * Set `loading` while the action it started runs. The button then blocks clicks but keeps focus, and after 300ms
 * it shows a spinner in place of its label and icons, and announces its `loadingLabel` to screen readers.
 */
@Component({
    selector: 'button[dma-button]',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
    imports: [IconCircleNotchComponent],
    // The sizes of a button and of an icon share their values, so the icons in the slots take the size of the button.
    providers: [{ provide: ICON_SIZE, useFactory: () => inject(ButtonComponent).size }],
    host: {
        '[attr.data-variant]': 'variant()',
        '[attr.data-size]': 'size()',
        '[attr.data-loading]': 'busy() ? "" : null',
        '[attr.aria-disabled]': 'busy() ? "true" : null',
    },
})
export class ButtonComponent {
    /** The variant of the button, which sets its colors. */
    public readonly variant = input(DEFAULT_BUTTON_VARIANT, { transform: buttonVariantAttribute });

    /** The size of the button, which sets its height, padding, radius, text style, and icon gap. Its icons take it too. */
    public readonly size = input(DEFAULT_BUTTON_SIZE, { transform: buttonSizeAttribute });

    /**
     * Whether the button is busy with the action it started, such as saving a map. Turn it on when the action
     * starts, and off when it ends.
     */
    public readonly loading = input(false, { transform: booleanAttribute });

    /** The word that screen readers announce once the spinner shows, such as `'Saving'`. */
    public readonly loadingLabel = input('Loading');

    private readonly loadingState = injectLoadingState(this.loading, this.loadingLabel);

    /** Whether the button shows its spinner in place of its label and icons. */
    protected readonly spinnerShown = this.loadingState.spinnerShown;

    /** Whether the button blocks clicks: from the moment it starts loading until its spinner hides. */
    protected readonly busy = this.loadingState.busy;

    public constructor() {
        // A busy button keeps focus, so it can't use the disabled attribute. It stops clicks itself instead, before
        // they reach the listeners of the app or submit a form.
        const stopListening = inject(Renderer2).listen(
            inject<ElementRef<HTMLElement>>(ElementRef).nativeElement,
            'click',
            (event: Event) => {
                if (this.busy()) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }
            },
            { capture: true },
        );

        inject(DestroyRef).onDestroy(stopListening);
    }
}
