/**
 * Splices French detailed explanations for Level 4 IDs 1401–1450.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr1401_1450 from "./fr-l4-frags/fr-l4-1401-1450.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  1401: `L'assignation par tranche peut remplacer";
const END =
  "  1451: `namedtuple crée une sous-classe de tuple";

const blocks = fr1401_1450;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 1401; id <= 1450; id++) {
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
console.log("Patched Level 4 FR 1401–1450, chars", replacement.length);
