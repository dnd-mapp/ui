import javascript from '@dnd-mapp/config-eslint/javascript';
import typescript from '@dnd-mapp/config-eslint/typescript';
import angular from 'angular-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['.angular/', 'dist/', '.coverage/', '.vitest/', '.tmp/']),
    javascript,
    typescript,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ['projects/ui/**/*.ts'],
        extends: [angular.configs.tsRecommended],
        plugins: {
            '@angular-eslint/template': angular.templatePlugin,
        },
        processor: '@angular-eslint/template/extract-inline-html',
        rules: {
            '@angular-eslint/component-selector': [
                'error',
                { type: ['element', 'attribute'], prefix: 'dma', style: 'kebab-case' },
            ],
            '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'dma', style: 'camelCase' }],
        },
    },
    {
        files: ['projects/ui/**/*.html'],
        extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
    },
]);
