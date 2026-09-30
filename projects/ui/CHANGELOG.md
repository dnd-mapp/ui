# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- The `ButtonComponent`, with the `button[dma-button]` selector, in the `Primary` variant and the `Medium` size. Import it from `@dnd-mapp/ui/components`.
- The `variant` input of `ButtonComponent`, with the `primary`, `secondary`, `ghost`, and `danger` variants. It defaults to `primary`, and so does the bare `variant` attribute. The `ButtonVariants` constant, the `ButtonVariant` type, and `DEFAULT_BUTTON_VARIANT` list the values.
- The `ButtonHarness` component harness, in the `@dnd-mapp/ui/components/testing` entry point.
- `@angular/cdk` 22.2 or later as an optional peer dependency, for the component harnesses.

[Unreleased]: https://github.com/dnd-mapp/ui/commits/main
