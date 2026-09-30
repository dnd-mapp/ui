import type { StorybookConfig } from '@storybook/angular-vite';

const config: StorybookConfig = {
    stories: ['./introduction.mdx', '../projects/ui/src/**/*.stories.ts'],
    addons: ['@storybook/addon-docs', '@storybook/addon-themes'],
    framework: '@storybook/angular-vite',
    core: {
        disableTelemetry: true,
    },
    features: {
        // The preview takes its background from the design tokens instead.
        backgrounds: false,
    },
};

export default config;
