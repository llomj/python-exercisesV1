/**
 * Appends the 10-section in-depth block to every detailed explanation for a given level
 * that doesn't already have "Order of Operations:" (full block).
 * Run from repo root: node scripts/add-level-n-in-depth.cjs <level>
 * Example: node scripts/add-level-n-in-depth.cjs 3
 */

const fs = require('fs');
const path = require('path');

const level = parseInt(process.argv[2], 10);
if (isNaN(level) || level < 3 || level > 10) {
  console.error('Usage: node add-level-n-in-depth.cjs <level> where level is 3-10');
  process.exit(1);
}

const BLOCK = `

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`;

const LEVEL_FILES = {
  3: ['level3.ts', 'level3_intermediate_a.ts', 'level3_intermediate_b.ts', 'level3_expert_a.ts', 'level3_expert_b.ts'],
  4: ['level4.ts', 'level4_for_loops.ts', 'level4_while_batch1.ts', 'level4_while_loops.ts', 'level4_while_batch3.ts', 'level4_while_batch4.ts'],
  5: ['level5.ts', 'level5_intermediate_a.ts', 'level5_intermediate_b.ts', 'level5_expert_a.ts', 'level5_expert_b.ts'],
  6: ['level6.ts', 'level6_intermediate_a.ts', 'level6_intermediate_b.ts', 'level6_expert_a.ts', 'level6_expert_b.ts'],
  7: ['level7.ts', 'level7_intermediate_a.ts', 'level7_intermediate_b.ts', 'level7_expert_a.ts', 'level7_expert_b.ts'],
  8: ['level8.ts', 'level8_intermediate_a.ts', 'level8_intermediate_b.ts', 'level8_expert_a.ts', 'level8_expert_b.ts'],
  9: ['level9.ts', 'level9_intermediate_a.ts', 'level9_intermediate_b.ts', 'level9_expert_a.ts', 'level9_expert_b.ts'],
  10: ['level10.ts', 'level10_intermediate_a.ts', 'level10_intermediate_b.ts', 'level10_expert_a.ts', 'level10_expert_b.ts'],
};

const files = LEVEL_FILES[level].map((f) => 'src/data/questions/' + f);

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
files.forEach((f) => { total += processFile(f); });
console.log('Level ' + level + ' total entries updated: ' + total);
