/**
 * Resolves `value` to what the browser computes for the CSS `property` inside `context`. The value can name design
 * tokens, such as `var(--dma-color-background-accent)` or `calc(var(--dma-spacing-16) - 1px)`, and they resolve to
 * the values that `context` gives them, in its color scheme.
 *
 * Compare the result with what the browser computes for an element, to check that the element is styled with the
 * tokens. Put `context` in the document, so the browser computes its styles.
 *
 * @throws When `value` names a custom property that nothing defines inside `context`, so a misspelled token fails
 * instead of resolving to the initial value of `property`.
 */
export function resolveStyle(property: string, value: string, context: HTMLElement): string {
    for (const [name] of value.matchAll(/--[\w-]+/g)) {
        if (getComputedStyle(context).getPropertyValue(name) === '') {
            throw new Error(`Nothing defines ${name} inside the context.`);
        }
    }
    const probe = document.createElement('span');

    probe.style.setProperty(property, value);
    context.append(probe);

    const resolved = getComputedStyle(probe).getPropertyValue(property);

    probe.remove();

    return resolved;
}
