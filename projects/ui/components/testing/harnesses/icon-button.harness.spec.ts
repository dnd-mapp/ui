import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { IconButtonComponent } from '@dnd-mapp/ui/components';
import { IconPlusComponent, IconXmarkComponent } from '@dnd-mapp/ui/icons';
import { IconButtonHarness } from './icon-button.harness';

@Component({
    template: `
        <button dma-icon-button type="button" aria-label="Close panel" (click)="clicks.set(clicks() + 1)">
            <dma-icon-xmark />
        </button>
        <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" size="small" disabled>
            <dma-icon-xmark />
        </button>
        <button dma-icon-button type="button" aria-label="Add layer" variant="secondary">
            <dma-icon-plus />
        </button>
        <button dma-icon-button type="button" aria-label="Add map" variant="ghost" loading>
            <dma-icon-plus />
        </button>
    `,
    imports: [IconButtonComponent, IconPlusComponent, IconXmarkComponent],
})
class TestHostComponent {
    public readonly clicks = signal(0);
}

describe('IconButtonHarness', () => {
    function setup() {
        const fixture = TestBed.createComponent(TestHostComponent);
        const loader = TestbedHarnessEnvironment.loader(fixture);

        return { fixture, loader };
    }

    it('finds every icon button', async () => {
        const { loader } = setup();

        expect(await loader.getAllHarnesses(IconButtonHarness)).toHaveLength(4);
    });

    it('finds an icon button by its label', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(IconButtonHarness.with({ label: /remove/i }));

        expect(await button.getLabel()).toBe('Remove layer');
    });

    it('finds an icon button by whether it is disabled', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(IconButtonHarness.with({ disabled: true }));

        expect(await button.getLabel()).toBe('Remove layer');
        expect(await loader.getAllHarnesses(IconButtonHarness.with({ disabled: false }))).toHaveLength(3);
    });

    it('reports whether an icon button is disabled', async () => {
        const { loader } = setup();

        const closeButton = await loader.getHarness(IconButtonHarness.with({ label: 'Close panel' }));
        const removeButton = await loader.getHarness(IconButtonHarness.with({ label: 'Remove layer' }));

        expect(await closeButton.isDisabled()).toBe(false);
        expect(await removeButton.isDisabled()).toBe(true);
    });

    it('finds an icon button by its variant', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(IconButtonHarness.with({ variant: 'danger' }));

        expect(await button.getLabel()).toBe('Remove layer');
    });

    it('reports the variant of an icon button', async () => {
        const { loader } = setup();

        const closeButton = await loader.getHarness(IconButtonHarness.with({ label: 'Close panel' }));
        const removeButton = await loader.getHarness(IconButtonHarness.with({ label: 'Remove layer' }));

        expect(await closeButton.getVariant()).toBe('primary');
        expect(await removeButton.getVariant()).toBe('danger');
    });

    it('finds an icon button by its size', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(IconButtonHarness.with({ size: 'small' }));

        expect(await button.getLabel()).toBe('Remove layer');
    });

    it('reports the size of an icon button', async () => {
        const { loader } = setup();

        const closeButton = await loader.getHarness(IconButtonHarness.with({ label: 'Close panel' }));
        const removeButton = await loader.getHarness(IconButtonHarness.with({ label: 'Remove layer' }));

        expect(await closeButton.getSize()).toBe('medium');
        expect(await removeButton.getSize()).toBe('small');
    });

    it('finds an icon button by whether it is loading', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(IconButtonHarness.with({ loading: true }));

        expect(await button.getLabel()).toBe('Add map');
        expect(await loader.getAllHarnesses(IconButtonHarness.with({ loading: false }))).toHaveLength(3);
    });

    it('reports whether an icon button is loading', async () => {
        const { loader } = setup();

        const closeButton = await loader.getHarness(IconButtonHarness.with({ label: 'Close panel' }));
        const addButton = await loader.getHarness(IconButtonHarness.with({ label: 'Add map' }));

        expect(await closeButton.isLoading()).toBe(false);
        expect(await addButton.isLoading()).toBe(true);
    });

    it('clicks an icon button', async () => {
        const { fixture, loader } = setup();

        const button = await loader.getHarness(IconButtonHarness.with({ label: 'Close panel' }));
        await button.click();

        expect(fixture.componentInstance.clicks()).toBe(1);
    });

    it('moves focus to and away from an icon button', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(IconButtonHarness.with({ label: 'Close panel' }));

        await button.focus();
        expect(await button.isFocused()).toBe(true);

        await button.blur();
        expect(await button.isFocused()).toBe(false);
    });

    it('reports the icon of an icon button', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(IconButtonHarness.with({ label: 'Add layer' }));

        expect(await (await button.getIcon()).getGlyph()).toBe('plus');
    });

    it('finds the icon of an icon button by its glyph', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(IconButtonHarness.with({ label: 'Add layer' }));

        await expect(button.getIcon({ glyph: 'xmark' })).rejects.toThrow();
        expect(await (await button.getIcon({ glyph: 'plus' })).getGlyph()).toBe('plus');
    });
});
