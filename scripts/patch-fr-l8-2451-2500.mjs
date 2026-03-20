/**
 * Splices French detailed explanations for Level 8 IDs 2451–2500 (level8.ts Q51–100).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2451_2475 from "./fr-l8-frags/fr-l8-2451-2475.mjs";
import fr2476_2500 from "./fr-l8-frags/fr-l8-2476-2500.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  2451: `Double underscore prefix (__) triggers name mangling, making attributes \"private\" by changing their name. If class MyClass: def __init__(self): self.__x = 1; obj = MyClass(); obj.__x, then obj.__x lève an AttributeError car Python automatically renomme __x en _MyClass__x (en ajoutant le préfixe du nom de classe). C'est name mangling - Python changes the attribute name to include the class name, making it plus difficile d'accès from outside the class. The attribute still exists, but with a different name (_MyClass__x), so accès direct via __x échoue.";
const END =
  "  2501: `Toute classe Python hérite implicitement de object. L'attribut __mro__ affiche le tuple des classes que Python parcourt pour résoudre les attributs ou méthodes.";

const blocks = { ...fr2451_2475, ...fr2476_2500 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2451; id <= 2500; id++) {
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
console.log("Patched Level 8 FR 2451–2500, chars", replacement.length);
