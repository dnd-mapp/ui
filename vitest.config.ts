import { defineConfig } from 'vitest/config';

const isCI = Boolean(process.env['CI']);

export default defineConfig({
    test: {
        coverage: {
            enabled: true,
            include: ['projects/ui/src/**/*.ts'],
            exclude: ['projects/ui/src/public-api.ts'],
            provider: 'v8',
            reporter: ['text-summary', 'html'],
            reportOnFailure: true,
            reportsDirectory: '.coverage',
            thresholds: {
                branches: 80,
                functions: 80,
                lines: 80,
                statements: 80,
            },
        },
        mockReset: true,
        open: false,
        passWithNoTests: true,
        reporters: ['dot', 'html', ...(isCI ? ['github-actions'] : [])],
        sequence: {
            shuffle: true,
        },
    },
});
