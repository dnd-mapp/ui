import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ButtonComponent } from '@dnd-mapp/ui/components';
import { ButtonHarness } from './button.harness';

@Component({
    template: `
        <button dma-button type="button" (click)="clicks.set(clicks() + 1)">Save map</button>
        <button dma-button type="button" disabled>Delete map</button>
    `,
    imports: [ButtonComponent],
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

        expect(await loader.getAllHarnesses(ButtonHarness)).toHaveLength(2);
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
});
