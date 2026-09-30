import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular-vite';
import { ButtonVariants, DEFAULT_BUTTON_VARIANT, type ButtonVariant } from './button-variant';
import { ButtonComponent } from './button.component';

interface ButtonArgs {
    label: string;
    variant: ButtonVariant;
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
        template: `<button dma-button type="button" [variant]="variant" [disabled]="disabled">{{ label }}</button>`,
    }),
};

export default meta;

type Story = StoryObj<ButtonArgs>;

// The stories of a single button set their args as literals, so Storybook can show them in the code snippet.
// `States` sets none, because its template doesn't use them.
export const Primary: Story = {
    args: {
        label: 'Save map',
        variant: 'primary',
        disabled: false,
    },
};

export const Secondary: Story = {
    args: {
        label: 'Export map',
        variant: 'secondary',
        disabled: false,
    },
};

export const Ghost: Story = {
    args: {
        label: 'Rename map',
        variant: 'ghost',
        disabled: false,
    },
};

export const Danger: Story = {
    args: {
        label: 'Delete map',
        variant: 'danger',
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
