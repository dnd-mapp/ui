import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        coverage: {
            reportOnFailure: true,
            reportsDirectory: '.coverage',
        },
        mockReset: true,
        open: false,
        sequence: {
            shuffle: true,
        },
    },
});
