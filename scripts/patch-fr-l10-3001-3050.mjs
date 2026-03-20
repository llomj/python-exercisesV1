/**
 * Inserts French detailed explanations for Level 10 bank IDs 3001–3050
 * between ID 3000 and Level 1 ID 402 in detailedExplanationsTranslations.ts.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fr3001_3025 from "./fr-l10-frags/fr-l10-3001-3025.mjs";
import fr3026_3050 from "./fr-l10-frags/fr-l10-3026-3050.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const blocks = { ...fr3001_3025, ...fr3026_3050 };

function ent(id, body) {
  return `  ${id}: \`${String(body).trim()}\`,\n`;
}

let insertion = "";
for (let id = 3001; id <= 3050; id++) {
  if (blocks[id] === undefined) {
    console.error("Missing FR block for id", id);
    process.exit(1);
  }
  insertion += ent(id, blocks[id]);
}

const end3000 = "• Réponse : éviter que except Exception les bloque — 1re option.`";
const body402FirstLine =
  '"  hello  ".lstrip() renvoie "hello  " : lstrip retire les blancs de gauche seulement.\n';

const needle = end3000 + ",\n  402: `" + body402FirstLine;
const replacement = end3000 + ",\n" + insertion + "  402: `" + body402FirstLine;

let s = fs.readFileSync(target, "utf8");
if (!s.includes(needle)) {
  console.error("Needle not found — aborting");
  process.exit(1);
}
if (s.includes("\n  3001: `")) {
  console.error("ID 3001 already present — aborting");
  process.exit(1);
}
s = s.replace(needle, replacement);
fs.writeFileSync(target, s);
console.log("Inserted FR detailed blocks 3001–3050.");
