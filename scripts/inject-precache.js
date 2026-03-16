#!/usr/bin/env node
/**
 * Injects the list of assets to precache into sw.js from the built dist folder.
 * Run after `vite build`. Ensures offline works: SW has exact asset list at build time.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const root = path.resolve(__dirname, '..');
const distIndex = path.join(root, 'dist', 'index.html');
const distAssetsDir = path.join(root, 'dist', 'assets');
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

// Derive base path (e.g. /python-exercisesV1/) from any asset reference or env override
const envBase = process.env.VITE_BASE_REPO ? `/${process.env.VITE_BASE_REPO}/` : null;
const assetRegex = /(\/[^"']*\/assets\/[^"']+\.(?:js|css))/;
const baseMatch = html.match(assetRegex);
let basePath = envBase || '/';
if (baseMatch && baseMatch[1]) {
  const first = baseMatch[1];
  const idx = first.indexOf('/assets/');
  if (idx !== -1) basePath = first.slice(0, idx + 1);
}
if (!basePath.endsWith('/')) basePath += '/';

// Collect every built asset (including lazily loaded chunks) for guaranteed offline
const assets = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else {
        const rel = path.relative(path.join(root, 'dist'), fullPath).replace(/\\/g, '/');
        assets.push(basePath + rel);
    }
  }
}
if (fs.existsSync(distAssetsDir)) walk(distAssetsDir);

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

// Bump cache name per build so the new SW purges old caches and the phone PWA gets updates
const buildId = String(Date.now());
const cacheNamePlaceholder = "const CACHE_NAME = 'python-exercises-learn-offline-BUILD_ID'; // Replaced by inject-precache.js";
const cacheNameReplacement = `const CACHE_NAME = 'python-exercises-learn-offline-${buildId}';`;
if (swContent.includes(cacheNamePlaceholder)) {
  swContent = swContent.replace(cacheNamePlaceholder, cacheNameReplacement);
}

fs.writeFileSync(distSw, swContent, 'utf8');
console.log('Injected', precacheList.length, 'precache URLs into dist/sw.js');

// Inject build id into index.html so the app can show it (phone PWA: if you see v1.0.5, the loaded HTML was cached)
const htmlWithBuild = html.replace('</body>', `<script>window.__APP_BUILD__="${buildId}";</script>\n</body>`);
fs.writeFileSync(distIndex, htmlWithBuild, 'utf8');
console.log('Injected build id into dist/index.html');
