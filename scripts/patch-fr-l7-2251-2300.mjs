/**
 * Splices French detailed explanations for Level 7 IDs 2251–2300 (level7_intermediate_b.ts, 50 questions).
 * START: legacy misplaced block began with __getattr__ at 2251 — replaced with generator/scope/signature FR.
 * END: next ID is 2301 (level7_expert_a); do not use 2351 or IDs 2301–2350 will be deleted.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import blocks from "./fr-l7-frags/fr-l7-2251-2300.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START = "  2251: `__getattr__";
const END = "  2301: `Le @dataclass";

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2251; id <= 2300; id++) {
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
console.log("Patched Level 7 FR 2251–2300, chars", replacement.length);
