/**
 * Splices French detailed explanations for Level 2 IDs 601–650 (numeric / conversions).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr601_620 from "./fr-l2-frags/fr-l2-601-620.mjs";
import fr621_640 from "./fr-l2-frags/fr-l2-621-640.mjs";
import fr641_650 from "./fr-l2-frags/fr-l2-641-650.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  601: `Le mot-clé def définit une fonction en Python. def func(x): return x * 2 définit une fonction nommée func qui prend un paramètre x et retourne x * 2. L'instruction def crée un objet fonction et l'assigne au nom func. C'est une définition de fonction, pas un appel - pour appeler la fonction, vous utiliseriez func(5) qui retournerait 10.";
const END =
  "  651: `Les fonctions peuvent accéder aux variables globales (définies à l'extérieur de la fonction). Si x = 1; def func(): return x; func(), alors func() retourne 1 car la fonction peut lire les variables globales. Quand une fonction référence une variable non définie localement, Python cherche dans la portée englobante (portée globale) et trouve x = 1, donc utilise cette valeur. C'est ce qu'on appelle la recherche de variable – Python parcourt de la portée locale à la globale.";

const blocks = { ...fr601_620, ...fr621_640, ...fr641_650 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 601; id <= 650; id++) {
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
console.log("Patched Level 2 FR 601–650, chars", replacement.length);
