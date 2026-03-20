/**
 * Splices French detailed explanations for Level 4 IDs 1351–1400.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr1351_1400 from "./fr-l4-frags/fr-l4-1351-1400.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  1351: `En Python, les accolades {} sont utilisées";
const END =
  "  1401: `L'assignation par tranche peut remplacer";

const blocks = fr1351_1400;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 1351; id <= 1400; id++) {
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
console.log("Patched Level 4 FR 1351–1400, chars", replacement.length);
