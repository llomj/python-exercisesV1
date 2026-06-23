import { Question, PersonaStage, SubLevel } from './types';
import { level0Patterns } from './data/questions/level0';
import { level1Patterns } from './data/questions/level1';
import { level1IntermediateA } from './data/questions/level1_intermediate_a';
import { level1IntermediateB } from './data/questions/level1_intermediate_b';
import { level1ExpertA } from './data/questions/level1_expert_a';
import { level1ExpertB } from './data/questions/level1_expert_b';
import { level2Patterns } from './data/questions/level2';
import { level2IntermediateA } from './data/questions/level2_intermediate_a';
import { level2IntermediateB } from './data/questions/level2_intermediate_b';
import { level2ExpertA } from './data/questions/level2_expert_a';
import { level2ExpertB } from './data/questions/level2_expert_b';
import { level3Patterns } from './data/questions/level3';
import { level3IntermediateA } from './data/questions/level3_intermediate_a';
import { level3IntermediateB } from './data/questions/level3_intermediate_b';
import { level3ExpertA } from './data/questions/level3_expert_a';
import { level3ExpertB } from './data/questions/level3_expert_b';
import { level4Patterns } from './data/questions/level4';
import { level4ForLoopPatterns } from './data/questions/level4_for_loops';
import { level4WhileBatch1 } from './data/questions/level4_while_batch1';
import { level4WhileLoopPatterns } from './data/questions/level4_while_loops';
import { level4WhileBatch3 } from './data/questions/level4_while_batch3';
import { level4WhileBatch4 } from './data/questions/level4_while_batch4';
import { level5Patterns } from './data/questions/level5';
import { level5IntermediateA } from './data/questions/level5_intermediate_a';
import { level5IntermediateB } from './data/questions/level5_intermediate_b';
import { level5ExpertA } from './data/questions/level5_expert_a';
import { level5ExpertB } from './data/questions/level5_expert_b';
import { level6Patterns } from './data/questions/level6';
import { level6IntermediateA } from './data/questions/level6_intermediate_a';
import { level6IntermediateB } from './data/questions/level6_intermediate_b';
import { level6ExpertA } from './data/questions/level6_expert_a';
import { level6ExpertB } from './data/questions/level6_expert_b';
import { level7Patterns } from './data/questions/level7';
import { level7IntermediateA } from './data/questions/level7_intermediate_a';
import { level7IntermediateB } from './data/questions/level7_intermediate_b';
import { level7ExpertA } from './data/questions/level7_expert_a';
import { level7ExpertB } from './data/questions/level7_expert_b';
import { level8Patterns } from './data/questions/level8';
import { level8IntermediateA } from './data/questions/level8_intermediate_a';
import { level8IntermediateB } from './data/questions/level8_intermediate_b';
import { level8ExpertA } from './data/questions/level8_expert_a';
import { level8ExpertB } from './data/questions/level8_expert_b';
import { level9Patterns } from './data/questions/level9';
import { level9IntermediateA } from './data/questions/level9_intermediate_a';
import { level9IntermediateB } from './data/questions/level9_intermediate_b';
import { level9ExpertA } from './data/questions/level9_expert_a';
import { level9ExpertB } from './data/questions/level9_expert_b';
import { level10Patterns } from './data/questions/level10';
import { level10IntermediateA } from './data/questions/level10_intermediate_a';
import { level10IntermediateB } from './data/questions/level10_intermediate_b';
import { level10ExpertA } from './data/questions/level10_expert_a';
import { level10ExpertB } from './data/questions/level10_expert_b';
import { QUESTIONS_PER_LEVEL } from './constants';

type PatternFactory = (i: number) => any;
type QuestionGroup = {
  concept: string;
  patterns: PatternFactory[];
};

// GENERATOR ENGINE
// Assigns BEGINNER for the first third, INTERMEDIATE for the second third, EXPERT for the last third.
// Each level has 300 questions (100 Beginner + 100 Intermediate + 100 Expert).
// Total: 3000 questions across 10 levels. IDs 1-3000.

const getSubLevel = (index: number, totalPatterns: number): SubLevel => {
  if (index < totalPatterns / 3) return SubLevel.BEGINNER;
  if (index < (totalPatterns * 2) / 3) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
};

const generateLevel = (level: number, stage: PersonaStage, groups: QuestionGroup[], startId: number) => {
  const groupedPatterns = groups.flatMap(group =>
    group.patterns.map(pattern => ({ pattern, concept: group.concept }))
  );

  return Array.from({ length: groupedPatterns.length }, (_, i) => {
    const { pattern, concept } = groupedPatterns[i];
    const patternData = pattern(i);
    return {
      id: startId + i,
      level,
      subLevel: getSubLevel(i, groupedPatterns.length),
      persona_stage: stage,
      concept,
      difficulty: level > 7 ? 3 : (level > 4 ? 2 : 1),
      questionFormat: 'standard', // default format for existing questions
      question: patternData.q,
      options: patternData.o,
      correct_option_index: patternData.c,
      explanation: patternData.e,
      detailedExplanation: patternData.de || undefined
    } as Question;
  });
};

