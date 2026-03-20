/**
 * Rebuilds French detailed explanations for bank IDs 3201–3300:
 * - Fixes prior +4 misalignment (3201–3246 → 3205–3250; old 3247–3250 → 3251–3254).
 * - Inserts new FR for 3201–3204 (textwrap, Template, logging intro).
 * - Appends 3255–3300 (PEP8 tail, asyncio, idioms, Zen, DRY).
 *
 * Replaces the span from `  3201: ` through the line before `  402: `.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import frGap from "./fr-l10-frags/fr-l10-3201-3204-gap.mjs";
import frOldA from "./fr-l10-frags/fr-l10-3201-3225.mjs";
import frOldB from "./fr-l10-frags/fr-l10-3226-3250.mjs";
import fr3255a from "./fr-l10-frags/fr-l10-3255-3282.mjs";
import fr3283b from "./fr-l10-frags/fr-l10-3283-3300.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const old = { ...frOldA, ...frOldB };
const blocks = {};

for (let i = 0; i < 46; i++) {
  const nk = 3205 + i;
  const ok = 3201 + i;
  if (old[ok] === undefined) {
    console.error("Missing old FR for id", ok);
    process.exit(1);
  }
  blocks[nk] = old[ok];
}
blocks[3251] = old[3247];
blocks[3252] = old[3248];
blocks[3253] = old[3249];
blocks[3254] = old[3250];

Object.assign(blocks, frGap);
Object.assign(blocks, fr3255a);
Object.assign(blocks, fr3283b);

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let insertion = "";
for (let id = 3201; id <= 3300; id++) {
  if (blocks[id] === undefined) {
    console.error("Missing FR block for id", id);
    process.exit(1);
  }
  insertion += ent(id, blocks[id]);
}

let s = fs.readFileSync(target, "utf8");
const startMark = "  3201: `";
const endMark = "\n  402: `";
const start = s.indexOf(startMark);
const end = s.indexOf(endMark);
if (start === -1 || end === -1 || end <= start) {
  console.error("Could not find 3201…402 span — aborting");
  process.exit(1);
}
if (s.includes("\n  3301: `")) {
  console.error("3301 already present — aborting");
  process.exit(1);
}

const before = s.slice(0, start);
// Avoid double newline: insertion already ends with `,\n`; skip leading `\n` of endMark
const after = s.slice(end + 1);
s = before + insertion + after;
fs.writeFileSync(target, s);
console.log("Rebuilt FR detailed blocks 3201–3300 (aligned + extended).");
