import { build } from 'esbuild';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const srcDir = join(__dirname, '..');
const rootDir = join(__dirname, '../..');

const entryPoint = join(srcDir, 'mutation-observer.ts');
const outputPath = join(rootDir, 'etor-english-script.js');

await build({
  entryPoints: [entryPoint],
  bundle: true,
  outfile: outputPath,
  format: 'iife',
  target: 'es2020',
  minify: true,
});
