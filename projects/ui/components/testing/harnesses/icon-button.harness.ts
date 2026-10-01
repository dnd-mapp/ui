import { ComponentHarness, HarnessPredicate, type BaseHarnessFilters } from '@angular/cdk/testing';
import type { ButtonSize, ButtonVariant } from '@dnd-mapp/ui/components';
import { IconHarness, type IconHarnessFilters } from '@dnd-mapp/ui/icons/testing';

/**
 * The criteria to find an `IconButtonHarness` by.
 */
export interface IconButtonHarnessFilters extends BaseHarnessFilters {
    /** Only find icon buttons whose accessible name matches this text or pattern. */
    label?: string | RegExp;

    /** Only find icon buttons that are disabled, or only the ones that aren't. */
    disabled?: boolean;

    /** Only find icon buttons in this variant. */
    variant?: ButtonVariant;

    /** Only find icon buttons in this size. */
    size?: ButtonSize;

    /** Only find icon buttons that are loading, or only the ones that aren't. */
    loading?: boolean;
}

/**
 * A harness to test a `button[dma-icon-button]` through, the way a user interacts with it.
 */
export class IconButtonHarness extends ComponentHarness {
    public static readonly hostSelector = 'button[dma-icon-button]';

    /**
     * Returns a predicate that finds the icon buttons that match all the given criteria.
     */
    public static with(options: IconButtonHarnessFilters = {}): HarnessPredicate<IconButtonHarness> {
        return new HarnessPredicate(IconButtonHarness, options)
            .addOption('label', options.label, (harness, label) =>
                HarnessPredicate.stringMatches(harness.getLabel(), label),
            )
            .addOption(
                'disabled',
                options.disabled,
                async (harness, disabled) => (await harness.isDisabled()) === disabled,
            )
            .addOption('variant', options.variant, async (harness, variant) => (await harness.getVariant()) === variant)
            .addOption('size', options.size, async (harness, size) => (await harness.getSize()) === size)
            .addOption('loading', options.loading, async (harness, loading) => (await harness.isLoading()) === loading);
    }

    /** Clicks the icon button. A disabled or a loading icon button ignores the click. */
    public async click(): Promise<void> {
        await (await this.host()).click();
    }

    /** Returns the accessible name of the icon button, from its `aria-label`. */
    public async getLabel(): Promise<string | null> {
        return (await this.host()).getAttribute('aria-label');
    }

    /**
     * Returns whether the icon button is disabled. It uses `aria-disabled="true"` rather than the native `disabled`
     * attribute, so it stays focusable.
     */
    public async isDisabled(): Promise<boolean> {
        return (await (await this.host()).getAttribute('data-disabled')) !== null;
    }

    /**
     * Returns whether the icon button is loading, from the moment its `loading` input turns on until its spinner
     * hides. It blocks clicks all that time.
     */
    public async isLoading(): Promise<boolean> {
        return (await (await this.host()).getAttribute('data-loading')) !== null;
    }

    /** Returns the variant of the icon button. */
    public async getVariant(): Promise<ButtonVariant> {
        return (await (await this.host()).getAttribute('data-variant')) as ButtonVariant;
    }

    /** Returns the size of the icon button. */
    public async getSize(): Promise<ButtonSize> {
        return (await (await this.host()).getAttribute('data-size')) as ButtonSize;
    }

    /**
     * Returns the icon of the icon button. The spinner of a loading icon button isn't it. Pass filters to only return
     * the icon when it matches them.
     *
     * @throws When the icon button has no icon that matches the filters.
     */
    public async getIcon(filters: IconHarnessFilters = {}): Promise<IconHarness> {
        return (await this.locatorFactory.harnessLoaderFor('.content')).getHarness(IconHarness.with(filters));
    }

    /** Moves focus to the icon button. */
    public async focus(): Promise<void> {
        await (await this.host()).focus();
    }

    /** Moves focus away from the icon button. */
    public async blur(): Promise<void> {
        await (await this.host()).blur();
    }

    /** Returns whether the icon button has focus. */
    public async isFocused(): Promise<boolean> {
        return (await this.host()).isFocused();
    }
}
