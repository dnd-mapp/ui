import base from '@dnd-mapp/config-prettier/organize-imports';
import type { Config } from 'prettier';

const config: Config = {
    ...base,
    overrides: [
        ...(base.overrides ?? []),
        {
            files: ['*.html'],
            options: {
                parser: 'angular',
            },
        },
    ],
};

export default config;
