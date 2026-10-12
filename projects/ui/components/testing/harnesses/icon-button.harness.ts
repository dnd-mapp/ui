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

    /**
     * Returns the accessible name of the icon button, the one that screen readers announce. Like a browser, it reads
     * the text of the elements that `aria-labelledby` points at, such as the label of its tooltip, and falls back to
     * the `aria-label` when `aria-labelledby` points at none.
     */
    public async getLabel(): Promise<string | null> {
        const host = await this.host();
        const ids = (await host.getAttribute('aria-labelledby'))?.split(/\s+/).filter((id) => id !== '') ?? [];
        const labels = (await Promise.all(ids.map((id) => this.getElementById(id)))).filter((label) => label !== null);

        if (labels.length === 0) {
            return host.getAttribute('aria-label');
        }
        return (await Promise.all(labels.map((label) => label.text()))).join(' ');
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

    /**
     * Returns the element with an id anywhere on the page, or `null` when there's none. The label of a tooltip sits
     * outside the icon button, at the end of the body.
     */
    private async getElementById(id: string) {
        // An attribute selector takes any id in quotes, where `#id` would need its special characters escaped.
        const selector = `[id="${id.replace(/["\\]/g, '\\$&')}"]`;

        return this.documentRootLocatorFactory().locatorForOptional(selector)();
    }
}
