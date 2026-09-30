import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/angular-vite';

const preview: Preview = {
    decorators: [
        withThemeByDataAttribute({
            themes: { Light: 'light', Dark: 'dark' },
            defaultTheme: 'Light',
            attributeName: 'data-color-scheme',
        }),
    ],
};

export default preview;
