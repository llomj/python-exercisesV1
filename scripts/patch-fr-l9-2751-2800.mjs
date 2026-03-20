/**
 * Splices French detailed explanations for Level 9 IDs 2751–2800 (level9.ts Q51–100).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr2751_2775 from "./fr-l9-frags/fr-l9-2751-2775.mjs";
import fr2776_2800 from "./fr-l9-frags/fr-l9-2776-2800.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  2751: `C'est a simple decorator qui retourne la fonction originale inchangés. The @decorator syntax applies the decorator to the function definition. Since the decorator just returns func, the decorated function behaves exactly like la fonction originale. C'est essentially a no-op decorator, useful for testing or as a template.";
const END =
  "  2801: `Metaclasses are classes that create classes. isinstance(MyClass, Meta) returns True because MyClass is an instance of the Meta metaclass. Meta is the metaclass that created MyClass.";

const blocks = { ...fr2751_2775, ...fr2776_2800 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2751; id <= 2800; id++) {
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
const out = s.slice(0, i) + replacement + s.slice(j);
fs.writeFileSync(target, out);
console.log("Patched Level 9 FR 2751–2800, chars", replacement.length);
