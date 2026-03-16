/**
 * Replaces French detailed explanations for Level 1 (IDs 302-600) with a
 * generic 10-section block so structure matches English (Concepts clés,
 * Ordre des opérations in number format, etc.). ID 301 is already correct.
 * Run from repo root: node scripts/add-level1-french.cjs
 */

const fs = require('fs');
const path = require('path');

const FR_PATH = path.join(__dirname, '../src/data/detailedExplanationsTranslations.ts');

const FR_BLOCK = `Description approfondie pour ce concept (niveau 1 : types, chaînes, variables, octets, etc.).

Concepts clés :
• Voir l'explication détaillée en anglais ci-dessus pour les idées principales et les points clés.

Distinctions clés :
• Comparer avec les types ou opérations proches (ex. int vs float, str vs bytes) et les méthodes similaires.
• Distinguer cette opération ou ce type d'autres que les débutants pourraient confondre (ex. type() vs isinstance(), mutable vs immuable).

Fonctionnement :
• Python évalue d'abord l'expression ou le littéral, puis applique l'opération (ex. type(), appel de méthode ou fonction intégrée).
• Le résultat est renvoyé ou produit selon la sémantique de cette opération.

Exécution étape par étape :
1. Les littéraux ou sous-expressions de l'expression sont évalués (ex. l'argument de type(), ou la chaîne avant un appel de méthode).
2. L'opération principale est appliquée (recherche de type, invocation de méthode ou fonction intégrée).
3. L'opération se termine et renvoie une valeur (ou None si applicable).
4. Dans le REPL ou une affectation, le résultat est affiché ou stocké.

Ordre des opérations :
1. Les littéraux et sous-expressions les plus internes sont évalués en premier, de gauche à droite le cas échéant.
2. Les appels de méthode ou de fonction sont évalués : les arguments sont évalués de gauche à droite, puis l'appel est effectué.
3. L'opération se termine et produit sa valeur de retour.
4. Aucun autre opérateur ou opérande ne reste dans cette expression une fois l'appel terminé.
5. L'affichage ou l'utilisation du résultat a lieu après que l'expression complète a été évaluée.

Cas d'utilisation courants :
• Vérifier les types ou résultats dans le REPL ; enseigner le concept aux débutants ; valider les données avant utilisation.
• Utiliser ce motif dans des scripts pour brancher sur le type ou pour garantir un comportement correct avec différentes entrées.

Cas limites :
• Voir l'explication ci-dessus pour les cas limites (ex. valeurs vides, None, sous-classes, encodage ou conditions aux limites).
• Considérer ce qui se passe avec les collections vides, les clés manquantes ou les arguments invalides le cas échéant.

Considérations de performance :
• L'opération est typiquement rapide à l'échelle débutant ; les types et méthodes intégrés sont très optimisés en CPython.
• Dans les chemins critiques, préférer isinstance() à type() quand les sous-classes sont acceptées ; éviter les vérifications de type répétées dans les boucles serrées lorsque c'est possible.

Exemples :
• Voir l'exemple ou les exemples ci-dessus ; essayer le même motif avec des valeurs ou expressions proches pour renforcer la compréhension.

Remarques :
• Utiliser isinstance() lorsque vous devez accepter les sous-classes ; suivre la PEP 8 pour le style et les noms ; consulter la documentation officielle pour les détails complets.`;

function escapeBackticks(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function main() {
  let content = fs.readFileSync(FR_PATH, 'utf8');

  // Find start of 302 (after 301's entry) and start of 601
  const start302 = content.indexOf('\n  302: `');
  const start601 = content.indexOf('\n  601: `');
  if (start302 === -1 || start601 === -1) {
    console.error('Could not find 302 or 601 boundary');
    process.exit(1);
  }

  const before = content.slice(0, start302);
  const after = content.slice(start601); // includes "\n  601: `..."

  const entries = [];
  for (let id = 302; id <= 600; id++) {
    entries.push('  ' + id + ': `' + FR_BLOCK + '`');
  }
  const replacement = '\n' + entries.join(',\n') + ',';

  const newContent = before + replacement + after;
  fs.writeFileSync(FR_PATH, newContent);
  console.log('Replaced French entries 302-600 with generic 10-section block. Total:', 600 - 302 + 1, 'entries.');
}

main();
