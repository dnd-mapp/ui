import { booleanAttribute, computed, Directive, inject, input } from '@angular/core';
import { DEFAULT_ICON_SIZE, ICON_SIZE, iconSizeAttribute, type IconSize } from './icon-size';

/**
 * What every icon shares, whatever its glyph: the `size` and `spin` inputs, and the attributes that the styles and
 * `IconHarness` select on. Each glyph component extends it.
 *
 * An icon is decorative, so it's hidden from assistive technology. The control or the label beside it carries the
 * name.
 */
@Directive({
    host: {
        'class': 'dma-icon',
        'aria-hidden': 'true',
        '[attr.data-size]': 'resolvedSize()',
        '[attr.data-spin]': 'spin() ? "" : null',
    },
})
export abstract class IconDirective {
    /**
     * The size of the icon, which sets its frame. Match it to the size of the label beside it. Without one, the icon
     * takes the size of the control around it, such as a button, or `medium` outside one.
     */
    public readonly size = input<IconSize | undefined, IconSize | '' | undefined>(undefined, {
        transform: iconSizeAttribute,
    });

    /**
     * Whether the icon spins, such as `circle-notch` in a control that is busy. It turns once per second at a steady
     * speed, or once every 3 seconds when the user prefers reduced motion.
     */
    public readonly spin = input(false, { transform: booleanAttribute });

    /** The size that the closest control around the icon provides, if any. */
    private readonly controlSize = inject(ICON_SIZE, { optional: true });

    /** The size that the icon shows: its own, then the one of the control around it, then the default. */
    protected readonly resolvedSize = computed(() => this.size() ?? this.controlSize?.() ?? DEFAULT_ICON_SIZE);
}
