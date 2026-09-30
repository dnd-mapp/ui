import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular-vite';
import { ButtonComponent } from './button.component';

interface ButtonArgs {
    label: string;
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
        label: 'Save map',
        disabled: false,
    },
    render: (args) => ({
        props: args,
        template: `<button dma-button type="button" [disabled]="disabled">{{ label }}</button>`,
    }),
};

export default meta;

type Story = StoryObj<ButtonArgs>;

export const Primary: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
