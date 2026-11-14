import { access, readFile } from 'node:fs/promises';
import { resolve, sep } from 'node:path';

const distDirectory = resolve('dist');
const entries = ['index.html', 'flyers/index.html'];

for (const entry of entries) {
  const htmlPath = resolve(distDirectory, entry);
  const html = await readFile(htmlPath, 'utf8');

  if (html.includes('/src/main.tsx')) {
    throw new Error(
      `${entry} references the Vite source entry instead of built assets`
    );
  }

  const assetPaths = [
    ...html.matchAll(/(?:src|href)="([^"]+\.(?:js|css))"/g),
  ].map(([, assetPath]) => assetPath);

  if (!assetPaths.some((assetPath) => assetPath.endsWith('.js'))) {
    throw new Error(`${entry} is missing a compiled JavaScript entry`);
  }

  if (!assetPaths.some((assetPath) => assetPath.endsWith('.css'))) {
    throw new Error(`${entry} is missing a compiled stylesheet`);
  }

  for (const assetPath of assetPaths) {
    const outputPath = resolve(distDirectory, `.${assetPath}`);
    if (!outputPath.startsWith(`${distDirectory}${sep}`)) {
      throw new Error(`${entry} references an invalid build asset path`);
    }

    await access(outputPath);
  }
}

console.log('Production HTML entries and compiled assets verified.');
