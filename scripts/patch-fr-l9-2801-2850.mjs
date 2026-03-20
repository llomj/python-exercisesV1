/**
 * Splices French detailed explanations for Level 9 IDs 2801–2850 (level9_intermediate_a.ts Q1–50).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2801_2825 from "./fr-l9-frags/fr-l9-2801-2825.mjs";
import fr2826_2850 from "./fr-l9-frags/fr-l9-2826-2850.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  2801: `Metaclasses are classes that create classes. isinstance(MyClass, Meta) returns True because MyClass is an instance of the Meta metaclass. Meta is the metaclass that created MyClass.";
const END =
  "  2851: `Le .group(n) méthode renvoie the text matched by the nth capturing group. Group numbers start at 1. Group 0 is special and renvoie the entire match.";

const blocks = { ...fr2801_2825, ...fr2826_2850 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2801; id <= 2850; id++) {
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
console.log("Patched Level 9 FR 2801–2850, chars", replacement.length);
