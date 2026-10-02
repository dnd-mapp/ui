import { getLiveRegion } from './live-region';

describe('getLiveRegion', () => {
    let region: HTMLElement;

    beforeEach(() => {
        region = document.createElement('div');
        document.body.append(region);
    });

    afterEach(() => {
        region.remove();
    });

    it('returns the polite live region', () => {
        region.setAttribute('aria-live', 'polite');

        expect(getLiveRegion()).toBe(region);
    });

    it('returns null while there is no polite live region', () => {
        region.setAttribute('aria-live', 'assertive');

        expect(getLiveRegion()).toBeNull();
    });
});
