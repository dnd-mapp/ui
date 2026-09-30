import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular-vite';
import { Button } from './button';

interface ButtonArgs {
    label: string;
    disabled: boolean;
}

const meta: Meta<ButtonArgs> = {
    title: 'Components/Button',
    component: Button,
    decorators: [moduleMetadata({ imports: [Button] })],
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
