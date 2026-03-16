/**
 * Replaces French detailed explanations for Level 2 (IDs 601-900) with a
 * generic 10-section block so structure matches English (Concepts clés,
 * Ordre des opérations in number format, etc.).
 * Run from repo root: node scripts/add-level2-french.cjs
 */

const fs = require('fs');
const path = require('path');

const FR_PATH = path.join(__dirname, '../src/data/detailedExplanationsTranslations.ts');

const FR_BLOCK = `Description approfondie pour ce concept (niveau 2 : mathématiques, expressions, ordre des opérations, fonctions, etc.).

Concepts clés :
• Voir l'explication détaillée en anglais ci-dessus pour les idées principales et les points clés.

Distinctions clés :
• Comparer avec les opérations proches (ex. / vs //, ** vs *, PEMDAS) et les expressions similaires.
• Distinguer cette opération ou expression d'autres que les apprenants pourraient confondre.

Fonctionnement :
• Python évalue l'expression selon la priorité et l'associativité des opérateurs.
• Le résultat est renvoyé ou produit selon la sémantique de l'opération.

Exécution étape par étape :
1. Les littéraux ou sous-expressions sont évalués (parenthèses d'abord, puis exposants, puis * / // %, puis + -, etc.).
2. L'opération principale est appliquée dans le bon ordre des opérations.
3. L'opération se termine et renvoie une valeur (ou None si applicable).
4. Dans le REPL ou une affectation, le résultat est affiché ou stocké.

Ordre des opérations :
1. Les littéraux et sous-expressions les plus internes (y compris les parenthèses) sont évalués en premier.
2. Les exposants (**) sont évalués ensuite (droite à gauche si chaînés).
3. Multiplication, division, division entière et modulo (* / // %) sont évalués de gauche à droite.
4. Addition et soustraction (+ -) sont évaluées de gauche à droite.
5. L'affichage ou l'utilisation du résultat a lieu après que l'expression complète a été évaluée.

Cas d'utilisation courants :
• Écrire des expressions arithmétiques correctes ; enseigner PEMDAS et la priorité des opérateurs ; valider des expressions.

Cas limites :
• Voir l'explication ci-dessus pour les cas limites (ex. division par zéro, dépassement, type du résultat).
• Considérer ce qui se passe avec les types mixtes, les parenthèses et les opérateurs chaînés.

Considérations de performance :
• Les opérations arithmétiques sont très optimisées en CPython.
• Dans les chemins critiques, éviter les calculs lourds répétés ; envisager la mise en cache ou la simplification des expressions si possible.

Exemples :
• Voir l'exemple ou les exemples ci-dessus ; essayer le même motif avec des valeurs ou expressions proches pour renforcer la compréhension.

Remarques :
• Suivre PEMDAS ; utiliser les parenthèses pour rendre l'ordre explicite en cas de doute ; consulter la documentation officielle pour les tables de priorité complètes.`;

function main() {
  let content = fs.readFileSync(FR_PATH, 'utf8');

  const start601 = content.indexOf('\n  601: `');
  const start901 = content.indexOf('\n  901: `');
  if (start601 === -1 || start901 === -1) {
    console.error('Could not find 601 or 901 boundary');
    process.exit(1);
  }

  const before = content.slice(0, start601);
  const after = content.slice(start901);

  const entries = [];
  for (let id = 601; id <= 900; id++) {
    entries.push('  ' + id + ': `' + FR_BLOCK + '`');
  }
  const replacement = '\n' + entries.join(',\n') + ',';

  const newContent = before + replacement + after;
  fs.writeFileSync(FR_PATH, newContent);
  console.log('Replaced French entries 601-900 with generic 10-section block. Total:', 900 - 601 + 1, 'entries.');
}

main();
