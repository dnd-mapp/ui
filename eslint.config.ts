import javascript from '@dnd-mapp/config-eslint/javascript';
import typescript from '@dnd-mapp/config-eslint/typescript';
import angular from 'angular-eslint';
import type { Linter } from 'eslint';
import storybook from 'eslint-plugin-storybook';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['.angular/', 'dist/', '.coverage/', '.vitest/', 'tsc-out/']),
    javascript,
    typescript,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // Every class member states its access, so `public` API is a choice rather than a default.
            '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
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
            // The classes follow the naming of the 2016 Angular style guide, such as `ButtonComponent`.
            '@angular-eslint/component-class-suffix': 'error',
            '@angular-eslint/directive-class-suffix': 'error',
        },
    },
    {
        files: ['projects/ui/**/*.html'],
        extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
    },
    // The plugin's types don't fit `defineConfig`. Its configs carry keys like `files?: undefined`, which
    // `exactOptionalPropertyTypes` rejects, and its rules use typescript-eslint's `RuleModule`, not ESLint's type.
    storybook.configs['flat/recommended'] as unknown as Linter.Config[],
]);
