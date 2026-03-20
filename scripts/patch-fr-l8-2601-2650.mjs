/**
 * Splices French detailed explanations for Level 8 IDs 2601–2650 (level8_expert_a.ts Q1–50).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2601_2625 from "./fr-l8-frags/fr-l8-2601-2625.mjs";
import fr2626_2650 from "./fr-l8-frags/fr-l8-2626-2650.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  2601: `Abstract classes that contain @abstractmethod methods cannot be instantiated directly. Attempting to do so raises TypeError because the abstract method area() has not been implemented in a concrete subclass.";
const END =
  "  2651: `Lorsqu'une classe hérite d'un attribut, elle peut y accéder via le MRO, mais il n'apparaît pas dans le __dict__ propre de la sous-classe.";

const blocks = { ...fr2601_2625, ...fr2626_2650 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2601; id <= 2650; id++) {
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
console.log("Patched Level 8 FR 2601–2650, chars", replacement.length);
