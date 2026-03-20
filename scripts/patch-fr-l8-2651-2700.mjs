/**
 * Splices French detailed explanations for Level 8 IDs 2651–2700 (level8_expert_b.ts Q51–100).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2651_2675 from "./fr-l8-frags/fr-l8-2651-2675.mjs";
import fr2676_2700 from "./fr-l8-frags/fr-l8-2676-2700.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  2651: `Lorsqu'une classe hérite d'un attribut, elle peut y accéder via le MRO, mais il n'apparaît pas dans le __dict__ propre de la sous-classe.";
const END =
  "  2701: `try/except est le mécanisme de gestion des exceptions de Python qui permet au code de gérer élégamment les erreurs et conditions inattendues. Le bloc try contient le code qui pourrait lever une exception, et le bloc except capture et gère ces exceptions. Si une exception survient dans le bloc try, l'exécution saute immédiatement au bloc except, ignorant tout code restant dans le bloc try. Cela empêche le programme de planter et permet une gestion d'erreur appropriée.";

const blocks = { ...fr2651_2675, ...fr2676_2700 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2651; id <= 2700; id++) {
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
console.log("Patched Level 8 FR 2651–2700, chars", replacement.length);
