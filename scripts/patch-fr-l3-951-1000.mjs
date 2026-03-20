/**
 * Splices French detailed explanations for Level 3 IDs 951–1000.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr951_1000 from "./fr-l3-frags/fr-l3-951-1000.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  951: `C'est a simple decorator that retourne la fonction originale inchangés";
const END =
  "  1001: `Quand une boucle for est terminée par break";

const blocks = fr951_1000;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 951; id <= 1000; id++) {
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
console.log("Patched Level 3 FR 951–1000, chars", replacement.length);
