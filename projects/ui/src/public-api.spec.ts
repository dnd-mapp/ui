import * as publicApi from './public-api';

describe('public API', () => {
    it('exports the expected names', () => {
        expect(Object.keys(publicApi).sort()).toEqual([]);
    });
});
