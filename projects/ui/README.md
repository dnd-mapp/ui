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

Set the `size` input to `small`, `medium`, or `large`. It defaults to `medium`, which fits most actions. Use `small` in dense layouts, such as table rows, and `large` for an action that leads a sparse view.

```html
<button dma-button type="button" variant="ghost" size="small" (click)="rename()">Rename map</button>
```

Set the native `disabled` attribute to disable the button.

## Icons

Import the icons from `@dnd-mapp/ui/icons`. Each glyph has a component of its own, so the bundle of your app holds only the glyphs it imports. The glyphs come from Font Awesome Free, and ship inside this package, so you don't install Font Awesome.

| Component                  | Selector                | Use for                                                        |
|:---------------------------|:------------------------|:---------------------------------------------------------------|
| `IconChevronDownComponent` | `dma-icon-chevron-down` | An action that opens a menu or a list below it                 |
| `IconCircleNotchComponent` | `dma-icon-circle-notch` | A control that is busy, such as a button that is loading       |
| `IconPlusComponent`        | `dma-icon-plus`         | An action that adds or creates something, such as a new map    |
| `IconXmarkComponent`       | `dma-icon-xmark`        | An action that closes or dismisses something, such as a dialog |

```ts
import { Component } from '@angular/core';
import { IconPlusComponent } from '@dnd-mapp/ui/icons';

@Component({
    selector: 'app-map-list-header',
    imports: [IconPlusComponent],
    template: `<span class="add-map"><dma-icon-plus />Add map</span>`,
})
export class MapListHeaderComponent {}
```

Set the `size` input to `small`, `medium`, or `large`, to match the `Label/Small`, `Label/Medium`, or `Label/Large` text style beside the icon. It defaults to `medium`. Each size is as high as the line height of its label, so an icon never changes the height of a control.

```html
<dma-icon-xmark size="small" />
```

An icon takes the color of the text around it. It's hidden from assistive technology with `aria-hidden="true"`, so give a control that shows only an icon an accessible name of its own.

## Testing

The `@dnd-mapp/ui/components/testing` entry point has a [component harness](https://angular.dev/guide/testing/component-harnesses-overview) for every component, and `@dnd-mapp/ui/icons/testing` has the `IconHarness` for the icons. Use them to test the components of your app that use them. The harnesses need `@angular/cdk`, so install it to use them.

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

Icons from Font Awesome Free 7.3.1 by Fonticons, Inc. (fontawesome.com), licensed under CC BY 4.0 (creativecommons.org/licenses/by/4.0). Scaled and recolored for D&D Mapp. See the [third-party notices](THIRD_PARTY_NOTICES.md).
