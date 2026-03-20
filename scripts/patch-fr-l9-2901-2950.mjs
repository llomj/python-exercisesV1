/**
 * Splices French detailed explanations for Level 9 IDs 2901–2950 (level9_expert_a.ts Q1–50).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2901_2925 from "./fr-l9-frags/fr-l9-2901-2925.mjs";
import fr2926_2950 from "./fr-l9-frags/fr-l9-2926-2950.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  2901: `textwrap.dedent removes any common leading whitespace from all lines in the text. It inspects all non-empty lines, trouve le longest common whitespace prefix, and removes it.";
const END =
  "  2951: `LBYL stands for \"Look Before You Leap.\" It is a coding style where you check preconditions before performing an operation, rather than catching exceptions après le fact. While valid, LBYL is generally considered less Pythonic than EAFP.";

const blocks = { ...fr2901_2925, ...fr2926_2950 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2901; id <= 2950; id++) {
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
console.log("Patched Level 9 FR 2901–2950, chars", replacement.length);
