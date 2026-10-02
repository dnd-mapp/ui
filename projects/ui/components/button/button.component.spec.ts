import type { HarnessLoader } from '@angular/cdk/testing';
import { Component, signal, type Type } from '@angular/core';
import { tokens } from '@dnd-mapp/design-tokens';
import { ButtonHarness } from '@dnd-mapp/ui/components/testing';
import { IconChevronDownComponent, IconPlusComponent } from '@dnd-mapp/ui/icons';
import { IconHarness } from '@dnd-mapp/ui/icons/testing';
import {
    getColors,
    getFrame,
    getLiveRegion,
    resolveColor,
    resolveColors,
    resolveFrame,
    resolveStyle,
    setupHarness,
} from '@dnd-mapp/ui/testing';
import { userEvent } from 'vitest/browser';
import { ButtonSizes, DEFAULT_BUTTON_SIZE, type ButtonSize } from './button-size';
import { ButtonVariants, DEFAULT_BUTTON_VARIANT, type ButtonVariant } from './button-variant';
import { ButtonComponent } from './button.component';

@Component({
    template: `<button
        dma-button
        type="button"
        [variant]="variant()"
        [size]="size()"
        [disabled]="disabled()"
        (click)="clicks.set(clicks() + 1)"
    >
        Save map
    </button>`,
    imports: [ButtonComponent],
})
class TestHostComponent {
    public readonly variant = signal<ButtonVariant>(DEFAULT_BUTTON_VARIANT);
    public readonly size = signal<ButtonSize>(DEFAULT_BUTTON_SIZE);
    public readonly disabled = signal(false);
    public readonly clicks = signal(0);
}

@Component({
    template: `<button dma-button type="button">Save map</button>`,
    imports: [ButtonComponent],
})
class NoVariantTestHostComponent {}

@Component({
    template: `<button dma-button type="button" variant>Save map</button>`,
    imports: [ButtonComponent],
})
class BareVariantTestHostComponent {}

@Component({
    template: `<button dma-button type="button" size>Save map</button>`,
    imports: [ButtonComponent],
})
class BareSizeTestHostComponent {}

@Component({
    template: `<button dma-button type="button" [size]="size()">
        <dma-icon-plus />Add map<dma-icon-chevron-down />
    </button>`,
    imports: [ButtonComponent, IconChevronDownComponent, IconPlusComponent],
})
class IconsTestHostComponent {
    public readonly size = signal<ButtonSize>(DEFAULT_BUTTON_SIZE);
}

@Component({
    template: `<form (submit)="$event.preventDefault(); submits.set(submits() + 1)">
        <button
            dma-button
            [variant]="variant()"
            [size]="size()"
            [loading]="loading()"
            loadingLabel="Saving"
            (click)="clicks.set(clicks() + 1)"
        >
            <dma-icon-plus />Save map<dma-icon-chevron-down />
        </button>
    </form>`,
    imports: [ButtonComponent, IconChevronDownComponent, IconPlusComponent],
})
class LoadingTestHostComponent {
    public readonly variant = signal<ButtonVariant>(DEFAULT_BUTTON_VARIANT);
    public readonly size = signal<ButtonSize>(DEFAULT_BUTTON_SIZE);
    public readonly loading = signal(false);
    public readonly clicks = signal(0);
    public readonly submits = signal(0);
}

@Component({
    template: `<button dma-button type="button" loading>Save map</button>`,
    imports: [ButtonComponent],
})
class BareLoadingTestHostComponent {}

/**
 * The color tokens of a button in one state, such as `tokens.color.background.accent`. A `null` fill or border
 * shows none.
 */
interface Look {
    fill: string | null;
    border: string | null;
    label: string;
}

/**
 * The tokens of a button in one size, such as `tokens.spacing['16']`. The height has no token, so it's in pixels.
 */
interface Dimensions {
    height: number;
    padding: string;
    radius: string;
    fontSize: string;
    lineHeight: string;
}

/** Resolves the tokens of a size to what the browser computes for them inside `context`. */
function toDimensions({ height, padding, radius, fontSize, lineHeight }: Dimensions, context: HTMLElement) {
    return {
        height,
        // The 1px border sits inside the padding.
        padding: resolveStyle('padding-inline-start', `calc(${padding} - 1px)`, context),
        radius: resolveStyle('border-top-left-radius', radius, context),
        fontSize: resolveStyle('font-size', fontSize, context),
        lineHeight: resolveStyle('line-height', lineHeight, context),
    };
}

