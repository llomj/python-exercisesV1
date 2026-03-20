/**
 * Splices French detailed explanations for Level 4 IDs 1451–1500.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr1451_1500 from "./fr-l4-frags/fr-l4-1451-1500.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  1451: `namedtuple crée une sous-classe de tuple";
const END =
  "  1501: `Les accolades {} avec paires clé:valeur";

const blocks = fr1451_1500;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 1451; id <= 1500; id++) {
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
console.log("Patched Level 4 FR 1451–1500, chars", replacement.length);
