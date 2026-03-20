/**
 * Splices French detailed explanations for Level 3 IDs 1001–1050.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr1001_1050 from "./fr-l3-frags/fr-l3-1001-1050.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  1001: `Quand une boucle for est terminée par break";
const END =
  "  1051: `Le pattern de compteur dict utilise dict.get(clé, défaut)";

const blocks = fr1001_1050;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 1001; id <= 1050; id++) {
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
console.log("Patched Level 3 FR 1001–1050, chars", replacement.length);
