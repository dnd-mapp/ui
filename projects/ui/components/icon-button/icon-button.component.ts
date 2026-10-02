import { booleanAttribute, Component, computed, inject, input } from '@angular/core';
import { ICON_SIZE, IconCircleNotchComponent } from '@dnd-mapp/ui/icons';
import { buttonSizeAttribute, DEFAULT_BUTTON_SIZE } from '../button/button-size';
import { buttonVariantAttribute, DEFAULT_BUTTON_VARIANT } from '../button/button-variant';
import { blockClicksWhile } from '../click-blocking/block-clicks';
import { injectLoadingState } from '../loading/loading-state';

/**
 * A button that starts an action with an icon and no visible label, such as closing a panel. Put it on a native
 * `button` element, give it an icon as its content, and name it with `aria-label`.
 *
 * It has the variants, the sizes, and the states of `ButtonComponent`, after the `Icon button` Figma component. Use
 * it where space is tight, such as toolbars and panel headers, and only for well-known icons, such as `xmark` for
 * close. An icon that sets no `size` takes the size of the icon button.
 *
 * Set `disabled` to disable it. It then sets `aria-disabled="true"` rather than the native `disabled` attribute, so
 * it stays focusable and can show its tooltip, and it blocks clicks itself.
 *
 * Set `loading` while the action it started runs. It then blocks clicks but keeps focus, and after 300ms it shows a
 * spinner in place of its icon, and announces its `loadingLabel` to screen readers.
 */
@Component({
    selector: 'button[dma-icon-button]',
    templateUrl: './icon-button.component.html',
    styleUrl: './icon-button.component.scss',
    imports: [IconCircleNotchComponent],
    // The sizes of an icon button and of an icon share their values, so the icon takes the size of the icon button.
    providers: [{ provide: ICON_SIZE, useFactory: () => inject(IconButtonComponent).size }],
    host: {
        '[attr.data-variant]': 'variant()',
        '[attr.data-size]': 'size()',
        '[attr.data-loading]': 'busy() ? "" : null',
        '[attr.data-disabled]': 'disabled() ? "" : null',
        '[attr.aria-disabled]': 'blocked() ? "true" : null',
        '[attr.aria-label]': 'ariaLabel()',
        // A disabled icon button stays focusable, so it can show its tooltip. This removes the native attribute when
        // a template sets it, and the `disabled` input takes its place.
        '[attr.disabled]': 'null',
    },
})
export class IconButtonComponent {
    /**
     * The accessible name of the icon button, such as `'Close panel'`. Match the text of its tooltip, since the icon
     * button shows no label.
     */
    public readonly ariaLabel = input.required<string>({ alias: 'aria-label' });

    /** The variant of the icon button, which sets its colors. */
    public readonly variant = input(DEFAULT_BUTTON_VARIANT, { transform: buttonVariantAttribute });

    /** The size of the icon button, which sets its square, its radius, and the size of its icon. */
    public readonly size = input(DEFAULT_BUTTON_SIZE, { transform: buttonSizeAttribute });

    /**
     * Whether the icon button is disabled. It sets `aria-disabled="true"` rather than the native `disabled` attribute,
     * so the icon button stays focusable and can show its tooltip.
     */
    public readonly disabled = input(false, { transform: booleanAttribute });

    /**
     * Whether the icon button is busy with the action it started, such as closing a panel. Turn it on when the
     * action starts, and off when it ends.
     */
    public readonly loading = input(false, { transform: booleanAttribute });

    /** The word that screen readers announce once the spinner shows, such as `'Closing'`. */
    public readonly loadingLabel = input('Loading');

    private readonly loadingState = injectLoadingState(this.loading, this.loadingLabel);

    /** Whether the icon button shows its spinner in place of its icon. */
    protected readonly spinnerShown = this.loadingState.spinnerShown;

    /** Whether the icon button is busy: from the moment it starts loading until its spinner hides. */
    protected readonly busy = this.loadingState.busy;

    /** Whether the icon button blocks clicks, because it's busy or disabled. */
    protected readonly blocked = computed(() => this.busy() || this.disabled());

    public constructor() {
        blockClicksWhile(this.blocked);
    }
}
