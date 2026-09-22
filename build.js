import { mkdir, rm, copyFile, cp, writeFile } from 'node:fs/promises';
import { getAssetSvg } from './assets-generator.js';
await rm('dist', {recursive: true, force: true});
await mkdir('dist', {recursive: true});
for (const file of ['index.html', 'styles.css', 'app.js', 'config.js', 'favicon.svg']) await copyFile(file, `dist/${file}`);
await cp('assets', 'dist/assets', {recursive: true});
await writeFile('dist/assets/logo.svg', getAssetSvg('logo.svg'));
console.log('Static site built in dist');
