/**
 * Splices French detailed explanations for Level 7 IDs 2301–2350 (level7_expert_a.ts, 50 questions).
 * Replaces misaligned block that started with @dataclass at 2301 (bank Q1 is « what is a decorator »).
 * END: next ID 2351 is level7_expert_b (descriptors) — do not use 2401 or 2351–2400 will be deleted.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import blocks from "./fr-l7-frags/fr-l7-2301-2350.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START = "  2301: `Le @dataclass";
const END = "  2351: `Un descripteur";

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let replacement = "";
for (let id = 2301; id <= 2350; id++) {
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
console.log("Patched Level 7 FR 2301–2350, chars", replacement.length);
