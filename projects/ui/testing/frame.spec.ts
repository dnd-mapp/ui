import { UnitTestElement } from '@angular/cdk/testing/testbed';
import { tokens } from '@dnd-mapp/design-tokens';
import { getFrame, resolveFrame } from './frame';

describe('getFrame', () => {
    let element: HTMLElement;

    beforeEach(() => {
        element = document.createElement('div');
        element.style.setProperty('width', '1.5rem');
        element.style.setProperty('height', '1rem');
        document.body.append(element);
    });

    afterEach(() => {
        element.remove();
    });

    it('returns the width and the height that the browser computes for an element', async () => {
        expect(await getFrame(element)).toEqual({ width: '24px', height: '16px' });
    });

    it('returns the width and the height that the browser computes for the host of a component harness', async () => {
        const host = new UnitTestElement(element, async () => Promise.resolve());

        expect(await getFrame(host)).toEqual({ width: '24px', height: '16px' });
    });
});

describe('resolveFrame', () => {
    let context: HTMLElement;

    beforeEach(() => {
        context = document.createElement('div');
        document.body.append(context);
    });

    afterEach(() => {
        context.remove();
    });

    it('resolves a token to a square frame with sides as long as the browser computes the token', () => {
        expect(resolveFrame(tokens.spacing['16'], context)).toEqual({ width: '16px', height: '16px' });
    });

    it('resolves a length without tokens', () => {
        expect(resolveFrame('1.5rem', context)).toEqual({ width: '24px', height: '24px' });
    });

    it('throws when nothing defines a token inside the context', () => {
        expect(() => resolveFrame('var(--dma-spacing-1000)', context)).toThrow(
            'Nothing defines --dma-spacing-1000 inside the context.',
        );
    });
});
