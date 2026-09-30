import { Component, input } from '@angular/core';
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
 */
@Component({
    selector: 'button[dma-button]',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
    host: {
        '[attr.data-variant]': 'variant()',
        '[attr.data-size]': 'size()',
    },
})
export class ButtonComponent {
    /** The variant of the button, which sets its colors. */
    public readonly variant = input(DEFAULT_BUTTON_VARIANT, { transform: buttonVariantAttribute });

    /** The size of the button, which sets its height, padding, radius, and text style. */
    public readonly size = input(DEFAULT_BUTTON_SIZE, { transform: buttonSizeAttribute });
}
