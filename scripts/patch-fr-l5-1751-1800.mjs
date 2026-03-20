/**
 * Splices French detailed explanations for Level 5 IDs 1751–1800 (level5_expert_b).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr1751_1800 from "./fr-l5-frags/fr-l5-1751-1800.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  1751: `Tous les types intégrés immuables en Python sont hashables";
const END =
  "  1801: `Le def keyword defines a fonction";

const blocks = fr1751_1800;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 1751; id <= 1800; id++) {
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
console.log("Patched Level 5 FR 1751–1800, chars", replacement.length);
