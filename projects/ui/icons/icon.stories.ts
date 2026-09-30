import { componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular-vite';
import { IconChevronDownComponent } from './glyphs/icon-chevron-down.component';
import { IconCircleNotchComponent } from './glyphs/icon-circle-notch.component';
import { IconPlusComponent } from './glyphs/icon-plus.component';
import { IconXmarkComponent } from './glyphs/icon-xmark.component';
import { IconGlyphs, type IconGlyph } from './icon-glyph';
import { DEFAULT_ICON_SIZE, IconSizes, type IconSize } from './icon-size';

interface IconArgs {
    glyph: IconGlyph;
    size: IconSize;
}

const meta: Meta<IconArgs> = {
    title: 'Icons/Icon',
    component: IconPlusComponent,
    decorators: [
        moduleMetadata({
            imports: [IconChevronDownComponent, IconCircleNotchComponent, IconPlusComponent, IconXmarkComponent],
        }),
        // An icon takes the color of the surrounding text, and the page of a story sets none.
        componentWrapperDecorator((story) => `<div style="color: var(--dma-color-text-default)">${story}</div>`),
    ],
    argTypes: {
        glyph: {
            description:
                'The glyph that the icon shows. Each glyph has a component of its own, so the glyph is part of the selector, such as `dma-icon-plus`.',
            options: Object.values(IconGlyphs),
            control: 'select',
            table: {
                type: { summary: 'IconGlyph' },
            },
        },
        size: {
            description:
                'The size of the icon, which sets its frame. Match it to the size of the label beside it, so the icon never changes the height of a control.',
            options: Object.values(IconSizes),
            control: 'select',
            table: {
                type: { summary: 'IconSize' },
                defaultValue: { summary: `'${DEFAULT_ICON_SIZE}'` },
            },
        },
    },
    render: ({ glyph, size }) => ({
        props: { size },
        template: `<dma-icon-${glyph} [size]="size" />`,
    }),
};

export default meta;

type Story = StoryObj<IconArgs>;

// The story of a single icon sets its args as literals, so Storybook can show them in the code snippet. `Sizes`
// and `Glyphs` set none, because their templates don't use them.
export const Icon: Story = {
    args: {
        glyph: 'plus',
        size: 'medium',
    },
};

/**
 * Every size, alone and beside a label in the text style it pairs with. The frame of each size is as high as the
 * line height of that label.
 */
export const Sizes: Story = {
    parameters: {
        controls: { disable: true },
    },
    // The template spells out every icon, so Storybook can show it in the code snippet.
    render: () => ({
        template: `<div style="display: grid; grid-template-columns: repeat(2, max-content); align-items: center; gap: var(--dma-spacing-16) var(--dma-spacing-32)">
            <dma-icon-plus size="small" />
            <span style="display: inline-flex; align-items: center; gap: var(--dma-spacing-4); font: var(--dma-text-label-small-font)"><dma-icon-plus size="small" />Add map</span>
            <dma-icon-plus size="medium" />
            <span style="display: inline-flex; align-items: center; gap: var(--dma-spacing-8); font: var(--dma-text-label-medium-font)"><dma-icon-plus size="medium" />Add map</span>
            <dma-icon-plus size="large" />
            <span style="display: inline-flex; align-items: center; gap: var(--dma-spacing-12); font: var(--dma-text-label-large-font)"><dma-icon-plus size="large" />Add map</span>
        </div>`,
    }),
};

/**
 * Every glyph with its name, grouped like the `Glyphs` page of the `Icons` Figma file.
 */
export const Glyphs: Story = {
    parameters: {
        controls: { disable: true },
    },
    // The template spells out every icon, so Storybook can show it in the code snippet.
    render: () => ({
        template: `<section style="display: grid; gap: var(--dma-spacing-16); font: var(--dma-text-body-small-font)">
            <h2 style="margin: 0; font: var(--dma-text-heading-small-font)">Core actions</h2>
            <div style="display: grid; grid-template-columns: repeat(4, 8rem); gap: var(--dma-spacing-16)">
                <figure style="display: grid; justify-items: center; gap: var(--dma-spacing-8); margin: 0">
                    <dma-icon-chevron-down size="large" />
                    <figcaption>chevron-down</figcaption>
                </figure>
                <figure style="display: grid; justify-items: center; gap: var(--dma-spacing-8); margin: 0">
                    <dma-icon-circle-notch size="large" />
                    <figcaption>circle-notch</figcaption>
                </figure>
                <figure style="display: grid; justify-items: center; gap: var(--dma-spacing-8); margin: 0">
                    <dma-icon-plus size="large" />
                    <figcaption>plus</figcaption>
                </figure>
                <figure style="display: grid; justify-items: center; gap: var(--dma-spacing-8); margin: 0">
                    <dma-icon-xmark size="large" />
                    <figcaption>xmark</figcaption>
                </figure>
            </div>
        </section>`,
    }),
};
