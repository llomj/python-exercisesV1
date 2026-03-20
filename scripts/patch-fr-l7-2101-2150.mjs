/**
 * Splices French detailed explanations for Level 7 IDs 2101–2150 (level7.ts Q1–50).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2101_2150 from "./fr-l7-frags/fr-l7-2101-2150.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START = "  2101: `Le mot-clé class";
const END = "  2151: `La méthode __str__";

const blocks = fr2101_2150;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2101; id <= 2150; id++) {
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
console.log("Patched Level 7 FR 2101–2150, chars", replacement.length);
