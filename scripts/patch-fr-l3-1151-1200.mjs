/**
 * Splices French detailed explanations for Level 3 IDs 1151–1200.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr1151_1200 from "./fr-l3-frags/fr-l3-1151-1200.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  1151: `Cette expression est évaluée gauche-droite";
const END =
  "  1201: `Les crochets [] créent une liste en Python";

const blocks = fr1151_1200;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 1151; id <= 1200; id++) {
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
console.log("Patched Level 3 FR 1151–1200, chars", replacement.length);
