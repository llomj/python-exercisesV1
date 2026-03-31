import type { Question } from '../types';

type QuestionsBankModule = { QUESTIONS_BANK: Question[] };

let inMemoryBank: Question[] | null = null;
let inFlight: Promise<Question[]> | null = null;

export class QuestionsBankUnavailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'QuestionsBankUnavailableError';
  }
}

/**
 * Lazily load the questions bank.
 *
 * Why: the questions dataset is large and can be evicted from browser caches,
 * which can crash the app during initial boot if it is bundled into the entry.
 * By loading on-demand, the app shell can still render and we can show a
 * friendly offline message if the dataset is unavailable.
 */
export async function getQuestionsBank(): Promise<Question[]> {
  if (inMemoryBank) return inMemoryBank;
  if (inFlight) return inFlight;

  inFlight = import('../questionsBank')
    .then((mod: QuestionsBankModule) => {
      inMemoryBank = mod.QUESTIONS_BANK;
      return inMemoryBank;
    })
    .catch((err) => {
      throw new QuestionsBankUnavailableError(
        `Questions bank unavailable (likely cache eviction or first-load offline): ${String(
          err?.message || err
        )}`
      );
    })
    .finally(() => {
      inFlight = null;
    });

  return inFlight;
}

