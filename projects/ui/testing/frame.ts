import { resolveStyle } from './resolve-style';

/** The width and the height of a box, as the lengths that the browser computes for them, such as `24px`. */
export interface Frame {
    width: string;
    height: string;
}

/**
 * Returns the frame of `element`, as the width and the height that the browser computes for it. The element can be a
 * DOM element, or a test element of the CDK, such as the host of a component harness.
 */
export async function getFrame(element: Element | { getCssValue(property: string): Promise<string> }): Promise<Frame> {
    if (element instanceof Element) {
        const { width, height } = getComputedStyle(element);

        return { width, height };
    }
    return { width: await element.getCssValue('width'), height: await element.getCssValue('height') };
}

/**
 * Resolves `side` to the square frame whose width and height are what the browser computes for it inside `context`.
 * The side can name design tokens, such as the line height of a label style, which resolve as in `resolveStyle()`.
 *
 * Compare the result with `getFrame()` of an element, to check that the element is sized with the tokens.
 *
 * @throws When `side` names a custom property that nothing defines inside `context`.
 */
export function resolveFrame(side: string, context: HTMLElement): Frame {
    const length = resolveStyle('height', side, context);

    return { width: length, height: length };
}
