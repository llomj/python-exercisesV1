/**
 * Splices French detailed explanations for Level 4 IDs 1201–1250.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr1201_1250 from "./fr-l4-frags/fr-l4-1201-1250.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  1201: `Les crochets [] créent une liste en Python";
const END =
  "  1251: `La méthode index() renvoie l'indice de la première occurrence";

const blocks = fr1201_1250;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 1201; id <= 1250; id++) {
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
console.log("Patched Level 4 FR 1201–1250, chars", replacement.length);
