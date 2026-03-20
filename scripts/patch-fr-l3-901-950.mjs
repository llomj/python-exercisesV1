/**
 * Splices French detailed explanations for Level 3 IDs 901–950 (Conditionals, Booleans, Logic).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr901_950 from "./fr-l3-frags/fr-l3-901-950.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  901: `try/except is Python's exception handling mechanism";
const END =
  "  951: `C'est a simple decorator that retourne la fonction originale inchangés";

const blocks = fr901_950;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 901; id <= 950; id++) {
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
console.log("Patched Level 3 FR 901–950, chars", replacement.length);
