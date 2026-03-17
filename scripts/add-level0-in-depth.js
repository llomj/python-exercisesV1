/**
 * Appends the 10-section in-depth block to every Level 0 detailed explanation
 * that doesn't already have "Key Concepts:". Reads level0.ts and
 * detailedExplanationsTranslations.ts, appends the block before the closing `), or `},
 * and writes back. Preserves existing content; only adds missing sections.
 *
 * Run from repo root: node scripts/add-level0-in-depth.js
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

function escapeForTemplate(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function addBlockToLevel0() {
  let content = fs.readFileSync(LEVEL0_PATH, 'utf8');
  if (content.includes('Key Concepts:') && !content.match(/Key Concepts:\s*\n\s*• See Beginner/)) {
    // Already has custom Key Concepts in at least one entry; don't overwrite
    const count = (content.match(/Key Concepts:/g) || []).length;
    if (count >= 300) {
      console.log('level0.ts: all 300 entries already have Key Concepts. Skipping.');
      return;
    }
  }

  // Find each mk("...", [...], num, "short", `...Expert:...`), where the backtick content does NOT contain "Key Concepts:"
  const mkPattern = /(mk\("[^"]+",\s*\[[^\]]+\],\s*\d+,\s*"[^"]*",\s*`)([\s\S]*?)(`\s*\),)/g;
  let replaced = 0;
  content = content.replace(mkPattern, (match, prefix, body, suffix) => {
    if (body.includes('Key Concepts:')) return match;
    const newBody = body.trimEnd() + EN_BLOCK;
    replaced++;
    return prefix + newBody + suffix;
  });
  console.log('level0.ts: added 10-section block to', replaced, 'entries.');
  fs.writeFileSync(LEVEL0_PATH, content);
}

function addBlockToFrench() {
  let content = fs.readFileSync(FR_PATH, 'utf8');
  // DETAILED_EXPLANATIONS_FR: Record<number, string> = { id: `...Expert :...`, ... }
  // We need to find each id: `...Expert :...` that does NOT contain "Concepts clés :" and append FR_BLOCK before the closing `,
  const entryPattern = /(\d+):\s*`([\s\S]*?)`(?=\s*,|\s*})/g;
  let replaced = 0;
  content = content.replace(entryPattern, (fullMatch, id, body) => {
    const numId = parseInt(id, 10);
    if (numId > 300) return fullMatch; // only Level 0 is 1-300
    if (body.includes('Concepts clés :') || body.includes('Key Concepts:')) return fullMatch;
    const newBody = body.trimEnd() + FR_BLOCK;
    replaced++;
    return id + ': `' + newBody + '`';
  });
  console.log('detailedExplanationsTranslations.ts: added 10-section block to', replaced, 'Level 0 entries.');
  fs.writeFileSync(FR_PATH, content);
}

addBlockToLevel0();
addBlockToFrench();
console.log('Done.');
