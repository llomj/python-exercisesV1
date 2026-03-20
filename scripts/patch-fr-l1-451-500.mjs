/**
 * Splices French detailed explanations for Level 1 IDs 451–500.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr451_460 from "./fr-l1-frags/fr-451-460.mjs";
import fr461_470 from "./fr-l1-frags/fr-461-470.mjs";
import fr471_480 from "./fr-l1-frags/fr-471-480.mjs";
import fr481_490 from "./fr-l1-frags/fr-481-490.mjs";
import fr491_500 from "./fr-l1-frags/fr-491-500.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  451: `index(valeur) renvoie la position de la premiere occurrence. [1, 2, 3].index(2) vaut 1.";
const END =
  "  501: `Un litteral 'dict' utilise accolades avec paires cledeuxpointsvaleur separees par virgules : mapping cle hashable vers objet valeur.";

const blocks = {
  ...fr451_460,
  ...fr461_470,
  ...fr471_480,
  ...fr481_490,
  ...fr491_500,
};

function ent(id, body) {
  const t = typeof body === "string" ? body.trim() : "";
  return `  ${id}: \`${t}\`,\n`;
}

let replacement = "";
for (let id = 451; id <= 500; id++) {
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
console.log("Patched 451–500, chars", replacement.length);
