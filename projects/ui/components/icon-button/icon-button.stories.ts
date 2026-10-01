import { signal, type WritableSignal } from '@angular/core';
import { IconPlusComponent, IconXmarkComponent } from '@dnd-mapp/ui/icons';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular-vite';
import { ButtonSizes, DEFAULT_BUTTON_SIZE, type ButtonSize } from '../button/button-size';
import { ButtonVariants, DEFAULT_BUTTON_VARIANT, type ButtonVariant } from '../button/button-variant';
import { IconButtonComponent } from './icon-button.component';

interface IconButtonArgs {
    'aria-label': string;
    'variant': ButtonVariant;
    'size': ButtonSize;
    'disabled': boolean;
    'loading': boolean;
    'loadingLabel': string;
}

const meta: Meta<IconButtonArgs> = {
    title: 'Components/Icon button',
    component: IconButtonComponent,
    decorators: [moduleMetadata({ imports: [IconButtonComponent, IconPlusComponent, IconXmarkComponent] })],
    argTypes: {
        'aria-label': {
            description:
                'The accessible name of the icon button, such as "Close panel". The icon button shows no label, so it needs one. Match the text of its tooltip.',
            type: { name: 'string', required: true },
            control: 'text',
            table: {
                type: { summary: 'string' },
            },
        },
        'variant': {
            description:
                'The variant of the icon button, which sets its colors. Use `primary` for the one main action in a view, `secondary` for other actions beside it, `ghost` for minor actions that should stay quiet, and `danger` for actions that destroy or remove something.',
            options: Object.values(ButtonVariants),
            control: 'select',
            table: {
                type: { summary: 'ButtonVariant' },
                defaultValue: { summary: `'${DEFAULT_BUTTON_VARIANT}'` },
            },
        },
        'size': {
            description:
                'The size of the icon button, which sets its square, its radius, and the size of its icon. Use `medium` unless the layout around the icon button calls for a `small` or a `large` one.',
            options: Object.values(ButtonSizes),
            control: 'select',
            table: {
                type: { summary: 'ButtonSize' },
                defaultValue: { summary: `'${DEFAULT_BUTTON_SIZE}'` },
            },
        },
        'disabled': {
            description:
                'Whether the icon button is disabled. It sets `aria-disabled="true"` rather than the native `disabled` attribute, so a disabled icon button stays in the tab order and can show its tooltip, but ignores clicks.',
            control: 'boolean',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        'loading': {
            description:
                'Whether the icon button is busy with the action it started, such as closing a panel. A loading icon button blocks clicks but keeps focus. After 300ms, it shows a spinning `circle-notch` in place of its icon for at least 500ms.',
            control: 'boolean',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        'loadingLabel': {
            description: 'The word that screen readers announce once the spinner shows, such as "Closing".',
            control: 'text',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: `'Loading'` },
            },
        },
    },
    // A template can't name the `aria-label` arg, so it reads it as `label`.
    render: (args) => ({
        props: { ...args, label: args['aria-label'] },
        template: `
            <button
                dma-icon-button
                type="button"
                [aria-label]="label"
                [variant]="variant"
                [size]="size"
                [disabled]="disabled"
                [loading]="loading"
                [loadingLabel]="loadingLabel"
            >
                <dma-icon-xmark />
            </button>
        `,
    }),
};

export default meta;

type Story = StoryObj<IconButtonArgs>;

// The stories of a single icon button set their args as literals, so Storybook can show them in the code snippet.
// `States`, `Sizes`, and `Loading` set none, because their templates don't use them.
export const Primary: Story = {
    args: {
        'aria-label': 'Close panel',
        'variant': 'primary',
        'size': 'medium',
        'disabled': false,
        'loading': false,
        'loadingLabel': 'Loading',
    },
};

export const Secondary: Story = {
    args: {
        'aria-label': 'Close panel',
        'variant': 'secondary',
        'size': 'medium',
        'disabled': false,
        'loading': false,
        'loadingLabel': 'Loading',
    },
};

export const Ghost: Story = {
    args: {
        'aria-label': 'Close panel',
        'variant': 'ghost',
        'size': 'medium',
        'disabled': false,
        'loading': false,
        'loadingLabel': 'Loading',
    },
};

export const Danger: Story = {
    args: {
        'aria-label': 'Remove layer',
        'variant': 'danger',
        'size': 'medium',
        'disabled': false,
        'loading': false,
        'loadingLabel': 'Loading',
    },
};

/**
 * Every variant in its Default, its Disabled, and its Loading state. Hover, Pressed, and Focus show when you point
 * at, hold, or tab to an icon button. A disabled icon button stays in the tab order, so it shows the focus ring too.
 * A loading icon button shows its spinner after 300ms.
 */
export const States: Story = {
    parameters: {
        controls: { disable: true },
    },
    // The template spells out every icon button, so Storybook can show it in the code snippet.
    render: () => ({
        template: `<div style="display: grid; grid-template-columns: repeat(3, max-content); gap: var(--dma-spacing-16)">
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary" loading><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary" loading><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" loading><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" loading><dma-icon-xmark /></button>
        </div>`,
    }),
};

/**
 * Every variant in the Small, the Medium, and the Large size. The icon takes the size of the icon button.
 */
export const Sizes: Story = {
    parameters: {
        controls: { disable: true },
    },
    // The template spells out every icon button, so Storybook can show it in the code snippet.
    render: () => ({
        template: `<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; gap: var(--dma-spacing-16)">
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary" size="large"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary" size="large"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" size="large"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" size="large"><dma-icon-xmark /></button>
        </div>`,
    }),
};

/**
 * Click an icon button to start an action that takes as long as its name says. The slow one shows its spinner after
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
            <button
                dma-icon-button
                type="button"
                aria-label="Add a layer in 2s"
                [loading]="slow()"
                loadingLabel="Adding"
                (click)="run(slow, 2000)"
            >
                <dma-icon-plus />
            </button>
            <button
                dma-icon-button
                type="button"
                aria-label="Add a layer in 0.2s"
                variant="secondary"
                [loading]="fast()"
                (click)="run(fast, 200)"
            >
                <dma-icon-plus />
            </button>
        </div>`,
    }),
};
