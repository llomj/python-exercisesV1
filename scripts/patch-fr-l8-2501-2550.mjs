/**
 * Splices French detailed explanations for Level 8 IDs 2501–2550 (level8_intermediate_a.ts Q1–50).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2501_2525 from "./fr-l8-frags/fr-l8-2501-2525.mjs";
import fr2526_2550 from "./fr-l8-frags/fr-l8-2526-2550.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  2501: `Toute classe Python hérite implicitement de object. L'attribut __mro__ affiche le tuple des classes que Python parcourt pour résoudre les attributs ou méthodes.";
const END =
  "  2551: `You can subclass built-in types like list, dict, str, int, and set to add custom behavior while retaining all original functionality.";

const blocks = { ...fr2501_2525, ...fr2526_2550 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2501; id <= 2550; id++) {
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
console.log("Patched Level 8 FR 2501–2550, chars", replacement.length);
