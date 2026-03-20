/**
 * Splices French detailed explanations for Level 3 IDs 1051–1100.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr1051_1100 from "./fr-l3-frags/fr-l3-1051-1100.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  1051: `Le pattern de compteur dict utilise dict.get(clé, défaut)";
const END =
  "  1101: `Cette approche itérative calcule base^exp";

const blocks = fr1051_1100;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 1051; id <= 1100; id++) {
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
console.log("Patched Level 3 FR 1051–1100, chars", replacement.length);
