import { TestBed } from '@angular/core/testing';
import { Announcer } from './announcer';

describe('Announcer', () => {
    let announcer: Announcer;

    beforeEach(() => {
        vi.useFakeTimers();
        announcer = TestBed.inject(Announcer);
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    function liveRegions(): NodeListOf<HTMLElement> {
        return document.querySelectorAll('.dma-live-announcer');
    }

    function liveRegion(): HTMLElement {
        return liveRegions()[0]!;
    }

    it('announces a message in a polite live region', () => {
        announcer.announce('Loading');
        vi.runAllTimers();

        expect(liveRegions()).toHaveLength(1);
        expect(liveRegion().getAttribute('aria-live')).toBe('polite');
        expect(liveRegion().getAttribute('aria-atomic')).toBe('true');
        expect(liveRegion().parentElement).toBe(document.body);
        expect(liveRegion().textContent).toBe('Loading');
    });

    it('clears the live region before each message, so a repeated message announces again', () => {
        announcer.announce('Saving');
        vi.runAllTimers();
        announcer.announce('Saving');

        expect(liveRegion().textContent).toBe('');

        vi.runAllTimers();

        expect(liveRegion().textContent).toBe('Saving');
    });

    it('reuses one live region', () => {
        announcer.announce('Loading');
        announcer.announce('Saving');
        vi.runAllTimers();

        expect(liveRegions()).toHaveLength(1);
        expect(liveRegion().textContent).toBe('Saving');
    });

    it('hides the live region visually', () => {
        announcer.announce('Loading');

        const { width, height } = liveRegion().getBoundingClientRect();

        expect(width).toBeLessThanOrEqual(1);
        expect(height).toBeLessThanOrEqual(1);
    });

    it('removes the live region when it is destroyed', () => {
        announcer.announce('Loading');
        TestBed.resetTestingModule();

        expect(liveRegions()).toHaveLength(0);
    });

    it('does nothing on destroy without a live region', () => {
        expect(() => announcer.ngOnDestroy()).not.toThrow();
    });
});
