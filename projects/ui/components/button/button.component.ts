import { Component, inject, input } from '@angular/core';
import { ICON_SIZE } from '@dnd-mapp/ui/icons';
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
 */
@Component({
    selector: 'button[dma-button]',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
    // The sizes of a button and of an icon share their values, so the icons in the slots take the size of the button.
    providers: [{ provide: ICON_SIZE, useFactory: () => inject(ButtonComponent).size }],
    host: {
        '[attr.data-variant]': 'variant()',
        '[attr.data-size]': 'size()',
    },
})
export class ButtonComponent {
    /** The variant of the button, which sets its colors. */
    public readonly variant = input(DEFAULT_BUTTON_VARIANT, { transform: buttonVariantAttribute });

    /** The size of the button, which sets its height, padding, radius, text style, and icon gap. Its icons take it too. */
    public readonly size = input(DEFAULT_BUTTON_SIZE, { transform: buttonSizeAttribute });
}
