# @dnd-mapp/ui

[![npm version](https://img.shields.io/npm/v/@dnd-mapp/ui)](https://www.npmjs.com/package/@dnd-mapp/ui)
[![license](https://img.shields.io/npm/l/@dnd-mapp/ui)](../../LICENSE)

The Angular component library of D&D Mapp. It holds the presentational components of the D&D Mapp apps, built after the components in the `Design system` Figma file and styled with [`@dnd-mapp/design-tokens`](https://github.com/dnd-mapp/design-tokens).

A presentational component only renders what it's given. It takes its data through inputs and reports what the user does through outputs, and it never fetches data or talks to services. The app decides what happens.

The library has no components yet. The button is the first one to come.

## Requirements

- Angular 22.2 or later, with `@angular/core` and `@angular/common`.
- `@dnd-mapp/design-tokens` 1.0 or later.

## Installation

```bash
pnpm add @dnd-mapp/ui @dnd-mapp/design-tokens
```

## Usage

The components style themselves with the custom properties of the design tokens, such as `--dma-color-text-default`. Load the stylesheets of the tokens and the fonts once, by adding them to the global styles of your app in `angular.json`.

```json
{
    "styles": ["@dnd-mapp/design-tokens/fonts.css", "@dnd-mapp/design-tokens/tokens.css", "src/styles.scss"]
}
```

The components follow the `color-scheme` of the page, just like the tokens. See the [design tokens](https://github.com/dnd-mapp/design-tokens#light-and-dark-mode) for how to switch between light and dark mode.

## Changelog

Notable changes for consumers of this package are listed in the [changelog](CHANGELOG.md).

## Contributing

Contributions are welcome. See the [contributing guide](../../CONTRIBUTING.md) for details.

## License

[MIT](../../LICENSE) © D&D Mapp
