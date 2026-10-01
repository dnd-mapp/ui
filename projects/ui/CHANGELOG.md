# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- The `ButtonComponent`, with the `button[dma-button]` selector. Import it from `@dnd-mapp/ui/components`.
- The `variant` input of `ButtonComponent`, with the `primary`, `secondary`, `ghost`, and `danger` variants. It defaults to `primary`, and so does the bare `variant` attribute. The `ButtonVariants` constant, the `ButtonVariant` type, and `DEFAULT_BUTTON_VARIANT` list the values.
- The `size` input of `ButtonComponent`, with the `small`, `medium`, and `large` sizes. It defaults to `medium`, and so does the bare `size` attribute. The `ButtonSizes` constant, the `ButtonSize` type, and `DEFAULT_BUTTON_SIZE` list the values.
- The icon slots of `ButtonComponent`. Put an icon from `@dnd-mapp/ui/icons` before the label, after it, or both. An icon that sets no `size` takes the size of the button, and the gap between the label and an icon grows with the size.
- The `ButtonHarness` component harness, in the `@dnd-mapp/ui/components/testing` entry point.
- The `variant` filter and the `getVariant()` method of `ButtonHarness`, to find a button by its variant and read it.
- The `size` filter and the `getSize()` method of `ButtonHarness`, to find a button by its size and read it.
- The `getIcons()` method of `ButtonHarness`, which returns an `IconHarness` for each icon in the button, in the order they show. It takes the filters of `IconHarness`, such as `glyph`.
- `@angular/cdk` 22.2 or later as an optional peer dependency, for the component harnesses.
- The `@dnd-mapp/ui/icons` entry point, with a component for each glyph: `IconChevronDownComponent`, `IconCircleNotchComponent`, `IconPlusComponent`, and `IconXmarkComponent`, with the `dma-icon-chevron-down`, `dma-icon-circle-notch`, `dma-icon-plus`, and `dma-icon-xmark` selectors. The glyphs come from Font Awesome Free 7.3.1, under CC BY 4.0, and the `IconGlyphs` constant and the `IconGlyph` type list their names.
- The `size` input of the icons, with the `small`, `medium`, and `large` sizes. Without it, or with the bare `size` attribute, an icon takes the size of the control around it, or `medium` outside one. The `IconSizes` constant, the `IconSize` type, and `DEFAULT_ICON_SIZE` list the values.
- The `ICON_SIZE` injection token, which a control provides to size the icons inside it after its own size, such as the icons in the slots of a button.
- The `IconHarness` component harness, in the `@dnd-mapp/ui/icons/testing` entry point, with the `glyph` and `size` filters and the `getGlyph()` and `getSize()` methods.
- The `THIRD_PARTY_NOTICES.md` file, with the credit and the license of Font Awesome Free.
- The `@dnd-mapp/ui/testing` entry point, with the `resolveStyle()` function. It resolves a CSS value that names design tokens to what the browser computes for it, to check that a component is styled with the tokens.

[Unreleased]: https://github.com/dnd-mapp/ui/commits/main