export const QUESTIONS_BANK: Question[] = [
  // Level 0 must contribute exactly QUESTIONS_PER_LEVEL (300) so IDs 301–600 stay unique Level 1.
  ...generateLevel(0, PersonaStage.TADPOLE, [
    { concept: 'first_steps', patterns: level0Patterns.slice(0, QUESTIONS_PER_LEVEL) }
  ], 1),
  ...generateLevel(1, PersonaStage.PLANKTON, [
    { concept: 'variables_types_strings', patterns: level1Patterns },
    { concept: 'string_methods_fstrings', patterns: level1IntermediateA },
    { concept: 'string_ops_type_conversion', patterns: level1IntermediateB },
    { concept: 'bytes_encoding_none', patterns: level1ExpertA },
    { concept: 'identity_edge_cases', patterns: level1ExpertB }
  ], 301),
  ...generateLevel(2, PersonaStage.SHRIMP, [
    { concept: 'arithmetic_precedence', patterns: level2Patterns },
    { concept: 'math_module_rounding', patterns: level2IntermediateA },
    { concept: 'number_processing', patterns: level2IntermediateB },
    { concept: 'advanced_number_types', patterns: level2ExpertA },
    { concept: 'numeric_edge_cases', patterns: level2ExpertB }
  ], 601),
  ...generateLevel(3, PersonaStage.CRAB, [
    { concept: 'boolean_logic_conditionals', patterns: level3Patterns },
    { concept: 'any_all_guard_clauses', patterns: level3IntermediateA },
    { concept: 'conditional_precedence', patterns: level3IntermediateB },
    { concept: 'pattern_matching_walrus', patterns: level3ExpertA },
    { concept: 'truthiness_edge_cases', patterns: level3ExpertB }
  ], 901),
  ...generateLevel(4, PersonaStage.SMALL_FISH, [
    { concept: 'loop_basics', patterns: level4Patterns },
    { concept: 'for_loop_mastery', patterns: level4ForLoopPatterns },
    { concept: 'while_loops_intro', patterns: level4WhileBatch1 },
    { concept: 'while_loops_core', patterns: level4WhileLoopPatterns },
    { concept: 'while_loops_advanced_a', patterns: level4WhileBatch3 },
    { concept: 'while_loops_advanced_b', patterns: level4WhileBatch4 }
  ], 1201),
  ...generateLevel(5, PersonaStage.OCTOPUS, [
    { concept: 'lists_indexing', patterns: level5Patterns },
    { concept: 'list_comprehensions_tuples', patterns: level5IntermediateA },
    { concept: 'sets_sorting_zip_map', patterns: level5IntermediateB },
    { concept: 'advanced_lists_slicing', patterns: level5ExpertA },
    { concept: 'collections_itertools', patterns: level5ExpertB }
  ], 1501),
  ...generateLevel(6, PersonaStage.SEAL, [
    { concept: 'dictionaries_basics', patterns: level6Patterns },
    { concept: 'dict_patterns_nested', patterns: level6IntermediateA },
    { concept: 'dict_comprehensions_merging', patterns: level6IntermediateB },
    { concept: 'counter_defaultdict_ordereddict', patterns: level6ExpertA },
    { concept: 'dict_hashability_mappingproxy', patterns: level6ExpertB }
  ], 1801),
  ...generateLevel(7, PersonaStage.DOLPHIN, [
    { concept: 'functions_parameters_return', patterns: level7Patterns },
    { concept: 'closures_first_class', patterns: level7IntermediateA },
    { concept: 'generators_scope_patterns', patterns: level7IntermediateB },
    { concept: 'decorators_function_design', patterns: level7ExpertA },
    { concept: 'functools_advanced_functions', patterns: level7ExpertB }
  ], 2101),
  ...generateLevel(8, PersonaStage.SHARK, [
    { concept: 'classes_objects_methods', patterns: level8Patterns },
    { concept: 'magic_methods_iteration', patterns: level8IntermediateA },
    { concept: 'attributes_lifecycle_composition', patterns: level8IntermediateB },
    { concept: 'dataclasses_enums_namedtuples', patterns: level8ExpertA },
    { concept: 'descriptors_abcs_type_hints', patterns: level8ExpertB }
  ], 2401),
  ...generateLevel(9, PersonaStage.WHALE, [
    { concept: 'inheritance_polymorphism', patterns: level9Patterns },
    { concept: 'mro_super_mechanics', patterns: level9IntermediateA },
    { concept: 'advanced_inheritance_patterns', patterns: level9IntermediateB },
    { concept: 'abcs_protocols_structural_typing', patterns: level9ExpertA },
    { concept: 'oop_design_patterns', patterns: level9ExpertB }
  ], 2701),
  ...generateLevel(10, PersonaStage.GOD_WHALE, [
    { concept: 'design_patterns_architecture', patterns: level10Patterns },
    { concept: 'file_io_datetime_regex', patterns: level10IntermediateA },
    { concept: 'itertools_json_os_pathlib', patterns: level10IntermediateB },
    { concept: 'logging_testing_error_patterns', patterns: level10ExpertA },
    { concept: 'async_idioms_best_practices', patterns: level10ExpertB }
  ], 3001)
];
