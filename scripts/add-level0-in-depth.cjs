/**
 * Appends the 10-section in-depth block to every Level 0 detailed explanation
 * that doesn't already have "Key Concepts:".
 * Run from repo root: node scripts/add-level0-in-depth.cjs
 */

const fs = require('fs');
const path = require('path');

const LEVEL0_PATH = path.join(__dirname, '../src/data/questions/level0.ts');
const FR_PATH = path.join(__dirname, '../src/data/detailedExplanationsTranslations.ts');

const EN_BLOCK = `

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`;

const FR_BLOCK = `

Concepts clés :
• Voir les sections Débutant et Expert pour les idées principales.
Distinctions clés :
• Comparer avec les types proches (int vs float, str vs bytes) comme en Expert.
Fonctionnement :
• Python évalue le littéral ou l'expression, puis type() renvoie sa classe.
Exécution étape par étape :
• 1. Évaluer l'expression. 2. Appeler type(...). 3. type() renvoie la classe. 4. Le REPL l'affiche.
Ordre des opérations :
• Littéraux et sous-expressions d'abord ; puis type() est appliqué.
Cas d'utilisation courants :
• Vérifier les types dans le REPL ; enseigner les différences de types ; valider une entrée.
Cas limites :
• Voir la section Expert (None, collections vides, sous-classes).
Considérations de performance :
• type() est peu coûteux ; la création de littéraux est très optimisée.
Exemples :
• Voir les sections Expert et Intermédiaire ; essayer le même motif avec des valeurs proches.
Remarques :
• Utiliser isinstance(x, Type) pour accepter les sous-classes.`;

// Level 0: first 50 entries end with `), ; entries 51–300 end with `], 
const DELIM_RE = /(`\),\s*|`\],\s*)/;

function addBlockToLevel0() {
  let content = fs.readFileSync(LEVEL0_PATH, 'utf8');
  const countWithKeyConcepts = (content.match(/Key Concepts:/g) || []).length;
  if (countWithKeyConcepts >= 300) {
    console.log('level0.ts: all 300 already have Key Concepts. Skipping.');
    return;
  }
  const parts = content.split(DELIM_RE);
  let replaced = 0;
  for (let i = 0; i < 300; i++) {
    const idx = i * 2;
    const chunk = parts[idx];
    if (!chunk) continue;
    const openBacktick = chunk.indexOf('`');
    if (openBacktick === -1) continue;
    const body = chunk.slice(openBacktick + 1);
    if (body.includes('Key Concepts:')) continue;
    parts[idx] = chunk.slice(0, openBacktick + 1) + body.trimEnd() + EN_BLOCK;
    replaced++;
  }
  fs.writeFileSync(LEVEL0_PATH, parts.join(''));
  console.log('level0.ts: added 10-section block to', replaced, 'entries.');
}

function addBlockToFrench() {
  let content = fs.readFileSync(FR_PATH, 'utf8');
  const entryRe = new RegExp('^(\\s*)(\\d+):\\s*`([\\s\\S]*?)`(?=\\s*,|\\s*})', 'gm');
  let replaced = 0;
  content = content.replace(entryRe, (_, spaces, id, body) => {
    const numId = parseInt(id, 10);
    if (numId > 300) return spaces + id + ': `' + body + '`';
    if (body.includes('Concepts clés :') || body.includes('Key Concepts:')) return spaces + id + ': `' + body + '`';
    replaced++;
    return spaces + id + ': `' + body.trimEnd() + FR_BLOCK + '`';
  });
  fs.writeFileSync(FR_PATH, content);
  console.log('detailedExplanationsTranslations.ts: added 10-section block to', replaced, 'Level 0 entries.');
}

addBlockToLevel0();
addBlockToFrench();
console.log('Done.');
