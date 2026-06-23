/**
 * Shared question display helpers: split question text into prefix + code,
 * and format code with indentation. Used by IdLogView and HistoryLog.
 */
import { translateQuestionText } from './translateQuestion';

const CODE_BLOCK_START_RE = /^\s*(def|class|for|while|if|with|import|from|print|match|case|try|except|finally|elif|else|return|break|continue|assert)\b/;
const SIMPLE_ASSIGNMENT_RE = /^\s*[A-Za-z_][\w,\s]*(?::\s*[\w\[\], ]+)?\s*=\s*.+$/;
const CALL_OR_INDEX_RE = /^\s*[A-Za-z_][\w.]*\s*(\(|\[)/;
const EXPRESSION_RE = /^\s*[\[\(\{'"`0-9A-Za-z_].*(==|!=|<=|>=|<|>|\bin\b|\bis\b|\bor\b|\band\b|\bif\b|\belse\b|\+|-|\*|\/|%)/;

const isLikelyCodeLine = (line: string): boolean => {
  const trimmed = line.trim();
  if (!trimmed || trimmed.endsWith('?')) return false;
  if (/^\s{2,}/.test(line)) return true;
  if (CODE_BLOCK_START_RE.test(trimmed)) return true;
  if (SIMPLE_ASSIGNMENT_RE.test(trimmed)) return true;
  if (CALL_OR_INDEX_RE.test(trimmed)) return true;
  if (EXPRESSION_RE.test(trimmed) && !/^(What|Quel|Quelle|Quels|Que|Résultat|Sortie|Valeur|Comment|Quand|Où|Pourquoi|Peut|Est|Sont|Laquelle|Lequel)\b/i.test(trimmed)) {
    return true;
  }
  return false;
};

export const formatCodeSnippet = (text: string): string => {
  if (!text) return '';

  const isSimpleExpression = !text.includes('\n') &&
    !/\b(def|class|if|for|while|with|try|except|finally|else|elif)\b/.test(text);

  if (isSimpleExpression) return text;
  if (text.includes('\n')) return text;

  let inString: string | null = null;
  let bracketDepth = 0;
  let currentLine = '';
  const initialLines: string[] = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (!inString && (char === "'" || char === '"')) {
      inString = char;
      currentLine += char;
    } else if (inString === char && text[i - 1] !== '\\') {
      inString = null;
      currentLine += char;
    } else if (!inString && (char === '[' || char === '(' || char === '{')) {
      bracketDepth++;
      currentLine += char;
    } else if (!inString && (char === ']' || char === ')' || char === '}')) {
      bracketDepth--;
      currentLine += char;
    } else if (!inString && bracketDepth === 0 && char === ':') {
      currentLine += char;
      initialLines.push(currentLine.trim());
      currentLine = '';
    } else if (!inString && bracketDepth === 0 && char === ';') {
      if (currentLine.trim()) initialLines.push(currentLine.trim());
      currentLine = '';
    } else {
      currentLine += char;
    }
  }
  if (currentLine.trim()) initialLines.push(currentLine.trim());

  let currentIndent = 0;
  const formattedLines: string[] = [];

  for (let i = 0; i < initialLines.length; i++) {
    let line = initialLines[i];
    if (/^(else|elif|except|finally)\b/.test(line)) {
      currentIndent = Math.max(0, currentIndent - 1);
    }
    if (currentIndent > 0) {
      if (/^(print|assert|obj\s*=|f\s*=|x\s*=|y\s*=|g\s*=|next\([^)]*\)|[a-z_]\w*\s*=\s*[A-Z])/.test(line) && !line.startsWith('self.')) {
        currentIndent = 0;
      }
      if (/^(class|import|from)\b/.test(line)) currentIndent = 0;
      if (line.match(/^[a-z_]\w*\(/) && !line.startsWith('self.')) {
        const funcName = line.split('(')[0];
        if (!initialLines.slice(0, i).some(l => l.includes('def ' + funcName))) {
          currentIndent = 0;
        }
      }
    }
    formattedLines.push(' '.repeat(currentIndent * 4) + line);
    if (line.endsWith(':')) {
      currentIndent++;
    } else if (/^(return|pass|break|continue)\b/.test(line)) {
      currentIndent = Math.max(0, currentIndent - 1);
    }
  }
  return formattedLines.join('\n');
};

export const splitQuestion = (text: string, language: string = 'en', questionId?: number): { prefix: string; code: string } => {
  try {
    const enhancedText = translateQuestionText(text, language, questionId);

    if (text.includes('\n') || enhancedText.includes('\n')) {
      const sourceLines = text.split('\n');
      const displayLines = enhancedText.split('\n');
      const maxLines = Math.max(sourceLines.length, displayLines.length);

      for (let i = 0; i < maxLines; i++) {
        const sourceLine = sourceLines[i] ?? '';
        const displayLine = displayLines[i] ?? sourceLine;
        if (isLikelyCodeLine(sourceLine) || isLikelyCodeLine(displayLine)) {
          return {
            prefix: displayLines.slice(0, i).join('\n').trim(),
            code: displayLines.slice(i).join('\n')
          };
        }
      }
    }

    const questionWords = [
      'What is', 'Résultat : ',
      'Result', 'Résultat',
      'Output', 'Sortie',
      'Value', 'Valeur',
      'What', 'Which', 'Lequel', 'How', 'Comment', 'When', 'Quand', 'Where', 'Où', 'Why', 'Pourquoi',
      'Can', 'Peut', 'Does', 'Est-ce que', 'Is', 'Est', 'Are', 'Sont', 'Will', 'Va', 'Would', 'Serait', 'Should', 'Devrait'
    ];

    let questionWordMatch = null;
    for (const word of questionWords) {
      const pattern = new RegExp(`^${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+`, 'i');
      const match = enhancedText.match(pattern);
      if (match) {
        questionWordMatch = match;
        break;
      }
    }

    if (questionWordMatch && questionWordMatch[0]) {
      const questionEnd = questionWordMatch[0].length;
      let displayRemainingText = enhancedText.substring(questionEnd).trim();
      let sourceRemainingText = text.substring(Math.min(questionEnd, text.length)).trim();
      displayRemainingText = displayRemainingText.replace(/^(of|de|is)\s+/i, '');
      sourceRemainingText = sourceRemainingText.replace(/^(of|de|is)\s+/i, '');
      const hasQuestionMark = displayRemainingText.endsWith('?');
      if (hasQuestionMark) displayRemainingText = displayRemainingText.slice(0, -1).trim();
      if (sourceRemainingText.endsWith('?')) sourceRemainingText = sourceRemainingText.slice(0, -1).trim();

      if (isLikelyCodeLine(sourceRemainingText) || isLikelyCodeLine(displayRemainingText)) {
        return {
          prefix: enhancedText.substring(0, questionEnd).trim() + (hasQuestionMark ? '?' : ''),
          code: displayRemainingText
        };
      }
    }

    const codePatterns = [
      /\b(def|class|for|while|if|with|import|from)\s+/,
      /print\s*\(/,
      /[a-zA-Z_]\w*\s*\(/,
    ];

    for (const pattern of codePatterns) {
      const match = enhancedText.match(pattern);
      if (match && match.index !== undefined) {
        const beforeCode = enhancedText.substring(0, match.index).trim();
        if (/^(What|Result|Output|Value|Which|How|When|Where|Why|Can|Does|Is|Are|Will|Would|Should)/i.test(beforeCode)) {
          return {
            prefix: beforeCode,
            code: enhancedText.substring(match.index).trim()
          };
        }
      }
    }

    return { prefix: enhancedText, code: '' };
  } catch (error) {
    return { prefix: text, code: '' };
  }
};
