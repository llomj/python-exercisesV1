/**
 * Splices French detailed explanations for Level 7 IDs 2351–2400 (level7_expert_b.ts).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2351_2375 from "./fr-l7-frags/fr-l7-2351-2375.mjs";
import fr2376_2400 from "./fr-l7-frags/fr-l7-2376-2400.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  2351: `Un descripteur est un attribut d'objet avec un comportement de liaison — dont l'accès aux attributs a été remplacé par des méthodes du protocole descripteur.";
const END =
  "  2401: `L'héritage est un mécanisme qui permet à une classe enfant (sous-classe) d'hériter des fonctionnalités d'une classe parente (superclasse). Quand vous define class Child(Parent), the child class automatically gets access to the parent class's attributes and methods. Cela permet code reuse and creates an \"is-a\" relationship - a Child is a type of Parent. The child can use parent features as-is, or override them to provide different behavior. Inheritance is one of the core principles of object-oriented programming.";

const blocks = { ...fr2351_2375, ...fr2376_2400 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2351; id <= 2400; id++) {
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
console.log("Patched Level 7 FR 2351–2400, chars", replacement.length);
