/**
 * Splices French detailed explanations for Level 2 IDs 851–900 (bool/truthiness, True/False semantics).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr851_900 from "./fr-l2-frags/fr-l2-851-900.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  851: `0.1 + 0.1 + 0.1 - 0.3 donne ~5.55e-17 : imprécision float IEEE 754";
const END =
  "  901: `try/except is Python's exception handling mechanism";

const blocks = fr851_900;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 851; id <= 900; id++) {
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
console.log("Patched Level 2 FR 851–900, chars", replacement.length);
