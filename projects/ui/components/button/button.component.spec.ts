import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ButtonHarness } from '@dnd-mapp/ui/components/testing';
import { ButtonComponent } from './button.component';

@Component({
    template: `<button dma-button type="button" [disabled]="disabled()" (click)="clicks.set(clicks() + 1)">
        Save map
    </button>`,
    imports: [ButtonComponent],
})
class TestHostComponent {
    public readonly disabled = signal(false);
    public readonly clicks = signal(0);
}

describe('ButtonComponent', () => {
    async function setup() {
        const fixture = TestBed.createComponent(TestHostComponent);
        const button = await TestbedHarnessEnvironment.loader(fixture).getHarness(ButtonHarness);

        return { fixture, button };
    }

    it('shows its content as the label', async () => {
        const { button } = await setup();

        expect(await button.getText()).toBe('Save map');
    });

    it('reports a click to its host', async () => {
        const { fixture, button } = await setup();

        await button.click();

        expect(fixture.componentInstance.clicks()).toBe(1);
    });

    it('has the height of a Medium button', async () => {
        const { button } = await setup();

        const { height } = await (await button.host()).getDimensions();

        expect(height).toBe(40);
    });

    it('shows the pointer cursor', async () => {
        const { button } = await setup();

        expect(await (await button.host()).getCssValue('cursor')).toBe('pointer');
    });

    it('shows the not-allowed cursor when disabled', async () => {
        const { fixture, button } = await setup();

        fixture.componentInstance.disabled.set(true);

        expect(await button.isDisabled()).toBe(true);
        expect(await (await button.host()).getCssValue('cursor')).toBe('not-allowed');
    });
});
