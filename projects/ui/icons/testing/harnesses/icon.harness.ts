import { ComponentHarness, HarnessPredicate, type BaseHarnessFilters } from '@angular/cdk/testing';
import type { IconGlyph, IconSize } from '@dnd-mapp/ui/icons';

/**
 * The criteria to find an `IconHarness` by.
 */
export interface IconHarnessFilters extends BaseHarnessFilters {
    /** Only find icons that show this glyph. */
    glyph?: IconGlyph;

    /** Only find icons in this size. */
    size?: IconSize;

    /** Only find icons that spin, or only the ones that don't. */
    spinning?: boolean;
}

/**
 * A harness to test an icon through, whatever its glyph, such as `dma-icon-xmark`.
 */
export class IconHarness extends ComponentHarness {
    public static readonly hostSelector = '.dma-icon';

    /**
     * Returns a predicate that finds the icons that match all the given criteria.
     */
    public static with(options: IconHarnessFilters = {}): HarnessPredicate<IconHarness> {
        return new HarnessPredicate(IconHarness, options)
            .addOption('glyph', options.glyph, async (harness, glyph) => (await harness.getGlyph()) === glyph)
            .addOption('size', options.size, async (harness, size) => (await harness.getSize()) === size)
            .addOption(
                'spinning',
                options.spinning,
                async (harness, spinning) => (await harness.isSpinning()) === spinning,
            );
    }

    /** Returns the glyph that the icon shows. */
    public async getGlyph(): Promise<IconGlyph> {
        return (await (await this.host()).getAttribute('data-glyph')) as IconGlyph;
    }

    /** Returns the size of the icon. */
    public async getSize(): Promise<IconSize> {
        return (await (await this.host()).getAttribute('data-size')) as IconSize;
    }

    /** Returns whether the icon spins. */
    public async isSpinning(): Promise<boolean> {
        return (await (await this.host()).getAttribute('data-spin')) !== null;
    }
}