async function getDimensions(harness: ButtonHarness) {
    const host = await harness.host();

    return {
        height: (await host.getDimensions()).height,
        padding: await host.getCssValue('padding-inline-start'),
        radius: await host.getCssValue('border-top-left-radius'),
        fontSize: await host.getCssValue('font-size'),
        lineHeight: await host.getCssValue('line-height'),
    };
}

/** Returns the colors of the button, under the keys of a `Look`. */
async function getLook(harness: ButtonHarness) {
    return getColors(await harness.host(), { fill: 'background-color', border: 'border-top-color', label: 'color' });
}

/** Returns the box of the label of the button inside `context`, which is its only text. */
function getLabelBox(context: HTMLElement) {
    const label = document.createTreeWalker(context, NodeFilter.SHOW_TEXT).nextNode();
    const range = document.createRange();

    if (label) {
        range.selectNodeContents(label);
    }
    return range.getBoundingClientRect();
}

/** Returns the space between the label of the button and each of its icons, in pixels. */
async function getIconGaps(harness: ButtonHarness, context: HTMLElement) {
    const icons = await Promise.all(
        (await harness.getIcons()).map(async (icon) => (await icon.host()).getDimensions()),
    );
    // The harness renders the changes of the test before it measures the icons, so measure the label after them.
    const label = getLabelBox(context);

    return icons.map((icon) =>
        icon.left < label.left ? label.left - (icon.left + icon.width) : icon.left - label.right,
    );
}

const mediumDimensions: Dimensions = {
    height: 40,
    padding: tokens.spacing['16'],
    radius: tokens.radius['8'],
    fontSize: tokens.text.label.medium['font-size'],
    lineHeight: tokens.text.label.medium['line-height'],
};

const primaryLook: Look = {
    fill: tokens.color.background.accent,
    border: null,
    label: tokens.color.text['on-accent'],
};

