import { ComponentHarness, HarnessPredicate, type BaseHarnessFilters } from '@angular/cdk/testing';
import type { ButtonSize, ButtonVariant } from '@dnd-mapp/ui/components';
import { IconHarness, type IconHarnessFilters } from '@dnd-mapp/ui/icons/testing';

/**
 * The criteria to find a `ButtonHarness` by.
 */
export interface ButtonHarnessFilters extends BaseHarnessFilters {
    /** Only find buttons whose label matches this text or pattern. */
    text?: string | RegExp;

    /** Only find buttons that are disabled, or only the ones that aren't. */
    disabled?: boolean;

    /** Only find buttons in this variant. */
    variant?: ButtonVariant;

    /** Only find buttons in this size. */
    size?: ButtonSize;

    /** Only find buttons that are loading, or only the ones that aren't. */
    loading?: boolean;
}

/**
 * A harness to test a `button[dma-button]` through, the way a user interacts with it.
 */
export class ButtonHarness extends ComponentHarness {
    public static readonly hostSelector = 'button[dma-button]';

    /**
     * Returns a predicate that finds the buttons that match all the given criteria.
     */
    public static with(options: ButtonHarnessFilters = {}): HarnessPredicate<ButtonHarness> {
        return new HarnessPredicate(ButtonHarness, options)
            .addOption('text', options.text, (harness, text) => HarnessPredicate.stringMatches(harness.getText(), text))
            .addOption(
                'disabled',
                options.disabled,
                async (harness, disabled) => (await harness.isDisabled()) === disabled,
            )
            .addOption('variant', options.variant, async (harness, variant) => (await harness.getVariant()) === variant)
            .addOption('size', options.size, async (harness, size) => (await harness.getSize()) === size)
            .addOption('loading', options.loading, async (harness, loading) => (await harness.isLoading()) === loading);
    }

    /** Clicks the button. */
    public async click(): Promise<void> {
        await (await this.host()).click();
    }

    /** Returns the label of the button. */
    public async getText(): Promise<string> {
        return (await this.host()).text();
    }

    /** Returns whether the button is disabled. */
    public async isDisabled(): Promise<boolean> {
        return (await this.host()).getProperty<boolean>('disabled');
    }

    /**
     * Returns whether the button is loading, from the moment its `loading` input turns on until its spinner hides. It
     * blocks clicks all that time.
     */
    public async isLoading(): Promise<boolean> {
        return (await (await this.host()).getAttribute('data-loading')) !== null;
    }

    /** Returns the variant of the button. */
    public async getVariant(): Promise<ButtonVariant> {
        return (await (await this.host()).getAttribute('data-variant')) as ButtonVariant;
    }

    /** Returns the size of the button. */
    public async getSize(): Promise<ButtonSize> {
        return (await (await this.host()).getAttribute('data-size')) as ButtonSize;
    }

    /**
     * Returns the icons in the slots of the button, in the order they show, so a leading icon comes first. The spinner
     * of a loading button isn't one of them. Pass filters to only return the icons that match them.
     */
    public async getIcons(filters: IconHarnessFilters = {}): Promise<IconHarness[]> {
        return (await this.locatorFactory.harnessLoaderFor('.content')).getAllHarnesses(IconHarness.with(filters));
    }

    /** Moves focus to the button. */
    public async focus(): Promise<void> {
        await (await this.host()).focus();
    }

    /** Moves focus away from the button. */
    public async blur(): Promise<void> {
        await (await this.host()).blur();
    }

    /** Returns whether the button has focus. */
    public async isFocused(): Promise<boolean> {
        return (await this.host()).isFocused();
    }
}
