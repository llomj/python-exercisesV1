/**
 * Splices French detailed explanations for Level 1 IDs 501–600.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr501_520 from "./fr-l1-frags/fr-501-520.mjs";
import fr521_540 from "./fr-l1-frags/fr-521-540.mjs";
import fr541_560 from "./fr-l1-frags/fr-541-560.mjs";
import fr561_580 from "./fr-l1-frags/fr-561-580.mjs";
import fr581_600 from "./fr-l1-frags/fr-581-600.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  501: `Un litteral 'dict' utilise accolades avec paires cledeuxpointsvaleur separees par virgules : mapping cle hashable vers objet valeur.";
const END =
  "  601: `Le mot-clé def définit une fonction en Python. def func(x): return x * 2 définit une fonction nommée func qui prend un paramètre x et retourne x * 2. L'instruction def crée un objet fonction et l'assigne au nom func. C'est une définition de fonction, pas un appel - pour appeler la fonction, vous utiliseriez func(5) qui retournerait 10.";

const blocks = {
  ...fr501_520,
  ...fr521_540,
  ...fr541_560,
  ...fr561_580,
  ...fr581_600,
};

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 501; id <= 600; id++) {
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
console.log("Patched 501–600, chars", replacement.length);
