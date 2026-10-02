import type { HarnessLoader } from '@angular/cdk/testing';
import { Component, signal, type Type } from '@angular/core';
import { tokens } from '@dnd-mapp/design-tokens';
import { IconButtonHarness } from '@dnd-mapp/ui/components/testing';
import { IconXmarkComponent } from '@dnd-mapp/ui/icons';
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
import { ButtonSizes, DEFAULT_BUTTON_SIZE, type ButtonSize } from '../button/button-size';
import { ButtonVariants, DEFAULT_BUTTON_VARIANT, type ButtonVariant } from '../button/button-variant';
import { IconButtonComponent } from './icon-button.component';

@Component({
    template: `<form (submit)="$event.preventDefault(); submits.set(submits() + 1)">
        <button
            dma-icon-button
            [aria-label]="label()"
            [variant]="variant()"
            [size]="size()"
            [disabled]="disabled()"
            [loading]="loading()"
            loadingLabel="Closing"
            (click)="clicks.set(clicks() + 1)"
        >
            <dma-icon-xmark />
        </button>
    </form>`,
    imports: [IconButtonComponent, IconXmarkComponent],
})
class TestHostComponent {
    public readonly label = signal('Close panel');
    public readonly variant = signal<ButtonVariant>(DEFAULT_BUTTON_VARIANT);
    public readonly size = signal<ButtonSize>(DEFAULT_BUTTON_SIZE);
    public readonly disabled = signal(false);
    public readonly loading = signal(false);
    public readonly clicks = signal(0);
    public readonly submits = signal(0);
}

@Component({
    template: `<button dma-icon-button type="button" aria-label="Close panel"><dma-icon-xmark /></button>`,
    imports: [IconButtonComponent, IconXmarkComponent],
})
class NoVariantTestHostComponent {}

@Component({
    template: `<button dma-icon-button type="button" aria-label="Close panel" variant size>
        <dma-icon-xmark />
    </button>`,
    imports: [IconButtonComponent, IconXmarkComponent],
})
class BareAttributesTestHostComponent {}

@Component({
    template: `<button
        dma-icon-button
        type="button"
        aria-label="Close panel"
        disabled
        (click)="clicks.set(clicks() + 1)"
    >
        <dma-icon-xmark />
    </button>`,
    imports: [IconButtonComponent, IconXmarkComponent],
})
class StaticDisabledTestHostComponent {
    public readonly clicks = signal(0);
}

@Component({
    template: `<button dma-icon-button type="button" aria-label="Close panel" loading><dma-icon-xmark /></button>`,
    imports: [IconButtonComponent, IconXmarkComponent],
})
class BareLoadingTestHostComponent {}

/**
 * The color tokens of an icon button in one state, such as `tokens.color.background.accent`. A `null` fill or
 * border shows none.
 */
interface Look {
    fill: string | null;
    border: string | null;
    icon: string;
}

/** Returns the colors of the icon button, under the keys of a `Look`. */
async function getLook(harness: IconButtonHarness) {
    const { fill, border } = await getColors(await harness.host(), {
        fill: 'background-color',
        border: 'border-top-color',
    });
    // The icon takes the color of the button, through `currentColor`.
    const { icon } = await getColors(await (await harness.getIcon()).host(), { icon: 'fill' });

    return { fill, border, icon };
}

/** Returns the distance between the centers of two boxes, on each axis. */
function getOffset(
    outer: { left: number; top: number; width: number; height: number },
    inner: { left: number; top: number; width: number; height: number },
) {
    return {
        x: inner.left + inner.width / 2 - (outer.left + outer.width / 2),
        y: inner.top + inner.height / 2 - (outer.top + outer.height / 2),
    };
}

const primaryLook: Look = {
    fill: tokens.color.background.accent,
    border: null,
    icon: tokens.color.text['on-accent'],
};

