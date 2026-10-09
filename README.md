# D&D Mapp UI

[![push main](https://github.com/dnd-mapp/ui/actions/workflows/push-main.yaml/badge.svg?branch=main)](https://github.com/dnd-mapp/ui/actions/workflows/push-main.yaml)
[![npm version](https://img.shields.io/npm/v/@dnd-mapp/ui)](https://www.npmjs.com/package/@dnd-mapp/ui)
[![license](https://img.shields.io/npm/l/@dnd-mapp/ui)](LICENSE)

The source of [`@dnd-mapp/ui`](projects/ui/README.md), the Angular component library of D&D Mapp. It holds the presentational components of the D&D Mapp apps, built after the components in the `Design system` Figma file and styled with [`@dnd-mapp/design-tokens`](https://github.com/dnd-mapp/design-tokens).

The repository is an Angular workspace with a single project, the library in `projects/ui`. Read the [package readme](projects/ui/README.md) to install and use the components, and browse them in the [Storybook of `main`](https://dnd-mapp.github.io/ui/main/).

## Getting started

Install Node and pnpm in the versions that `devEngines` in `package.json` sets, then install the dependencies and the Chromium browser that the tests run in.

```bash
pnpm install
pnpm exec playwright install chromium
```

Run the tests in watch mode with the Vitest UI, or build the package into `dist/ui`.

```bash
pnpm test
pnpm run build
```

Serve Storybook on port 6006 to see the components in the light and the dark theme.

```bash
pnpm run storybook
```

## Contributing

Read the [shared contributing guide](https://github.com/dnd-mapp/.github/blob/main/CONTRIBUTING.md) for how to take part and the conventions that every D&D Mapp repository follows. The [contributing guide of this repository](docs/contributing/README.md) adds its layout, its checks, and its release steps.

## License

[MIT](LICENSE) © D&D Mapp
