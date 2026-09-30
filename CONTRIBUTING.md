# Contributing

Thank you for your interest in contributing to `@dnd-mapp/ui`.

This package publishes the presentational Angular components of the D&D Mapp apps. The components in the `Design system` Figma file are the source of truth for how a component looks and behaves, and [`@dnd-mapp/design-tokens`](https://github.com/dnd-mapp/design-tokens) supplies the values it's styled with.

## Before you start

Design a component, or change its design, in Figma first. A component that only exists in code drifts away from the designs.

Open an [issue](https://github.com/dnd-mapp/ui/issues) to discuss any change beyond a typo fix before you send a pull request. This avoids work on changes that do not fit the goals of the package.

## Development setup

The required Node and pnpm versions are set in `devEngines` in `package.json`. They are enforced through `engineStrict`, so installing with other versions fails.

Install the dependencies, and the Chromium browser that the tests run in, with:

```bash
pnpm install
pnpm exec playwright install chromium
```

Dependency versions live in the catalogs in `pnpm-workspace.yaml`, which uses `catalogMode: strict`. Add or bump versions there and reference them in `package.json`. Use `catalog:` for the default catalog and a named catalog such as `catalog:angular` for a group of packages.

Newly published releases are held back for three days through `minimumReleaseAge`. You may need to wait before you can bump to a very recent version.

Install [actionlint](https://github.com/rhysd/actionlint) to lint the workflows locally, for example with `brew install actionlint`. CI runs the version that `.github/actions/ci/action.yaml` pins.

## Git hooks

[Lefthook](https://lefthook.dev/) installs the Git hooks when you run `pnpm install`. The hooks are defined in `lefthook.yaml`. `pnpm-workspace.yaml` turns off the side-effects cache of pnpm, because a cached build of lefthook skips the script that installs the hooks. If the hooks are still missing, install them with `pnpm exec lefthook install`.

| Hook         | Runs                                           | On                        |
|:-------------|:-----------------------------------------------|:--------------------------|
| `pre-commit` | Prettier, markdownlint-cli2, and ESLint checks | The staged files          |
| `commit-msg` | commitlint                                     | The message of the commit |

The pre-commit hooks only check files. Run `pnpm run format` to fix formatting issues, and `pnpm exec eslint --fix` to apply the fixes that ESLint can make. Stage the result.

## Project layout

The repository is an Angular workspace with a single project, the `ui` library in `projects/ui`. [ng-packagr](https://github.com/ng-packagr/ng-packagr) builds it into the package.

| File                            | Purpose                                                                             |
|:--------------------------------|:------------------------------------------------------------------------------------|
| `angular.json`                  | The workspace config, with the build and test targets of the library                |
| `projects/ui/package.json`      | The manifest of the published package, with its version and peer dependencies       |
| `projects/ui/ng-package.json`   | The ng-packagr config                                                               |
| `projects/ui/src/public-api.ts` | The entry point of the package, which exports the public API                        |
| `projects/ui/src/lib`           | The components, each in a directory of its own                                      |
| `tools/copy-package-files.ts`   | Copies the changelog, the license, and the readme into the package after a build    |
| `vitest.config.ts`              | The Vitest options that the test target in `angular.json` has no builder option for |

The `package.json` in the repository root belongs to the workspace and is never published.

## Components

Every component is presentational. It receives its data through inputs, reports what the user does through outputs, and never injects services that fetch data or hold app state.

- Build each component after its Figma component, with the same variants, sizes, and states.
- Give selectors the `dma` prefix, such as `dma-badge`, or an attribute selector such as `button[dma-button]` for a component that enhances a native element.
- Write the styles in SCSS. Take colors, spacing, radii, and text styles from the custom properties of the design tokens, such as `var(--dma-spacing-16)`. Only hard code a value when no token fits.
- Keep the components accessible. ESLint checks the templates against the accessibility rules of angular-eslint.
- Export every component from `projects/ui/src/public-api.ts`, and add its name to `public-api.spec.ts`.

Generate a component with the Angular CLI, which writes a TypeScript, a template, an SCSS, and a spec file:

```bash
pnpm ng generate component <name> --project ui
```

## Building and testing

The `build` script builds the library with ng-packagr into `dist/ui`, and copies the changelog, the license, and the readme into it. The release workflow publishes that directory.

Tests use Vitest through the Angular unit-test builder, and run in Chromium through [Playwright](https://playwright.dev/). The builder sets up the Angular `TestBed`, and the Vitest globals, such as `describe`, `it`, `expect`, and `vi`, are available without an import. The test target in `angular.json` holds the test options, and coverage must stay above its thresholds. Its `development` configuration is the default and runs in watch mode with the Vitest UI. The `ci` configuration runs the tests once in headless Chromium.

The builder fails when it finds no spec files, so `public-api.spec.ts` checks the exports of the package until the first component brings its own specs.

`tsconfig.json` holds the compiler options of the workspace, and refers to three projects: `projects/ui/tsconfig.lib.json` for the library, `projects/ui/tsconfig.spec.json` for the specs, and `tsconfig.tools.json` for the scripts and the config files. Only the spec project has the types of the Vitest globals, so the library cannot use them by mistake.

Check and format the repository with these commands. CI runs `format-check`, `lint-md`, `lint-ts`, actionlint, `typecheck`, `build`, and `test-ci`. Run them yourself before you open a pull request.

```bash
pnpm run format-check
pnpm run format
pnpm run lint-md
pnpm run lint-ts
pnpm run typecheck
pnpm run build
pnpm run test-ci
actionlint
```

The `lint-md` script lints the Markdown files with markdownlint. The `lint-ts` script lints the code and the templates with ESLint and angular-eslint. The `typecheck` script checks the TypeScript projects with `tsc -b`, and the `build` script checks the templates. Use `pnpm test` to run the tests in watch mode with the Vitest UI.

## Changelog and versioning

This project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html). Record every notable change for consumers under `[Unreleased]` in `CHANGELOG.md`, using the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format.

The exports of the package, the selectors of the components, and their inputs, outputs, and content slots are the public API. So are the peer dependencies.

| Change                                                                      | Version bump |
|:----------------------------------------------------------------------------|:-------------|
| Remove or rename a component, a selector, an input, or an output            | Major        |
| Raise the minimum version of a peer dependency to a new major version       | Major        |
| Add a component, or add an input, an output, a variant, or a size to one    | Minor        |
| Fix a bug, or change the styles of a component to match its Figma component | Patch        |

Say so in the changelog entry when a change is breaking, and describe what consumers must change.

## Releasing

1. Run the [prepare release workflow](.github/workflows/prepare-release.yaml) on `main` with the part of the version to bump, for example `gh workflow run prepare-release.yaml -f bump=minor`. It bumps the version in `projects/ui/package.json`, and opens the `chore: release X.Y.Z` pull request with auto-merge on.
2. Review and approve the pull request. Once it merges, the `tag` job of the [push workflow](.github/workflows/push-main.yaml) creates the annotated tag `vX.Y.Z` on the merge commit.
3. The [release workflow](.github/workflows/release.yaml) runs the CI checks, verifies the tag and the changelog, builds the package, stages it on npm from `dist/ui`, and creates the GitHub Release.
4. Find the staged version with `pnpm stage list` and approve it with `pnpm stage approve <id>` and 2FA.

If the staged version is wrong, reject it with `pnpm stage reject <id>`. The same version cannot be staged again until then.

## Code style

Follow the rules in `.editorconfig`.

- Use UTF-8 and LF line endings.
- Indent with 4 spaces, or 2 spaces in `package.json` and `pnpm-*.yaml`.
- End every file with a newline and trim trailing whitespace.

Follow these rules for prose, including Markdown files.

- Never hard wrap prose. Write each paragraph or list item on a single line.
- Use US spelling, for example "color" and "behavior".
- Keep every sentence at or under 40 words.
- Pretty print Markdown tables so the columns line up, with alignment markers on every separator line.

## Branches

Create a branch from `main` for each change. Name it `<type>/<short-description>` in lowercase with hyphens between words, for example `feat/button` or `fix/button-focus-ring`.

Use the same types as for commits.

## Commits

Write commit messages that follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

```text
<type>(<optional scope>): <description>
```

Use one of these types.

| Type       | Use for                                                   |
|:-----------|:----------------------------------------------------------|
| `feat`     | A new component, or a new input, output, or variant       |
| `fix`      | A correction to the behavior or the styles of a component |
| `docs`     | Changes to documentation only                             |
| `refactor` | Changes that do not alter the behavior of the package     |
| `test`     | Changes to tests only                                     |
| `build`    | Changes to packaging, dependencies, or tooling            |
| `ci`       | Changes to the workflows                                  |
| `chore`    | Other maintenance that does not fit above                 |

Write the description in the imperative mood, such as "add the button". Mark a breaking change with `!` after the type or scope, and add a `BREAKING CHANGE:` footer that explains what consumers must do.

## Pull requests

- Keep each pull request to one change.
- Link the issue it addresses.
- Update the changelog and README in the same pull request.
- Use a title that follows the commit convention.
- If you have write access, turn on auto-merge once the pull request is open, with `gh pr merge <number> --auto --merge` or the "Enable auto-merge" button. It then merges as soon as it is approved and the checks pass.
- If auto-merge is off, the author merges the pull request once it is approved and the checks pass. A maintainer merges pull requests opened by a contributor without write access.
- Renovate merges its own minor and patch pull requests once the checks pass. A maintainer approves a major update from Renovate and turns on auto-merge for it.
- Update the branch when it falls behind `main`, because auto-merge waits until the branch is up to date. The update dismisses the approval, so the pull request needs a new review.

## License

By contributing, you agree that your contributions are licensed under the [MIT license](LICENSE).
