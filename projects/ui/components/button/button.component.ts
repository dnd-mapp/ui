import {
    booleanAttribute,
    Component,
    computed,
    DestroyRef,
    effect,
    ElementRef,
    inject,
    input,
    Renderer2,
    signal,
} from '@angular/core';
import { ICON_SIZE, IconCircleNotchComponent } from '@dnd-mapp/ui/icons';
import { AnnouncerService } from '../announcer/announcer.service';
import { buttonSizeAttribute, DEFAULT_BUTTON_SIZE } from './button-size';
import { buttonVariantAttribute, DEFAULT_BUTTON_VARIANT } from './button-variant';

/** How long a button loads before it shows its spinner, so a fast action shows none. */
const SPINNER_DELAY = 300;

/** How long a spinner shows at least, so it never flashes. */
const SPINNER_MINIMUM = 500;

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

    /** When the spinner started to show, or `null` while it's hidden. */
    private readonly spinnerShownAt = signal<number | null>(null);

    /** Whether the button shows its spinner in place of its label and icons. */
    protected readonly spinnerShown = computed(() => this.spinnerShownAt() !== null);

    /** Whether the button blocks clicks: from the moment it starts loading until its spinner hides. */
    protected readonly busy = computed(() => this.loading() || this.spinnerShown());

    private readonly announcer = inject(AnnouncerService);

    public constructor() {
        // Shows the spinner once the button has loaded for 300ms, and hides it once it stops loading, but only after
        // the spinner has shown for 500ms.
        effect((onCleanup) => {
            const loading = this.loading();
            const shownAt = this.spinnerShownAt();

            if (loading === (shownAt !== null)) {
                return;
            }
            const timeout = shownAt === null ? SPINNER_DELAY : shownAt + SPINNER_MINIMUM - Date.now();
            const timer = setTimeout(() => (loading ? this.showSpinner() : this.spinnerShownAt.set(null)), timeout);

            onCleanup(() => clearTimeout(timer));
        });

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

    private showSpinner() {
        this.spinnerShownAt.set(Date.now());
        this.announcer.announce(this.loadingLabel());
    }
}
