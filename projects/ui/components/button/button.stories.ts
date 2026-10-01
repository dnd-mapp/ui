import { signal, type WritableSignal } from '@angular/core';
import { IconChevronDownComponent, IconPlusComponent } from '@dnd-mapp/ui/icons';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular-vite';
import { ButtonSizes, DEFAULT_BUTTON_SIZE, type ButtonSize } from './button-size';
import { ButtonVariants, DEFAULT_BUTTON_VARIANT, type ButtonVariant } from './button-variant';
import { ButtonComponent } from './button.component';

interface ButtonArgs {
    label: string;
    variant: ButtonVariant;
    size: ButtonSize;
    disabled: boolean;
    loading: boolean;
    loadingLabel: string;
    leadingIcon: boolean;
    trailingIcon: boolean;
}

const meta: Meta<ButtonArgs> = {
    title: 'Components/Button',
    component: ButtonComponent,
    decorators: [moduleMetadata({ imports: [ButtonComponent, IconChevronDownComponent, IconPlusComponent] })],
    argTypes: {
        label: {
            description:
                'The content of the `button` element. It is the accessible name of the button, so keep it a short verb phrase, such as "Save map".',
            type: { name: 'string', required: true },
            control: 'text',
            table: {
                type: { summary: 'string' },
            },
        },
        variant: {
            description:
                'The variant of the button, which sets its colors. Use `primary` for the one main action in a view, `secondary` for other actions beside it, `ghost` for minor actions that should stay quiet, and `danger` for actions that destroy or remove something.',
            options: Object.values(ButtonVariants),
            control: 'select',
            table: {
                type: { summary: 'ButtonVariant' },
                defaultValue: { summary: `'${DEFAULT_BUTTON_VARIANT}'` },
            },
        },
        size: {
            description:
                'The size of the button, which sets its height, padding, radius, text style, and icon gap. Its icons take it too. Use `medium` unless the layout around the button calls for a `small` or a `large` one.',
            options: Object.values(ButtonSizes),
            control: 'select',
            table: {
                type: { summary: 'ButtonSize' },
                defaultValue: { summary: `'${DEFAULT_BUTTON_SIZE}'` },
            },
        },
        disabled: {
            description:
                'The native `disabled` attribute of the `button` element. A disabled button leaves the tab order and ignores clicks.',
            control: 'boolean',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        loading: {
            description:
                'Whether the button is busy with the action it started, such as saving a map. A loading button blocks clicks but keeps focus. After 300ms, it shows a spinning `circle-notch` in place of its label and icons for at least 500ms.',
            control: 'boolean',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        loadingLabel: {
            description: 'The word that screen readers announce once the spinner shows, such as "Saving".',
            control: 'text',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: `'Loading'` },
            },
        },
        leadingIcon: {
            description:
                'Shows an icon before the label, like the `Leading icon` switch of the Figma component. In code, put an icon component before the label, such as `dma-icon-plus`. An icon that sets no `size` takes the size of the button.',
            control: 'boolean',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        trailingIcon: {
            description:
                'Shows an icon after the label, like the `Trailing icon` switch of the Figma component. In code, put an icon component after the label, such as `dma-icon-chevron-down`. An icon that sets no `size` takes the size of the button.',
            control: 'boolean',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
    },
    render: (args) => ({
        props: args,
        template: `
            <button
                dma-button
                type="button"
                [variant]="variant"
                [size]="size"
                [disabled]="disabled"
                [loading]="loading"
                [loadingLabel]="loadingLabel"
            >
                @if (leadingIcon) {
                    <dma-icon-plus />
                }
                {{ label }}

                @if (trailingIcon) {
                    <dma-icon-chevron-down />
                }
            </button>
        `,
    }),
};

export default meta;

type Story = StoryObj<ButtonArgs>;

// The stories of a single button set their args as literals, so Storybook can show them in the code snippet.
// `States`, `Sizes`, `Icons`, and `Loading` set none, because their templates don't use them.
export const Primary: Story = {
    args: {
        label: 'Save map',
        variant: 'primary',
        size: 'medium',
        disabled: false,
        loading: false,
        loadingLabel: 'Loading',
        leadingIcon: false,
        trailingIcon: false,
    },
};

export const Secondary: Story = {
    args: {
        label: 'Export map',
        variant: 'secondary',
        size: 'medium',
        disabled: false,
        loading: false,
        loadingLabel: 'Loading',
        leadingIcon: false,
        trailingIcon: false,
    },
};

export const Ghost: Story = {
    args: {
        label: 'Rename map',
        variant: 'ghost',
        size: 'medium',
        disabled: false,
        loading: false,
        loadingLabel: 'Loading',
        leadingIcon: false,
        trailingIcon: false,
    },
};

export const Danger: Story = {
    args: {
        label: 'Delete map',
        variant: 'danger',
        size: 'medium',
        disabled: false,
        loading: false,
        loadingLabel: 'Loading',
        leadingIcon: false,
        trailingIcon: false,
    },
};

/**
 * Every variant in its Default, its Disabled, and its Loading state. Hover, Pressed, and Focus show when you point
 * at, hold, or tab to a button. A loading button shows its spinner after 300ms.
 */
export const States: Story = {
    parameters: {
        controls: { disable: true },
    },
    // The template spells out every button, so Storybook can show it in the code snippet.
    render: () => ({
        template: `<div style="display: grid; grid-template-columns: repeat(3, max-content); gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary">Save map</button>
            <button dma-button type="button" variant="primary" disabled>Save map</button>
            <button dma-button type="button" variant="primary" loading>Save map</button>
            <button dma-button type="button" variant="secondary">Export map</button>
            <button dma-button type="button" variant="secondary" disabled>Export map</button>
            <button dma-button type="button" variant="secondary" loading>Export map</button>
            <button dma-button type="button" variant="ghost">Rename map</button>
            <button dma-button type="button" variant="ghost" disabled>Rename map</button>
            <button dma-button type="button" variant="ghost" loading>Rename map</button>
            <button dma-button type="button" variant="danger">Delete map</button>
            <button dma-button type="button" variant="danger" disabled>Delete map</button>
            <button dma-button type="button" variant="danger" loading>Delete map</button>
        </div>`,
    }),
};

/**
 * Every variant in the Small, the Medium, and the Large size.
 */
export const Sizes: Story = {
    parameters: {
        controls: { disable: true },
    },
    // The template spells out every button, so Storybook can show it in the code snippet.
    render: () => ({
        template: `<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary" size="small">Save map</button>
            <button dma-button type="button" variant="primary" size="medium">Save map</button>
            <button dma-button type="button" variant="primary" size="large">Save map</button>
            <button dma-button type="button" variant="secondary" size="small">Export map</button>
            <button dma-button type="button" variant="secondary" size="medium">Export map</button>
            <button dma-button type="button" variant="secondary" size="large">Export map</button>
            <button dma-button type="button" variant="ghost" size="small">Rename map</button>
            <button dma-button type="button" variant="ghost" size="medium">Rename map</button>
            <button dma-button type="button" variant="ghost" size="large">Rename map</button>
            <button dma-button type="button" variant="danger" size="small">Delete map</button>
            <button dma-button type="button" variant="danger" size="medium">Delete map</button>
            <button dma-button type="button" variant="danger" size="large">Delete map</button>
        </div>`,
    }),
};

/**
 * Every size with a leading icon, a trailing icon, and both. The icons take the size of the button, and the gap
 * between the label and an icon grows with the size.
 */
export const Icons: Story = {
    parameters: {
        controls: { disable: true },
    },
    // The template spells out every button, so Storybook can show it in the code snippet.
    render: () => ({
        template: `<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; justify-items: start; gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary" size="small"><dma-icon-plus />Add map</button>
            <button dma-button type="button" variant="secondary" size="small">Export map<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="ghost" size="small"><dma-icon-plus />Add layer<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="primary" size="medium"><dma-icon-plus />Add map</button>
            <button dma-button type="button" variant="secondary" size="medium">Export map<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="ghost" size="medium"><dma-icon-plus />Add layer<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="primary" size="large"><dma-icon-plus />Add map</button>
            <button dma-button type="button" variant="secondary" size="large">Export map<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="ghost" size="large"><dma-icon-plus />Add layer<dma-icon-chevron-down /></button>
        </div>`,
    }),
};

/**
 * Click a button to start an action that takes as long as its label says. The slow one shows its spinner after
 * 300ms. The fast one ends within 300ms, so it shows none.
 */
export const Loading: Story = {
    parameters: {
        controls: { disable: true },
    },
    render: () => ({
        props: {
            slow: signal(false),
            fast: signal(false),
            run: (loading: WritableSignal<boolean>, duration: number) => {
                loading.set(true);
                setTimeout(() => loading.set(false), duration);
            },
        },
        template: `<div style="display: flex; gap: var(--dma-spacing-16)">
            <button dma-button type="button" [loading]="slow()" loadingLabel="Saving" (click)="run(slow, 2000)">
                Save map in 2s
            </button>
            <button dma-button type="button" variant="secondary" [loading]="fast()" (click)="run(fast, 200)">
                Save map in 0.2s
            </button>
        </div>`,
    }),
};
