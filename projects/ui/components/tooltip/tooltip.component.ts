import { Component, input } from '@angular/core';
import { DEFAULT_TOOLTIP_PLACEMENT, type TooltipPlacement } from './tooltip-placement';

/**
 * The bubble of a tooltip, after the `Tooltip` Figma component: a short name on the inverse fill, which wraps past
 * 240px. `TooltipDirective` creates it next to its trigger, so most apps never place it themselves.
 *
 * It keeps a gap of `spacing/8` on the side that faces its trigger, which its `placement` names.
 *
 * It's hidden from assistive technology, because its text is already the accessible name of its trigger.
 */
@Component({
    selector: 'dma-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrl: './tooltip.component.scss',
    host: {
        'aria-hidden': 'true',
        '[attr.data-placement]': 'placement()',
    },
})
export class TooltipComponent {
    /** The text of the tooltip, the name of the control it belongs to, such as `'Close panel'`. */
    public readonly text = input.required<string>();

    /** The side of its trigger that the tooltip shows on, which sets the side of its gap. */
    public readonly placement = input<TooltipPlacement>(DEFAULT_TOOLTIP_PLACEMENT);
}
