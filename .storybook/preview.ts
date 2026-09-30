import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/angular-vite';
import { createElement, type PropsWithChildren } from 'react';
import { GLOBALS_UPDATED, SET_GLOBALS } from 'storybook/internal/core-events';
import { addons } from 'storybook/preview-api';
import { themes } from 'storybook/theming';

interface GlobalsEvent {
    globals: Record<string, unknown>;
}

/**
 * The globals of the preview, such as the theme that the switch in the toolbar picked. A docs page without stories
 * has no story context to read them from, so the preview tracks them from its channel. Storybook emits
 * `GLOBALS_UPDATED` before it renders a docs page again, so the page always sees the new value.
 */
let globals: GlobalsEvent['globals'] = {};

const channel = addons.getChannel();

channel.on(SET_GLOBALS, (event: GlobalsEvent) => {
    globals = event.globals;
});
channel.on(GLOBALS_UPDATED, (event: GlobalsEvent) => {
    globals = event.globals;
});

/**
 * Renders a docs page in the light or dark Storybook theme, after the theme switch in the toolbar.
 */
function ThemedDocsContainer(props: PropsWithChildren<DocsContainerProps>) {
    const dark = globals['theme'] === 'Dark';

    // The theme decorator only runs for stories, so a docs page without them sets the color scheme itself.
    document.documentElement.dataset['colorScheme'] = dark ? 'dark' : 'light';

    return createElement(DocsContainer, { ...props, theme: dark ? themes.dark : themes.light });
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
            container: ThemedDocsContainer,
        },
    },
};

export default preview;
