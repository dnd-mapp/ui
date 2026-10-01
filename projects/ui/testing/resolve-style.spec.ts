import { tokens } from '@dnd-mapp/design-tokens';
import { resolveStyle } from './resolve-style';

describe('resolveStyle', () => {
    let context: HTMLElement;

    beforeEach(() => {
        context = document.createElement('div');
        document.body.append(context);
    });

    afterEach(() => {
        context.remove();
    });

    it('resolves a token to the value that the browser computes for it', () => {
        expect(resolveStyle('padding-inline-start', tokens.spacing['16'], context)).toBe('16px');
    });

    it('resolves a calculation with a token in it', () => {
        expect(resolveStyle('padding-inline-start', `calc(${tokens.spacing['16']} - 1px)`, context)).toBe('15px');
    });

    it('resolves a value without tokens', () => {
        expect(resolveStyle('border-top-left-radius', '0.5rem', context)).toBe('8px');
    });

    it('resolves a token to the value that the context gives it', () => {
        context.style.setProperty('--dma-spacing-16', '2rem');

        expect(resolveStyle('padding-inline-start', tokens.spacing['16'], context)).toBe('32px');
    });

    it('resolves a color token to the color of the color scheme of the context', () => {
        context.style.setProperty('color-scheme', 'light');
        const light = resolveStyle('color', tokens.color.text.default, context);

        context.style.setProperty('color-scheme', 'dark');
        const dark = resolveStyle('color', tokens.color.text.default, context);

        expect(light).not.toBe(dark);
    });

    it('throws when nothing defines a token inside the context', () => {
        expect(() => resolveStyle('padding-inline-start', 'var(--dma-spacing-1000)', context)).toThrow(
            'Nothing defines --dma-spacing-1000 inside the context.',
        );
    });

    it('leaves the context as it was', () => {
        resolveStyle('padding-inline-start', tokens.spacing['16'], context);

        expect(context.childNodes).toHaveLength(0);
    });
});
