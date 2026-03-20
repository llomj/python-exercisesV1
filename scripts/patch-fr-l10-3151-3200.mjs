/**
 * Inserts French detailed explanations for bank IDs 3151–3200:
 * level10IntermediateB Q51–98 (3151–3198) + level10ExpertA Q1–2 (3199–3200).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr3151_3175 from "./fr-l10-frags/fr-l10-3151-3175.mjs";
import fr3176_3200 from "./fr-l10-frags/fr-l10-3176-3200.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const blocks = { ...fr3151_3175, ...fr3176_3200 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let insertion = "";
for (let id = 3151; id <= 3200; id++) {
  if (blocks[id] === undefined) {
    console.error("Missing FR block for id", id);
    process.exit(1);
  }
  insertion += ent(id, blocks[id]);
}

const end3150 = "• Réponse : [1, 2, 3, 4, 5] — 1re option.`";
const body402FirstLine =
  '"  hello  ".lstrip() renvoie "hello  " : lstrip retire les blancs de gauche seulement.\n';

const needle = end3150 + ",\n  402: `" + body402FirstLine;
const replacement = end3150 + ",\n" + insertion + "  402: `" + body402FirstLine;

let s = fs.readFileSync(target, "utf8");
if (!s.includes(needle)) {
  console.error("Needle not found — aborting");
  process.exit(1);
}
if (s.includes("\n  3151: `")) {
  console.error("ID 3151 already present — aborting");
  process.exit(1);
}
s = s.replace(needle, replacement);
fs.writeFileSync(target, s);
console.log("Inserted FR detailed blocks 3151–3200.");
