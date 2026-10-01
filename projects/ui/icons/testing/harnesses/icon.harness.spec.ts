import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { IconCircleNotchComponent, IconPlusComponent, IconXmarkComponent } from '@dnd-mapp/ui/icons';
import { IconHarness } from './icon.harness';

@Component({
    template: `
        <dma-icon-plus />
        <dma-icon-xmark size="small" />
        <dma-icon-circle-notch size="large" spin />
    `,
    imports: [IconCircleNotchComponent, IconPlusComponent, IconXmarkComponent],
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

        expect(await loader.getAllHarnesses(IconHarness)).toHaveLength(3);
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

    it('finds an icon by whether it spins', async () => {
        const { loader } = setup();

        const spinningIcon = await loader.getHarness(IconHarness.with({ spinning: true }));
        const stillIcons = await loader.getAllHarnesses(IconHarness.with({ spinning: false }));

        expect(await spinningIcon.getGlyph()).toBe('circle-notch');
        expect(await Promise.all(stillIcons.map(async (icon) => icon.getGlyph()))).toEqual(['plus', 'xmark']);
    });

    it('reports whether an icon spins', async () => {
        const { loader } = setup();

        const plusIcon = await loader.getHarness(IconHarness.with({ glyph: 'plus' }));
        const circleNotchIcon = await loader.getHarness(IconHarness.with({ glyph: 'circle-notch' }));

        expect(await plusIcon.isSpinning()).toBe(false);
        expect(await circleNotchIcon.isSpinning()).toBe(true);
    });
});
