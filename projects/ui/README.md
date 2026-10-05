# @dnd-mapp/ui

[![npm version](https://img.shields.io/npm/v/@dnd-mapp/ui)](https://www.npmjs.com/package/@dnd-mapp/ui)
[![license](https://img.shields.io/npm/l/@dnd-mapp/ui)](../../LICENSE)

The Angular component library of D&D Mapp. It holds the presentational components of the D&D Mapp apps, built after the components in the `Design system` Figma file and styled with [`@dnd-mapp/design-tokens`](https://github.com/dnd-mapp/design-tokens).

A presentational component only renders what it's given. It takes its data through inputs and reports what the user does through outputs, and it never fetches data or talks to services. The app decides what happens.

## Requirements

- Angular 22.2 or later, with `@angular/core` and `@angular/common`.
- `@dnd-mapp/design-tokens` 1.0 or later.
- `@angular/cdk` 22.2 or later, for the live region that announces a loading button, for the overlay of the tooltip, for the component harnesses, and for `setupHarness()`.

## Installation

```bash
pnpm add @dnd-mapp/ui @dnd-mapp/design-tokens @angular/cdk
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

| Component             | Selector                  | Harness             | Use for                                              |
|:----------------------|:--------------------------|:--------------------|:-----------------------------------------------------|
| `ButtonComponent`     | `button[dma-button]`      | `ButtonHarness`     | An action, such as saving a map                      |
| `IconButtonComponent` | `button[dma-icon-button]` | `IconButtonHarness` | An action with only an icon, such as closing a panel |
| `TooltipDirective`    | `[dmaTooltip]`            | `TooltipHarness`    | The name of a control with only an icon              |

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

Put an icon from `@dnd-mapp/ui/icons` before the label, after it, or both, and import its component next to `ButtonComponent`. An icon that sets no `size` takes the size of the button. The gap between the label and an icon grows with the size.

```html
<button dma-button type="button" (click)="add()"><dma-icon-plus />Add map</button>
<button dma-button type="button" variant="secondary" (click)="openExportMenu()">Export map<dma-icon-chevron-down /></button>
```

Set the `loading` input while the action that the button started runs, such as saving a map, and turn it off once the action ends. A loading button blocks clicks through `aria-disabled="true"` rather than the native `disabled` attribute, so it keeps keyboard focus. It keeps its width and its colors too.

After 300ms, a loading button shows a spinning `circle-notch` in place of its label and icons. The spinner stays at least 500ms, so a fast action shows none and a slow one never flashes it. The button blocks clicks until the spinner hides.

Once the spinner shows, screen readers announce "Loading" through a polite live region. Set the `loadingLabel` input to announce another word, such as "Saving".

```html
<button dma-button type="button" [loading]="saving()" loadingLabel="Saving" (click)="save()">Save map</button>
```

### Icon button

Put `dma-icon-button` on a native `button` element, give it an icon from `@dnd-mapp/ui/icons` as its content, and name it with the required `aria-label` input. Import `IconButtonComponent` next to the component of the icon. Use it where space is tight, such as toolbars and panel headers, and only for well-known icons, such as `xmark` for close.

```html
<button dma-icon-button type="button" aria-label="Close panel" variant="ghost" (click)="close()">
    <dma-icon-xmark />
</button>
```

It takes the `variant`, `size`, `loading`, and `loadingLabel` inputs of `ButtonComponent`, with the same values and defaults. Each size is a square as high as the button of that size, and the icon takes the size of the icon button.

Set the `disabled` input to disable it. A disabled icon button uses `aria-disabled="true"` rather than the native `disabled` attribute, so it stays focusable and can show its tooltip, and it blocks clicks itself. The `disabled` attribute in a template works too: the icon button removes it from the element.

Give every icon button a [tooltip](#tooltip) with the same text as its `aria-label`.

### Tooltip

Put the `dmaTooltip` directive on a control that shows only an icon, such as an icon button, and set it to the name of the control. Import `TooltipDirective` into the component that uses it. The directive creates the tooltip in an overlay of the CDK while it shows, and names the control with its text through `aria-labelledby`.

```html
<button dma-icon-button type="button" aria-label="Close panel" variant="ghost" dmaTooltip="Close panel" (click)="close()">
    <dma-icon-xmark />
</button>
```

The tooltip shows after 500ms of hover, or at once on keyboard focus, and hides 100ms after the pointer leaves or on `Escape`. After one tooltip closes, the next one shows at once for 300ms. On touch, holding the control for 500ms shows the tooltip without pressing the control, and it hides 1.5s after the finger lifts.

It shows above the control by default. Set `dmaTooltipPlacement` to `bottom`, `left`, or `right` to show it on another side. When it doesn't fit there, it flips to the opposite side.

```html
<button dma-icon-button type="button" aria-label="Add layer" dmaTooltip="Add layer" dmaTooltipPlacement="right">
    <dma-icon-plus />
</button>
```

The tooltip needs hover and focus, so it doesn't show on a control with the native `disabled` attribute. A disabled icon button keeps both, so its tooltip still shows.

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

Set the `size` input to `small`, `medium`, or `large`, to match the `Label/Small`, `Label/Medium`, or `Label/Large` text style beside the icon. Without it, an icon takes the size of the control around it, such as a button, or `medium` outside one. Each size is as high as the line height of its label, so an icon never changes the height of a control.

```html
<dma-icon-xmark size="small" />
```

Set the `spin` input to turn an icon, such as `circle-notch` in a control that is busy. It turns once per second at a steady speed. When the user prefers reduced motion, it slows to one turn every 3 seconds instead of stopping, because a spinner that stands still looks frozen.

```html
<dma-icon-circle-notch spin />
```

To size the icons inside a control of your own after its size, provide the `ICON_SIZE` injection token on the control with a signal of the size.

```ts
import { Component, inject, input } from '@angular/core';
import { ICON_SIZE, type IconSize } from '@dnd-mapp/ui/icons';

@Component({
    selector: 'app-chip',
    providers: [{ provide: ICON_SIZE, useFactory: () => inject(ChipComponent).size }],
    template: `<ng-content />`,
})
export class ChipComponent {
    readonly size = input<IconSize>('medium');
}
```

An icon takes the color of the text around it. It's hidden from assistive technology with `aria-hidden="true"`, so give a control that shows only an icon an accessible name of its own.

## Testing

The `@dnd-mapp/ui/components/testing` entry point has a [component harness](https://angular.dev/guide/testing/component-harnesses-overview) for every component, and `@dnd-mapp/ui/icons/testing` has the `IconHarness` for the icons. Use them to test the components of your app that use them.

Load a harness through the harness environment of the CDK.

```ts
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ButtonHarness } from '@dnd-mapp/ui/components/testing';

const loader = TestbedHarnessEnvironment.loader(fixture);
const button = await loader.getHarness(ButtonHarness.with({ text: 'Save map' }));

await button.click();
```

`setupHarness()` from `@dnd-mapp/ui/testing` creates a host component through the `TestBed` and loads the first harness that a query finds inside it. It returns the fixture, the element of the host, the harness loader, and the harness. Configure the `TestBed` before you call it.

```ts
import { ButtonHarness } from '@dnd-mapp/ui/components/testing';
import { setupHarness } from '@dnd-mapp/ui/testing';

const { fixture, harness } = await setupHarness(SaveMapComponent, ButtonHarness.with({ text: 'Save map' }));

await harness.click();
```

`IconButtonHarness.getIcon()` returns the `IconHarness` of the icon of an icon button, and the `label` filter finds an icon button by its `aria-label`.

`TooltipHarness` finds the control of a tooltip by the `text` of the tooltip, and reads the text whether the tooltip shows or not. `show()` moves focus to the control, which shows the tooltip at once, and `hide()` presses `Escape`. `isOpen()` tells whether the tooltip shows, and `getPlacement()` returns the side it shows on.

`ButtonHarness.getIcons()` returns an `IconHarness` for each icon in the slots of a button, in the order they show, so a test can check the glyph and the size of each one. `ButtonHarness.isLoading()` tells whether a button is loading, and the `loading` filter finds a button by it.

The `@dnd-mapp/ui/testing` entry point has `resolveStyle()`, to check that a component of your app is styled with the design tokens. It resolves a CSS value that names tokens to what the browser computes for it inside an element, in the color scheme of that element.

```ts
import { tokens } from '@dnd-mapp/design-tokens';
import { resolveStyle } from '@dnd-mapp/ui/testing';

const header = fixture.nativeElement as HTMLElement;

expect(getComputedStyle(header).paddingInlineStart).toBe(
    resolveStyle('padding-inline-start', tokens.spacing['16'], header),
);
```

It throws when the value names a custom property that nothing defines inside the element, so a misspelled token fails the test.

`getFrame()` returns the width and the height that the browser computes for an element, or for the host of a component harness. `resolveFrame()` resolves a length that names tokens to a square frame, the same way. Compare the two to check that an element is sized with the tokens, such as an icon that is as high as the line height of the label it pairs with.

```ts
import { tokens } from '@dnd-mapp/design-tokens';
import { IconHarness } from '@dnd-mapp/ui/icons/testing';
import { getFrame, resolveFrame } from '@dnd-mapp/ui/testing';

const icon = await loader.getHarness(IconHarness.with({ glyph: 'plus' }));

expect(await getFrame(await icon.host())).toEqual(
    resolveFrame(tokens.text.label.medium['line-height'], fixture.nativeElement),
);
```

`getColors()` returns the colors that the browser computes for an element, or for the host of a component harness, one for each CSS property that you name. `resolveColors()` resolves color tokens under the same keys, and resolves `null` to transparent, for a fill or a border that an element doesn't show. Compare the two to check that an element is colored with the tokens. `resolveColor()` resolves a single token.

```ts
import { tokens } from '@dnd-mapp/design-tokens';
import { getColors, resolveColors } from '@dnd-mapp/ui/testing';

expect(await getColors(await button.host(), { fill: 'background-color', border: 'border-top-color' })).toEqual(
    resolveColors({ fill: tokens.color.background.accent, border: null }, fixture.nativeElement),
);
```

`getLiveRegion()` returns the polite live region that announces to screen readers, or `null` while there is none. A loading button announces its `loadingLabel` there once its spinner shows. The `LiveAnnouncer` of the CDK waits 100ms before it writes the announcement.

## Changelog

Notable changes for consumers of this package are listed in the [changelog](CHANGELOG.md).

## Contributing

Contributions are welcome. See the [contributing guide](../../CONTRIBUTING.md) for details.

## License

[MIT](../../LICENSE) © D&D Mapp

Icons from Font Awesome Free 7.3.1 by Fonticons, Inc. (fontawesome.com), licensed under CC BY 4.0 (creativecommons.org/licenses/by/4.0). Scaled and recolored for D&D Mapp. See the [third-party notices](THIRD_PARTY_NOTICES.md).
