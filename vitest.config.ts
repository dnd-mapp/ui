import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        browser: {
            screenshotFailures: false,
        },
        coverage: {
            reportOnFailure: true,
            reportsDirectory: '.coverage',
        },
        open: false,
        sequence: {
            shuffle: true,
        },
    },
});
