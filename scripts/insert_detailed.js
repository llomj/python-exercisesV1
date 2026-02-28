const fs = require('fs');
const detailedPath = 'src/data/detailedExplanationsTranslations.ts';
const content = fs.readFileSync(detailedPath, 'utf8');
const frContent = fs.readFileSync('scripts/fr_detailed_2151_2250.ts', 'utf8');
const frLines = frContent.split('\n').slice(2); // skip "// Paste..." and blank
const frBlock = frLines.join('\n').trim();

const marker = `  1850: \`Les fonctions peuvent renvoyer n'importe quel type de valeur`;
const endMarker = `};`;

const idx = content.indexOf(marker);
const idxEnd = content.indexOf(endMarker, idx);
if (idx < 0 || idxEnd < 0) {
  console.error('Marker not found');
  process.exit(1);
}

const before = content.substring(0, idxEnd);
const after = content.substring(idxEnd);
const oldEntry = content.substring(idx, idxEnd);

// Replace the closing }; of the 1850 entry with our new content + };
const newEntry = oldEntry.replace(
  /\};$/,
  ',\n  // IDs 2151-2250: Level 8 (magic methods, properties, iteration, context managers)\n  ' + frBlock + '\n};'
);

const newContent = content.substring(0, idx) + newEntry + content.substring(idxEnd + 2);
// Actually: before ends at }; so we need before (up to and including 1850 line) + frBlock + };
const parts = content.split(/\n(\};)\n\n\(\/\*\*)/);
if (parts.length < 2) {
  console.error('Split failed');
  process.exit(1);
}

// Simpler: find "1850: `...`" and the following "};" that closes the object
const re = /(  1850: `[^`]*`)\n(\};)\n\n(\/\*\*)/;
const m = content.match(re);
if (!m) {
  console.error('Regex failed');
  process.exit(1);
}

const newContent2 = content.replace(
  re,
  m[1] + ',\n  // IDs 2151-2250: Level 8\n  ' + frBlock + '\n' + m[2] + '\n\n' + m[3]
);

fs.writeFileSync(detailedPath, newContent2);
console.log('Done');
