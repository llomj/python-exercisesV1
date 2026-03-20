/**
 * Splices French detailed explanations for Level 9 IDs 2701–2750 (level9.ts Q1–50).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2701_2725 from "./fr-l9-frags/fr-l9-2701-2725.mjs";
import fr2726_2750 from "./fr-l9-frags/fr-l9-2726-2750.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  2701: `try/except est le mécanisme de gestion des exceptions de Python qui permet au code de gérer élégamment les erreurs et conditions inattendues. Le bloc try contient le code qui pourrait lever une exception, et le bloc except capture et gère ces exceptions. Si une exception survient dans le bloc try, l'exécution saute immédiatement au bloc except, ignorant tout code restant dans le bloc try. Cela empêche le programme de planter et permet une gestion d'erreur appropriée.";
const END =
  "2751: `C'est a simple decorator qui retourne la fonction originale inchangés. The @decorator syntax applies the decorator to the function definition. Since the decorator just returns func, the decorated function behaves exactly like la fonction originale. C'est essentially a no-op decorator, useful for testing or as a template.";

const blocks = { ...fr2701_2725, ...fr2726_2750 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2701; id <= 2750; id++) {
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
let out = s.slice(0, i) + replacement + s.slice(j);
// Normalize mis-indented key 2751 (historical glitch: missing two spaces before id)
out = out.replace(
  /(^|\n)2751: `/,
  "$1  2751: `"
);
fs.writeFileSync(target, out);
console.log("Patched Level 9 FR 2701–2750, chars", replacement.length);
