# Level 0 (Tadpole) – Implementation Plan

## Goal
Add a **Level 0** with **300 very easy questions** for complete beginners (people discovering Python for the first time). Level 0 must be **easier than Level 1**, with a **tadpole icon**, **Beginner / Intermediate / Expert** sub-levels like other levels, and **full French translations**.

---

## Current State (already in codebase)

- **Level 0 exists** in `constants.ts` (LEVELS[0]) with persona `TADPOLE`, concepts: print, variables, types, basic math, first steps.
- **questionsBank.ts** already generates Level 0 with IDs **1–300** from `level0Patterns` (startId 1).
- **level0.ts** has ~57 explicit questions + 100 generated + ~93 from `more` + padding to 300. Some are repetitive (e.g. "What is type(X)?", "What is a + b?").
- **Default start**: `App.tsx` uses `currentLevel: 1`, `highestUnlockedLevel: 1` → users **start at Level 1**, not Level 0.
- **Translations**: `translations.ts` has `levels.level1` … `levels.level10` but **no `levels.level0`**. EvolutionHub uses `t('levels.level' + level)` → Level 0 would need `level0`.
- **French for questions**: `SHORT_EXPLANATIONS_FR` and `DETAILED_EXPLANATIONS_FR` are keyed by question id. Entries 1–300 currently look like old Level 1 content (e.g. variable names, comments). Level 0 questions are type(), literals, simple math → we need **300 short + 300 detailed FR** aligned to the **actual** Level 0 questions.
- **Icon**: Level 0 already uses `PersonaStage.TADPOLE` with `fa-frog` in App.tsx and LevelSelectorModal. You asked for “tadpole” – `fa-frog` is the evolution metaphor; we can keep it or switch to a more tadpole-like icon if available (e.g. `fa-fish` or keep `fa-frog`).

---

## What must be done

### 1. Start new users at Level 0
- In **App.tsx**, set `INITIAL_STATS.currentLevel` and `highestUnlockedLevel` to **0** (instead of 1) so new users begin at Level 0 (Tadpole).

### 2. UI: Level 0 label and description
- In **translations.ts** (en + fr), add:
  - **levels.level0** (e.g. EN: “Your very first steps in Python. Learn what Python is, print(), variables, and basic types.” / FR: equivalent).
- Ensure **EvolutionHub** and **LevelSelectorModal** can resolve `levels.level0` (they use `level${levelInfo.level}` so `level0` is enough).

### 3. Level 0 content: 300 unique, very easy questions
- **level0.ts**: Replace or extend so there are **300 unique** beginner questions (no repetitive “What is type(42)?”, “What is 3+5?” clones).
- Topics (easier than Level 1): what is Python, **print()**, **variables** (names, assignment), **values/literals** (numbers, strings, True/False, None), **types** (type(), int, float, str, bool, list, dict, etc.), **very simple expressions** (e.g. 1+1, len('hi'), simple indexing), **first steps** (running code, reading output). Keep **no** or minimal: conditionals, loops, functions, OOP.
- Structure: same as other levels – **Beginner / Intermediate / Expert** within Level 0 (e.g. first 100 = Beginner, next 100 = Intermediate, last 100 = Expert), via existing `getSubLevel(index, 300)` in questionsBank.

### 4. French translations for Level 0 (IDs 1–300)
- **Short explanations**: In **shortExplanationsTranslations.ts**, ensure entries **1–300** are the French short explanations for the **actual** Level 0 questions (replace or add so each id 1–300 matches level0 content).
- **Detailed explanations**: In **detailedExplanationsTranslations.ts**, ensure entries **1–300** are the French detailed explanations for the same Level 0 questions (same structure as EN: key concepts, how it works, examples, etc.).
- **Question/option text**: If the app translates question text by id (e.g. a separate map), add French for 1–300. If it uses generic `translateText()` only, then short/detailed FR above is the main requirement.

### 5. Icon
- Level 0 already uses **TADPOLE** and **fa-frog**. If you want a more “tadpole” look, we can try another icon (e.g. `fa-fish` for a small creature) or keep `fa-frog` as the tadpole stage. No code change needed unless we switch icon.

### 6. Constants and types
- **TOTAL_QUESTIONS**: Already 3300 (11 × 300) in constants.ts.
- **LEVELS**: Level 0 already present; ensure **description** and **concepts** match “very first steps”, “easier than Level 1”.
- **AGENTS.md / ps.md**: Update to “Level 0 = 300 questions (Tadpole), then 10 levels × 300 = 3300 total” and “Level 0 is for complete beginners”.

### 7. Random mode and progress
- Random mode already includes “all levels”; ensure Level 0 questions (ids 1–300) are included when drawing from all levels. No change needed if the pool is `QUESTIONS_BANK` and includes level 0.
- **Unlock rule**: Level 0 unlocked by default; Level 1 unlocked when Level 0 progress (or completion) is done, per your product rule (e.g. “complete 100 in Level 0 to unlock Level 1” or “Level 0 and 1 both start unlocked”). Currently `highestUnlockedLevel: 0` would unlock only Level 0; once we set initial to 0, new users see only Level 0 until they progress.

### 8. Testing and docs
- Run app: default view = Level 0 (Tadpole), 300 questions, 3 sub-levels.
- Switch to French: Level 0 title/description and all 300 short + detailed explanations in French.
- Verify no regressions: Level 1–10 still work, random mode includes Level 0, progress and stars correct.

---

## Suggested content focus for Level 0 (easier than Level 1)

- **Print**: `print(5)`, `print("hi")`, what appears in the console.
- **Variables**: “what is a variable”, assigning a number/string to a name, reading it back.
- **Values**: literals only – integers, floats, strings (single/double quotes), True/False, None, [], (), {}.
- **Types**: `type(3)`, `type("x")`, `type([])`, etc. – identification only, no conversion yet.
- **Very simple expressions**: `1+1`, `2*3`, `len("ab")`, `"a"+"b"`, first character `"hi"[0]`, no conditionals/loops.
- **First steps**: “what does this line do”, “what is the result of this”, “which is a valid variable name”.

Keep Level 1 as: variables in depth, types + type conversion, strings (methods, slicing), comments – so Level 0 stays strictly easier.

---

## Checklist summary

| Task | Status |
|------|--------|
| 1. Set initial `currentLevel` and `highestUnlockedLevel` to 0 in App.tsx | Pending |
| 2. Add `levels.level0` in translations (en + fr) | Pending |
| 3. Replace/pad level0.ts with 300 unique, very easy questions (Beginner/Intermediate/Expert) | Pending |
| 4. Align SHORT_EXPLANATIONS_FR[1–300] with Level 0 questions | Pending |
| 5. Align DETAILED_EXPLANATIONS_FR[1–300] with Level 0 questions | Pending |
| 6. Confirm tadpole icon (keep fa-frog or change) | Done (fa-frog) |
| 7. Update AGENTS.md/ps.md for Level 0 and 3300 total | Pending |
| 8. Test: start at Level 0, FR, no regressions | Pending |

---

## Optional improvements

- **Onboarding**: One-time tooltip or short message: “Start with Level 0 (Tadpole) if you’re new to Python.”
- **Difficulty label**: In UI, show “Very easy” or “First steps” for Level 0 to set expectations.
- **Unlock rule**: Explicit rule (e.g. “Complete 100 in Level 0 to unlock Level 1”) if you want to force order; otherwise unlocking Level 1 when Level 0 is in progress is already possible with `highestUnlockedLevel` logic.

If you want, next step can be implementing the checklist in code (starting with 1–2 and 3, then 4–5, then 7–8).
