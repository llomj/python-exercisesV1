import fs from 'fs';
import { QUESTIONS_BANK } from '../src/questionsBank.ts';

const s = fs.readFileSync('src/data/detailedExplanationsTranslations.ts', 'utf8');
const l1 = QUESTIONS_BANK.filter((q) => q.level === 1).sort((a, b) => a.id - b.id);

function getBlock(id) {
  const next = id + 1;
  const re = new RegExp(
    `\\n\\s+${id}: \`([\\s\\S]*?)\`\\s*,\\s*\\n\\s+${next}:`,
    'm',
  );
  const m = s.match(re);
  return m ? m[1] : null;
}

const special = [
  { id: 301, must: ['int', '42'] },
  { id: 308, must: ['dict', '{}'] },
  { id: 309, must: ['set', '{'] },
  { id: 310, must: ['bytes', 'b\''] },
];

const bad = [];
for (const { id, must } of special) {
  const b = getBlock(id);
  if (!b) {
    bad.push({ id, reason: 'no block' });
    continue;
  }
  const low = b.toLowerCase();
  if (!must.some((k) => low.includes(k.toLowerCase()))) {
    bad.push({ id, reason: `missing ${must.join('|')}` });
  }
}
console.log(JSON.stringify(bad, null, 2));
