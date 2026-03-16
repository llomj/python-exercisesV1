/**
 * Appends the 10-section in-depth block to every Level 2 detailed explanation
 * that doesn't already have "Order of Operations:" (full block).
 * Run from repo root: node scripts/add-level2-in-depth.cjs
 */

const fs = require('fs');
const path = require('path');

const BLOCK = `

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations (e.g. / vs //, ** vs *, PEMDAS) and similar expressions.
• Distinguish this operation or expression from others that learners might confuse.

How It Works:
• Python evaluates the expression according to operator precedence and associativity.
• The result is returned or produced according to the semantics of the operation.

Step-by-Step Execution:
1. Any literals or subexpressions are evaluated (parentheses first, then exponents, then * / // %, then + -, etc.).
2. The main operation is applied in the correct order of operations.
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions (including parentheses) are evaluated first.
2. Exponents (**) are evaluated next (right to left if chained).
3. Multiplication, division, floor division, and modulo (* / // %) are evaluated left to right.
4. Addition and subtraction (+ -) are evaluated left to right.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Writing correct arithmetic and expressions; teaching PEMDAS and operator precedence; validating expressions.

Edge Cases:
• See the explanation above for edge cases (e.g. division by zero, overflow, type of result).
• Consider what happens with mixed types, parentheses, and chained operators.

Performance Considerations:
• Arithmetic operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy computation; consider caching or simplifying expressions when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Follow PEMDAS; use parentheses to make order explicit when in doubt; refer to the official docs for full precedence tables.`;

const LEVEL2_FILES = [
  'src/data/questions/level2.ts',
  'src/data/questions/level2_intermediate_a.ts',
  'src/data/questions/level2_intermediate_b.ts',
  'src/data/questions/level2_expert_a.ts',
  'src/data/questions/level2_expert_b.ts',
];

function processFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) {
    console.log('Skip (not found):', filePath);
    return 0;
  }
  let content = fs.readFileSync(fullPath, 'utf8');
  const deRegex = /de:\s*`([\s\S]*?)`(?=\s*})/g;
  let count = 0;
  content = content.replace(deRegex, (match, body) => {
    if (body.includes('Order of Operations:')) return match;
    count++;
    return 'de: `' + body.trimEnd() + BLOCK + '`';
  });
  if (count > 0) {
    fs.writeFileSync(fullPath, content);
    console.log(filePath + ': added 10-section block to ' + count + ' entries.');
  } else {
    console.log(filePath + ': no entries needed updating.');
  }
  return count;
}

let total = 0;
LEVEL2_FILES.forEach((f) => { total += processFile(f); });
console.log('Total entries updated: ' + total);
console.log('Done. Run add-level2-french.cjs to update French for IDs 601-900.');
