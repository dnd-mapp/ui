import { Component, input } from '@angular/core';
import { buttonVariantAttribute, DEFAULT_BUTTON_VARIANT } from './button-variant';

/**
 * A button that starts an action, such as saving a map. Put it on a native `button` element, and give it a
 * label as its content.
 *
 * It has the variants of the `Button` Figma component, in the `Medium` size. Use `primary` for the one main
 * action in a view, `secondary` for other actions beside it, `ghost` for minor actions that should stay quiet,
 * and `danger` for actions that destroy or remove something.
 */
@Component({
    selector: 'button[dma-button]',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
    host: {
        '[attr.data-variant]': 'variant()',
    },
})
export class ButtonComponent {
    /** The variant of the button, which sets its colors. */
    public readonly variant = input(DEFAULT_BUTTON_VARIANT, { transform: buttonVariantAttribute });
}
