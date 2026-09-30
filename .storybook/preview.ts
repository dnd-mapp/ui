import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/angular-vite';
import { createElement, type PropsWithChildren } from 'react';
import { themes, type ThemeVars } from 'storybook/theming';

/**
 * Picks the Storybook theme of a docs page from the theme switch in the toolbar. Storybook renders the docs page
 * again when the switch changes, so the page follows it.
 */
function docsThemeOf(context: DocsContainerProps['context']): ThemeVars {
    const [story] = context.componentStories();
    // The story context type loses its known keys to an index signature, so `globals` comes back as `any`.
    const globals = story ? (context.getStoryContext(story)['globals'] as Record<string, unknown>) : {};

    return globals['theme'] === 'Dark' ? themes.dark : themes.light;
}

const preview: Preview = {
    decorators: [
        withThemeByDataAttribute({
            themes: { Light: 'light', Dark: 'dark' },
            defaultTheme: 'Light',
            attributeName: 'data-color-scheme',
        }),
    ],
    parameters: {
        docs: {
            container: (props: PropsWithChildren<DocsContainerProps>) =>
                createElement(DocsContainer, { ...props, theme: docsThemeOf(props.context) }),
        },
    },
};

export default preview;
