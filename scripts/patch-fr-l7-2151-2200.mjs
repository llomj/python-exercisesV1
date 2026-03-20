/**
 * Splices French detailed explanations for Level 7 IDs 2151–2200 (level7.ts Q51–100).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2151_2200 from "./fr-l7-frags/fr-l7-2151-2200.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START = "  2151: `La méthode __str__";
const END = "  2201: `La méthode __eq__";

const blocks = fr2151_2200;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2151; id <= 2200; id++) {
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
console.log("Patched Level 7 FR 2151–2200, chars", replacement.length);
