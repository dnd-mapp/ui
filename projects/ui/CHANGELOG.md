# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- The `ButtonComponent`, with the `button[dma-button]` selector. Import it from `@dnd-mapp/ui/components`.
- The `variant` input of `ButtonComponent`, with the `primary`, `secondary`, `ghost`, and `danger` variants. It defaults to `primary`, and so does the bare `variant` attribute. The `ButtonVariants` constant, the `ButtonVariant` type, and `DEFAULT_BUTTON_VARIANT` list the values.
- The `size` input of `ButtonComponent`, with the `small`, `medium`, and `large` sizes. It defaults to `medium`, and so does the bare `size` attribute. The `ButtonSizes` constant, the `ButtonSize` type, and `DEFAULT_BUTTON_SIZE` list the values.
- The icon slots of `ButtonComponent`. Put an icon from `@dnd-mapp/ui/icons` before the label, after it, or both. An icon that sets no `size` takes the size of the button, and the gap between the label and an icon grows with the size.
- The `loading` input of `ButtonComponent`, for the `Loading` state. A loading button blocks clicks through `aria-disabled` but keeps focus. After 300ms, it shows a spinning `circle-notch` in place of its label and icons for at least 500ms, and announces itself to screen readers.
- The `loadingLabel` input of `ButtonComponent`, the word that screen readers announce once the spinner shows, such as `Saving`. It defaults to `Loading`.
- The `ButtonHarness` component harness, in the `@dnd-mapp/ui/components/testing` entry point.
- The `variant` filter and the `getVariant()` method of `ButtonHarness`, to find a button by its variant and read it.
- The `size` filter and the `getSize()` method of `ButtonHarness`, to find a button by its size and read it.
- The `getIcons()` method of `ButtonHarness`, which returns an `IconHarness` for each icon in the slots of the button, in the order they show. It leaves out the spinner of a loading button. It takes the filters of `IconHarness`, such as `glyph`.
- The `loading` filter and the `isLoading()` method of `ButtonHarness`, to find a button by whether it's loading and read it.
- `@angular/cdk` 22.2 or later as a peer dependency, for the live region that announces a loading button, and for the component harnesses.
- The `@dnd-mapp/ui/icons` entry point, with a component for each glyph: `IconChevronDownComponent`, `IconCircleNotchComponent`, `IconPlusComponent`, and `IconXmarkComponent`, with the `dma-icon-chevron-down`, `dma-icon-circle-notch`, `dma-icon-plus`, and `dma-icon-xmark` selectors. The glyphs come from Font Awesome Free 7.3.1, under CC BY 4.0, and the `IconGlyphs` constant and the `IconGlyph` type list their names.
- The `size` input of the icons, with the `small`, `medium`, and `large` sizes. Without it, or with the bare `size` attribute, an icon takes the size of the control around it, or `medium` outside one. The `IconSizes` constant, the `IconSize` type, and `DEFAULT_ICON_SIZE` list the values.
- The `spin` input of the icons, which turns an icon once per second at a steady speed, or once every 3 seconds when the user prefers reduced motion. Use it on `circle-notch` for a control that is busy.
- The `ICON_SIZE` injection token, which a control provides to size the icons inside it after its own size, such as the icons in the slots of a button.
- The `IconHarness` component harness, in the `@dnd-mapp/ui/icons/testing` entry point, with the `glyph` and `size` filters and the `getGlyph()` and `getSize()` methods.
- The `spinning` filter and the `isSpinning()` method of `IconHarness`, to find an icon by whether it spins and read it.
- The `THIRD_PARTY_NOTICES.md` file, with the credit and the license of Font Awesome Free.
- The `@dnd-mapp/ui/testing` entry point, with the `resolveStyle()` function. It resolves a CSS value that names design tokens to what the browser computes for it, to check that a component is styled with the tokens.
- The `getFrame()` and `resolveFrame()` functions and the `Frame` type, in the `@dnd-mapp/ui/testing` entry point. `getFrame()` returns the width and the height that the browser computes for an element or the host of a component harness. `resolveFrame()` resolves a length that names design tokens to a square frame, to check that an element, such as an icon, is sized with the tokens.

[Unreleased]: https://github.com/dnd-mapp/ui/commits/main
