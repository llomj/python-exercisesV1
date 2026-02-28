/**
 * Generate French detailed explanations for IDs 2151-2250.
 * Reads extract_2151_2250.json and outputs translated content.
 */
const fs = require('fs');
const j = JSON.parse(fs.readFileSync('scripts/extract_2151_2250.json', 'utf8'));

const translations = {
  "Key concepts": "Concepts clés",
  "How it works": "Comment ça fonctionne",
  "Examples": "Exemples",
  "Common uses": "Usages courants",
  "Example": "Exemple",
};

function translateBlock(text) {
  if (!text) return '';
  let t = text;
  t = t.replace(/\bKey concepts:/g, 'Concepts clés :');
  t = t.replace(/\bHow it works:/g, 'Comment ça fonctionne :');
  t = t.replace(/\bExamples:/g, 'Exemples :');
  t = t.replace(/\bCommon uses:/g, 'Usages courants :');
  t = t.replace(/\bExample:/g, 'Exemple :');
  t = t.replace(/The __str__ method defines/gi, 'La méthode __str__ définit');
  t = t.replace(/the string representation/gi, 'la représentation en chaîne');
  t = t.replace(/when you use/gi, 'lorsque vous utilisez');
  t = t.replace(/on an object/gi, "sur un objet");
  t = t.replace(/It should return/gi, "Elle doit renvoyer");
  t = t.replace(/human-readable/gi, "lisible");
  t = t.replace(/called by/gi, "appelé par");
  t = t.replace(/returns/gi, "renvoie");
  t = t.replace(/If class/gi, "Si class");
  t = t.replace(/then/gi, "alors");
  // Keep Python code, __str__, __repr__, etc. unchanged - only translate prose
  return t;
}

const out = [];
for (let id = 2151; id <= 2250; id++) {
  const de = j[id]?.de || '';
  const translated = translateBlock(de);
  // Escape for TypeScript template literal
  const escaped = translated.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  out.push(`  ${id}: \`${escaped}\`,`);
}
fs.writeFileSync('/tmp/detailed_fr_2151_2250.txt', out.join('\n'));
console.log('Wrote', out.length, 'entries to /tmp/detailed_fr_2151_2250.txt');
