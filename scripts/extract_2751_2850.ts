// Extract questions 2751-2850 for French translation
// Run: npx tsx scripts/extract_2751_2850.ts

import { QUESTIONS_BANK } from '../src/questionsBank';

const startId = 2751;
const endId = 2850;

const questions = QUESTIONS_BANK.filter((q) => q.id >= startId && q.id <= endId);

const output: { id: number; e: string; de: string }[] = questions.map((q) => ({
  id: q.id,
  e: q.explanation || '',
  de: (q as any).detailedExplanation || '',
}));

console.log(JSON.stringify(output, null, 2));
