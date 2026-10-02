import { UnitTestElement } from '@angular/cdk/testing/testbed';
import { tokens } from '@dnd-mapp/design-tokens';
import { getColors, resolveColor, resolveColors } from './colors';
import { resolveStyle } from './resolve-style';

describe('resolveColor', () => {
    let context: HTMLElement;

    beforeEach(() => {
        context = document.createElement('div');
        document.body.append(context);
    });

    afterEach(() => {
        context.remove();
    });

    it('resolves a color token to the color that the browser computes for it', () => {
        expect(resolveColor(tokens.color.background.accent, context)).toBe(
            resolveStyle('color', tokens.color.background.accent, context),
        );
    });

    it('resolves a color without tokens', () => {
        expect(resolveColor('#ff0000', context)).toBe('rgb(255, 0, 0)');
    });

    it('resolves null to transparent', () => {
        expect(resolveColor(null, context)).toBe('rgba(0, 0, 0, 0)');
    });

    it('throws when nothing defines a token inside the context', () => {
        expect(() => resolveColor('var(--dma-color-nothing)', context)).toThrow(
            'Nothing defines --dma-color-nothing inside the context.',
        );
    });
});

describe('resolveColors', () => {
    let context: HTMLElement;

    beforeEach(() => {
        context = document.createElement('div');
        document.body.append(context);
    });

    afterEach(() => {
        context.remove();
    });

    it('resolves each color token under its key', () => {
        expect(
            resolveColors({ fill: tokens.color.background.accent, border: null, label: '#ff0000' }, context),
        ).toEqual({
            fill: resolveColor(tokens.color.background.accent, context),
            border: 'rgba(0, 0, 0, 0)',
            label: 'rgb(255, 0, 0)',
        });
    });
});

describe('getColors', () => {
    let element: HTMLElement;

    beforeEach(() => {
        element = document.createElement('div');
        element.style.setProperty('background-color', '#ff0000');
        element.style.setProperty('color', '#0000ff');
        document.body.append(element);
    });

    afterEach(() => {
        element.remove();
    });

    it('returns the colors that the browser computes for an element, under the keys of their properties', async () => {
        expect(await getColors(element, { fill: 'background-color', label: 'color' })).toEqual({
            fill: 'rgb(255, 0, 0)',
            label: 'rgb(0, 0, 255)',
        });
    });

    it('returns the colors that the browser computes for the host of a component harness', async () => {
        const host = new UnitTestElement(element, async () => Promise.resolve());

        expect(await getColors(host, { fill: 'background-color', label: 'color' })).toEqual({
            fill: 'rgb(255, 0, 0)',
            label: 'rgb(0, 0, 255)',
        });
    });
});
