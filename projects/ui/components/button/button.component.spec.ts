import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component, signal, type Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ButtonHarness } from '@dnd-mapp/ui/components/testing';
import { ButtonVariants, DEFAULT_BUTTON_VARIANT, type ButtonVariant } from './button-variant';
import { ButtonComponent } from './button.component';

@Component({
    template: `<button
        dma-button
        type="button"
        [variant]="variant()"
        [disabled]="disabled()"
        (click)="clicks.set(clicks() + 1)"
    >
        Save map
    </button>`,
    imports: [ButtonComponent],
})
class TestHostComponent {
    public readonly variant = signal<ButtonVariant>(DEFAULT_BUTTON_VARIANT);
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

// The specs don't load the design tokens, so each color token that the button uses gets a color of its own
// here. A spec then tells from a color which token the button uses.
const tokenColors = {
    'background-accent': 'rgb(1, 0, 0)',
    'background-accent-hover': 'rgb(2, 0, 0)',
    'background-accent-pressed': 'rgb(3, 0, 0)',
    'background-danger': 'rgb(4, 0, 0)',
    'background-danger-hover': 'rgb(5, 0, 0)',
    'background-danger-pressed': 'rgb(6, 0, 0)',
    'background-neutral-hover': 'rgb(7, 0, 0)',
    'background-neutral-pressed': 'rgb(8, 0, 0)',
    'background-disabled': 'rgb(9, 0, 0)',
    'border-default': 'rgb(0, 1, 0)',
    'border-disabled': 'rgb(0, 2, 0)',
    'text-on-accent': 'rgb(0, 0, 1)',
    'text-on-danger': 'rgb(0, 0, 2)',
    'text-default': 'rgb(0, 0, 3)',
    'text-disabled': 'rgb(0, 0, 4)',
} as const;

type ColorToken = keyof typeof tokenColors;

/** The color tokens of a button in one state. A `null` fill or border shows none. */
interface Look {
    fill: ColorToken | null;
    border: ColorToken | null;
    label: ColorToken;
}

function toColors({ fill, border, label }: Look) {
    const transparent = 'rgba(0, 0, 0, 0)';

    return {
        fill: fill ? tokenColors[fill] : transparent,
        border: border ? tokenColors[border] : transparent,
        label: tokenColors[label],
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

const primaryLook: Look = { fill: 'background-accent', border: null, label: 'text-on-accent' };

describe('ButtonComponent', () => {
    async function setup<T>(host: Type<T>) {
        const fixture = TestBed.createComponent(host);
        const element = fixture.nativeElement as HTMLElement;

        for (const [token, color] of Object.entries(tokenColors)) {
            element.style.setProperty(`--dma-color-${token}`, color);
        }

        const button = await TestbedHarnessEnvironment.loader(fixture).getHarness(ButtonHarness);

        return { fixture, button };
    }

    it('shows its content as the label', async () => {
        const { button } = await setup(TestHostComponent);

        expect(await button.getText()).toBe('Save map');
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
        const { button } = await setup(NoVariantTestHostComponent);

        expect(await getColors(button)).toEqual(toColors(primaryLook));
    });

    it('has the Primary variant when it sets the variant attribute without a value', async () => {
        const { button } = await setup(BareVariantTestHostComponent);

        expect(await getColors(button)).toEqual(toColors(primaryLook));
    });

    describe.each<{ variant: ButtonVariant; enabled: Look; disabled: Look }>([
        {
            variant: ButtonVariants.primary,
            enabled: primaryLook,
            disabled: { fill: 'background-disabled', border: null, label: 'text-disabled' },
        },
        {
            variant: ButtonVariants.secondary,
            enabled: { fill: null, border: 'border-default', label: 'text-default' },
            disabled: { fill: null, border: 'border-disabled', label: 'text-disabled' },
        },
        {
            variant: ButtonVariants.ghost,
            enabled: { fill: null, border: null, label: 'text-default' },
            disabled: { fill: null, border: null, label: 'text-disabled' },
        },
        {
            variant: ButtonVariants.danger,
            enabled: { fill: 'background-danger', border: null, label: 'text-on-danger' },
            disabled: { fill: 'background-disabled', border: null, label: 'text-disabled' },
        },
    ])('in the $variant variant', ({ variant, enabled, disabled }) => {
        async function setupVariant() {
            const { fixture, button } = await setup(TestHostComponent);

            fixture.componentInstance.variant.set(variant);

            return { fixture, button };
        }

        it('has the colors of its Default state', async () => {
            const { button } = await setupVariant();

            expect(await getColors(button)).toEqual(toColors(enabled));
        });

        it('has the colors of its Disabled state when disabled', async () => {
            const { fixture, button } = await setupVariant();

            fixture.componentInstance.disabled.set(true);

            expect(await button.isDisabled()).toBe(true);
            expect(await getColors(button)).toEqual(toColors(disabled));
        });

        it('has the height of a Medium button', async () => {
            const { button } = await setupVariant();

            const { height } = await (await button.host()).getDimensions();

            expect(height).toBe(40);
        });
    });
});
