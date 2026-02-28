// Extract questions 1351-1450 for French translation
// Run: npx tsx scripts/extract_1351_1450.ts

import { QUESTIONS_BANK } from '../src/questionsBank';

const range = QUESTIONS_BANK.filter((q) => q.id >= 1351 && q.id <= 1450);
const output = range.map((q) => ({
  id: q.id,
  e: q.explanation,
  de: q.detailedExplanation ?? '',
}));
console.log(JSON.stringify(output, null, 2));
