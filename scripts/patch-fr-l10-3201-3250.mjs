/**
 * Inserts French detailed explanations for bank IDs 3201–3250:
 * level10ExpertA Q3–49 (3201–3247) + level10ExpertB Q50–52 (3248–3250).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr3201_3225 from "./fr-l10-frags/fr-l10-3201-3225.mjs";
import fr3226_3250 from "./fr-l10-frags/fr-l10-3226-3250.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const blocks = { ...fr3201_3225, ...fr3226_3250 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let insertion = "";
for (let id = 3201; id <= 3250; id++) {
  if (blocks[id] === undefined) {
    console.error("Missing FR block for id", id);
    process.exit(1);
  }
  insertion += ent(id, blocks[id]);
}

const end3200 = "• Réponse : WARNING — 1re option.`";
const body402FirstLine =
  '"  hello  ".lstrip() renvoie "hello  " : lstrip retire les blancs de gauche seulement.\n';

const needle = end3200 + ",\n  402: `" + body402FirstLine;
const replacement = end3200 + ",\n" + insertion + "  402: `" + body402FirstLine;

let s = fs.readFileSync(target, "utf8");
if (!s.includes(needle)) {
  console.error("Needle not found — aborting");
  process.exit(1);
}
if (s.includes("\n  3201: `")) {
  console.error("ID 3201 already present — aborting");
  process.exit(1);
}
s = s.replace(needle, replacement);
fs.writeFileSync(target, s);
console.log("Inserted FR detailed blocks 3201–3250.");
