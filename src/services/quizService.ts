import { Question, QuestionAttempt, QuizSessionMode } from "../types";
import { getQuestionsBank } from "./questionsBankLoader";

type ConceptStats = {
  misses: number;
  correct: number;
  recentMissTimestamps: number[];
  missedIds: number[];
};

const shuffle = <T,>(items: T[]): T[] => {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const uniqueById = (questions: Question[]): Question[] =>
  questions.filter((q, index, self) => index === self.findIndex(other => other.id === q.id));

const uniqueByText = (questions: Question[]): Question[] => {
  const seenTexts = new Set<string>();
  const selected: Question[] = [];
  for (const question of questions) {
    if (seenTexts.has(question.question)) continue;
    selected.push(question);
    seenTexts.add(question.question);
  }
  return selected;
};

const getLevelHistory = (
  history: QuestionAttempt[],
  level: number,
  randomMode: boolean
): QuestionAttempt[] =>
  history.filter(attempt => randomMode || attempt.level === level);

const getLatestAttemptById = (history: QuestionAttempt[]): Map<number, QuestionAttempt> => {
  const latest = new Map<number, QuestionAttempt>();
  for (const attempt of history) {
    if (!latest.has(attempt.id)) {
      latest.set(attempt.id, attempt);
    }
  }
  return latest;
};

const buildConceptStats = (
  history: QuestionAttempt[],
  bank: Question[],
  level: number,
  randomMode: boolean
): Map<string, ConceptStats> => {
  const relevantHistory = getLevelHistory(history, level, randomMode);
  const questionsById = new Map(bank.map(question => [question.id, question]));
  const stats = new Map<string, ConceptStats>();

  for (const attempt of relevantHistory) {
    const concept = attempt.concept || questionsById.get(attempt.id)?.concept || "general";
    const existing = stats.get(concept) || {
      misses: 0,
      correct: 0,
      recentMissTimestamps: [],
      missedIds: [],
    };

    if (attempt.isCorrect) {
      existing.correct += 1;
    } else {
      existing.misses += 1;
      existing.recentMissTimestamps.push(attempt.timestamp);
      existing.missedIds.push(attempt.id);
    }

    stats.set(concept, existing);
  }

  return stats;
};

const getWeakConcepts = (conceptStats: Map<string, ConceptStats>): string[] =>
  [...conceptStats.entries()]
    .map(([concept, stats]) => ({
      concept,
      weight: stats.misses * 3 - stats.correct,
      lastMiss: Math.max(...stats.recentMissTimestamps, 0),
    }))
    .filter(entry => entry.weight > 0)
    .sort((a, b) => {
      if (b.weight !== a.weight) return b.weight - a.weight;
      return b.lastMiss - a.lastMiss;
    })
    .map(entry => entry.concept);

const groupByConcept = (questions: Question[]): Map<string, Question[]> => {
  const grouped = new Map<string, Question[]>();
  for (const question of questions) {
    const bucket = grouped.get(question.concept) || [];
    bucket.push(question);
    grouped.set(question.concept, bucket);
  }
  return grouped;
};

const takeFromConcepts = (
  concepts: string[],
  grouped: Map<string, Question[]>,
  limit: number,
  seenIds: Set<number>
): Question[] => {
  const selected: Question[] = [];
  const pools = concepts.map(concept => ({
    concept,
    questions: shuffle((grouped.get(concept) || []).filter(question => !seenIds.has(question.id))),
  }));

  let added = true;
  while (selected.length < limit && added) {
    added = false;
    for (const pool of pools) {
      const next = pool.questions.shift();
      if (!next) continue;
      seenIds.add(next.id);
      selected.push(next);
      added = true;
      if (selected.length >= limit) break;
    }
  }

  return selected;
};

const buildReviewBatch = (
  available: Question[],
  history: QuestionAttempt[],
  bank: Question[],
  level: number,
  count: number,
  randomMode: boolean
): Question[] => {
  const conceptStats = buildConceptStats(history, bank, level, randomMode);
  const weakConcepts = getWeakConcepts(conceptStats);
  const grouped = groupByConcept(available);
  const seenIds = new Set<number>();
  const selected: Question[] = [];
  const relevantHistory = getLevelHistory(history, level, randomMode);
  const latestAttemptById = getLatestAttemptById(relevantHistory);

  const recentIncorrectIds = relevantHistory
    .filter(attempt => !attempt.isCorrect)
    .filter(attempt => latestAttemptById.get(attempt.id)?.isCorrect === false)
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(attempt => attempt.id);

  for (const missedId of recentIncorrectIds) {
    const exact = available.find(question => question.id === missedId);
    if (!exact || seenIds.has(exact.id)) continue;
    seenIds.add(exact.id);
    selected.push(exact);
    if (selected.length >= count) {
      return uniqueByText(selected).slice(0, count);
    }
  }

  selected.push(...takeFromConcepts(weakConcepts, grouped, count - selected.length, seenIds));

  if (selected.length < count) {
    const remainingConcepts = [...grouped.keys()].filter(concept => !weakConcepts.includes(concept));
    selected.push(...takeFromConcepts(remainingConcepts, grouped, count - selected.length, seenIds));
  }

  if (selected.length < count) {
    const fallback = shuffle(available).filter(question => !seenIds.has(question.id));
    for (const question of fallback) {
      seenIds.add(question.id);
      selected.push(question);
      if (selected.length >= count) break;
    }
  }

  return uniqueByText(selected).slice(0, count);
};

const buildStandardBatch = (
  available: Question[],
  history: QuestionAttempt[],
  bank: Question[],
  level: number,
  count: number,
  randomMode: boolean
): Question[] => {
  const conceptStats = buildConceptStats(history, bank, level, randomMode);
  const weakConcepts = getWeakConcepts(conceptStats);
  const grouped = groupByConcept(available);
  const seenIds = new Set<number>();
  const selected: Question[] = [];

  const reinforcementTarget = Math.min(Math.ceil(count * 0.4), count);
  selected.push(...takeFromConcepts(weakConcepts, grouped, reinforcementTarget, seenIds));

  const remainingConcepts = shuffle([...grouped.keys()].filter(concept => !weakConcepts.includes(concept)));
  selected.push(...takeFromConcepts(remainingConcepts, grouped, count - selected.length, seenIds));

  if (selected.length < count) {
    const fallback = shuffle(available).filter(question => !seenIds.has(question.id));
    for (const question of fallback) {
      seenIds.add(question.id);
      selected.push(question);
      if (selected.length >= count) break;
    }
  }

  return uniqueByText(selected).slice(0, count);
};

export class QuizService {
  /**
   * Fetches a batch of questions from the Python Exercises bank.
   * Standard mode favors weak concepts before filling with fresh concept coverage.
   * Review mode concentrates on recent mistakes and same-concept reinforcement.
   */
  async getBatch(
    level: number,
    count: number = 15,
    completedIds: number[] = [],
    randomMode: boolean = false,
    history: QuestionAttempt[] = [],
    mode: QuizSessionMode = "standard"
  ): Promise<Question[]> {
    const bank = await getQuestionsBank();
    const scoped = randomMode ? bank : bank.filter(q => q.level === level);
    const available = scoped.filter(q => !completedIds.includes(q.id));
    const source = available.length > 0 ? available : scoped;
    const dedupedSource = uniqueById(source);

    const selected = mode === "review"
      ? buildReviewBatch(dedupedSource, history, bank, level, count, randomMode)
      : buildStandardBatch(dedupedSource, history, bank, level, count, randomMode);

    if (selected.length >= count) {
      return selected.slice(0, count);
    }

    const topUp = shuffle(dedupedSource).filter(question => !selected.some(existing => existing.id === question.id));
    return uniqueByText([...selected, ...topUp]).slice(0, count);
  }
}

export const quizService = new QuizService();
