import { Directive, input } from '@angular/core';
import { DEFAULT_ICON_SIZE, iconSizeAttribute } from './icon-size';

/**
 * What every icon shares, whatever its glyph: the `size` input, and the attributes that the styles and
 * `IconHarness` select on. Each glyph component extends it.
 *
 * An icon is decorative, so it's hidden from assistive technology. The control or the label beside it carries the
 * name.
 */
@Directive({
    host: {
        'class': 'dma-icon',
        'aria-hidden': 'true',
        '[attr.data-size]': 'size()',
    },
})
export abstract class IconDirective {
    /** The size of the icon, which sets its frame. Match it to the size of the label beside it. */
    public readonly size = input(DEFAULT_ICON_SIZE, { transform: iconSizeAttribute });
}
