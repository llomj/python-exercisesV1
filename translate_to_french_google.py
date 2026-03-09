#!/usr/bin/env python3
import os
import re
import sys
import json
import urllib.request
import urllib.parse
from pathlib import Path
from typing import Dict, List, Tuple

def extract_questions_from_file(filepath: str) -> List[Tuple[int, str, List[str]]]:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pattern = r'\(_i: number\) => \({\s*q: `([^`]+)`[^}]*?o: \[([^\]]+)\]'
    matches = re.finditer(pattern, content, re.DOTALL)
    
    results = []
    question_index = 0
    
    if 'level' in filepath:
        level_match = re.search(r'level(\d+)', filepath)
        if level_match:
            level = int(level_match.group(1))
            
            if 'intermediate_a' in filepath:
                batch_offset = 100
            elif 'intermediate_b' in filepath:
                batch_offset = 150
            elif 'expert_a' in filepath:
                batch_offset = 200
            elif 'expert_b' in filepath:
                batch_offset = 250
            else:
                batch_offset = 0
            
            base_id = 1 + (level * 300) + batch_offset
    
    for match in matches:
        question_text = match.group(1).strip()
        options_str = match.group(2)
        
        options = re.findall(r'"([^"]*)"', options_str)
        
        question_id = base_id + question_index
        results.append((question_id, question_text, options))
        question_index += 1
    
    return results

def needs_translation(text: str) -> bool:
    if len(text) <= 25:
        return False
    if text in ['True', 'False', 'None', 'Error', 'TypeError', 'ValueError', 'SyntaxError']:
        return False
    if not re.search(r'[a-zA-Z]{5,}', text):
        return False
    return True

def extract_all_questions() -> Tuple[Dict[int, str], Dict[int, List[str]]]:
    questions_dict = {}
    options_dict = {}
    
    questions_dir = Path('src/data/questions')
    
    for filepath in sorted(questions_dir.glob('*.ts')):
        try:
            results = extract_questions_from_file(str(filepath))
            
            for qid, question_text, options in results:
                if needs_translation(question_text):
                    first_line = question_text.split('\n')[0].strip()
                    if needs_translation(first_line):
                        questions_dict[qid] = first_line
                
                options_needing_translation = []
                for opt in options:
                    if needs_translation(opt):
                        options_needing_translation.append(opt)
                
                if options_needing_translation:
                    options_dict[qid] = options_needing_translation
        
        except Exception as e:
            print(f"Error parsing {filepath.name}: {e}")
            continue
    
    return questions_dict, options_dict

def translate_batch_google(api_key: str, texts: List[str], target_lang='fr') -> Dict[str, str]:
    if not texts:
        return {}
    
    url = f"https://translation.googleapis.com/language/translate/v2?key={api_key}"
    data = {
        'q': texts,
        'target': target_lang,
        'source': 'en',
        'format': 'text'
    }
    
    req = urllib.request.Request(url)
    req.add_header('Content-Type', 'application/json')
    
    try:
        response = urllib.request.urlopen(req, json.dumps(data).encode('utf-8'))
        result = json.loads(response.read().decode('utf-8'))
        
        translations = result['data']['translations']
        translation_map = {}
        
        for i, t in enumerate(translations):
            translation_map[texts[i]] = t['translatedText']
            
        return translation_map
    except Exception as e:
        print(f"Error calling Google Translate API: {e}")
        # Return empty on error to avoid crashing the whole process
        return {}

def translate_all(api_key: str) -> Tuple[Dict[int, str], Dict[int, List[Tuple[str, str]]]]:
    print("Extracting questions and options...")
    questions_dict, options_dict = extract_all_questions()
    
    print(f"Found {len(questions_dict)} questions needing translation")
    print(f"Found {len(options_dict)} question IDs with options needing translation")
    
    if not questions_dict and not options_dict:
        return {}, {}
    
    questions_fr = {}
    
    if questions_dict:
        question_texts = list(questions_dict.values())
        # Google Translate v2 API limits to 128 strings per request, we use 50 to be safe
        for i in range(0, len(question_texts), 50):
            batch = question_texts[i:i+50]
            print(f"Translating questions batch {i//50 + 1}/{len(question_texts)//50 + 1}...")
            
            translation_map = translate_batch_google(api_key, batch)
            
            for qid, english_text in questions_dict.items():
                if english_text in translation_map:
                    questions_fr[qid] = translation_map[english_text]
    
    options_fr = {}
    
    if options_dict:
        all_option_strings = set()
        for qid, opt_list in options_dict.items():
            all_option_strings.update(opt_list)
        
        all_option_strings_list = list(all_option_strings)
        print(f"Translating {len(all_option_strings_list)} unique options...")
        
        translation_map = {}
        for i in range(0, len(all_option_strings_list), 50):
            batch = all_option_strings_list[i:i+50]
            print(f"Translating options batch {i//50 + 1}/{len(all_option_strings_list)//50 + 1}...")
            
            batch_translations = translate_batch_google(api_key, batch)
            translation_map.update(batch_translations)
        
        for qid, opt_list in options_dict.items():
            translated_pairs = []
            for original_opt in opt_list:
                translated_opt = translation_map.get(original_opt, original_opt)
                translated_pairs.append((original_opt, translated_opt))
            options_fr[qid] = translated_pairs
    
    return questions_fr, options_fr

def generate_questions_fr_ts(questions_fr: Dict[int, str]) -> str:
    code = '''/**
 * French translations for question texts.
 * Maps question ID -> French question text.
 * Generated by script.
 */

export const QUESTIONS_FR: Record<number, string> = {
'''
    for qid in sorted(questions_fr.keys()):
        french_text = questions_fr[qid]
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
    code = '''/**
 * French translations for option text.
 * Maps question ID -> list of (English, French) option pairs.
 * Generated by script.
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
    code += '''export const getTranslatedOption = (option: string, language: string, questionId: number): string => {
  if (language !== 'fr') return option;
  
  if (OPTIONS_FR[questionId] && OPTIONS_FR[questionId][option]) {
    return OPTIONS_FR[questionId][option];
  }
  
  return option;
};
'''
    return code

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 translate_to_french_google.py API_KEY")
        sys.exit(1)
    
    api_key = sys.argv[1]
    
    questions_fr, options_fr = translate_all(api_key)
    
    if not questions_fr and not options_fr:
        print("No translations generated.")
        return
    
    questions_ts = generate_questions_fr_ts(questions_fr)
    options_ts = generate_options_fr_ts(options_fr)
    
    Path('src/data/questionsFr.ts').write_text(questions_ts)
    Path('src/data/optionsFr.ts').write_text(options_ts)
    
    print("\n✅ DONE")

if __name__ == '__main__':
    main()
