/**
 * Returns the polite live region that announces to screen readers, such as the one that the `LiveAnnouncer` of the
 * CDK adds when a loading button announces itself, or `null` while there is none.
 */
export function getLiveRegion(): Element | null {
    return document.querySelector('[aria-live="polite"]');
}
