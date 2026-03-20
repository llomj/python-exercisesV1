/**
 * Splices French detailed explanations for Level 5 IDs 1701–1750 (level5_expert_a).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr1701_1750 from "./fr-l5-frags/fr-l5-1701-1750.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  1701: `Counter is a dict subclass from the collections module";
const END =
  "  1751: `Tous les types intégrés immuables en Python sont hashables";

const blocks = fr1701_1750;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 1701; id <= 1750; id++) {
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
console.log("Patched Level 5 FR 1701–1750, chars", replacement.length);
