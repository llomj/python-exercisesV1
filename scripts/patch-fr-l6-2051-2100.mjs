/**
 * Splices French detailed explanations for Level 6 IDs 2051–2100 (level6_expert_b.ts Q51–100).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2051_2100 from "./fr-l6-frags/fr-l6-2051-2100.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  2051: `functools.reduce";
const END =
  "  2101: `Le mot-clé class";

const blocks = fr2051_2100;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2051; id <= 2100; id++) {
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
console.log("Patched Level 6 FR 2051–2100, chars", replacement.length);
