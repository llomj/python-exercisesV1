/**
 * Splices French detailed explanations for Level 2 IDs 701–750 (math module, floor/ceil/trunc, constants, inf/nan, log, factorial, divmod, round, fsum, copysign, pow, isclose, degrees/radians, hypot).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr701_750 from "./fr-l2-frags/fr-l2-701-750.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  701: `Le mot-clé class définit une nouvelle classe. Si class MyClass: pass, alors cela définit une classe nommée MyClass.";
const END =
  "  751: `print() utilise __str__ si disponible, sinon __repr__.";

const blocks = fr701_750;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 701; id <= 750; id++) {
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
console.log("Patched Level 2 FR 701–750, chars", replacement.length);
