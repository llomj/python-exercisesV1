/**
 * Splices French detailed explanations for Level 9 IDs 2951–3000 (level9_expert_b.ts Q51–100).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2951_2975 from "./fr-l9-frags/fr-l9-2951-2975.mjs";
import fr2976_3000 from "./fr-l9-frags/fr-l9-2976-3000.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  2951: `LBYL stands for \"Look Before You Leap.\" It is a coding style where you check preconditions before performing an operation, rather than catching exceptions après le fact. While valid, LBYL is generally considered less Pythonic than EAFP.";
const END =
  '  402: `"  hello  ".lstrip() renvoie "hello  " : lstrip retire les blancs de gauche seulement.';

const blocks = { ...fr2951_2975, ...fr2976_3000 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2951; id <= 3000; id++) {
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
console.log("Patched Level 9 FR 2951–3000, chars", replacement.length);
