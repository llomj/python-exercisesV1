/**
 * Splices French detailed explanations for Level 9 IDs 2851–2900 (level9_intermediate_b.ts Q1–50).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2851_2875 from "./fr-l9-frags/fr-l9-2851-2875.mjs";
import fr2876_2900 from "./fr-l9-frags/fr-l9-2876-2900.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  2851: `Le .group(n) méthode renvoie the text matched by the nth capturing group. Group numbers start at 1. Group 0 is special and renvoie the entire match.";
const END =
  "  2901: `textwrap.dedent removes any common leading whitespace from all lines in the text. It inspects all non-empty lines, trouve le longest common whitespace prefix, and removes it.";

const blocks = { ...fr2851_2875, ...fr2876_2900 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2851; id <= 2900; id++) {
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
console.log("Patched Level 9 FR 2851–2900, chars", replacement.length);
