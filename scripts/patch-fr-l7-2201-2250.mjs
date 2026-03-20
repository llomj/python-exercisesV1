/**
 * Splices French detailed explanations for Level 7 IDs 2201–2250 (level7_intermediate_a.ts, 50 questions).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2201_2250 from "./fr-l7-frags/fr-l7-2201-2250.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START = "  2201: `La méthode __eq__";
/** END must be the next ID after 2250 — do not use 2301 or IDs 2251–2300 will be deleted. */
const END = "  2251: `__getattr__";

const blocks = fr2201_2250;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2201; id <= 2250; id++) {
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
console.log("Patched Level 7 FR 2201–2250, chars", replacement.length);
