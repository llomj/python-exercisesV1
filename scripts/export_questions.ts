// Script to export all questions to JSON for validation
// Run with: npx tsx scripts/export_questions.ts

import { level1Patterns } from '../src/data/questions/level1';
import { level1IntermediateA } from '../src/data/questions/level1_intermediate_a';
import { level1IntermediateB } from '../src/data/questions/level1_intermediate_b';
import { level1ExpertA } from '../src/data/questions/level1_expert_a';
import { level1ExpertB } from '../src/data/questions/level1_expert_b';
import { level2Patterns } from '../src/data/questions/level2';
import { level2IntermediateA } from '../src/data/questions/level2_intermediate_a';
import { level2IntermediateB } from '../src/data/questions/level2_intermediate_b';
import { level2ExpertA } from '../src/data/questions/level2_expert_a';
import { level2ExpertB } from '../src/data/questions/level2_expert_b';
import { level3Patterns } from '../src/data/questions/level3';
import { level3IntermediateA } from '../src/data/questions/level3_intermediate_a';
import { level3IntermediateB } from '../src/data/questions/level3_intermediate_b';
import { level3ExpertA } from '../src/data/questions/level3_expert_a';
import { level3ExpertB } from '../src/data/questions/level3_expert_b';
import { level4Patterns } from '../src/data/questions/level4';
import { level4ForLoopPatterns } from '../src/data/questions/level4_for_loops';
import { level4WhileBatch1 } from '../src/data/questions/level4_while_batch1';
import { level4WhileLoopPatterns } from '../src/data/questions/level4_while_loops';
import { level4WhileBatch3 } from '../src/data/questions/level4_while_batch3';
import { level4WhileBatch4 } from '../src/data/questions/level4_while_batch4';
import { level5Patterns } from '../src/data/questions/level5';
import { level5IntermediateA } from '../src/data/questions/level5_intermediate_a';
import { level5IntermediateB } from '../src/data/questions/level5_intermediate_b';
import { level5ExpertA } from '../src/data/questions/level5_expert_a';
import { level5ExpertB } from '../src/data/questions/level5_expert_b';
import { level6Patterns } from '../src/data/questions/level6';
import { level6IntermediateA } from '../src/data/questions/level6_intermediate_a';
import { level6IntermediateB } from '../src/data/questions/level6_intermediate_b';
import { level6ExpertA } from '../src/data/questions/level6_expert_a';
import { level6ExpertB } from '../src/data/questions/level6_expert_b';
import { level7Patterns } from '../src/data/questions/level7';
import { level7IntermediateA } from '../src/data/questions/level7_intermediate_a';
import { level7IntermediateB } from '../src/data/questions/level7_intermediate_b';
import { level7ExpertA } from '../src/data/questions/level7_expert_a';
import { level7ExpertB } from '../src/data/questions/level7_expert_b';
import { level8Patterns } from '../src/data/questions/level8';
import { level8IntermediateA } from '../src/data/questions/level8_intermediate_a';
import { level8IntermediateB } from '../src/data/questions/level8_intermediate_b';
import { level8ExpertA } from '../src/data/questions/level8_expert_a';
import { level8ExpertB } from '../src/data/questions/level8_expert_b';
import { level9Patterns } from '../src/data/questions/level9';
import { level9IntermediateA } from '../src/data/questions/level9_intermediate_a';
import { level9IntermediateB } from '../src/data/questions/level9_intermediate_b';
import { level9ExpertA } from '../src/data/questions/level9_expert_a';
import { level9ExpertB } from '../src/data/questions/level9_expert_b';
import { level10Patterns } from '../src/data/questions/level10';
import { level10IntermediateA } from '../src/data/questions/level10_intermediate_a';
import { level10IntermediateB } from '../src/data/questions/level10_intermediate_b';
import { level10ExpertA } from '../src/data/questions/level10_expert_a';
import { level10ExpertB } from '../src/data/questions/level10_expert_b';
import * as fs from 'fs';

const levelConfigs = [
  { patterns: [...level1Patterns, ...level1IntermediateA, ...level1IntermediateB, ...level1ExpertA, ...level1ExpertB], startId: 1, level: 1 },
  { patterns: [...level2Patterns, ...level2IntermediateA, ...level2IntermediateB, ...level2ExpertA, ...level2ExpertB], startId: 301, level: 2 },
  { patterns: [...level3Patterns, ...level3IntermediateA, ...level3IntermediateB, ...level3ExpertA, ...level3ExpertB], startId: 601, level: 3 },
  { patterns: [...level4Patterns, ...level4ForLoopPatterns, ...level4WhileBatch1, ...level4WhileLoopPatterns, ...level4WhileBatch3, ...level4WhileBatch4], startId: 901, level: 4 },
  { patterns: [...level5Patterns, ...level5IntermediateA, ...level5IntermediateB, ...level5ExpertA, ...level5ExpertB], startId: 1201, level: 5 },
  { patterns: [...level6Patterns, ...level6IntermediateA, ...level6IntermediateB, ...level6ExpertA, ...level6ExpertB], startId: 1501, level: 6 },
  { patterns: [...level7Patterns, ...level7IntermediateA, ...level7IntermediateB, ...level7ExpertA, ...level7ExpertB], startId: 1801, level: 7 },
  { patterns: [...level8Patterns, ...level8IntermediateA, ...level8IntermediateB, ...level8ExpertA, ...level8ExpertB], startId: 2101, level: 8 },
  { patterns: [...level9Patterns, ...level9IntermediateA, ...level9IntermediateB, ...level9ExpertA, ...level9ExpertB], startId: 2401, level: 9 },
  { patterns: [...level10Patterns, ...level10IntermediateA, ...level10IntermediateB, ...level10ExpertA, ...level10ExpertB], startId: 2701, level: 10 },
];

const allQuestions: any[] = [];

for (const config of levelConfigs) {
  for (let i = 0; i < config.patterns.length; i++) {
    const p = config.patterns[i](i);
    allQuestions.push({
      id: config.startId + i,
      level: config.level,
      question: p.q,
      options: p.o,
      correct_option_index: p.c,
      explanation: p.e,
    });
  }
}

fs.writeFileSync('scripts/questions_export.json', JSON.stringify(allQuestions, null, 2));
console.log(`Exported ${allQuestions.length} questions to scripts/questions_export.json`);
