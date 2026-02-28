// Extract questions 1851-1950 for French translation
// Run: npx tsx scripts/extract_1851_1950.ts

import { QUESTIONS_BANK } from '../src/questionsBank';

const range = QUESTIONS_BANK.filter((q) => q.id >= 1851 && q.id <= 1950);
const output = range.map((q) => ({
  id: q.id,
  e: q.explanation,
  de: q.detailedExplanation ?? '',
}));
console.log(JSON.stringify(output, null, 2));
