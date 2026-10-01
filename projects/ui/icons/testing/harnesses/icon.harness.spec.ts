import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { IconPlusComponent, IconXmarkComponent } from '@dnd-mapp/ui/icons';
import { IconHarness } from './icon.harness';

@Component({
    template: `
        <dma-icon-plus />
        <dma-icon-xmark size="small" />
    `,
    imports: [IconPlusComponent, IconXmarkComponent],
})
class TestHostComponent {}

describe('IconHarness', () => {
    function setup() {
        const fixture = TestBed.createComponent(TestHostComponent);
        const loader = TestbedHarnessEnvironment.loader(fixture);

        return { fixture, loader };
    }

    it('finds every icon, whatever its glyph', async () => {
        const { loader } = setup();

        expect(await loader.getAllHarnesses(IconHarness)).toHaveLength(2);
    });

    it('finds an icon by its glyph', async () => {
        const { loader } = setup();

        const icon = await loader.getHarness(IconHarness.with({ glyph: 'xmark' }));

        expect(await icon.getSize()).toBe('small');
    });

    it('reports the glyph of an icon', async () => {
        const { loader } = setup();

        const plusIcon = await loader.getHarness(IconHarness.with({ size: 'medium' }));
        const xmarkIcon = await loader.getHarness(IconHarness.with({ size: 'small' }));

        expect(await plusIcon.getGlyph()).toBe('plus');
        expect(await xmarkIcon.getGlyph()).toBe('xmark');
    });

    it('finds an icon by its size', async () => {
        const { loader } = setup();

        const icon = await loader.getHarness(IconHarness.with({ size: 'small' }));

        expect(await icon.getGlyph()).toBe('xmark');
    });

    it('reports the size of an icon', async () => {
        const { loader } = setup();

        const plusIcon = await loader.getHarness(IconHarness.with({ glyph: 'plus' }));
        const xmarkIcon = await loader.getHarness(IconHarness.with({ glyph: 'xmark' }));

        expect(await plusIcon.getSize()).toBe('medium');
        expect(await xmarkIcon.getSize()).toBe('small');
    });
});
