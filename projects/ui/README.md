# @dnd-mapp/ui

[![npm version](https://img.shields.io/npm/v/@dnd-mapp/ui)](https://www.npmjs.com/package/@dnd-mapp/ui)
[![license](https://img.shields.io/npm/l/@dnd-mapp/ui)](../../LICENSE)

The Angular component library of D&D Mapp. It holds the presentational components of the D&D Mapp apps, built after the components in the `Design system` Figma file and styled with [`@dnd-mapp/design-tokens`](https://github.com/dnd-mapp/design-tokens).

A presentational component only renders what it's given. It takes its data through inputs and reports what the user does through outputs, and it never fetches data or talks to services. The app decides what happens.

## Requirements

- Angular 22.2 or later, with `@angular/core` and `@angular/common`.
- `@dnd-mapp/design-tokens` 1.0 or later.
- `@angular/cdk` 22.2 or later, only to use the component harnesses.

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

Import the components from `@dnd-mapp/ui/components`.

| Component         | Selector             | Harness         | Use for                         |
|:------------------|:---------------------|:----------------|:--------------------------------|
| `ButtonComponent` | `button[dma-button]` | `ButtonHarness` | An action, such as saving a map |

### Button

Put `dma-button` on a native `button` element, and import `ButtonComponent` into the component that uses it. The content of the element is the label.

```ts
import { Component } from '@angular/core';
import { ButtonComponent } from '@dnd-mapp/ui/components';

@Component({
    selector: 'app-map-toolbar',
    imports: [ButtonComponent],
    template: `<button dma-button type="button" (click)="save()">Save map</button>`,
})
export class MapToolbarComponent {
    save() {}
}
```

Set the `variant` input to `primary`, `secondary`, `ghost`, or `danger`. It defaults to `primary`.

| Variant     | Use for                                                        |
|:------------|:---------------------------------------------------------------|
| `primary`   | The one main action in a view, such as "Save map"              |
| `secondary` | Other actions beside the main one, such as "Export map"        |
| `ghost`     | Minor actions that should stay quiet, such as toolbar actions  |
| `danger`    | Actions that destroy or remove something, such as "Delete map" |

```html
<button dma-button type="button" variant="danger" (click)="delete()">Delete map</button>
```

The button has the `Medium` size so far. Set the native `disabled` attribute to disable it.

## Testing

The `@dnd-mapp/ui/components/testing` entry point has a [component harness](https://angular.dev/guide/testing/component-harnesses-overview) for every component, to test the components of your app that use them. The harnesses need `@angular/cdk`, so install it to use them.

```bash
pnpm add -D @angular/cdk
```

Load a harness through the harness environment of the CDK.

```ts
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ButtonHarness } from '@dnd-mapp/ui/components/testing';

const loader = TestbedHarnessEnvironment.loader(fixture);
const button = await loader.getHarness(ButtonHarness.with({ text: 'Save map' }));

await button.click();
```

## Changelog

Notable changes for consumers of this package are listed in the [changelog](CHANGELOG.md).

## Contributing

Contributions are welcome. See the [contributing guide](../../CONTRIBUTING.md) for details.

## License

[MIT](../../LICENSE) © D&D Mapp
