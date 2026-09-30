# @dnd-mapp/ui

[![npm version](https://img.shields.io/npm/v/@dnd-mapp/ui)](https://www.npmjs.com/package/@dnd-mapp/ui)
[![license](https://img.shields.io/npm/l/@dnd-mapp/ui)](../../LICENSE)

The Angular component library of D&D Mapp. It holds the presentational components of the D&D Mapp apps, built after the components in the `Design system` Figma file and styled with [`@dnd-mapp/design-tokens`](https://github.com/dnd-mapp/design-tokens).

A presentational component only renders what it's given. It takes its data through inputs and reports what the user does through outputs, and it never fetches data or talks to services. The app decides what happens.

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

## Components

### Button

`Button` enhances a native `button` element through the `dma-button` attribute. Import it into the component that uses it.

```typescript
import { Component } from '@angular/core';
import { Button } from '@dnd-mapp/ui';

@Component({
    selector: 'app-map-toolbar',
    imports: [Button],
    template: `<button dma-button type="button" variant="secondary" (click)="export()">Export</button>`,
})
export class MapToolbar {
    protected export(): void {}
}
```

| Input                 | Type                                              | Default     | Description                                                                           |
|:----------------------|:--------------------------------------------------|:------------|:--------------------------------------------------------------------------------------|
| `variant`             | `'primary' \| 'secondary' \| 'danger' \| 'ghost'` | `'primary'` | The style of the button                                                               |
| `size`                | `'small' \| 'medium' \| 'large'`                  | `'medium'`  | The height, padding, and text size of the button                                      |
| `disabled`            | `boolean`                                         | `false`     | Disables the button                                                                   |
| `disabledInteractive` | `boolean`                                         | `false`     | Keeps a disabled button focusable, with `aria-disabled="true"` in place of `disabled` |
| `loading`             | `boolean`                                         | `false`     | Shows that the button is busy with the action it started                              |
| `loadingLabel`        | `string`                                          | `'Loading'` | The word that screen readers announce when the spinner appears, such as `'Saving'`    |

- Use `primary` for the one main action in a view, and `secondary` for other actions beside it. Use `ghost` for minor actions that should stay quiet, and `danger` for actions that destroy or remove something.
- Put an icon before or after the label to add a leading or trailing icon. Size it to the line height of the label: 16px for `small`, 20px for `medium`, and 24px for `large`. Give it `aria-hidden="true"` and color it with `currentColor`.
- Add `disabledInteractive` to `disabled` when a disabled button still needs keyboard focus, such as to show a tooltip. The button then blocks its own clicks, and shows the focus ring on keyboard focus.
- Set `loading` in the click handler of the action, and clear it when the action ends. The button blocks clicks at once. The spinner appears after 300ms and stays at least 500ms, so fast actions show no spinner and slow ones never flash it.
- The spinner is the `circle-notch` icon from [Font Awesome Free](https://fontawesome.com) 7.3.1 by Fonticons, Inc., licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

## Changelog

Notable changes for consumers of this package are listed in the [changelog](CHANGELOG.md).

## Contributing

Contributions are welcome. See the [contributing guide](../../CONTRIBUTING.md) for details.

## License

[MIT](../../LICENSE) © D&D Mapp
