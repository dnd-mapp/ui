import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ButtonComponent } from '@dnd-mapp/ui/components';
import { IconChevronDownComponent, IconPlusComponent } from '@dnd-mapp/ui/icons';
import { ButtonHarness } from './button.harness';

@Component({
    template: `
        <button dma-button type="button" (click)="clicks.set(clicks() + 1)">Save map</button>
        <button dma-button type="button" variant="danger" size="small" disabled>Delete map</button>
        <button dma-button type="button" variant="secondary">
            <dma-icon-plus />
            Add map
            <dma-icon-chevron-down />
        </button>
    `,
    imports: [ButtonComponent, IconChevronDownComponent, IconPlusComponent],
})
class TestHostComponent {
    public readonly clicks = signal(0);
}

describe('ButtonHarness', () => {
    function setup() {
        const fixture = TestBed.createComponent(TestHostComponent);
        const loader = TestbedHarnessEnvironment.loader(fixture);

        return { fixture, loader };
    }

    it('finds every button', async () => {
        const { loader } = setup();

        expect(await loader.getAllHarnesses(ButtonHarness)).toHaveLength(3);
    });

    it('finds a button by its label', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(ButtonHarness.with({ text: /delete/i }));

        expect(await button.getText()).toBe('Delete map');
    });

    it('finds a button by whether it is disabled', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(ButtonHarness.with({ disabled: false }));

        expect(await button.getText()).toBe('Save map');
    });

    it('finds a button by its variant', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(ButtonHarness.with({ variant: 'danger' }));

        expect(await button.getText()).toBe('Delete map');
    });

    it('reports the variant of a button', async () => {
        const { loader } = setup();

        const saveButton = await loader.getHarness(ButtonHarness.with({ text: 'Save map' }));
        const deleteButton = await loader.getHarness(ButtonHarness.with({ text: 'Delete map' }));

        expect(await saveButton.getVariant()).toBe('primary');
        expect(await deleteButton.getVariant()).toBe('danger');
    });

    it('finds a button by its size', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(ButtonHarness.with({ size: 'small' }));

        expect(await button.getText()).toBe('Delete map');
    });

    it('reports the size of a button', async () => {
        const { loader } = setup();

        const saveButton = await loader.getHarness(ButtonHarness.with({ text: 'Save map' }));
        const deleteButton = await loader.getHarness(ButtonHarness.with({ text: 'Delete map' }));

        expect(await saveButton.getSize()).toBe('medium');
        expect(await deleteButton.getSize()).toBe('small');
    });

    it('reports whether a button is disabled', async () => {
        const { loader } = setup();

        const saveButton = await loader.getHarness(ButtonHarness.with({ text: 'Save map' }));
        const deleteButton = await loader.getHarness(ButtonHarness.with({ text: 'Delete map' }));

        expect(await saveButton.isDisabled()).toBe(false);
        expect(await deleteButton.isDisabled()).toBe(true);
    });

    it('clicks a button', async () => {
        const { fixture, loader } = setup();

        const button = await loader.getHarness(ButtonHarness.with({ text: 'Save map' }));
        await button.click();

        expect(fixture.componentInstance.clicks()).toBe(1);
    });

    it('moves focus to and away from a button', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(ButtonHarness.with({ text: 'Save map' }));

        await button.focus();
        expect(await button.isFocused()).toBe(true);

        await button.blur();
        expect(await button.isFocused()).toBe(false);
    });

    it('reports the icons of a button, in the order they show', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(ButtonHarness.with({ text: 'Add map' }));
        const icons = await button.getIcons();

        expect(await Promise.all(icons.map(async (icon) => icon.getGlyph()))).toEqual(['plus', 'chevron-down']);
    });

    it('finds the icons of a button by their glyph', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(ButtonHarness.with({ text: 'Add map' }));
        const icons = await button.getIcons({ glyph: 'chevron-down' });

        expect(await Promise.all(icons.map(async (icon) => icon.getGlyph()))).toEqual(['chevron-down']);
    });

    it('reports no icons for a button without them', async () => {
        const { loader } = setup();

        const button = await loader.getHarness(ButtonHarness.with({ text: 'Save map' }));

        expect(await button.getIcons()).toEqual([]);
    });
});
