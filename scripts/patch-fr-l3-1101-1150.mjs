/**
 * Splices French detailed explanations for Level 3 IDs 1101–1150.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr1101_1150 from "./fr-l3-frags/fr-l3-1101-1150.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  1101: `Cette approche itérative calcule base^exp";
const END =
  "  1151: `Cette expression est évaluée gauche-droite";

const blocks = fr1101_1150;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 1101; id <= 1150; id++) {
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
console.log("Patched Level 3 FR 1101–1150, chars", replacement.length);
