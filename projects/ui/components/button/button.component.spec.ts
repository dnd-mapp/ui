import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

@Component({
    imports: [ButtonComponent],
    template: `<button dma-button type="button" [disabled]="disabled()">Save map</button>`,
})
class TestHostComponent {
    readonly disabled = signal(false);
}

describe('ButtonComponent', () => {
    async function setup() {
        const fixture = TestBed.createComponent(TestHostComponent);
        await fixture.whenStable();
        const button = (fixture.nativeElement as HTMLElement).querySelector('button');

        if (!button) {
            throw new Error('The test host renders no button.');
        }
        return { fixture, button };
    }

    it('shows its content as the label', async () => {
        const { button } = await setup();

        expect(button.textContent.trim()).toBe('Save map');
    });

    it('has the height of a Medium button', async () => {
        const { button } = await setup();

        expect(button.getBoundingClientRect().height).toBe(40);
    });

    it('shows the pointer cursor', async () => {
        const { button } = await setup();

        expect(getComputedStyle(button).cursor).toBe('pointer');
    });

    it('shows the not-allowed cursor when disabled', async () => {
        const { fixture, button } = await setup();

        fixture.componentInstance.disabled.set(true);
        await fixture.whenStable();

        expect(getComputedStyle(button).cursor).toBe('not-allowed');
    });
});
