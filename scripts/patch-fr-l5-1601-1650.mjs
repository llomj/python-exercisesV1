/**
 * Splices French detailed explanations for Level 5 IDs 1601–1650 (level5_intermediate_a).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr1601_1650 from "./fr-l5-frags/fr-l5-1601-1650.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  1601: `L'accès aux dictionnaires imbriqués utilise des crochets chaînés";
const END =
  "  1651: `Cette compréhension imbriquée construit un dict";

const blocks = fr1601_1650;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 1601; id <= 1650; id++) {
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
console.log("Patched Level 5 FR 1601–1650, chars", replacement.length);
