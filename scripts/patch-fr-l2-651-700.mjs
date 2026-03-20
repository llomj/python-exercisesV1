/**
 * Splices French detailed explanations for Level 2 IDs 651–700 (strings, comparisons, bool, identity, unary, //, %, round).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr651_670 from "./fr-l2-frags/fr-l2-651-670.mjs";
import fr671_690 from "./fr-l2-frags/fr-l2-671-690.mjs";
import fr691_700 from "./fr-l2-frags/fr-l2-691-700.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  651: `Les fonctions peuvent accéder aux variables globales (définies à l'extérieur de la fonction). Si x = 1; def func(): return x; func(), alors func() retourne 1 car la fonction peut lire les variables globales. Quand une fonction référence une variable non définie localement, Python cherche dans la portée englobante (portée globale) et trouve x = 1, donc utilise cette valeur. C'est ce qu'on appelle la recherche de variable – Python parcourt de la portée locale à la globale.";
const END =
  "  701: `Le mot-clé class définit une nouvelle classe. Si class MyClass: pass, alors cela définit une classe nommée MyClass. L'instruction class crée un objet classe, qui sert de modèle pour créer des instances (objets). L'instruction pass est un placeholder qui ne fait rien - elle est utilisée quand un corps de classe est vide. Les classes sont fondamentales pour la programmation orientée objet en Python, permettant de définir des types personnalisés avec attributs et méthodes.";

const blocks = { ...fr651_670, ...fr671_690, ...fr691_700 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 651; id <= 700; id++) {
  if (blocks[id] === undefined) {
    console.error("Missing FR block for id", id);
    process.exit(1);
  }
  replacement += ent(id, blocks[id]);
}

let s = fs.readFileSync(target, "utf8");
const i = s.indexOf(START);
const j = s.indexOf(END);
if (i === -1 || j === -1) {
  console.error("Markers not found", { i, j });
  process.exit(1);
}
if (j <= i) {
  console.error("Bad marker order");
  process.exit(1);
}
fs.writeFileSync(target, s.slice(0, i) + replacement + s.slice(j));
console.log("Patched Level 2 FR 651–700, chars", replacement.length);
