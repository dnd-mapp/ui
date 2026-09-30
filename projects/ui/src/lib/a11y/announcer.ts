import { DOCUMENT, inject, Injectable, OnDestroy } from '@angular/core';

/**
 * Announces messages to screen readers through a polite live region.
 *
 * The live region sits at the end of the document body, outside the components, so an announcement never becomes
 * part of the accessible name of the component that makes it.
 */
@Injectable({ providedIn: 'root' })
export class Announcer implements OnDestroy {
    private readonly document = inject(DOCUMENT);
    private liveRegion: HTMLElement | null = null;

    /**
     * Announces a message. The same message announces again when it's repeated.
     */
    public announce(message: string): void {
        const liveRegion = this.getLiveRegion();

        // Screen readers only announce a change, so clear the region first, then set the message in the next task.
        liveRegion.textContent = '';
        setTimeout(() => (liveRegion.textContent = message));
    }

    public ngOnDestroy(): void {
        this.liveRegion?.remove();
        this.liveRegion = null;
    }

    private getLiveRegion(): HTMLElement {
        if (this.liveRegion) {
            return this.liveRegion;
        }
        const liveRegion = this.document.createElement('div');

        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.classList.add('dma-live-announcer');

        // Hide the region visually, but keep it in the accessibility tree.
        Object.assign(liveRegion.style, {
            position: 'absolute',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
            clipPath: 'inset(50%)',
            whiteSpace: 'nowrap',
        });
        this.document.body.appendChild(liveRegion);
        this.liveRegion = liveRegion;

        return liveRegion;
    }
}
