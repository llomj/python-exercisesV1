// Extract questions 2151-2250 for translation
// Run with: npx tsx scripts/extract_2151_2250.ts
// Level 8: IDs 2151-2200 = level8Patterns indices 50-99
//          IDs 2201-2250 = level8IntermediateA indices 0-49

import { level8Patterns } from '../src/data/questions/level8';
import { level8IntermediateA } from '../src/data/questions/level8_intermediate_a';
import * as fs from 'fs';

const result: Record<number, { e: string; de: string }> = {};

// IDs 2151-2200: level8Patterns indices 50-99
for (let i = 50; i < 100; i++) {
  const p = level8Patterns[i](i);
  result[2101 + i] = { e: p.e, de: p.de };
}

// IDs 2201-2250: level8IntermediateA indices 0-49
for (let i = 0; i < 50; i++) {
  const p = level8IntermediateA[i](i);
  result[2201 + i] = { e: p.e, de: p.de };
}

fs.writeFileSync('scripts/extract_2151_2250.json', JSON.stringify(result, null, 2));
console.log(`Extracted ${Object.keys(result).length} questions (IDs 2151-2250)`);
