/**
 * Splices French detailed explanations for Level 6 IDs 1801–1850 (level6.ts Q1–50).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr1801_1850 from "./fr-l6-frags/fr-l6-1801-1850.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  1801: `Le def keyword defines a fonction";
const END =
  "  1851: `Les fonctions peuvent accéder";

const blocks = fr1801_1850;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 1801; id <= 1850; id++) {
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
console.log("Patched Level 6 FR 1801–1850, chars", replacement.length);
