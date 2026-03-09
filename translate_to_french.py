#!/usr/bin/env python3
"""
Script to extract all English questions and options from the question bank,
translate them to French using DeepL API, and output TypeScript lookup files.

Usage:
    python3 translate_to_french.py YOUR_DEEPL_API_KEY

Outputs:
    - src/data/questionsFr.ts (question text translations indexed by ID)
    - src/data/optionsFr.ts (options translations indexed by ID)
"""

import os
import re
import sys
import json
from pathlib import Path
from typing import Dict, List, Tuple, Any

# Try to import deepl; if not installed, provide instructions
try:
    import deepl
except ImportError:
    print("ERROR: deepl library not installed.")
    print("Install it with: pip install deepl")
    sys.exit(1)


def extract_questions_from_file(filepath: str) -> List[Tuple[int, str, List[str]]]:
    """
    Extract question ID, question text, and options from a TypeScript question file.
    Returns list of (question_id, question_text, options_list).
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all question blocks: (_i: number) => ({ ... })
    pattern = r'\(_i: number\) => \({\s*q: `([^`]+)`[^}]*?o: \[([^\]]+)\]'
    matches = re.finditer(pattern, content, re.DOTALL)
    
    results = []
    question_index = 0
    
    # Extract the file number to calculate base ID
    # level8_expert_b.ts -> level 8, expert (250+ offset)
    if 'level' in filepath:
        level_match = re.search(r'level(\d+)', filepath)
        if level_match:
            level = int(level_match.group(1))
            
            # Determine which batch within the level
            if 'intermediate_a' in filepath:
                batch_offset = 100  # After main 100
            elif 'intermediate_b' in filepath:
                batch_offset = 150  # After intermediate_a
            elif 'expert_a' in filepath:
                batch_offset = 200
            elif 'expert_b' in filepath:
                batch_offset = 250
            else:
                batch_offset = 0  # Main batch
            
            base_id = 1 + (level * 300) + batch_offset
    
    for match in matches:
        question_text = match.group(1).strip()
        options_str = match.group(2)
        
        # Extract options as list of strings
        options = re.findall(r'"([^"]*)"', options_str)
        
        question_id = base_id + question_index
        results.append((question_id, question_text, options))
        question_index += 1
    
    return results


def needs_translation(text: str) -> bool:
    """
    Determine if a text needs French translation.
    Short code values, True/False/Error/None don't need translation.
    """
    if len(text) <= 25:
        return False
    if text in ['True', 'False', 'None', 'Error', 'TypeError', 'ValueError', 'SyntaxError']:
        return False
    # Check if it looks like pure code (no spaces, all special chars)
    if not re.search(r'[a-zA-Z]{5,}', text):  # Less than 5 consecutive letters
        return False
    return True


def extract_all_questions() -> Tuple[Dict[int, str], Dict[int, List[str]]]:
    """
    Scan all question files and extract English questions/options that need translation.
    Returns (questions_dict, options_dict) where keys are question IDs.
    """
    questions_dict = {}
    options_dict = {}
    
    questions_dir = Path('src/data/questions')
    
    for filepath in sorted(questions_dir.glob('*.ts')):
        print(f"Scanning {filepath.name}...")
        
        try:
            results = extract_questions_from_file(str(filepath))
            
            for qid, question_text, options in results:
                # Check if question needs translation
                if needs_translation(question_text):
                    # Extract first line if multi-line
                    first_line = question_text.split('\n')[0].strip()
                    if needs_translation(first_line):
                        questions_dict[qid] = first_line
                
                # Check which options need translation
                options_needing_translation = []
                for opt in options:
                    if needs_translation(opt):
                        options_needing_translation.append(opt)
                
                if options_needing_translation:
                    options_dict[qid] = options_needing_translation
        
        except Exception as e:
            print(f"  Error parsing {filepath.name}: {e}")
            continue
    
    return questions_dict, options_dict


def translate_batch(translator: deepl.Translator, texts: List[str], source_lang='EN', target_lang='FR') -> Dict[str, str]:
    """
    Translate a batch of texts using DeepL.
    Returns dict mapping original text -> translated text.
    """
    if not texts:
        return {}
    
    try:
        results = translator.translate_text(texts, source_language=source_lang, target_language=target_lang)
        
        # results is a list of TextResult objects
        translation_map = {}
        for original, result in zip(texts, results):
            translated = result.text if hasattr(result, 'text') else str(result)
            translation_map[original] = translated
        
        return translation_map
    except Exception as e:
        print(f"Error during translation: {e}")
        return {}


def translate_all(api_key: str) -> Tuple[Dict[int, str], Dict[int, List[Tuple[str, str]]]]:
    """
    Translate all questions and options to French using DeepL.
    Returns (questions_fr_dict, options_fr_dict).
    """
    print("\n=== Extracting questions and options ===")
    questions_dict, options_dict = extract_all_questions()
    
    print(f"\nFound {len(questions_dict)} questions needing translation")
    print(f"Found {len(options_dict)} question IDs with options needing translation")
    
    if not questions_dict and not options_dict:
        print("No translations needed!")
        return {}, {}
    
    print("\n=== Initializing DeepL translator ===")
    translator = deepl.Translator(api_key)
    
    # Translate questions
    print(f"\nTranslating {len(questions_dict)} questions...")
    questions_fr = {}
    
    if questions_dict:
        question_texts = list(questions_dict.values())
        # Batch in groups of 50 to avoid hitting rate limits
        for i in range(0, len(question_texts), 50):
            batch = question_texts[i:i+50]
            print(f"  Batch {i//50 + 1}: translating {len(batch)} questions...")
            
            translation_map = translate_batch(translator, batch)
            
            for qid, english_text in questions_dict.items():
                if english_text in translation_map:
                    questions_fr[qid] = translation_map[english_text]
    
    # Translate options
    print(f"\nTranslating options for {len(options_dict)} questions...")
    options_fr = {}
    
    if options_dict:
        # Collect all unique option strings
        all_option_strings = set()
        for qid, opt_list in options_dict.items():
            all_option_strings.update(opt_list)
        
        all_option_strings_list = list(all_option_strings)
        print(f"  Found {len(all_option_strings_list)} unique option strings")
        
        # Batch translate
        translation_map = {}
        for i in range(0, len(all_option_strings_list), 50):
            batch = all_option_strings_list[i:i+50]
            print(f"  Batch {i//50 + 1}: translating {len(batch)} options...")
            
            batch_translations = translate_batch(translator, batch)
            translation_map.update(batch_translations)
        
        # Map back to question IDs
        for qid, opt_list in options_dict.items():
            translated_pairs = []
            for original_opt in opt_list:
                translated_opt = translation_map.get(original_opt, original_opt)
                translated_pairs.append((original_opt, translated_opt))
            options_fr[qid] = translated_pairs
    
    return questions_fr, options_fr


def generate_questions_fr_ts(questions_fr: Dict[int, str]) -> str:
    """Generate TypeScript code for questionsFr.ts file."""
    
    code = '''/**
 * French translations for question texts.
 * Maps question ID -> French question text.
 * Generated by translate_to_french.py
 */

export const QUESTIONS_FR: Record<number, string> = {
'''
    
    for qid in sorted(questions_fr.keys()):
        french_text = questions_fr[qid]
        # Escape backticks and backslashes
        escaped = french_text.replace('\\', '\\\\').replace('`', '\\`')
        code += f'  {qid}: `{escaped}`,\n'
    
    code += '};\n\n'
    code += '''export const getTranslatedQuestion = (id: number, englishText: string, language: string): string => {
  if (language !== 'fr') return englishText;
  return QUESTIONS_FR[id] || englishText;
};
'''
    
    return code


def generate_options_fr_ts(options_fr: Dict[int, List[Tuple[str, str]]]) -> str:
    """Generate TypeScript code for optionsFr.ts file."""
    
    code = '''/**
 * French translations for option text.
 * Maps question ID -> list of (English, French) option pairs.
 * Generated by translate_to_french.py
 */

export const OPTIONS_FR: Record<number, Record<string, string>> = {
'''
    
    for qid in sorted(options_fr.keys()):
        option_pairs = options_fr[qid]
        code += f'  {qid}: {{\n'
        
        for english, french in option_pairs:
            escaped_en = english.replace('\\', '\\\\').replace('"', '\\"')
            escaped_fr = french.replace('\\', '\\\\').replace('"', '\\"')
            code += f'    "{escaped_en}": "{escaped_fr}",\n'
        
        code += '  },\n'
    
    code += '};\n\n'
    code += '''export const getTranslatedOptions = (options: string[], language: string): string[] => {
  if (language !== 'fr') return options;
  
  return options.map(opt => OPTIONS_FR[opt] || opt);
};

export const getTranslatedOption = (option: string, language: string, questionId?: number): string => {
  if (language !== 'fr') return option;
  
  if (questionId && OPTIONS_FR[questionId] && OPTIONS_FR[questionId][option]) {
    return OPTIONS_FR[questionId][option];
  }
  
  return option;
};
'''
    
    return code


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 translate_to_french.py YOUR_DEEPL_API_KEY")
        print("\nSteps:")
        print("1. Sign up for free at https://www.deepl.com/pro (free tier available)")
        print("2. Get your API key from https://www.deepl.com/account/keys")
        print("3. Run: python3 translate_to_french.py YOUR_API_KEY")
        sys.exit(1)
    
    api_key = sys.argv[1]
    
    # Translate
    print("Starting French translation process...")
    questions_fr, options_fr = translate_all(api_key)
    
    # Generate TypeScript files
    print("\n=== Generating TypeScript files ===")
    
    questions_ts = generate_questions_fr_ts(questions_fr)
    options_ts = generate_options_fr_ts(options_fr)
    
    # Write files
    questions_output = Path('src/data/questionsFr.ts')
    options_output = Path('src/data/optionsFr.ts')
    
    print(f"Writing {questions_output}...")
    questions_output.write_text(questions_ts)
    
    print(f"Writing {options_output}...")
    options_output.write_text(options_ts)
    
    print("\n=== DONE ===")
    print(f"✅ Translated {len(questions_fr)} questions")
    print(f"✅ Translated options for {len(options_fr)} questions")
    print(f"\nGenerated files:")
    print(f"  - {questions_output}")
    print(f"  - {options_output}")
    print("\nNext: Integrate these into QuizView.tsx")


if __name__ == '__main__':
    main()
