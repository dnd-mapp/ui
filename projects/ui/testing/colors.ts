import { resolveStyle } from './resolve-style';

/** What the browser computes for the `transparent` color. */
const transparent = 'rgba(0, 0, 0, 0)';

/**
 * Resolves a color token, such as `tokens.color.background.accent`, to the color that the browser computes for it
 * inside `context`, as in `resolveStyle()`. A `null` token resolves to transparent, for a fill or a border that an
 * element doesn't show.
 *
 * @throws When `token` names a custom property that nothing defines inside `context`.
 */
export function resolveColor(token: string | null, context: HTMLElement): string {
    return token === null ? transparent : resolveStyle('color', token, context);
}

/**
 * Resolves each color token in `colors` as in `resolveColor()`, under the same keys, such as the fill, the border, and
 * the label of a button in one state.
 *
 * Compare the result with `getColors()` of an element, to check that the element is colored with the tokens.
 *
 * @throws When a token names a custom property that nothing defines inside `context`.
 */
export function resolveColors<K extends string>(
    colors: Record<K, string | null>,
    context: HTMLElement,
): Record<K, string> {
    const entries = Object.entries<string | null>(colors).map(([key, token]) => [key, resolveColor(token, context)]);

    return Object.fromEntries(entries) as Record<K, string>;
}

/**
 * Returns the colors that the browser computes for `element`, one for each CSS property in `properties`, under the
 * same keys, such as `{ fill: 'background-color', label: 'color' }`. The element can be a DOM element, or a test
 * element of the CDK, such as the host of a component harness.
 */
export async function getColors<K extends string>(
    element: Element | { getCssValue(property: string): Promise<string> },
    properties: Record<K, string>,
): Promise<Record<K, string>> {
    const getCssValue =
        element instanceof Element
            ? async (property: string) => Promise.resolve(getComputedStyle(element).getPropertyValue(property))
            : async (property: string) => element.getCssValue(property);
    const entries = await Promise.all(
        Object.entries<string>(properties).map(async ([key, property]) => [key, await getCssValue(property)]),
    );

    return Object.fromEntries(entries) as Record<K, string>;
}
