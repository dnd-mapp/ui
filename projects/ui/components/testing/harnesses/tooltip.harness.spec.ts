import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { IconButtonComponent, TooltipDirective } from '@dnd-mapp/ui/components';
import { IconPlusComponent, IconXmarkComponent } from '@dnd-mapp/ui/icons';
import { TooltipHarness } from './tooltip.harness';

// The padding leaves room for the tooltips on every side of the icon buttons.
@Component({
    template: `<div style="display: flex; gap: var(--dma-spacing-16); padding: 160px 150px">
        <button dma-icon-button type="button" aria-label="Close panel" dmaTooltip="Close panel">
            <dma-icon-xmark />
        </button>
        <button
            dma-icon-button
            type="button"
            aria-label="Add layer"
            dmaTooltip="Add layer"
            dmaTooltipPlacement="bottom"
        >
            <dma-icon-plus />
        </button>
    </div>`,
    imports: [IconButtonComponent, IconPlusComponent, IconXmarkComponent, TooltipDirective],
})
class TestHostComponent {}

describe('TooltipHarness', () => {
    function setup() {
        const fixture = TestBed.createComponent(TestHostComponent);
        const loader = TestbedHarnessEnvironment.loader(fixture);

        return { fixture, loader };
    }

    it('finds every tooltip', async () => {
        const { loader } = setup();

        expect(await loader.getAllHarnesses(TooltipHarness)).toHaveLength(2);
    });

    it('finds a tooltip by its text', async () => {
        const { loader } = setup();

        const tooltip = await loader.getHarness(TooltipHarness.with({ text: /layer/i }));

        expect(await tooltip.getText()).toBe('Add layer');
    });

    it('reads the text of a hidden tooltip', async () => {
        const { loader } = setup();

        const tooltip = await loader.getHarness(TooltipHarness.with({ text: 'Close panel' }));

        expect(await tooltip.isOpen()).toBe(false);
        expect(await tooltip.getText()).toBe('Close panel');
    });

    it('shows a tooltip', async () => {
        const { loader } = setup();
        const tooltip = await loader.getHarness(TooltipHarness.with({ text: 'Close panel' }));

        await tooltip.show();

        expect(await tooltip.isOpen()).toBe(true);
    });

    it('hides a tooltip', async () => {
        const { loader } = setup();
        const tooltip = await loader.getHarness(TooltipHarness.with({ text: 'Close panel' }));

        await tooltip.show();
        await tooltip.hide();

        expect(await tooltip.isOpen()).toBe(false);
    });

    it('reports the placement of a tooltip that shows', async () => {
        const { loader } = setup();
        const closePanel = await loader.getHarness(TooltipHarness.with({ text: 'Close panel' }));
        const addLayer = await loader.getHarness(TooltipHarness.with({ text: 'Add layer' }));

        await closePanel.show();

        expect(await closePanel.getPlacement()).toBe('top');

        await addLayer.show();

        expect(await addLayer.getPlacement()).toBe('bottom');
    });

    it('throws for the placement of a hidden tooltip', async () => {
        const { loader } = setup();
        const tooltip = await loader.getHarness(TooltipHarness);

        await expect(tooltip.getPlacement()).rejects.toThrow(/does not show/);
    });
});
