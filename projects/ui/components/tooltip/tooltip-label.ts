/** The id of the element that holds the labels of all the tooltips on a page. */
const LABELS_ID = 'dma-tooltip-labels';

/**
 * Adds a hidden element with the text of a tooltip to the page, for its trigger to name itself with through
 * `aria-labelledby`. The bubble of a tooltip only exists while it shows, but the trigger needs its name all the time.
 *
 * The labels share one hidden element at the end of the body. Assistive technology still reads a hidden element
 * that `aria-labelledby` points at, but never reads it on its own.
 */
export function createTooltipLabel(document: Document, id: string): HTMLElement {
    let labels = document.getElementById(LABELS_ID);

    if (labels === null) {
        labels = document.createElement('div');
        labels.id = LABELS_ID;
        labels.hidden = true;
        document.body.append(labels);
    }
    const label = document.createElement('span');

    label.id = id;
    labels.append(label);

    return label;
}

/** Removes the label of a tooltip from the page, and the element that holds the labels once it's empty. */
export function removeTooltipLabel(label: HTMLElement): void {
    const labels = label.parentElement;

    label.remove();

    if (labels?.id === LABELS_ID && labels.childElementCount === 0) {
        labels.remove();
    }
}
