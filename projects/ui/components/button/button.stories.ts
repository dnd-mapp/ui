import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular-vite';
import { ButtonVariants, DEFAULT_BUTTON_VARIANT, type ButtonVariant } from './button-variant';
import { ButtonComponent } from './button.component';

interface ButtonArgs {
    label: string;
    variant: ButtonVariant;
    disabled: boolean;
}

/** A label for each variant that fits the kind of action it's for. */
const labels: Record<ButtonVariant, string> = {
    primary: 'Save map',
    secondary: 'Export map',
    ghost: 'Rename map',
    danger: 'Delete map',
};

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
            control: 'inline-radio',
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
    args: {
        label: labels[DEFAULT_BUTTON_VARIANT],
        variant: DEFAULT_BUTTON_VARIANT,
        disabled: false,
    },
    render: (args) => ({
        props: args,
        template: `<button dma-button type="button" [variant]="variant" [disabled]="disabled">{{ label }}</button>`,
    }),
};

export default meta;

type Story = StoryObj<ButtonArgs>;

export const Primary: Story = {};

export const Secondary: Story = {
    args: {
        label: labels.secondary,
        variant: ButtonVariants.secondary,
    },
};

export const Ghost: Story = {
    args: {
        label: labels.ghost,
        variant: ButtonVariants.ghost,
    },
};

export const Danger: Story = {
    args: {
        label: labels.danger,
        variant: ButtonVariants.danger,
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
    render: () => ({
        props: { labels, variants: Object.values(ButtonVariants) },
        template: `<div style="display: grid; grid-template-columns: repeat(2, max-content); gap: var(--dma-spacing-16)">
            @for (variant of variants; track variant) {
                <button dma-button type="button" [variant]="variant">{{ labels[variant] }}</button>
                <button dma-button type="button" [variant]="variant" disabled>{{ labels[variant] }}</button>
            }
        </div>`,
    }),
};
