import { Injectable } from '@angular/core';

/** How long after a tooltip closes the next one still shows at once, so the pointer can sweep along a toolbar. */
const WARM_UP_DURATION = 300;

/**
 * Shares the state that the tooltips of a page need between them. One tooltip shows at a time, and once one has
 * shown, the next shows without the hover delay while one shows or for 300ms after it closes.
 *
 * A tooltip registers itself through the function that closes it at once.
 */
@Injectable({ providedIn: 'root' })
export class TooltipService {
    /** Closes the tooltip that shows, or `null` while none does. */
    private current: VoidFunction | null = null;

    /** When the last tooltip closed. */
    private closedAt = Number.NEGATIVE_INFINITY;

    /** Whether a tooltip shows now, or closed less than 300ms ago, so the next one skips the hover delay. */
    public isWarm(): boolean {
        return this.current !== null || Date.now() - this.closedAt < WARM_UP_DURATION;
    }

    /** Records that a tooltip shows, and closes the one that showed before it. */
    public opened(close: VoidFunction): void {
        const previous = this.current;

        this.current = close;

        if (previous !== null && previous !== close) {
            previous();
        }
    }

    /** Records that a tooltip closed, which starts the 300ms in which the next one shows at once. */
    public closed(close: VoidFunction): void {
        if (this.current === close) {
            this.current = null;
            this.closedAt = Date.now();
        }
    }
}