describe('IconButtonComponent', () => {
    async function setup<T>(host: Type<T>) {
        return setupHarness(host, IconButtonHarness);
    }

    it('reports a click to its host', async () => {
        const { fixture, harness } = await setup(TestHostComponent);

        await harness.click();

        expect(fixture.componentInstance.clicks()).toBe(1);
    });

    it('takes its accessible name from its aria-label', async () => {
        const { harness } = await setup(NoVariantTestHostComponent);

        expect(await harness.getLabel()).toBe('Close panel');
        expect(await (await harness.host()).getAttribute('aria-label')).toBe('Close panel');
    });

    it('updates its aria-label when the bound label changes', async () => {
        const { fixture, harness } = await setup(TestHostComponent);

        fixture.componentInstance.label.set('Close map');

        expect(await harness.getLabel()).toBe('Close map');
    });

    it('shows its content as its icon', async () => {
        const { harness } = await setup(TestHostComponent);

        expect(await (await harness.getIcon()).getGlyph()).toBe('xmark');
    });

    it('shows the pointer cursor', async () => {
        const { harness } = await setup(TestHostComponent);

        expect(await (await harness.host()).getCssValue('cursor')).toBe('pointer');
    });

    it('has the Primary variant and the Medium size when it sets neither', async () => {
        const { element, harness } = await setup(NoVariantTestHostComponent);

        expect(await harness.getVariant()).toBe(DEFAULT_BUTTON_VARIANT);
        expect(await harness.getSize()).toBe(DEFAULT_BUTTON_SIZE);
        expect(await getLook(harness)).toEqual(resolveColors(primaryLook, element));
    });

    it('has the Primary variant and the Medium size when it sets the attributes without a value', async () => {
        const { harness } = await setup(BareAttributesTestHostComponent);

        expect(await harness.getVariant()).toBe(DEFAULT_BUTTON_VARIANT);
        expect(await harness.getSize()).toBe(DEFAULT_BUTTON_SIZE);
    });

    describe.each<{ size: ButtonSize; side: number; radius: string; lineHeight: string }>([
        {
            size: ButtonSizes.small,
            side: 32,
            radius: tokens.radius['4'],
            lineHeight: tokens.text.label.small['line-height'],
        },
        {
            size: ButtonSizes.medium,
            side: 40,
            radius: tokens.radius['8'],
            lineHeight: tokens.text.label.medium['line-height'],
        },
        {
            size: ButtonSizes.large,
            side: 48,
            radius: tokens.radius['12'],
            lineHeight: tokens.text.label.large['line-height'],
        },
    ])('in the $size size', ({ size, side, radius, lineHeight }) => {
        it('is a square of its size, with the radius of the button and no padding', async () => {
            const { fixture, element, harness } = await setup(TestHostComponent);

            fixture.componentInstance.size.set(size);

            const host = await harness.host();

            expect(await harness.getSize()).toBe(size);
            expect(await getFrame(host)).toEqual({ width: `${side}px`, height: `${side}px` });
            expect(await host.getCssValue('border-top-left-radius')).toBe(
                resolveStyle('border-top-left-radius', radius, element),
            );
            expect(await host.getCssValue('padding-inline-start')).toBe(
                resolveStyle('padding-inline-start', tokens.spacing['0'], element),
            );
        });

        it('sizes its icon after its size, in the middle of the square', async () => {
            const { fixture, element, harness } = await setup(TestHostComponent);

            fixture.componentInstance.size.set(size);

            const icon = await harness.getIcon();

            expect(await icon.getSize()).toBe(size);
            expect(await getFrame(await icon.host())).toEqual(resolveFrame(lineHeight, element));

            const offset = getOffset(
                await (await harness.host()).getDimensions(),
                await (await icon.host()).getDimensions(),
            );

            expect(offset.x).toBeCloseTo(0, 1);
            expect(offset.y).toBeCloseTo(0, 1);
        });

        it('keeps its size in every variant', async () => {
            const { fixture, harness } = await setup(TestHostComponent);

            fixture.componentInstance.size.set(size);

            for (const variant of Object.values(ButtonVariants)) {
                fixture.componentInstance.variant.set(variant);

                expect(await harness.getVariant()).toBe(variant);
                expect(await getFrame(await harness.host())).toEqual({ width: `${side}px`, height: `${side}px` });
            }
        });
    });

    describe('when disabled', () => {
        async function setupDisabled() {
            const { fixture, element, harness } = await setup(TestHostComponent);

            fixture.componentInstance.disabled.set(true);

            expect(await harness.isDisabled()).toBe(true);

            return { fixture, element, harness };
        }

        it('uses aria-disabled rather than the disabled attribute, so it keeps its tooltip', async () => {
            const { harness } = await setupDisabled();
            const host = await harness.host();

            expect(await host.getAttribute('aria-disabled')).toBe('true');
            expect(await host.getAttribute('disabled')).toBeNull();
            expect(await host.getProperty<boolean>('disabled')).toBe(false);
        });

        it('removes the disabled attribute when the template sets it', async () => {
            const { harness } = await setup(StaticDisabledTestHostComponent);
            const host = await harness.host();

            expect(await harness.isDisabled()).toBe(true);
            expect(await host.getAttribute('aria-disabled')).toBe('true');
            expect(await host.getAttribute('disabled')).toBeNull();
        });

        it('blocks clicks when the template sets the disabled attribute', async () => {
            const { fixture, harness } = await setup(StaticDisabledTestHostComponent);

            await harness.click();

            expect(fixture.componentInstance.clicks()).toBe(0);
        });

        it('blocks clicks', async () => {
            const { fixture, harness } = await setupDisabled();

            await harness.click();

            expect(fixture.componentInstance.clicks()).toBe(0);
        });

        it("doesn't submit its form", async () => {
            const { fixture, harness } = await setupDisabled();

            await harness.click();

            expect(fixture.componentInstance.submits()).toBe(0);
        });

        it('stays in the tab order', async () => {
            const { harness } = await setupDisabled();

            await userEvent.tab();

            expect(await harness.isFocused()).toBe(true);
        });

        it('shows the focus ring on keyboard focus', async () => {
            const { element, harness } = await setupDisabled();
            const host = await harness.host();

            await userEvent.tab();

            expect(await harness.isFocused()).toBe(true);
            expect(await host.getCssValue('outline-style')).toBe('solid');
            expect(await host.getCssValue('outline-color')).toBe(resolveColor(tokens.color.border.focus, element));
        });

        it('shows the not-allowed cursor', async () => {
            const { harness } = await setupDisabled();

            expect(await (await harness.host()).getCssValue('cursor')).toBe('not-allowed');
        });

        it('shows no hover fill', async () => {
            const { element, harness } = await setupDisabled();

            await userEvent.hover(element.querySelector('button') ?? element);

            expect(await (await harness.host()).getCssValue('background-color')).toBe(
                resolveColor(tokens.color.background.disabled, element),
            );
        });

        it('takes clicks again once it is enabled', async () => {
            const { fixture, harness } = await setupDisabled();

            fixture.componentInstance.disabled.set(false);

            expect(await harness.isDisabled()).toBe(false);
            expect(await (await harness.host()).getAttribute('aria-disabled')).toBeNull();

            await harness.click();

            expect(fixture.componentInstance.clicks()).toBe(1);
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
            const { fixture, element, loader, harness } = await setup(TestHostComponent);

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

        it('uses aria-disabled from the moment it starts, but keeps the look of its Default state', async () => {
            const { element, harness } = await setupLoading();

            expect(await (await harness.host()).getAttribute('aria-disabled')).toBe('true');
            expect(await harness.isDisabled()).toBe(false);
            expect(await getLook(harness)).toEqual(resolveColors(primaryLook, element));
        });

        it("blocks clicks and doesn't submit its form", async () => {
            const { fixture, harness } = await setupLoading();

            await harness.click();

            expect(fixture.componentInstance.clicks()).toBe(0);
            expect(fixture.componentInstance.submits()).toBe(0);
        });

        it('shows a spinning circle-notch in the size of the button after 300ms', async () => {
            const { fixture, loader } = await setupLoading();

            fixture.componentInstance.size.set(ButtonSizes.large);

            expect(await getSpinnerAfter(loader, 299)).toBeNull();

            const spinner = await getSpinnerAfter(loader, 1);

            expect(await spinner?.isSpinning()).toBe(true);
            expect(await spinner?.getSize()).toBe('large');
        });

        it('hides its icon at opacity 0 behind the spinner, in the middle of the square', async () => {
            const { element, loader, harness } = await setupLoading();

            const spinner = await getSpinnerAfter(loader, 300);
            const icon = element.querySelector('.content');

            expect(icon && getComputedStyle(icon).opacity).toBe('0');
            expect(await (await harness.getIcon()).getGlyph()).toBe('xmark');

            const spinnerBox = await (await spinner?.host())?.getDimensions();
            const offset = spinnerBox && getOffset(await (await harness.host()).getDimensions(), spinnerBox);

            expect(offset?.x).toBeCloseTo(0, 1);
            expect(offset?.y).toBeCloseTo(0, 1);
        });

        it('keeps its accessible name', async () => {
            const { loader, harness } = await setupLoading();

            expect(await getSpinnerAfter(loader, 300)).not.toBeNull();
            expect(await harness.getLabel()).toBe('Close panel');
        });

        it('announces its loading label politely once the spinner shows', async () => {
            const { loader } = await setupLoading();

            expect(await getSpinnerAfter(loader, 300)).not.toBeNull();

            // The live announcer of the CDK waits 100ms before it changes the text of the live region.
            vi.advanceTimersByTime(100);

            expect(getLiveRegion()?.textContent).toBe('Closing');
        });

        it('stays aria-disabled when it stops loading while disabled', async () => {
            const { fixture, loader, harness } = await setupLoading();

            fixture.componentInstance.disabled.set(true);
            fixture.componentInstance.loading.set(false);

            expect(await getSpinnerAfter(loader, 1000)).toBeNull();
            expect(await harness.isLoading()).toBe(false);
            expect(await (await harness.host()).getAttribute('aria-disabled')).toBe('true');
        });
    });

    describe.each<{ variant: ButtonVariant; enabled: Look; disabled: Look }>([
        {
            variant: ButtonVariants.primary,
            enabled: primaryLook,
            disabled: { fill: tokens.color.background.disabled, border: null, icon: tokens.color.text.disabled },
        },
        {
            variant: ButtonVariants.secondary,
            enabled: { fill: null, border: tokens.color.border.default, icon: tokens.color.text.default },
            disabled: { fill: null, border: tokens.color.border.disabled, icon: tokens.color.text.disabled },
        },
        {
            variant: ButtonVariants.ghost,
            enabled: { fill: null, border: null, icon: tokens.color.text.default },
            disabled: { fill: null, border: null, icon: tokens.color.text.disabled },
        },
        {
            variant: ButtonVariants.danger,
            enabled: { fill: tokens.color.background.danger, border: null, icon: tokens.color.text['on-danger'] },
            disabled: { fill: tokens.color.background.disabled, border: null, icon: tokens.color.text.disabled },
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

        it('keeps the colors of its Default state while loading', async () => {
            const { fixture, element, harness } = await setupVariant();

            fixture.componentInstance.loading.set(true);

            expect(await harness.isLoading()).toBe(true);
            expect(await getLook(harness)).toEqual(resolveColors(enabled, element));
        });
    });
});
