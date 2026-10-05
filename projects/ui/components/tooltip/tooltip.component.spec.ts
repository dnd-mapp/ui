import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { tokens } from '@dnd-mapp/design-tokens';
import { getColors, resolveColors, resolveStyle } from '@dnd-mapp/ui/testing';
import { DEFAULT_TOOLTIP_PLACEMENT, type TooltipPlacement } from './tooltip-placement';
import { TooltipComponent } from './tooltip.component';

@Component({
    template: `<dma-tooltip [text]="text()" [placement]="placement()" />`,
    imports: [TooltipComponent],
})
class TestHostComponent {
    public readonly text = signal('Close');
    public readonly placement = signal<TooltipPlacement>(DEFAULT_TOOLTIP_PLACEMENT);
}

@Component({
    template: `<dma-tooltip text="Close" />`,
    imports: [TooltipComponent],
})
class NoPlacementTestHostComponent {}

describe('TooltipComponent', () => {
    async function setup() {
        const fixture = TestBed.createComponent(TestHostComponent);
        const element = fixture.nativeElement as HTMLElement;

        await fixture.whenStable();

        const tooltip = element.querySelector<HTMLElement>('dma-tooltip');

        if (tooltip === null) {
            throw new Error('The host renders no tooltip.');
        }
        return { fixture, element, tooltip };
    }

    it('shows its text', async () => {
        const { tooltip } = await setup();

        expect(tooltip.textContent.trim()).toBe('Close');
    });

    it('is hidden from assistive technology, because its text names its trigger', async () => {
        const { tooltip } = await setup();

        expect(tooltip.getAttribute('aria-hidden')).toBe('true');
    });

    it('has the inverse fill and the on-inverse text color', async () => {
        const { element, tooltip } = await setup();

        expect(await getColors(tooltip, { fill: 'background-color', text: 'color' })).toEqual(
            resolveColors({ fill: tokens.color.background.inverse, text: tokens.color.text['on-inverse'] }, element),
        );
    });

    it('has the Body/Small text style, the padding, and the radius of the Figma component', async () => {
        const { element, tooltip } = await setup();
        const style = getComputedStyle(tooltip);
        const text = tokens.text.body.small;

        expect({
            fontFamily: style.fontFamily,
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
            lineHeight: style.lineHeight,
            paddingBlock: [style.paddingTop, style.paddingBottom],
            paddingInline: [style.paddingLeft, style.paddingRight],
            radius: style.borderTopLeftRadius,
        }).toEqual({
            fontFamily: resolveStyle('font-family', text['font-family'], element),
            fontSize: resolveStyle('font-size', text['font-size'], element),
            fontWeight: resolveStyle('font-weight', text['font-weight'], element),
            lineHeight: resolveStyle('line-height', text['line-height'], element),
            paddingBlock: Array(2).fill(resolveStyle('padding', tokens.spacing['4'], element)),
            paddingInline: Array(2).fill(resolveStyle('padding', tokens.spacing['12'], element)),
            radius: resolveStyle('border-radius', tokens.radius['4'], element),
        });
    });

    it('has no border and no shadow', async () => {
        const { tooltip } = await setup();
        const style = getComputedStyle(tooltip);

        expect(style.borderTopStyle).toBe('none');
        expect(style.boxShadow).toBe('none');
    });

    it('is 28px tall on one line, and as wide as its text', async () => {
        const { tooltip } = await setup();
        const { width, height } = tooltip.getBoundingClientRect();

        expect(height).toBe(28);
        expect(width).toBeLessThan(80);
    });

    it('wraps past 240px, onto a second line 48px tall', async () => {
        const { fixture, tooltip } = await setup();

        fixture.componentInstance.text.set('Show or hide the fog of war layer of the map');
        await fixture.whenStable();

        const { width, height } = tooltip.getBoundingClientRect();

        expect(width).toBe(240);
        expect(height).toBe(48);
    });

    it('wraps a word that is longer than 240px', async () => {
        const { fixture, tooltip } = await setup();

        fixture.componentInstance.text.set('Fogofwarlayerofthemapthatnobodycanpronounceatall');
        await fixture.whenStable();

        expect(tooltip.getBoundingClientRect().width).toBe(240);
        expect(tooltip.scrollWidth).toBeLessThanOrEqual(240);
    });

    it('shows on the top side when it sets no placement', async () => {
        const fixture = TestBed.createComponent(NoPlacementTestHostComponent);

        await fixture.whenStable();

        const tooltip = (fixture.nativeElement as HTMLElement).querySelector('dma-tooltip');

        expect(tooltip?.getAttribute('data-placement')).toBe('top');
    });

    describe.each<{ placement: TooltipPlacement; side: 'marginTop' | 'marginBottom' | 'marginLeft' | 'marginRight' }>([
        { placement: 'top', side: 'marginBottom' },
        { placement: 'bottom', side: 'marginTop' },
        { placement: 'left', side: 'marginRight' },
        { placement: 'right', side: 'marginLeft' },
    ])('on the $placement side', ({ placement, side }) => {
        it('keeps a gap of spacing/8 on the side that faces its trigger only', async () => {
            const { fixture, element, tooltip } = await setup();

            fixture.componentInstance.placement.set(placement);
            await fixture.whenStable();

            const style = getComputedStyle(tooltip);
            const gap = resolveStyle('margin', tokens.spacing['8'], element);
            const margins = {
                marginTop: style.marginTop,
                marginBottom: style.marginBottom,
                marginLeft: style.marginLeft,
                marginRight: style.marginRight,
            };

            expect(tooltip.getAttribute('data-placement')).toBe(placement);
            expect(margins).toEqual({
                marginTop: '0px',
                marginBottom: '0px',
                marginLeft: '0px',
                marginRight: '0px',
                [side]: gap,
            });
        });
    });
});
