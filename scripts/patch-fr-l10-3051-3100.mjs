/**
 * Inserts French detailed explanations for Level 10 bank IDs 3051–3100
 * between ID 3050 and Level 1 ID 402.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr3051_3075 from "./fr-l10-frags/fr-l10-3051-3075.mjs";
import fr3076_3100 from "./fr-l10-frags/fr-l10-3076-3100.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const blocks = { ...fr3051_3075, ...fr3076_3100 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let insertion = "";
for (let id = 3051; id <= 3100; id++) {
  if (blocks[id] === undefined) {
    console.error("Missing FR block for id", id);
    process.exit(1);
  }
  insertion += ent(id, blocks[id]);
}

const end3050 =
  "• Réponse : classe MyIter (instance de type utilisateur, affichage du type <class '__main__.MyIter'> en script) — 1re option.`";
const body402FirstLine =
  '"  hello  ".lstrip() renvoie "hello  " : lstrip retire les blancs de gauche seulement.\n';

const needle = end3050 + ",\n  402: `" + body402FirstLine;
const replacement = end3050 + ",\n" + insertion + "  402: `" + body402FirstLine;

let s = fs.readFileSync(target, "utf8");
if (!s.includes(needle)) {
  console.error("Needle not found — aborting");
  process.exit(1);
}
if (s.includes("\n  3051: `")) {
  console.error("ID 3051 already present — aborting");
  process.exit(1);
}
s = s.replace(needle, replacement);
fs.writeFileSync(target, s);
console.log("Inserted FR detailed blocks 3051–3100.");
