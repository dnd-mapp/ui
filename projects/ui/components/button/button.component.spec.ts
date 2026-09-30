import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component, signal, type Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { tokens } from '@dnd-mapp/design-tokens';
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

/**
 * The color tokens of a button in one state, such as `tokens.color.background.accent`. A `null` fill or border
 * shows none.
 */
interface Look {
    fill: string | null;
    border: string | null;
    label: string;
}

const transparent = 'rgba(0, 0, 0, 0)';

/** Resolves a color token to the color that the browser computes for it inside `context`. */
function resolveColor(token: string | null, context: HTMLElement) {
    if (token === null) {
        return transparent;
    }
    // A token is a `var()` of its custom property, such as `var(--dma-color-background-accent)`.
    const property = token.slice('var('.length, -')'.length);

    if (getComputedStyle(context).getPropertyValue(property) === '') {
        throw new Error(`The design tokens don't define ${property}.`);
    }
    const probe = document.createElement('span');

    probe.style.color = token;
    context.append(probe);

    const color = getComputedStyle(probe).color;

    probe.remove();

    return color;
}

function toColors({ fill, border, label }: Look, context: HTMLElement) {
    return {
        fill: resolveColor(fill, context),
        border: resolveColor(border, context),
        label: resolveColor(label, context),
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

        it('has the height of a Medium button', async () => {
            const { button } = await setupVariant();

            const { height } = await (await button.host()).getDimensions();

            expect(height).toBe(40);
        });
    });
});
