import type { StorybookConfig } from '@storybook/angular-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
    stories: ['./introduction.mdx', '../projects/ui/components/**/*.mdx', '../projects/ui/components/**/*.stories.ts'],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                // MDX leaves out GitHub Flavored Markdown, which the tables in the docs need.
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm],
                    },
                },
            },
        },
        '@storybook/addon-themes',
    ],
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
