import { ComponentHarness, HarnessPredicate, TestKey, type BaseHarnessFilters } from '@angular/cdk/testing';
import type { TooltipPlacement } from '@dnd-mapp/ui/components';

/**
 * The criteria to find a `TooltipHarness` by.
 */
export interface TooltipHarnessFilters extends BaseHarnessFilters {
    /** Only find tooltips whose text matches this text or pattern. */
    text?: string | RegExp;
}

/**
 * A harness to test the tooltip of a control with the `dmaTooltip` directive through, the way a user interacts with
 * it. Its host is the control, because the bubble of the tooltip only exists while it shows.
 */
export class TooltipHarness extends ComponentHarness {
    public static readonly hostSelector = '.dma-tooltip-trigger';

    /**
     * Returns a predicate that finds the tooltips that match all the given criteria.
     */
    public static with(options: TooltipHarnessFilters = {}): HarnessPredicate<TooltipHarness> {
        return new HarnessPredicate(TooltipHarness, options).addOption('text', options.text, (harness, text) =>
            HarnessPredicate.stringMatches(harness.getText(), text),
        );
    }

    /**
     * Shows the tooltip at once, the way keyboard focus does, by moving focus to its control. Hover shows it after
     * 500ms instead.
     */
    public async show(): Promise<void> {
        await (await this.host()).focus();
    }

    /** Hides the tooltip at once by pressing `Escape` on its control, which moves focus to the control first. */
    public async hide(): Promise<void> {
        await (await this.host()).sendKeys(TestKey.ESCAPE);
    }

    /** Returns whether the tooltip shows. */
    public async isOpen(): Promise<boolean> {
        return (await this.getBubble()) !== null;
    }

    /**
     * Returns the text of the tooltip, which is the accessible name of its control. It reads the text whether the
     * tooltip shows or not.
     */
    public async getText(): Promise<string> {
        const id = await this.getId();
        const label = await this.documentRootLocatorFactory().locatorForOptional(`#${id}-label`)();

        return (await label?.text()) ?? '';
    }

    /**
     * Returns the side of its control that the tooltip shows on. It's the opposite of the side the control picks
     * when the tooltip doesn't fit there.
     *
     * @throws When the tooltip doesn't show.
     */
    public async getPlacement(): Promise<TooltipPlacement> {
        const bubble = await this.getBubble();

        if (bubble === null) {
            throw new Error('The tooltip does not show, so it has no placement.');
        }
        return (await bubble.getAttribute('data-placement')) as TooltipPlacement;
    }

    /** Returns the id that links the control to its bubble and to its label. */
    private async getId(): Promise<string> {
        return (await (await this.host()).getAttribute('data-tooltip-id')) ?? '';
    }

    /** Returns the bubble of the tooltip, which sits in an overlay outside the control, or `null` while it's hidden. */
    private async getBubble() {
        const id = await this.getId();

        return this.documentRootLocatorFactory().locatorForOptional(`dma-tooltip#${id}`)();
    }
}
