// Extract questions 2451-2550 with e and de for French translation
import { QUESTIONS_BANK } from '../src/questionsBank';
import * as fs from 'fs';

const qs = QUESTIONS_BANK.filter(q => q.id >= 2451 && q.id <= 2550);
const out = qs.map(q => ({
  id: q.id,
  e: q.explanation,
  de: q.detailedExplanation || ''
}));
fs.writeFileSync('scripts/extracted_2451_2550.json', JSON.stringify(out, null, 2));
console.log(`Extracted ${out.length} questions to scripts/extracted_2451_2550.json`);
