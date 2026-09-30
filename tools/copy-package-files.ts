import { copyFile } from 'node:fs/promises';

/** The files in the repository root that the published package includes. */
const files = ['CHANGELOG.md', 'LICENSE', 'README.md'];

/** The directory that ng-packagr writes the package to. */
const outDir = 'dist/ui';

await Promise.all(files.map((file) => copyFile(file, `${outDir}/${file}`)));
