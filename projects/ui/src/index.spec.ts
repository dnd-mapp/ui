import * as publicApi from './index';

describe('public API', () => {
    it('exports the expected names', () => {
        expect(Object.keys(publicApi).sort()).toEqual(['Button']);
    });
});
