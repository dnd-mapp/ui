# D&D Mapp UI

[![push main](https://github.com/dnd-mapp/ui/actions/workflows/push-main.yaml/badge.svg?branch=main)](https://github.com/dnd-mapp/ui/actions/workflows/push-main.yaml)
[![npm version](https://img.shields.io/npm/v/@dnd-mapp/ui)](https://www.npmjs.com/package/@dnd-mapp/ui)
[![license](https://img.shields.io/npm/l/@dnd-mapp/ui)](LICENSE)

The source of [`@dnd-mapp/ui`](projects/ui/README.md), the Angular component library of D&D Mapp. It holds the presentational components of the D&D Mapp apps, built after the components in the `Design system` Figma file and styled with [`@dnd-mapp/design-tokens`](https://github.com/dnd-mapp/design-tokens).

The repository is an Angular workspace with a single project, the library in `projects/ui`. Read the [package readme](projects/ui/README.md) to install and use the components.

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

Contributions are welcome. See the [contributing guide](CONTRIBUTING.md) for the project layout, the checks, the release steps, and the commit conventions.

## License

[MIT](LICENSE) © D&D Mapp
