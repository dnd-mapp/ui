import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component, signal, type Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { tokens } from '@dnd-mapp/design-tokens';
import { ButtonHarness } from '@dnd-mapp/ui/components/testing';
import { IconChevronDownComponent, IconPlusComponent } from '@dnd-mapp/ui/icons';
import type { IconHarness } from '@dnd-mapp/ui/icons/testing';
import { resolveStyle } from '@dnd-mapp/ui/testing';
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

const transparent = 'rgba(0, 0, 0, 0)';

/** Resolves a color token to the color that the browser computes for it inside `context`. */
function resolveColor(token: string | null, context: HTMLElement) {
    return token === null ? transparent : resolveStyle('color', token, context);
}

function toColors({ fill, border, label }: Look, context: HTMLElement) {
    return {
        fill: resolveColor(fill, context),
        border: resolveColor(border, context),
        label: resolveColor(label, context),
    };
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

async function getDimensions(button: ButtonHarness) {
    const host = await button.host();

    return {
        height: (await host.getDimensions()).height,
        padding: await host.getCssValue('padding-inline-start'),
        radius: await host.getCssValue('border-top-left-radius'),
        fontSize: await host.getCssValue('font-size'),
        lineHeight: await host.getCssValue('line-height'),
    };
}

async function getColors(button: ButtonHarness) {
    const host = await button.host();

    return {
        fill: await host.getCssValue('background-color'),
        border: await host.getCssValue('border-top-color'),
        label: await host.getCssValue('color'),
    };
}

/** Returns the frame of an icon, as the width and the height that the browser computes for it. */
async function getFrame(icon: IconHarness) {
    const host = await icon.host();

    return { width: await host.getCssValue('width'), height: await host.getCssValue('height') };
}

/** Returns the frame that the line height token of a label style resolves to inside `context`. */
function toFrame(lineHeight: string, context: HTMLElement) {
    const size = resolveStyle('height', lineHeight, context);

    return { width: size, height: size };
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
async function getIconGaps(button: ButtonHarness, context: HTMLElement) {
    const icons = await Promise.all((await button.getIcons()).map(async (icon) => (await icon.host()).getDimensions()));
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
        const fixture = TestBed.createComponent(host);
        const element = fixture.nativeElement as HTMLElement;
        const button = await TestbedHarnessEnvironment.loader(fixture).getHarness(ButtonHarness);

        return { fixture, element, button };
    }

    it('shows its content as the label', async () => {
        const { button } = await setup(TestHostComponent);

        expect(await button.getText()).toBe('Save map');
    });

    it('keeps its label as its text when it shows icons', async () => {
        const { button } = await setup(IconsTestHostComponent);

        expect(await button.getText()).toBe('Add map');
    });

    it('reports a click to its host', async () => {
        const { fixture, button } = await setup(TestHostComponent);

        await button.click();

        expect(fixture.componentInstance.clicks()).toBe(1);
    });

    it('shows the pointer cursor', async () => {
        const { button } = await setup(TestHostComponent);

        expect(await (await button.host()).getCssValue('cursor')).toBe('pointer');
    });

    it('shows the not-allowed cursor when disabled', async () => {
        const { fixture, button } = await setup(TestHostComponent);

        fixture.componentInstance.disabled.set(true);

        expect(await button.isDisabled()).toBe(true);
        expect(await (await button.host()).getCssValue('cursor')).toBe('not-allowed');
    });

    it("doesn't take focus when disabled, so it never shows the focus ring", async () => {
        const { fixture, button } = await setup(TestHostComponent);

        fixture.componentInstance.disabled.set(true);

        expect(await button.isDisabled()).toBe(true);

        await button.focus();

        expect(await button.isFocused()).toBe(false);
    });

    it('has the Primary variant when it sets no variant', async () => {
        const { element, button } = await setup(NoVariantTestHostComponent);

        expect(await getColors(button)).toEqual(toColors(primaryLook, element));
    });

    it('has the Primary variant when it sets the variant attribute without a value', async () => {
        const { element, button } = await setup(BareVariantTestHostComponent);

        expect(await getColors(button)).toEqual(toColors(primaryLook, element));
    });

    it('has the Medium size when it sets no size', async () => {
        const { element, button } = await setup(NoVariantTestHostComponent);

        expect(await getDimensions(button)).toEqual(toDimensions(mediumDimensions, element));
    });

    it('has the Medium size when it sets the size attribute without a value', async () => {
        const { element, button } = await setup(BareSizeTestHostComponent);

        expect(await getDimensions(button)).toEqual(toDimensions(mediumDimensions, element));
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
            const { fixture, element, button } = await setup(TestHostComponent);

            fixture.componentInstance.size.set(size);

            expect(await button.getText()).toBe('Save map');
            expect(await getDimensions(button)).toEqual(toDimensions(dimensions, element));
        });

        it('keeps its height and padding when it shows icons', async () => {
            const { fixture, element, button } = await setup(IconsTestHostComponent);

            fixture.componentInstance.size.set(size);

            expect(await button.getText()).toBe('Add map');
            expect(await getDimensions(button)).toEqual(toDimensions(dimensions, element));
        });

        it('sizes the icons in its slots after its size', async () => {
            const { fixture, element, button } = await setup(IconsTestHostComponent);

            fixture.componentInstance.size.set(size);

            const icons = await button.getIcons();

            expect(icons).toHaveLength(2);

            for (const icon of icons) {
                expect(await icon.getSize()).toBe(size);
                expect(await getFrame(icon)).toEqual(toFrame(dimensions.lineHeight, element));
            }
        });

        it('puts the icon gap of its size between its label and each icon', async () => {
            const { fixture, element, button } = await setup(IconsTestHostComponent);

            fixture.componentInstance.size.set(size);

            const gaps = await getIconGaps(button, element);
            const expected = parseFloat(resolveStyle('column-gap', iconGap, element));

            expect(gaps).toHaveLength(2);

            for (const gap of gaps) {
                expect(gap).toBeCloseTo(expected, 1);
            }
        });

        it('keeps its size in every variant', async () => {
            const { fixture, button } = await setup(TestHostComponent);

            fixture.componentInstance.size.set(size);

            for (const variant of Object.values(ButtonVariants)) {
                fixture.componentInstance.variant.set(variant);

                expect(await button.getText()).toBe('Save map');
                expect((await (await button.host()).getDimensions()).height).toBe(dimensions.height);
            }
        });
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
            const { fixture, element, button } = await setup(TestHostComponent);

            fixture.componentInstance.variant.set(variant);

            return { fixture, element, button };
        }

        it('has the colors of its Default state', async () => {
            const { element, button } = await setupVariant();

            expect(await getColors(button)).toEqual(toColors(enabled, element));
        });

        it('has the colors of its Disabled state when disabled', async () => {
            const { fixture, element, button } = await setupVariant();

            fixture.componentInstance.disabled.set(true);

            expect(await button.isDisabled()).toBe(true);
            expect(await getColors(button)).toEqual(toColors(disabled, element));
        });
    });
});
