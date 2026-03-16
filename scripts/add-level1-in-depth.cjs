/**
 * Appends the 10-section in-depth block to every Level 1 detailed explanation
 * that doesn't already have "Order of Operations:" (full block).
 * Run from repo root: node scripts/add-level1-in-depth.cjs
 *
 * Also optionally updates French: we do not modify FR here; FR entries 301-600
 * must be updated separately with the full 10-section French block per question.
 */

const fs = require('fs');
const path = require('path');

const BLOCK = `

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`;

const LEVEL1_FILES = [
  'src/data/questions/level1.ts',
  'src/data/questions/level1_intermediate_a.ts',
  'src/data/questions/level1_intermediate_b.ts',
  'src/data/questions/level1_expert_a.ts',
  'src/data/questions/level1_expert_b.ts',
];

function processFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) {
    console.log('Skip (not found):', filePath);
    return 0;
  }
  let content = fs.readFileSync(fullPath, 'utf8');
  if (content.includes('Order of Operations:')) {
    // Already has at least one full block; only append to entries that don't
  }
  // Match de: `...` where ... does not contain Order of Operations (so we don't double-append)
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
LEVEL1_FILES.forEach((f) => { total += processFile(f); });
console.log('Total entries updated: ' + total);
console.log('Done. Remember to update DETAILED_EXPLANATIONS_FR for IDs 301-600 with the full French 10-section block.');