describe('ButtonComponent', () => {
    async function setup<T>(host: Type<T>) {
        return setupHarness(host, ButtonHarness);
    }

    it('shows its content as the label', async () => {
        const { harness } = await setup(TestHostComponent);

        expect(await harness.getText()).toBe('Save map');
    });

    it('keeps its label as its text when it shows icons', async () => {
        const { harness } = await setup(IconsTestHostComponent);

        expect(await harness.getText()).toBe('Add map');
    });

    it('reports a click to its host', async () => {
        const { fixture, harness } = await setup(TestHostComponent);

        await harness.click();

        expect(fixture.componentInstance.clicks()).toBe(1);
    });

    it('shows the pointer cursor', async () => {
        const { harness } = await setup(TestHostComponent);

        expect(await (await harness.host()).getCssValue('cursor')).toBe('pointer');
    });

    it('shows the not-allowed cursor when disabled', async () => {
        const { fixture, harness } = await setup(TestHostComponent);

        fixture.componentInstance.disabled.set(true);

        expect(await harness.isDisabled()).toBe(true);
        expect(await (await harness.host()).getCssValue('cursor')).toBe('not-allowed');
    });

    it("doesn't take focus when disabled, so it never shows the focus ring", async () => {
        const { fixture, harness } = await setup(TestHostComponent);

        fixture.componentInstance.disabled.set(true);

        expect(await harness.isDisabled()).toBe(true);

        await harness.focus();

        expect(await harness.isFocused()).toBe(false);
    });

    it('has the Primary variant when it sets no variant', async () => {
        const { element, harness } = await setup(NoVariantTestHostComponent);

        expect(await getLook(harness)).toEqual(resolveColors(primaryLook, element));
    });

    it('has the Primary variant when it sets the variant attribute without a value', async () => {
        const { element, harness } = await setup(BareVariantTestHostComponent);

        expect(await getLook(harness)).toEqual(resolveColors(primaryLook, element));
    });

    it('has the Medium size when it sets no size', async () => {
        const { element, harness } = await setup(NoVariantTestHostComponent);

        expect(await getDimensions(harness)).toEqual(toDimensions(mediumDimensions, element));
    });

    it('has the Medium size when it sets the size attribute without a value', async () => {
        const { element, harness } = await setup(BareSizeTestHostComponent);

        expect(await getDimensions(harness)).toEqual(toDimensions(mediumDimensions, element));
    });

    describe.each<{ size: ButtonSize; dimensions: Dimensions; iconGap: string }>([
        {
            size: ButtonSizes.small,
            dimensions: {
                height: 32,
                padding: tokens.spacing['12'],
                radius: tokens.radius['4'],
                fontSize: tokens.text.label.small['font-size'],
                lineHeight: tokens.text.label.small['line-height'],
            },
            iconGap: tokens.spacing['4'],
        },
        {
            size: ButtonSizes.medium,
            dimensions: mediumDimensions,
            iconGap: tokens.spacing['8'],
        },
        {
            size: ButtonSizes.large,
            dimensions: {
                height: 48,
                padding: tokens.spacing['24'],
                radius: tokens.radius['12'],
                fontSize: tokens.text.label.large['font-size'],
                lineHeight: tokens.text.label.large['line-height'],
            },
            iconGap: tokens.spacing['12'],
        },
    ])('in the $size size', ({ size, dimensions, iconGap }) => {
        it('has the height, padding, radius, and text style of its size', async () => {
            const { fixture, element, harness } = await setup(TestHostComponent);

            fixture.componentInstance.size.set(size);

            expect(await harness.getText()).toBe('Save map');
            expect(await getDimensions(harness)).toEqual(toDimensions(dimensions, element));
        });

        it('keeps its height and padding when it shows icons', async () => {
            const { fixture, element, harness } = await setup(IconsTestHostComponent);

            fixture.componentInstance.size.set(size);

            expect(await harness.getText()).toBe('Add map');
            expect(await getDimensions(harness)).toEqual(toDimensions(dimensions, element));
        });

        it('sizes the icons in its slots after its size', async () => {
            const { fixture, element, harness } = await setup(IconsTestHostComponent);

            fixture.componentInstance.size.set(size);

            const icons = await harness.getIcons();

            expect(icons).toHaveLength(2);

            for (const icon of icons) {
                expect(await icon.getSize()).toBe(size);
                expect(await getFrame(await icon.host())).toEqual(resolveFrame(dimensions.lineHeight, element));
            }
        });

        it('puts the icon gap of its size between its label and each icon', async () => {
            const { fixture, element, harness } = await setup(IconsTestHostComponent);

            fixture.componentInstance.size.set(size);

            const gaps = await getIconGaps(harness, element);
            const expected = parseFloat(resolveStyle('column-gap', iconGap, element));

            expect(gaps).toHaveLength(2);

            for (const gap of gaps) {
                expect(gap).toBeCloseTo(expected, 1);
            }
        });

        it('keeps its size in every variant', async () => {
            const { fixture, harness } = await setup(TestHostComponent);

            fixture.componentInstance.size.set(size);

            for (const variant of Object.values(ButtonVariants)) {
                fixture.componentInstance.variant.set(variant);

                expect(await harness.getText()).toBe('Save map');
                expect((await (await harness.host()).getDimensions()).height).toBe(dimensions.height);
            }
        });
    });

    describe('when loading', () => {
        beforeEach(() => {
            vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout', 'Date'] });
        });

        afterEach(() => {
            vi.useRealTimers();
        });

        async function setupLoading() {
            const { fixture, element, loader, harness } = await setup(LoadingTestHostComponent);

            fixture.componentInstance.loading.set(true);

            expect(await harness.isLoading()).toBe(true);

            return { fixture, element, loader, harness };
        }

        /** Lets `time` milliseconds pass, then returns the spinner of the button, or `null` while it shows none. */
        async function getSpinnerAfter(loader: HarnessLoader, time: number) {
            vi.advanceTimersByTime(time);

            return loader.getHarnessOrNull(IconHarness.with({ glyph: 'circle-notch' }));
        }

        it('is loading when it sets the loading attribute without a value', async () => {
            const { harness } = await setup(BareLoadingTestHostComponent);

            expect(await harness.isLoading()).toBe(true);
        });

        it('is not loading when it sets no loading', async () => {
            const { harness } = await setup(TestHostComponent);

            expect(await harness.isLoading()).toBe(false);
            expect(await (await harness.host()).getAttribute('aria-disabled')).toBeNull();
        });

        it('uses aria-disabled rather than the disabled attribute from the moment it starts', async () => {
            const { harness } = await setupLoading();

            expect(await (await harness.host()).getAttribute('aria-disabled')).toBe('true');
            expect(await harness.isDisabled()).toBe(false);
        });

        it('blocks clicks, so it never starts its action twice', async () => {
            const { fixture, harness } = await setupLoading();

            await harness.click();

            expect(fixture.componentInstance.clicks()).toBe(0);
        });

        it("doesn't submit its form", async () => {
            const { fixture, harness } = await setupLoading();

            await harness.click();

            expect(fixture.componentInstance.submits()).toBe(0);
        });

        it('keeps keyboard focus, and can take it', async () => {
            const { fixture, harness } = await setup(LoadingTestHostComponent);

            await harness.focus();
            fixture.componentInstance.loading.set(true);

            expect(await harness.isLoading()).toBe(true);
            expect(await harness.isFocused()).toBe(true);

            await harness.blur();
            await harness.focus();

            expect(await harness.isFocused()).toBe(true);
        });

        it('shows no spinner for its first 300ms, so a fast action shows none', async () => {
            const { loader } = await setupLoading();

            expect(await getSpinnerAfter(loader, 299)).toBeNull();
        });

        it('shows a spinning circle-notch in the size of the button after 300ms', async () => {
            const { fixture, loader } = await setupLoading();

            fixture.componentInstance.size.set(ButtonSizes.large);

            const spinner = await getSpinnerAfter(loader, 300);

            expect(spinner).not.toBeNull();
            expect(await spinner?.isSpinning()).toBe(true);
            expect(await spinner?.getSize()).toBe('large');
        });

        it('leaves the spinner out of the icons in its slots', async () => {
            const { loader, harness } = await setupLoading();

            expect(await getSpinnerAfter(loader, 300)).not.toBeNull();

            const icons = await harness.getIcons();

            expect(await Promise.all(icons.map(async (icon) => icon.getGlyph()))).toEqual(['plus', 'chevron-down']);
        });

        it('hides its label and icons at opacity 0, and keeps its width and its label', async () => {
            const { fixture, element, loader, harness } = await setup(LoadingTestHostComponent);
            const width = (await (await harness.host()).getDimensions()).width;

            fixture.componentInstance.loading.set(true);

            expect(await getSpinnerAfter(loader, 300)).not.toBeNull();
            expect((await (await harness.host()).getDimensions()).width).toBe(width);
            expect(await harness.getText()).toBe('Save map');

            const content = element.querySelector('.content');

            expect(content && getComputedStyle(content).opacity).toBe('0');
            expect(content && getComputedStyle(content).visibility).toBe('visible');
        });

        it('centers the spinner in the button', async () => {
            const { loader, harness } = await setupLoading();

            const spinner = await getSpinnerAfter(loader, 300);
            const box = await (await harness.host()).getDimensions();
            const spinnerBox = await (await spinner?.host())?.getDimensions();

            expect(spinnerBox && spinnerBox.left + spinnerBox.width / 2).toBeCloseTo(box.left + box.width / 2, 1);
            expect(spinnerBox && spinnerBox.top + spinnerBox.height / 2).toBeCloseTo(box.top + box.height / 2, 1);
        });

        it('fills the spinner with the color of its label', async () => {
            const { loader, harness } = await setupLoading();

            const spinner = await getSpinnerAfter(loader, 300);

            expect(await (await spinner?.host())?.getCssValue('fill')).toBe(
                await (await harness.host()).getCssValue('color'),
            );
        });

        it('stops loading without a spinner when it ends within 300ms', async () => {
            const { fixture, loader, harness } = await setupLoading();

            vi.advanceTimersByTime(299);
            fixture.componentInstance.loading.set(false);

            expect(await harness.isLoading()).toBe(false);
            expect(await (await harness.host()).getAttribute('aria-disabled')).toBeNull();
            expect(await getSpinnerAfter(loader, 1000)).toBeNull();
        });

        it('keeps the spinner for at least 500ms, so it never flashes', async () => {
            const { fixture, loader, harness } = await setupLoading();

            expect(await getSpinnerAfter(loader, 300)).not.toBeNull();

            vi.advanceTimersByTime(100);
            fixture.componentInstance.loading.set(false);

            expect(await getSpinnerAfter(loader, 399)).not.toBeNull();
            expect(await harness.isLoading()).toBe(true);

            await harness.click();

            expect(fixture.componentInstance.clicks()).toBe(0);
            expect(await getSpinnerAfter(loader, 1)).toBeNull();
            expect(await harness.isLoading()).toBe(false);
            expect(await (await harness.host()).getAttribute('aria-disabled')).toBeNull();

            await harness.click();

            expect(fixture.componentInstance.clicks()).toBe(1);
        });

        it('hides the spinner at once when it ends after 500ms', async () => {
            const { fixture, loader, harness } = await setupLoading();

            expect(await getSpinnerAfter(loader, 800)).not.toBeNull();

            fixture.componentInstance.loading.set(false);
            fixture.detectChanges();

            expect(await getSpinnerAfter(loader, 0)).toBeNull();
            expect(await harness.isLoading()).toBe(false);
        });

        it('keeps the spinner when it starts loading again before the spinner hides', async () => {
            const { fixture, loader, harness } = await setupLoading();

            expect(await getSpinnerAfter(loader, 300)).not.toBeNull();

            fixture.componentInstance.loading.set(false);

            expect(await getSpinnerAfter(loader, 100)).not.toBeNull();

            fixture.componentInstance.loading.set(true);

            expect(await getSpinnerAfter(loader, 1000)).not.toBeNull();
            expect(await harness.isLoading()).toBe(true);
        });

        it('announces its loading label politely once the spinner shows', async () => {
            const { loader } = await setupLoading();

            expect(await getSpinnerAfter(loader, 299)).toBeNull();
            expect(getLiveRegion()?.textContent ?? '').toBe('');
            expect(await getSpinnerAfter(loader, 1)).not.toBeNull();

            // The live announcer of the CDK waits 100ms before it changes the text of the live region.
            vi.advanceTimersByTime(100);

            expect(getLiveRegion()?.textContent).toBe('Saving');
        });

        it('announces Loading when it sets no loading label', async () => {
            await setup(BareLoadingTestHostComponent);

            vi.advanceTimersByTime(400);

            expect(getLiveRegion()?.textContent).toBe('Loading');
        });

        it('announces nothing when it stops loading within 300ms', async () => {
            const { fixture, harness } = await setupLoading();

            vi.advanceTimersByTime(200);
            fixture.componentInstance.loading.set(false);

            expect(await harness.isLoading()).toBe(false);

            vi.advanceTimersByTime(1000);

            expect(getLiveRegion()?.textContent ?? '').toBe('');
        });

        it('keeps the live region out of sight', async () => {
            await setup(BareLoadingTestHostComponent);

            vi.advanceTimersByTime(400);

            const region = getLiveRegion()?.getBoundingClientRect();

            expect(region?.width).toBe(1);
            expect(region?.height).toBe(1);
        });
    });

    it('shows no hover fill while loading', async () => {
        const { fixture, element, harness } = await setup(LoadingTestHostComponent);
        const host = await harness.host();

        await userEvent.hover(element.querySelector('button') ?? element);

        expect(await host.getCssValue('background-color')).toBe(
            resolveColor(tokens.color.background['accent-hover'], element),
        );

        fixture.componentInstance.loading.set(true);

        expect(await harness.isLoading()).toBe(true);
        expect(await host.getCssValue('background-color')).toBe(resolveColor(tokens.color.background.accent, element));
    });

    describe.each<{ variant: ButtonVariant; enabled: Look; disabled: Look }>([
        {
            variant: ButtonVariants.primary,
            enabled: primaryLook,
            disabled: { fill: tokens.color.background.disabled, border: null, label: tokens.color.text.disabled },
        },
        {
            variant: ButtonVariants.secondary,
            enabled: { fill: null, border: tokens.color.border.default, label: tokens.color.text.default },
            disabled: { fill: null, border: tokens.color.border.disabled, label: tokens.color.text.disabled },
        },
        {
            variant: ButtonVariants.ghost,
            enabled: { fill: null, border: null, label: tokens.color.text.default },
            disabled: { fill: null, border: null, label: tokens.color.text.disabled },
        },
        {
            variant: ButtonVariants.danger,
            enabled: { fill: tokens.color.background.danger, border: null, label: tokens.color.text['on-danger'] },
            disabled: { fill: tokens.color.background.disabled, border: null, label: tokens.color.text.disabled },
        },
    ])('in the $variant variant', ({ variant, enabled, disabled }) => {
        async function setupVariant() {
            const { fixture, element, harness } = await setup(TestHostComponent);

            fixture.componentInstance.variant.set(variant);

            return { fixture, element, harness };
        }

        it('has the colors of its Default state', async () => {
            const { element, harness } = await setupVariant();

            expect(await getLook(harness)).toEqual(resolveColors(enabled, element));
        });

        it('has the colors of its Disabled state when disabled', async () => {
            const { fixture, element, harness } = await setupVariant();

            fixture.componentInstance.disabled.set(true);

            expect(await harness.isDisabled()).toBe(true);
            expect(await getLook(harness)).toEqual(resolveColors(disabled, element));
        });

        it('keeps the colors of its Default state while loading, so the user sees which action runs', async () => {
            const { fixture, element, harness } = await setup(LoadingTestHostComponent);

            fixture.componentInstance.variant.set(variant);
            fixture.componentInstance.loading.set(true);

            expect(await harness.isLoading()).toBe(true);
            expect(await getLook(harness)).toEqual(resolveColors(enabled, element));
        });
    });
});
