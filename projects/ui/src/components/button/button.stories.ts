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
