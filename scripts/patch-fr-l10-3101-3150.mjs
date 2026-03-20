/**
 * Inserts French detailed explanations for bank IDs 3101–3150:
 * level10IntermediateA Q1–49 (3101–3149) + first Q of level10IntermediateB (3150).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr3101_3125 from "./fr-l10-frags/fr-l10-3101-3125.mjs";
import fr3126_3150 from "./fr-l10-frags/fr-l10-3126-3150.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const blocks = { ...fr3101_3125, ...fr3126_3150 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let insertion = "";
for (let id = 3101; id <= 3150; id++) {
  if (blocks[id] === undefined) {
    console.error("Missing FR block for id", id);
    process.exit(1);
  }
  insertion += ent(id, blocks[id]);
}

const end3100 = "• Réponse : 55 — 1re option.`";
const body402FirstLine =
  '"  hello  ".lstrip() renvoie "hello  " : lstrip retire les blancs de gauche seulement.\n';

const needle = end3100 + ",\n  402: `" + body402FirstLine;
const replacement = end3100 + ",\n" + insertion + "  402: `" + body402FirstLine;

let s = fs.readFileSync(target, "utf8");
if (!s.includes(needle)) {
  console.error("Needle not found — aborting");
  process.exit(1);
}
if (s.includes("\n  3101: `")) {
  console.error("ID 3101 already present — aborting");
  process.exit(1);
}
s = s.replace(needle, replacement);
fs.writeFileSync(target, s);
console.log("Inserted FR detailed blocks 3101–3150.");
