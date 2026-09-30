import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular-vite';
import { ButtonSizes, DEFAULT_BUTTON_SIZE, type ButtonSize } from './button-size';
import { ButtonVariants, DEFAULT_BUTTON_VARIANT, type ButtonVariant } from './button-variant';
import { ButtonComponent } from './button.component';

interface ButtonArgs {
    label: string;
    variant: ButtonVariant;
    size: ButtonSize;
    disabled: boolean;
}

const meta: Meta<ButtonArgs> = {
    title: 'Components/Button',
    component: ButtonComponent,
    decorators: [moduleMetadata({ imports: [ButtonComponent] })],
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
                'The size of the button, which sets its height, padding, radius, and text style. Use `medium` unless the layout around the button calls for a `small` or a `large` one.',
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
    },
    render: (args) => ({
        props: args,
        template: `<button dma-button type="button" [variant]="variant" [size]="size" [disabled]="disabled">{{ label }}</button>`,
    }),
};

export default meta;

type Story = StoryObj<ButtonArgs>;

// The stories of a single button set their args as literals, so Storybook can show them in the code snippet.
// `States` and `Sizes` set none, because their templates don't use them.
export const Primary: Story = {
    args: {
        label: 'Save map',
        variant: 'primary',
        size: 'medium',
        disabled: false,
    },
};

export const Secondary: Story = {
    args: {
        label: 'Export map',
        variant: 'secondary',
        size: 'medium',
        disabled: false,
    },
};

export const Ghost: Story = {
    args: {
        label: 'Rename map',
        variant: 'ghost',
        size: 'medium',
        disabled: false,
    },
};

export const Danger: Story = {
    args: {
        label: 'Delete map',
        variant: 'danger',
        size: 'medium',
        disabled: false,
    },
};

/**
 * Every variant in its Default and its Disabled state. Hover, Pressed, and Focus show when you point at, hold,
 * or tab to a button.
 */
export const States: Story = {
    parameters: {
        controls: { disable: true },
    },
    // The template spells out every button, so Storybook can show it in the code snippet.
    render: () => ({
        template: `<div style="display: grid; grid-template-columns: repeat(2, max-content); gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary">Save map</button>
            <button dma-button type="button" variant="primary" disabled>Save map</button>
            <button dma-button type="button" variant="secondary">Export map</button>
            <button dma-button type="button" variant="secondary" disabled>Export map</button>
            <button dma-button type="button" variant="ghost">Rename map</button>
            <button dma-button type="button" variant="ghost" disabled>Rename map</button>
            <button dma-button type="button" variant="danger">Delete map</button>
            <button dma-button type="button" variant="danger" disabled>Delete map</button>
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
