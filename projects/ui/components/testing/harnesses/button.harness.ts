import { ComponentHarness, HarnessPredicate, type BaseHarnessFilters } from '@angular/cdk/testing';

/**
 * The criteria to find a `ButtonHarness` by.
 */
export interface ButtonHarnessFilters extends BaseHarnessFilters {
    /** Only find buttons whose label matches this text or pattern. */
    text?: string | RegExp;

    /** Only find buttons that are disabled, or only the ones that aren't. */
    disabled?: boolean;
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
            );
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
