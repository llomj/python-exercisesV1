// Extract questions 2351-2450 with e and de for translation
// Run: npx tsx scripts/extract_2351_2450.ts

import { level8ExpertB } from '../src/data/questions/level8_expert_b';
import { level9Patterns } from '../src/data/questions/level9';
import * as fs from 'fs';

const level8Start = 2351; // level8 Expert B indices 0-49
const level9Start = 2401; // level9 indices 0-49

const out: { id: number; e: string; de: string }[] = [];

for (let i = 0; i < 50; i++) {
  const p8 = level8ExpertB[i](i);
  out.push({ id: level8Start + i, e: p8.e, de: p8.de || '' });
}
for (let i = 0; i < 50; i++) {
  const p9 = level9Patterns[i](i);
  out.push({ id: level9Start + i, e: p9.e, de: p9.de || '' });
}

fs.writeFileSync('scripts/extract_2351_2450.json', JSON.stringify(out, null, 2));
console.log(`Extracted ${out.length} questions to scripts/extract_2351_2450.json`);
