/**
 * Splices French detailed explanations for Level 8 IDs 2401–2450 (level8.ts Q1–50).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2401_2425 from "./fr-l8-frags/fr-l8-2401-2425.mjs";
import fr2426_2450 from "./fr-l8-frags/fr-l8-2426-2450.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  2401: `L'héritage est un mécanisme qui permet à une classe enfant (sous-classe) d'hériter des fonctionnalités d'une classe parente (superclasse). Quand vous define class Child(Parent), the child class automatically gets access to the parent class's attributes and methods. Cela permet code reuse and creates an \"is-a\" relationship - a Child is a type of Parent. The child can use parent features as-is, or override them to provide different behavior. Inheritance is one of the core principles of object-oriented programming.";
const END =
  "  2451: `Double underscore prefix (__) triggers name mangling, making attributes \"private\" by changing their name. If class MyClass: def __init__(self): self.__x = 1; obj = MyClass(); obj.__x, then obj.__x lève an AttributeError car Python automatically renomme __x en _MyClass__x (en ajoutant le préfixe du nom de classe). C'est name mangling - Python changes the attribute name to include the class name, making it plus difficile d'accès from outside the class. The attribute still exists, but with a different name (_MyClass__x), so accès direct via __x échoue.";

const blocks = { ...fr2401_2425, ...fr2426_2450 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2401; id <= 2450; id++) {
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
console.log("Patched Level 8 FR 2401–2450, chars", replacement.length);
