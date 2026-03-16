/**
 * Replaces French detailed explanations for a given level with a generic 10-section block.
 * Run from repo root: node scripts/add-level-n-french.cjs <level>
 * Example: node scripts/add-level-n-french.cjs 3  (updates IDs 901-1200)
 */

const fs = require('fs');
const path = require('path');

const level = parseInt(process.argv[2], 10);
if (isNaN(level) || level < 3 || level > 10) {
  console.error('Usage: node add-level-n-french.cjs <level> where level is 3-10');
  process.exit(1);
}

const startId = 300 * level + 1;   // 3->901, 4->1201, ... 10->3001
const endId = 300 * (level + 1);   // 3->1200, 4->1500, ... 10->3300

const FR_PATH = path.join(__dirname, '../src/data/detailedExplanationsTranslations.ts');

const FR_BLOCK = `Description approfondie pour ce concept.

Concepts clés :
• Voir l'explication détaillée en anglais ci-dessus pour les idées principales et les points clés.

Distinctions clés :
• Comparer avec les opérations, types ou motifs proches et les constructions similaires.
• Distinguer ceci d'autres éléments que les apprenants pourraient confondre.

Fonctionnement :
• Python évalue ou exécute la construction selon sa sémantique.
• Le résultat ou l'effet de bord est produit comme défini pour cette construction.

Exécution étape par étape :
1. Les sous-expressions ou prérequis sont évalués ou exécutés en premier.
2. L'opération ou la construction principale est appliquée.
3. L'opération se termine et renvoie une valeur ou produit un effet de bord (ou None si applicable).
4. Dans le REPL ou une affectation, le résultat est affiché ou stocké.

Ordre des opérations :
1. Les littéraux et sous-expressions les plus internes sont évalués en premier, de gauche à droite le cas échéant.
2. Les appels de fonction ou de méthode sont évalués : arguments de gauche à droite, puis l'appel est effectué.
3. L'opération se termine et produit sa valeur de retour ou son effet.
4. Aucun autre opérateur ou opérande ne reste dans cette expression une fois l'appel ou la construction terminé.
5. L'affichage ou l'utilisation du résultat a lieu après que l'expression ou l'instruction complète a été évaluée.

Cas d'utilisation courants :
• Utiliser ce motif dans du code réel ; enseigner le concept ; valider le comportement avec différentes entrées.

Cas limites :
• Voir l'explication ci-dessus pour les cas limites (ex. valeurs vides, None, bornes, exceptions).
• Considérer ce qui se passe avec des entrées invalides ou aux limites le cas échéant.

Considérations de performance :
• Les opérations intégrées sont très optimisées en CPython.
• Dans les chemins critiques, éviter le travail lourd répété ; envisager la mise en cache ou des motifs plus simples si possible.

Exemples :
• Voir l'exemple ou les exemples ci-dessus ; essayer le même motif avec des valeurs ou expressions proches pour renforcer la compréhension.

Remarques :
• Suivre la PEP 8 et les bonnes pratiques ; consulter la documentation officielle pour les détails complets.`;

function main() {
  let content = fs.readFileSync(FR_PATH, 'utf8');

  let before, after;

  if (level === 10) {
    // French file currently ends at 3000; we need to append 3001-3300 before closing };
    const closeMarker = '`,\n};';
    const closeIdx = content.indexOf(closeMarker);
    if (closeIdx === -1) {
      console.error('Could not find closing `,\n}; for object');
      process.exit(1);
    }
    before = content.slice(0, closeIdx + 2); // include "`,
    after = content.slice(closeIdx + 2);    // "\n};" and rest
  } else {
    const startMarker = '\n  ' + startId + ': `';
    const startIdx = content.indexOf(startMarker);
    if (startIdx === -1) {
      console.error('Could not find start boundary for ID ' + startId);
      process.exit(1);
    }
    let endIdx = content.indexOf('\n  ' + (endId + 1) + ': `');
    if (endIdx === -1 && endId === 3000) {
      const closeIdx = content.indexOf('`,\n};');
      if (closeIdx === -1) {
        console.error('Could not find closing `,\n};');
        process.exit(1);
      }
      before = content.slice(0, startIdx);
      after = content.slice(closeIdx + 2);
    } else if (endIdx === -1) {
      console.error('Could not find end boundary for ID ' + (endId + 1));
      process.exit(1);
    } else {
      before = content.slice(0, startIdx);
      after = content.slice(endIdx);
    }
  }

  const entries = [];
  for (let id = startId; id <= endId; id++) {
    entries.push('  ' + id + ': `' + FR_BLOCK + '`');
  }
  const replacement = (level === 10 ? '\n' + entries.join(',\n') + ',' : '\n' + entries.join(',\n') + ',');
  const newContent = before + replacement + after;
  fs.writeFileSync(FR_PATH, newContent);
  console.log(level === 10 ? 'Appended' : 'Replaced', 'French entries ' + startId + '-' + endId + '. Total:', endId - startId + 1, 'entries.');
}

main();
