import { IconPlusComponent, IconXmarkComponent } from '@dnd-mapp/ui/icons';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular-vite';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { DEFAULT_TOOLTIP_PLACEMENT, TooltipPlacements, type TooltipPlacement } from './tooltip-placement';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';

interface TooltipArgs {
    dmaTooltip: string;
    dmaTooltipPlacement: TooltipPlacement;
}

const meta: Meta<TooltipArgs> = {
    title: 'Components/Tooltip',
    component: TooltipDirective,
    decorators: [
        moduleMetadata({
            imports: [TooltipDirective, TooltipComponent, IconButtonComponent, IconPlusComponent, IconXmarkComponent],
        }),
    ],
    argTypes: {
        dmaTooltip: {
            description:
                'The text of the tooltip, which is the accessible name of its control, such as "Close panel". Keep it a short name, not a description.',
            type: { name: 'string', required: true },
            control: 'text',
            table: {
                type: { summary: 'string' },
            },
        },
        dmaTooltipPlacement: {
            description:
                'The side of the control that the tooltip shows on. It flips to the opposite side when it does not fit there.',
            options: Object.values(TooltipPlacements),
            control: 'select',
            table: {
                type: { summary: 'TooltipPlacement' },
                defaultValue: { summary: `'${DEFAULT_TOOLTIP_PLACEMENT}'` },
            },
        },
    },
    // The padding leaves room for the tooltip on every side of the icon button.
    render: (args) => ({
        props: args,
        template: `<div style="display: flex; justify-content: center; padding: var(--dma-spacing-48)">
            <button
                dma-icon-button
                type="button"
                variant="ghost"
                [aria-label]="dmaTooltip"
                [dmaTooltip]="dmaTooltip"
                [dmaTooltipPlacement]="dmaTooltipPlacement"
            >
                <dma-icon-xmark />
            </button>
        </div>`,
    }),
};

export default meta;

type Story = StoryObj<TooltipArgs>;

/**
 * Point at the icon button for 500ms, or tab to it, to show its tooltip. Press `Escape` to close it.
 */
export const Default: Story = {
    args: {
        dmaTooltip: 'Close panel',
        dmaTooltipPlacement: 'top',
    },
};

/**
 * An icon button with a tooltip on each side. Once one tooltip shows, sweep the pointer along the row: the next one
 * shows at once.
 */
export const Placements: Story = {
    parameters: {
        controls: { disable: true },
    },
    // The template spells out every icon button, so Storybook can show it in the code snippet.
    render: () => ({
        template: `<div style="display: flex; justify-content: center; gap: var(--dma-spacing-16); padding: var(--dma-spacing-48) 8rem">
            <button dma-icon-button type="button" variant="ghost" aria-label="Close panel" dmaTooltip="Close panel"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" variant="ghost" aria-label="Add layer" dmaTooltip="Add layer" dmaTooltipPlacement="bottom"><dma-icon-plus /></button>
            <button dma-icon-button type="button" variant="ghost" aria-label="Add map" dmaTooltip="Add map" dmaTooltipPlacement="left"><dma-icon-plus /></button>
            <button dma-icon-button type="button" variant="ghost" aria-label="Close map" dmaTooltip="Close map" dmaTooltipPlacement="right"><dma-icon-xmark /></button>
        </div>`,
    }),
};

/**
 * A tooltip on a disabled icon button. It still shows on hover and on keyboard focus, because a disabled icon button
 * stays focusable.
 */
export const DisabledTrigger: Story = {
    parameters: {
        controls: { disable: true },
    },
    render: () => ({
        template: `<div style="display: flex; justify-content: center; padding: var(--dma-spacing-48)">
            <button dma-icon-button type="button" variant="ghost" aria-label="Delete layer" dmaTooltip="Delete layer" disabled>
                <dma-icon-xmark />
            </button>
        </div>`,
    }),
};

/**
 * The groups of the `Tooltip` Figma page, with each tooltip drawn beside its trigger by `dma-tooltip` itself. Tab to
 * the last icon button to see the focus ring of the `Focused trigger` group. The Figma page uses glyphs that
 * `@dnd-mapp/ui/icons` doesn't have yet, so these use `xmark` and `plus`.
 */
export const Examples: Story = {
    parameters: {
        controls: { disable: true },
    },
    render: () => ({
        styles: [
            `.groups { display: flex; align-items: flex-start; gap: var(--dma-spacing-48); color: var(--dma-color-text-default); }`,
            `.group { display: flex; flex-direction: column; align-items: flex-start; gap: var(--dma-spacing-12); }`,
            `.title { margin: 0; font: var(--dma-text-label-small-font); }`,
            `.stage { display: flex; flex-direction: column; align-items: center; }`,
            `.stage.row { flex-direction: row; }`,
        ],
        template: `<div class="groups">
            <div class="group">
                <p class="title">Top (default)</p>
                <div class="stage">
                    <dma-tooltip text="Close" />
                    <button dma-icon-button type="button" variant="ghost" aria-label="Close"><dma-icon-xmark /></button>
                </div>
            </div>
            <div class="group">
                <p class="title">Two lines</p>
                <div class="stage">
                    <dma-tooltip text="Show or hide the fog of war layer" />
                    <button dma-icon-button type="button" variant="ghost" aria-label="Show or hide the fog of war layer"><dma-icon-plus /></button>
                </div>
            </div>
            <div class="group">
                <p class="title">Right</p>
                <div class="stage row">
                    <button dma-icon-button type="button" variant="ghost" aria-label="Pan the map"><dma-icon-plus /></button>
                    <dma-tooltip text="Pan the map" placement="right" />
                </div>
            </div>
            <div class="group">
                <p class="title">Disabled trigger</p>
                <div class="stage">
                    <dma-tooltip text="Delete layer" />
                    <button dma-icon-button type="button" variant="ghost" aria-label="Delete layer" disabled><dma-icon-xmark /></button>
                </div>
            </div>
            <div class="group">
                <p class="title">Focused trigger</p>
                <div class="stage">
                    <dma-tooltip text="Map settings" />
                    <button dma-icon-button type="button" variant="ghost" aria-label="Map settings"><dma-icon-plus /></button>
                </div>
            </div>
        </div>`,
    }),
};
