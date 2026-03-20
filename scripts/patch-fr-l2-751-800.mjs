/**
 * Splices French detailed explanations for Level 2 IDs 751–800 (math.fabs, modf, prod, remainder, isqrt, dist, fmod, exp, pow, tau, inf, float gotcha, underscores, literals, abs, divmod, round, max/min/sorted, sum, pow mod, bool).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr751_800 from "./fr-l2-frags/fr-l2-751-800.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START =
  "  751: `print() utilise __str__ si disponible, sinon __repr__.";
const END =
  "  801: `L'héritage est un mécanisme qui permet à une classe enfant";

const blocks = fr751_800;

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 751; id <= 800; id++) {
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
console.log("Patched Level 2 FR 751–800, chars", replacement.length);
