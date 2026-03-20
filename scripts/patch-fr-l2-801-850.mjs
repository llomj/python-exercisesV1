/**
 * Splices French detailed explanations for Level 2 IDs 801–850 (match/case, walrus operator).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr801_850 from "./fr-l2-frags/fr-l2-801-850.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  801: `match/case (structural pattern matching) introduit en Python 3.10.";
const END =
  "  851: `bool(float(\"nan\")) vaut True : NaN est truthy";

const blocks = fr801_850;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 801; id <= 850; id++) {
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
console.log("Patched Level 2 FR 801–850, chars", replacement.length);
