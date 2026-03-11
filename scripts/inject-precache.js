#!/usr/bin/env node
/**
 * Injects the list of assets to precache into sw.js from the built index.html.
 * Run after `vite build`. Ensures offline works: SW has exact asset list at build time.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const root = path.resolve(__dirname, '..');
const distIndex = path.join(root, 'dist', 'index.html');
const swTemplate = path.join(root, 'sw.js');
const distSw = path.join(root, 'dist', 'sw.js');

if (!fs.existsSync(distIndex)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}
if (!fs.existsSync(swTemplate)) {
  console.error('sw.js template not found.');
  process.exit(1);
}

const html = fs.readFileSync(distIndex, 'utf8');

// Extract paths like /python-exercisesV1/assets/xxx.js or xxx.css
const assetRegex = /(?:src|href)="(\/[^"]*\/assets\/[^"]+\.(?:js|css))"/g;
const assets = [];
let m;
while ((m = assetRegex.exec(html)) !== null) {
  if (!assets.includes(m[1])) assets.push(m[1]);
}

// Base path: e.g. /python-exercisesV1/ from first asset
let basePath = '/';
if (assets.length) {
  const first = assets[0];
  const idx = first.indexOf('/assets/');
  if (idx !== -1) basePath = first.slice(0, idx + 1);
}
if (!basePath.endsWith('/')) basePath += '/';

const precacheList = [
  basePath,
  basePath.endsWith('/') ? basePath.slice(0, -1) : basePath,
  basePath + 'index.html',
  basePath + 'manifest.json',
  ...assets
];

let swContent = fs.readFileSync(swTemplate, 'utf8');
const placeholder = 'const PRECACHE_ASSETS = []; // BUILD_INJECT';
const replacement = 'const PRECACHE_ASSETS = ' + JSON.stringify(precacheList) + '; // BUILD_INJECT';
if (!swContent.includes(placeholder)) {
  console.error('sw.js template missing PRECACHE_ASSETS placeholder.');
  process.exit(1);
}
swContent = swContent.replace(placeholder, replacement);

fs.writeFileSync(distSw, swContent, 'utf8');
console.log('Injected', precacheList.length, 'precache URLs into dist/sw.js');
