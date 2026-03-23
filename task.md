# Task Tracker - Level 1 In-Depth Explanations (EN/FR)

## Objective

Complete and maintain high-quality, unique in-depth explanations for Level 1 with strict English/French parity.

- Scope: IDs `301-600` (Level 1).
- Current working file: `src/data/detailedExplanationsTranslations.ts` (French in-depth content).
- Goal per ID:
  - Keep `Beginner / Intermediate / Expert` (or `Debutant / Intermediaire / Expert`) structure intact.
  - Ensure the full 10-section in-depth block exists and is unique to that specific question.
  - Ensure French mirrors English depth and structure (no placeholders).

## 10-Section Standard (Must Exist Per ID)

### English headings (exact order)
1. `Key Concepts:`
2. `Key Distinctions:`
3. `How It Works:`
4. `Step-by-Step Execution:`
5. `Order of Operations:`
6. `Common Use Cases:`
7. `Edge Cases:`
8. `Performance Considerations:`
9. `Examples:`
10. `Notes:`

### French headings (exact order)
1. `Concepts cles :`
2. `Distinctions cles :`
3. `Fonctionnement :`
4. `Execution etape par etape :`
5. `Ordre des operations :`
6. `Cas d'utilisation courants :`
7. `Cas limites :`
8. `Considerations de performance :`
9. `Exemples :`
10. `Remarques :`

## Progress Log (Level 1 FR)

### 2026-03-19 — realignment with `QUESTIONS_BANK` (Level 1 = IDs 301–600)

- **Source fix (earlier):** Level 0 bank slice = 300 questions so IDs **301–600** are unique to Level 1 (`src/questionsBank.ts`).
- **French detailed map:** Rebuilt / corrected misaligned ranges that still contained **list-loop** content for **string / f-string** questions.
- **Done this session:**
  - **301–320** — already aligned (types, identifiers, comments intro).
  - **321–337** — replaced (strings, slicing, comments) via `scripts/patch-fr-l1-321-337.mjs` (then fixed TS backticks / `\\u` where needed).
  - **422–450** — replaced (immutability, `str`/`repr`, f-strings, `format`, `%`) via `scripts/patch-fr-l1-422-450.mjs`.
- **451–600 (2026-03-19 suite):** Rebuilt French detailed text to match `QUESTIONS_BANK` Level 1. Scripts: `scripts/patch-fr-l1-451-500.mjs` + fragments `scripts/fr-l1-frags/fr-451-460.mjs` … `fr-491-500.mjs` ; `scripts/patch-fr-l1-501-600.mjs` + `fr-501-520.mjs` … `fr-581-600.mjs`. **Level 1 FR map 451–600 is aligned** (verify spot-checks: 451 string `+=`, 500 `type is str`, 511 `bytearray`, 551 `id(42)`, 600 `complex`).
- **Still to audit (optional):** IDs **301–420** were fixed in earlier sessions (incl. 321–337, 422–450); re-spot-check **401–420** vs bank if any duplicate blocks remain elsewhere in the file.

### 2026-03-23 — generic EN `de` boilerplate + FR depth (spot IDs + Level 1 Expert A)

- **Audit:** Run `python3 scripts/audit_generic_in_depth_blocks.py` — counts the duplicate block (`Key Concepts:` + “See the key concepts and explanation above…”) across `src/data/questions/*.ts`. Thousands of occurrences remain outside the batches below.
- **English — Level 1 Expert A (IDs 501–550):** Replaced all 50 duplicated generic tails in `src/data/questions/level1_expert_a.ts` via `scripts/fix_level1_expert_a_generic_blocks.py` with per-question Key Distinctions … Notes. Do not use backticks inside `de` template literals (breaks esbuild); use straight quotes.
- **English — single ID 594:** Replaced generic tail for `"abc123".isalnum()` in `src/data/questions/level1_expert_b.ts`.
- **French — `detailedExplanationsTranslations.ts`:** Expanded full 10-section depth for IDs **513**, **530**, **594** (were terse / placeholder-like).
- **Next:** Apply the same EN replacement pattern to `level1_expert_b.ts` (49 remaining generic blocks after 594), then `level1.ts` / `level1_intermediate_*.ts` / other levels; expand FR for every ID to match EN.

### 2026-03-23 (continued) — Level 1 Expert B EN complete + AGENTS.md tracker

- **English — Level 1 Expert B (IDs 551–600):** All generic duplicate tails removed. **594** was already non-generic; **49** replacements applied via `scripts/fix_level1_expert_b_generic_blocks.py`.
- **Audit:** Total generic markers reduced (e.g. ~2931 → ~2882); `level1_expert_b.ts` has **0** markers.
- **AGENTS.md:** Added **§6b-1 In-depth 10-section rollout — progress tracker** — agents must update after each batch (EN + FR).
- **Next EN:** `level1.ts` (92), `level1_intermediate_a.ts` (50), `level1_intermediate_b.ts` (50). **Next FR:** Level 1 IDs **551–600** full parity, then remaining **301–600** as needed.

### 2026-03-23 (continued) — Level 1 `level1.ts` + intermediate A EN

- **English — `level1.ts`:** Patched **92** generic blocks via `scripts/fix_level1_patterns_generic_blocks.py`. Fixed **duplicate `Key Distinctions:`** (replacement must be `tail` only — tail already includes the heading). Fixed TS template **`\x` escape** in bytes edge-case text (`\\x` in source). Verified `npm run build`.
- **English — `level1_intermediate_a.ts`:** Patched **50** blocks via `scripts/fix_level1_intermediate_a_generic_blocks.py` (positional `TAILS`, `Key Distinctions:\\n` + body). Build OK.
- **Audit:** Project total generic markers **~2740** after the above (47 files still carrying markers).
- **English — `level1_intermediate_b.ts`:** Patched **50** blocks via `scripts/fix_level1_intermediate_b_generic_blocks.py`. Fixed **\\x / \\u / \\U** mention in TS `de` strings (double backslashes for valid template literals). Build OK.
- **Level 1 EN bank:** All `level1*.ts` question files in this repo **0** generic duplicate markers (run audit).
- **Next EN:** `level2.ts` and related `level2_*.ts` (or next level per planning). **Next FR:** continue **301–600** parity.

### 2026-03-23 (continued) — Level 2 `level2.ts` EN

- **English — `level2.ts`:** Replaced **100** generic duplicate tails via `scripts/fix_level2_patterns_generic_blocks.py`. **BLOCK_END** must match this file’s Notes line (“Follow PEMDAS; use parentheses…”), not the Level 1 `isinstance` boilerplate — otherwise the script cannot find blocks. **`npm run build`** OK.
- **Audit:** Project total **~2590** generic markers; `level2.ts` has **0** duplicate markers.
- **Next EN:** `level2_expert_a.ts`, `level2_expert_b.ts`, `level2_intermediate_a.ts`, `level2_intermediate_b.ts` (**200** total), then Level 3 — **verify BLOCK_END** per target file before writing fix scripts.

### 2026-03-23 (continued) — commit + Level 2 Expert A

- **Git:** Commit `1127c4f` — Level 1–2 EN in-depth replacements, scripts, FR sample updates, AGENTS/task tracker.
- **English — `level2_expert_a.ts`:** Patched **50** generic tails via `scripts/fix_level2_expert_a_generic_blocks.py` (Decimal/Fraction/complex/bitwise). Same PEMDAS `BLOCK_END` as `level2.ts`. **`npm run build`** OK.
- **Next EN:** (completed in following log entry) `level2_expert_b.ts`, `level2_intermediate_a.ts`, `level2_intermediate_b.ts`.

### 2026-03-23 (continued) — Level 2 Expert B + intermediate A/B EN

- **English:** Patched **50** blocks each in `level2_expert_b.ts`, `level2_intermediate_a.ts`, `level2_intermediate_b.ts` via scripts `fix_level2_expert_b_generic_blocks.py`, `fix_level2_intermediate_a_generic_blocks.py`, `fix_level2_intermediate_b_generic_blocks.py`. Same PEMDAS `BLOCK_END` as other Level 2 files.
- **`intermediate_a` script:** Adjacent triple-quoted strings without commas were implicitly concatenated — fixed by inserting commas after each tail (or write tails with explicit `""",` like expert_b). **len(TAILS)** must be **50** before running.
- **Build:** `npm run build` OK. **Audit:** ~**2390** generic markers (41 files); **Level 2** question files: **0** duplicate markers.
- **Next EN:** `level3.ts` (verify Notes footer / `BLOCK_END` first), then `level3_*` batches.
- **Level 3 prep:** Generic block ends with Notes: `Follow PEP 8 and best practices; refer to the official docs for full details.` (not PEMDAS). Tails must be handcrafted per question like Level 2 — avoid bulk templates that repeat the same bullets across IDs.

### 2026-03-23 (continued) — Level 3 `level3.ts` EN (100)

- **English:** Replaced **100** generic duplicate tails in `src/data/questions/level3.ts` via `scripts/fix_level3_patterns_generic_blocks.py`. **BLOCK_END** = PEP 8 Notes line (same closing text as the old generic block). **`TAIL_ROWS`:** 100 tuples × 10 sections; fixed four tuples that had only 9 strings (script would fail `_tail` unpacking).
- **Build:** `npm run build` OK. **Audit:** **~2290** generic markers (40 files); **`level3.ts`:** **0** duplicate markers.
- **Next EN:** `level3_expert_a.ts`, `level3_expert_b.ts`, `level3_intermediate_a.ts`, `level3_intermediate_b.ts` — grep `Notes:` footer in each file before copying **BLOCK_END** (likely PEP 8 like `level3.ts`).

### 2026-03-23 (continued) — Level 3 Expert B + intermediate A/B EN + generator fix

- **Generator:** Fixed **`scripts/_generate_level3_remaining_fixes.py`** — `FOOTER` no longer starts with `]` (was paired with `write_script()` appending `]`, producing **`]]`** and `SyntaxError`). Regenerated the three fix scripts.
- **English:** Patched **50** blocks each in `level3_expert_b.ts`, `level3_intermediate_a.ts`, `level3_intermediate_b.ts` via `fix_level3_expert_b_generic_blocks.py`, `fix_level3_intermediate_a_generic_blocks.py`, `fix_level3_intermediate_b_generic_blocks.py`. Same PEP 8 **BLOCK_END** as `level3.ts`.
- **Build:** `npm run build` OK. **Grep:** no `See the key concepts…` in any `level3*.ts`. **Audit:** **~2090** generic markers project-wide (Level 3 EN files clean for that marker).
- **Next EN:** `level4.ts` (grep `Notes:` / **BLOCK_END** first), then `level4_*` batches per planning.
- **Optional polish:** Some `de` tails still contain `— (Editorial: expand this slot if needed.)` padding (generator filled short section lists) — replace with fully question-specific prose when tightening quality.

### Confirmed completed before this tracker
- IDs `402-411` completed with full in-depth French structure.
- Prior batches had been advanced through `421`.

### 2026-03-23 — generic EN `Key Concepts` marker cleanup (Levels 4–10)

- **English:** Removed the duplicated `Key Concepts` bullet `• See the key concepts and explanation above for the main ideas and bullet points.` across `level4.ts`, `level4_*`, `level5*.ts`, `level6*.ts`, `level7*.ts`, `level8*.ts`, `level9*.ts`, and `level10*.ts`. Also removed the duplicated generic “Key Distinctions → Notes” boilerplate tail (generated by `scripts/add-level-n-in-depth.cjs`) and replaced it with question-specific sections in `de`.
- **Verification:** `python3 scripts/audit_generic_in_depth_blocks.py` reports **0** occurrences, and repo-wide `rg` finds **0** matches for the old generic “Compare with related operations…” and “Follow PEP 8 and best practices…” bullets.

### Completed in the latest work session
- IDs `422-425` upgraded to full in-depth French structure:
  - `422`: list repetition with `*`
  - `423`: list multiplied by `0`
  - `424`: membership with `in` (true case)
  - `425`: membership with `in` (false case)
- IDs `426-431` upgraded to full in-depth French structure:
  - `426`: list equality `==` (same order/content)
  - `427`: list equality with different order
  - `428`: identity `is` vs value equality
  - `429`: lexicographic list comparison
  - `430`: prefix/length lexicographic rule
  - `431`: `append()` mutates list and returns `None`
- IDs `432-441` upgraded to full in-depth French structure:
  - `432`: `extend()` with list
  - `433`: `insert(index, value)`
  - `434`: `insert(0, value)` at start
  - `435`: `insert()` with out-of-range index
  - `436`: `append()` vs `extend()`
  - `437`: `+` vs `extend()`
  - `438`: `append([x])` nested list behavior
  - `439`: `extend([x])` flat add behavior
  - `440`: `extend()` with string iterable
  - `441`: `pop()` without index
- IDs `442-451` upgraded to full in-depth French structure:
  - `442`: `pop(index)` behavior
  - `443`: `remove(value)` first match
  - `444`: `remove()` with duplicates
  - `445`: `clear()` in-place reset
  - `446`: `pop()` vs `remove()`
  - `447`: `pop()` on empty list (`IndexError`)
  - `448`: `remove()` missing value (`ValueError`)
  - `449`: `pop(-1)` and negative index behavior
  - `450`: `del` by index (no return value)
  - `451`: `index(value)` first occurrence
- IDs `452-461` upgraded to full in-depth French structure:
  - `452`: `index()` with duplicates (first occurrence)
  - `453`: `count()` basics
  - `454`: `count()` counts all occurrences
  - `455`: `count()` returns `0` when absent
  - `456`: `index()` absent value (`ValueError`)
  - `457`: `index(value, start)`
  - `458`: `index()` from later start position
  - `459`: `index(value, start, stop)`
  - `460`: `index()` value outside search range
  - `461`: `sorted()` returns new sorted list
- IDs `462-471` upgraded to full in-depth French structure:
  - `462`: `sorted(..., reverse=True)`
  - `463`: `list.sort()` in-place / returns `None`
  - `464`: `list.reverse()` in-place
  - `465`: `sort` vs `sorted`
  - `466`: `reversed()` iterator
  - `467`: `list(reversed(...))`
  - `468`: slice `[::-1]` vs `reversed()`
  - `469`: `sorted` on strings (character order)
  - `470`: `sorted(..., key=...)`
  - `471`: `list.copy()` shallow copy
- IDs `472-481` upgraded to full in-depth French structure:
  - `472`: `list(iterable)` / copy-like from list
  - `473`: slice `[:]` shallow copy
  - `474`: shallow vs deep copy concept
  - `475`: `copy.copy` shallow generic
  - `476`: `copy.deepcopy` nested independence
  - `477`: assignment alias vs copy
  - `478`: `list.copy()` flat independence
  - `479`: shallow copy shares nested mutables
  - `480`: deepcopy isolates nested lists
  - `481`: unpacking `a, b, c = [1, 2, 3]`
- IDs `482-491` upgraded to full in-depth French structure:
  - `482`: `a, *b = [...]` (star collects rest)
  - `483`: `*a, b = [...]` (prefix star, last scalar)
  - `484`: star target gets `[]` when no remainder
  - `485`: list display splat `[*a, *b]`
  - `486`: `[1,2]+[3]` vs `[*[1,2], 3]` same flat result
  - `487`: `max()` on iterable
  - `488`: `min()` on iterable
  - `489`: `sum()` default start 0
  - `490`: `sum(iterable, start)`
  - `491`: `any()` truthy short-circuit
- IDs `492-501` upgraded to full in-depth French structure:
  - `492`: list repetition with `*` (int multiplier)
  - `493`: list `==` with int vs float elements (value equality)
  - `494`: `==` False when lengths differ
  - `495`: list `!=`
  - `496`: lexicographic `<` with prefix rule
  - `497`: lexicographic `>` (longer wins when prefix)
  - `498`: operator precedence `[1,2] + [3] * 2`
  - `499`: parentheses `([1,2] + [3]) * 2`
  - `500`: `len` of concatenated lists
  - `501`: dict literal `{'a': 1, 'b': 2}`
- IDs `502-511` upgraded to full in-depth French structure:
  - `502`: empty dict `{}` vs set
  - `503`: `dict()` empty constructor
  - `504`: `dict` from iterable of pairs (e.g. list of tuples)
  - `505`: `dict(a=1, b=2)` keyword keys
  - `506`: `d['a']` subscription lookup
  - `507`: `d['b']` subscription lookup
  - `508`: missing key → `KeyError`
  - `509`: `len(dict)` counts key-value pairs
  - `510`: `len({})` is 0
  - `511`: `.get('a')` returns value when present
- IDs `512-521` upgraded to full in-depth French structure:
  - `512`: `.get(k)` missing key → `None`
  - `513`: `.get(k, default)` on missing key (note: args evaluated eagerly)
  - `514`: `.get(k, default)` when key exists → stored value
  - `515`: `.setdefault(k, default)` key exists → existing value, no write
  - `516`: `.setdefault` on missing key → insert and return default
  - `517`: `get` vs `setdefault` (mutation on miss)
  - `518`: `.pop(k)` removes pair, returns value
  - `519`: `.pop(k)` missing key → `KeyError`
  - `520`: `.pop(k, default)` missing key → default, dict unchanged
  - `521`: `.keys()` → `dict_keys` live view
- IDs `522-531` upgraded to full in-depth French structure:
  - `522`: `list(d.keys())` snapshot / materialization
  - `523`: `.values()` → `dict_values` view
  - `524`: `list(d.values())` snapshot
  - `525`: `.items()` → `dict_items` view
  - `526`: `list(d.items())` list of pairs
  - `527`: `key in dict` tests keys only
  - `528`: value-only int not found via `in dict`
  - `529`: `value in dict.values()`
  - `530`: `(key, value) in dict.items()`
  - `531`: `d[new_key] = value` inserts new entry
- Maintenance: removed accidental duplicate old entries for IDs `518-521` that appeared after the `512-521` upgrade (file had two `518`–`521` blocks in a row).
- IDs `532-551` upgraded to full in-depth French structure:
  - `532`: `d[k] = v` overwrites existing key
  - `533`: `.update(...)` returns `None`
  - `534`: `update` adds new keys from another mapping
  - `535`: `update` overwrites existing keys
  - `536`: `popitem()` LIFO insertion order (3.7+)
  - `537`: `popitem()` on single-item dict
  - `538`: `popitem()` on empty dict → `KeyError`
  - `539`: `.clear()` returns `None`, same dict object
  - `540`: `clear()` visible through all aliases
  - `541`: `.copy()` shallow copy of dict
  - `542`: `dict(d)` shallow copy from mapping
  - `543`: `{**a, **b}` merge into new dict
  - `544`: `{**...}` last mapping wins on key clash
  - `545`: `a | b` merge (3.9+), new dict
  - `546`: `|` right-hand wins on duplicate keys
  - `547`: `|=` in-place merge (3.9+)
  - `548`: `|` vs `|=` (new dict vs mutate)
  - `549`: shallow copy shares nested mutables
  - `550`: `copy.deepcopy` for nested independence
  - `551`: dict comprehension `{k: v for ...}`
- IDs `552-571` upgraded to full in-depth French structure:
  - `552`-`556`: `range` en compréhension dict, `items()` unpack, filtre `if`, ternaire en valeur, clés calculées (`str(x)`)
  - `557`-`561`: boucles `for` imbriquées / clés tuple, `zip`, itérable vide → `{}`, filtre + transformation, `==` sur dicts (ordre ignoré)
  - `562`-`564`: `==` faux (valeurs différentes / clés différentes), `!=`
  - `565`-`566`: `is` sur littéraux vs `d is d`
  - `567`-`568`: `bool({})` / dict non vide truthy
  - `569`-`570`: `+` et `*` interdits sur dict
  - `571`: vue `.keys()` dynamique après mutation
- IDs `572-581` upgraded to full in-depth French structure:
  - `572`-`573`: vues `.values()` / `.items()` dynamiques
  - `574`-`576`: itération `for k in d`, `.values()`, `.items()` avec déballage
  - `577`-`580`: `list(d)`, `tuple(d)`, `set(d)`, `sorted(d)` (clés)
  - `581`: `dict.fromkeys` / appel sur instance ignorée, défaut `None`
- IDs `582-591` upgraded to full in-depth French structure:
  - `582`: `fromkeys(..., valeur)` — une seule référence (piège mutables)
  - `583`: `fromkeys` sur instance, clés neuves, instance ignorée
  - `584`-`585`: `max(d)` / `min(d)` sur les clés
  - `586`-`587`: `max` / `sum` sur `.values()`
  - `588`-`589`: `all` / `any` sur `.values()`
  - `590`: motif `.get(...) or ...` et piège des valeurs falsy légitimes
  - `591`: clés entières
- IDs `592-600` upgraded to full in-depth French structure:
  - `592`: clés tuple composites (hashables, ordre compte)
  - `593`: listes non hashables comme clés → TypeError
  - `594`: dicts non hashables comme clés → TypeError
  - `595`: clés `None` / `True` / `False`
  - `596`-`598`: `1` vs `1.0` même clé (lookup, littéral, assignations)
  - `599`-`600`: `.pop(k, default)` branche présent / absent

### Current checkpoint
- Last fully updated ID in this latest pass: `600`.
- **Level 1 range `301-600`**: French in-depth block (10 sections + tiers) is **complete** for this tracker pass.
- **Next (project-dependent)**: spot-check English/French parity per ID, or extend the same pattern to Level 2+ (`601+`) per `planning.md` / `AGENTS.md`.

## Progress Log (Level 2 FR — IDs 601–900)

### 2026-03-19 — realignment with `QUESTIONS_BANK` (Level 2 = IDs 601–900)

- **Problem:** French detailed entries for `601+` still used **function / `def`** boilerplate while the bank tests **numeric operators, precedence, conversions**, etc.
- **Done:** **601–650** replaced with bank-aligned French (10-section style: Débutant → Remarques). Fragments: `scripts/fr-l2-frags/fr-l2-601-620.mjs`, `fr-l2-621-640.mjs`, `fr-l2-641-650.mjs`. Splice script: `scripts/patch-fr-l2-601-650.mjs`. Build verified: `npm run build` (includes `inject-precache.js`).
- **Done (suite):** **651–700** — chaînes, comparaisons, and/or/not, chaînages, in/not in, is, unaires, //, %, round(.5). Fragments: `fr-l2-651-670.mjs`, `fr-l2-671-690.mjs`, `fr-l2-691-700.mjs`. Patch: `scripts/patch-fr-l2-651-700.mjs`. Build OK.
- **Done (suite):** **701–750** — math.sqrt, floor/ceil/trunc, pi/e, inf/nan, isnan/isinf/isfinite, log/log10/log2, factorial, gcd/lcm, comb/perm, divmod, round, fsum, copysign, pow, isclose, degrees/radians, hypot. Fragment: `fr-l2-701-750.mjs`. Patch: `scripts/patch-fr-l2-701-750.mjs`. Build OK.
- **Done (suite):** **751–800** — math.fabs, modf, prod, remainder, isqrt, dist, fmod, exp, pow(0,0), tau, inf+1, 0.1+0.2 gotcha, underscores, b/o/x literals, int(1e3), float overflow, sys.float_info, 2/3+1/3, abs, divmod/round, max/min/sorted, sum, pow mod, bool. Fragment: `fr-l2-751-800.mjs`. Patch: `scripts/patch-fr-l2-751-800.mjs`. Build OK.
- **Done (suite):** **801–850** — Decimal, Fractions, Complex, Bitwise (level2_expert_a). Fragment: `fr-l2-801-850.mjs`. Patch: `scripts/patch-fr-l2-801-850.mjs`. Build OK.
- **Done (suite):** **851–900** — float imprecision, inf/nan, epsilon, negative zero, copysign, arbitrary int, float overflow, int base, bin/hex/oct, bit_length, from_bytes/to_bytes, format, isinstance, bool, sum booleans (level2_expert_b). Fragment: `fr-l2-851-900.mjs`. Patch: `scripts/patch-fr-l2-851-900.mjs`. Build OK.
- **Level 2 FR 601–900 complete.**

## Progress Log (Level 3 FR — IDs 901–1200)

### 2026-03-20 — Level 3 French in-depth (conditionals, loops, dicts, etc.)

- **Done:** **901–950** — conditionals, booleans, logic (True/False, and/or/not, comparisons, == vs is, in/not in). Fragment: `fr-l3-901-950.mjs`. Patch: `patch-fr-l3-901-950.mjs`. Build OK.
- **Done:** **951–1000** — truthiness, if/elif/else, ternary, and/or short-circuit. Fragment: `fr-l3-951-1000.mjs`. Patch: `patch-fr-l3-951-1000.mjs`. Build OK.
- **Done:** **1001–1050** — any/all, nested ternaries, guard clauses, bool/truthiness, or/and fallbacks. Fragment: `fr-l3-1001-1050.mjs`. Patch: `patch-fr-l3-1001-1050.mjs`. Build OK.
- **Done:** **1051–1100** — precedence, parens, not, chained comparisons, any/all, dict.get, lambda, bool/int. Fragment: `fr-l3-1051-1100.mjs`. Patch: `patch-fr-l3-1051-1100.mjs`. Build OK.
- **Done:** **1101–1150** — match/case (3.10), walrus operator (3.8). Fragment: `fr-l3-1101-1150.mjs`. Patch: `patch-fr-l3-1101-1150.mjs`. Build OK.
- **Done:** **1151–1200** — truthiness edge cases, bool gotchas, advanced conditionals. Fragment: `fr-l3-1151-1200.mjs`. Patch: `patch-fr-l3-1151-1200.mjs`. Build OK.
- **Level 3 FR 901–1200 complete.**

## Remaining Work

### Progress Log (Level 4 FR — IDs 1201–1500)

### 2026-03-20 — Level 4 French in-depth (Loops, range, for/while, comprehensions)

- **Done:** **1201–1250** — `level4.ts` Q1–50. Fragment: `fr-l4-1201-1250.mjs`. Patch: `patch-fr-l4-1201-1250.mjs`. Build OK.
- **Done:** **1251–1300** — `level4.ts` Q51–96 + `level4_for_loops` Q1–4. Fragment: `fr-l4-1251-1300.mjs`. Patch: `patch-fr-l4-1251-1300.mjs`. Build OK.
- **Done:** **1301–1350** — `level4_for_loops` Q5–54. Fragment: `fr-l4-1301-1350.mjs`. Patch: `patch-fr-l4-1301-1350.mjs`. Build OK.
- **Done:** **1351–1400** — `level4_for_loops` Q55–100 + `level4_while_batch1` Q1–4. Fragment: `fr-l4-1351-1400.mjs`. Patch: `patch-fr-l4-1351-1400.mjs`. Build OK.
- **Done:** **1401–1450** — `level4_while_batch1` Q5–26, `level4_while_loops` (26), `level4_while_batch3` Q1–2. Fragment: `fr-l4-1401-1450.mjs`. Patch: `patch-fr-l4-1401-1450.mjs`. Build OK.
- **Done:** **1451–1500** — `level4_while_batch3` Q3–26, `level4_while_batch4` (26). Fragment: `fr-l4-1451-1500.mjs`. Patch: `patch-fr-l4-1451-1500.mjs`. Build OK.
- **Level 4 FR 1201–1500 complete.**

### Progress Log (Level 5 FR — IDs 1501–1800)

### 2026-03-20 — Level 5 French in-depth (lists, comprehensions, sets, collections)

- **Done:** **1501–1550** — `level5.ts` Q1–50. Fragment: `fr-l5-1501-1550.mjs`. Patch: `patch-fr-l5-1501-1550.mjs`. Build OK.
- **Done:** **1551–1600** — `level5.ts` Q51–100. Fragment: `fr-l5-1551-1600.mjs`. Patch: `patch-fr-l5-1551-1600.mjs`. Build OK.
- **Done:** **1601–1650** — `level5_intermediate_a.ts` Q1–50. Fragment: `fr-l5-1601-1650.mjs`. Patch: `patch-fr-l5-1601-1650.mjs`. Build OK.
- **Done:** **1651–1700** — `level5_intermediate_b.ts` Q1–50. Fragment: `fr-l5-1651-1700.mjs`. Patch: `patch-fr-l5-1651-1700.mjs`. Build OK.
- **Done:** **1701–1750** — `level5_expert_a.ts` Q1–50. Fragment: `fr-l5-1701-1750.mjs`. Patch: `patch-fr-l5-1701-1750.mjs`. Build OK.
- **Done:** **1751–1800** — `level5_expert_b.ts` Q1–50. Fragment: `fr-l5-1751-1800.mjs`. Patch: `patch-fr-l5-1751-1800.mjs`. Build OK.
- **Level 5 FR 1501–1800 complete.**

### Progress Log (Level 6 FR — IDs 1801–2100, dictionnaires / `QUESTIONS_BANK`)

### 2026-03-20 — Level 6 French in-depth (realignement banque)

- **Constat :** Les entrées 1801+ parlaient de fonctions alors que le niveau 6 dans `questionsBank.ts` est **dict / mapping** (IDs **1801–2100**). Les nouveaux textes suivent `level6*.ts`.
- **Done:** **1801–1850** — `level6.ts` Q1–50. Fragment: `scripts/fr-l6-frags/fr-l6-1801-1850.mjs`. Patch: `scripts/patch-fr-l6-1801-1850.mjs`. Build OK.
- **Done:** **1851–1900** — `level6.ts` Q51–100 (IDs alignés : 1851 = `{x: x*2 for x in [1, 2, 3]}`, 1900 = `pop('c','default')`). Fragment: `scripts/fr-l6-frags/fr-l6-1851-1900.mjs`. Patch: `scripts/patch-fr-l6-1851-1900.mjs`. Build OK.
- **Done:** **1901–1950** — `level6_intermediate_a.ts` Q1–50 (dicts imbriqués, setdefault, vues, **kwargs, etc.). Fragments: `fr-l6-1901-1925.mjs` + `fr-l6-1926-1950.mjs`, agrégateur `fr-l6-1901-1950.mjs`. Patch: `patch-fr-l6-1901-1950.mjs`. Build OK.
- **Done:** **1951–2000** — `level6_intermediate_b.ts` Q1–50 (dict comprehensions avancées, ChainMap, fusion `|` / `|=`, dunder `__contains__`, etc.). Fragments: `fr-l6-1951-1975.mjs` + `fr-l6-1976-2000.mjs`, agrégateur `fr-l6-1951-2000.mjs`. Patch: `patch-fr-l6-1951-2000.mjs`. Build OK.
- **Done:** **2001–2050** — `level6_expert_a.ts` Q1–50 (Counter, defaultdict, OrderedDict). Fragments: `fr-l6-2001-2025.mjs` + `fr-l6-2026-2050.mjs`, agrégateur `fr-l6-2001-2050.mjs`. Patch: `patch-fr-l6-2001-2050.mjs`. Build OK.
- **Done:** **2051–2100** — `level6_expert_b.ts` Q51–100 (hashabilité, __missing__, MappingProxyType, copies, vues, etc.). Fragments: `fr-l6-2051-2075.mjs` + `fr-l6-2076-2100.mjs`, agrégateur `fr-l6-2051-2100.mjs`. Patch: `patch-fr-l6-2051-2100.mjs`. Build OK.
- **Level 6 FR 1801–2100 complete.**
- **Done:** **Level 7 FR 2101–2150** — `level7.ts` Q1–50 (`def`, `return`, defaults, `*args`/`**kwargs`, lambdas, return types). Fragments: `scripts/fr-l7-frags/fr-l7-2101-2125.mjs`, `fr-l7-2126-2150.mjs`, agrégateur `fr-l7-2101-2150.mjs`. Patch: `scripts/patch-fr-l7-2101-2150.mjs` (START `` 2101: `Le mot-clé class`` → END `` 2151: `La méthode __str__``). Build OK (`vite build` + `inject-precache.js`).
- **Done:** **Level 7 FR 2151–2200** — `level7.ts` Q51–100 (portée, `global`, fermetures, récursion, `map`/`filter`/`reduce`, introspection, règles d’appel, `/` et `*`). Fragments: `fr-l7-2151-2175.mjs`, `fr-l7-2176-2200.mjs`, agrégateur `fr-l7-2151-2200.mjs`. Patch: `patch-fr-l7-2151-2200.mjs` (START `` 2151: `La méthode __str__`` → END `` 2201: `La méthode __eq__``). Build OK.
- **Done:** **Level 7 FR 2201–2250** — `level7_intermediate_a.ts` (50 questions : fermetures, nonlocal/global, lambdas et boucles, composition, first-class, défauts mutables). Fragments: `fr-l7-2201-2225.mjs`, `fr-l7-2226-2250.mjs`, agrégateur `fr-l7-2201-2250.mjs`. Patch: `patch-fr-l7-2201-2250.mjs` avec **END = ligne `2251:`** (pas `2301:` — sinon suppression accidentelle des IDs 2251–2300 ; corrigé dans le script). Bloc legacy 2251–2300 restauré depuis git après première passe. Build OK.
- **Done:** **Level 7 FR 2251–2300** — `level7_intermediate_b.ts` (50 questions : générateurs, yield/yield from, genexprs, LEGB, global/nonlocal, closures, introspection, décorateurs once/memoize, `type(f)` vs `type(f())`, `*` et `/`). Fragments: `fr-l7-2251-2275.mjs`, `fr-l7-2276-2300.mjs`, agrégateur `fr-l7-2251-2300.mjs`. Patch: `patch-fr-l7-2251-2300.mjs` (START `` 2251: `__getattr__`` → END `` 2301: `Le @dataclass`` — remplace l’ancien bloc mal aligné). Build OK.
- **Done:** **Level 7 FR 2301–2350** — `level7_expert_a.ts` (50 questions : décorateurs, `@wraps`, empilement, usines, property/staticmethod/classmethod, patterns singleton/cache/retry/auth, `@dataclass`, `abstractmethod`, `total_ordering`, `contextmanager`, etc.). Fragments: `fr-l7-2301-2325.mjs`, `fr-l7-2326-2350.mjs`, agrégateur `fr-l7-2301-2350.mjs`. Patch: `patch-fr-l7-2301-2350.mjs` (START `` 2301: `Le @dataclass`` → END `` 2351: `Un descripteur`` — corrige l’alignement : l’ancien 2301 était du contenu @dataclass alors que la banque commence par « what is a decorator »). Build OK.
- **Done:** **Level 7 FR 2351–2400** — `level7_expert_b.ts` Q1–50 (`reduce`, `partial`, `lru_cache` / `cache`, `singledispatch`, `total_ordering`, `operator`, `map` / `starmap`, `locals` / `globals`, `__code__`). Fragments: `scripts/fr-l7-frags/fr-l7-2351-2375.mjs`, `fr-l7-2376-2400.mjs`. Patch: `scripts/patch-fr-l7-2351-2400.mjs` (START ancien `` 2351: `Un descripteur`` → END `` 2401: `L'héritage`` — remplace le bloc descripteurs mal aligné). Build OK.
- **Done:** **Level 8 FR 2401–2450** — `level8.ts` (`level8Patterns`) Q1–50 (classes, `__init__`, `self`, méthodes, attributs classe/instance, `@classmethod` / `@staticmethod`). Fragments: `scripts/fr-l8-frags/fr-l8-2401-2425.mjs`, `fr-l8-2426-2450.mjs`. Patch: `scripts/patch-fr-l8-2401-2450.mjs` (START ancien héritage anglais-français `` 2401: `L'héritage est un mécanisme`` → END `` 2451: `Double underscore prefix`` — aligne sur la banque : 2401 n’est pas l’héritage mais `class MyClass: pass`). Build OK.
- **Done:** **Level 8 FR 2451–2500** — `level8.ts` Q51–100 (`__str__`/`__repr__`/`print`, `__len__`, comparaisons, `__add__`, `__getitem__`/`__setitem__`, `__call__`, `@property` getter/setter/deleter, `getattr`/`setattr`/`delattr`, `dir`/`vars`, identité/`==`/`!=`, `__hash__`, `__slots__`, `__dict__`, `type`/`issubclass`/`isinstance`, `mro()`). Fragments: `scripts/fr-l8-frags/fr-l8-2451-2475.mjs`, `fr-l8-2476-2500.mjs`. Patch: `scripts/patch-fr-l8-2451-2500.mjs` (START `` 2451: `Double underscore prefix`` → END `` 2501: `Toute classe Python hérite``). Build OK.
- **Done:** **Level 8 FR 2501–2550** — `level8_intermediate_a.ts` Q1–50 (comparaisons riches, arithmétique dunder, `__radd__`, `__repr__`/`__str__`/`print`/`__format__`/`__bool__`, `__len__` et vérité, `__contains__`, protocole itération / `__reversed__`, `iter`/`next`, `__getitem__`/`__len__`, itérable vs itérateur, context managers `__enter__`/`__exit__`, `contextmanager`, `open`, exceptions dans `with`). Fragments: `scripts/fr-l8-frags/fr-l8-2501-2525.mjs`, `fr-l8-2526-2550.mjs`. Patch: `scripts/patch-fr-l8-2501-2550.mjs` (START ancien MRO erroné `` 2501: `Toute classe Python hérite`` → END `` 2551: `You can subclass built-in``). Build OK (`vite build` + `inject-precache.js`).
- **Done:** **Level 8 FR 2551–2600** — `level8_intermediate_b.ts` Q1–50 (`__getattr__`/`__getattribute__`/`__setattr__`/`__delattr__`, stockage `_data`, `__dict__`, `__slots__`, `__class__`/`__name__`, composition / agrégation, piège liste de classe, `__new__`/singleton, proxy, classes comme attributs, `**kwargs`→`__dict__`, `__del__`, `copy`/`deepcopy`/`__copy__`, `repr`/`__eq__`/`__hash__`/sets, `is`, variables de classe vs instance, `__sizeof__`, `__init_subclass__`, attributs dynamiques, `type(name,bases,dict)`). Fragments: `scripts/fr-l8-frags/fr-l8-2551-2575.mjs`, `fr-l8-2576-2600.mjs`. Patch: `scripts/patch-fr-l8-2551-2600.mjs` (START ancien sous-classe builtins erroné `` 2551: `You can subclass built-in`` → END `` 2601: `Abstract classes that contain @abstractmethod``). Build OK.
- **Done:** **Level 8 FR 2601–2650** — `level8_expert_a.ts` Q1–50 (`@dataclass`, `field`, `__post_init__`, `frozen`/`slots`, ordre des défauts, `__repr__`/`__eq__`, `asdict`/`astuple`, héritage dataclass, `InitVar`, comparaison `order=True`, `__hash__`, `replace`, `ABC`/`@abstractmethod`, `register`, `Enum`/`IntEnum`/`auto`, `namedtuple`/`NamedTuple`). Fragments: `scripts/fr-l8-frags/fr-l8-2601-2625.mjs`, `fr-l8-2626-2650.mjs`. Patch: `scripts/patch-fr-l8-2601-2650.mjs` (START ancien ABC anglais erroné `` 2601: `Abstract classes that contain @abstractmethod`` → END `` 2651: `Lorsqu'une classe hérite``). Build OK (`vite build` + `inject-precache.js`).
- **Done:** **Level 8 FR 2651–2700** — `level8_expert_b.ts` Q51–100 (protocole descripteur, data vs non-data, `@property`/`@staticmethod`/`@classmethod`, `__set_name__`, méthodes et ABC, `collections.abc`, `register`, métaclasses / `type()`, `__init_subclass__`, annotations et génériques, `Protocol`, `Any`, `__class_getitem__`). Fragments: `scripts/fr-l8-frags/fr-l8-2651-2675.mjs`, `fr-l8-2676-2700.mjs`. Patch: `scripts/patch-fr-l8-2651-2700.mjs` (START ancien MRO erroné `` 2651: `Lorsqu'une classe hérite`` → END `` 2701: `try/except est le mécanisme``). Build OK (`vite build` + `inject-precache.js`). **Level 8 FR complet (2401–2700).**
- **Done:** **Level 9 FR 2701–2750** — `level9.ts` Q1–50 (héritage, `issubclass`/`isinstance`, `__bases__`/`__subclasses__`, surcharge, `super()`, héritage multiple / MRO C3, polymorphisme). Fragments: `scripts/fr-l9-frags/fr-l9-2701-2725.mjs`, `fr-l9-2726-2750.mjs`. Patch: `scripts/patch-fr-l9-2701-2750.mjs` (START ancien bloc exceptions erroné `` 2701: `try/except est le mécanisme`` → END ligne **2751:** décorateur no-op ; le script normalise l’indentation ``  2751:``). Build OK (`vite build` + `inject-precache.js`).
- **Done:** **Level 9 FR 2751–2800** — `level9.ts` Q51–100 (mangling `__x` / `_`, getters, `@property` / `property()`, deleter, lecture seule, validation, ABC / `abstractmethod` / `__abstractmethods__`, `isinstance` / `issubclass`, chaînes et tuples de types, héritage multiple, `super`, méthodes spéciales). Fragments: `scripts/fr-l9-frags/fr-l9-2751-2775.mjs`, `fr-l9-2776-2800.mjs`. Patch: `scripts/patch-fr-l9-2751-2800.mjs` (START ancien **2751:** décorateur no-op → END première ligne **2801:** métaclasses anglais). Build OK (`vite build` + `inject-precache.js`).
- **Done:** **Level 9 FR 2801–2850** — `level9_intermediate_a.ts` Q1–50 (`__mro__` / C3 / diamant / échec MRO, résolution méthodes, chaînes `super()`, `__init__` coopératif, `list`/`bool.__mro__`, classmethod + `super`, `**kwargs` multi-init, mixins, composition vs héritage, sous-classe de `list`). Fragments: `scripts/fr-l9-frags/fr-l9-2801-2825.mjs`, `fr-l9-2826-2850.mjs`. Patch: `scripts/patch-fr-l9-2801-2850.mjs` (START ancien **2801:** métaclasses anglais → END première ligne **2851:** `.group(n)` regex bricolé). Build OK (`vite build` + `inject-precache.js`).
- **Done:** **Level 9 FR 2851–2900** — `level9_intermediate_b.ts` Q1–50 (sous-classes builtins, `__missing__`, `__new__`, `isinstance`/`type`, `__bases__`/`__subclasses__`/`__init_subclass__`, attributs de classe, ABC vs `NotImplementedError`, factories, `super().__init__`, `__repr__`/`__eq__`, monkey-patch, MRO / `type.__mro__`, etc.). Fragments: `scripts/fr-l9-frags/fr-l9-2851-2875.mjs`, `fr-l9-2876-2900.mjs`. Patch: `scripts/patch-fr-l9-2851-2900.mjs` (START ancien **2851:** `.group(n)` regex bricolé → END première ligne **2901:** `textwrap.dedent` anglais). Build OK (`vite build` + `inject-precache.js`).
- **Done:** **Level 9 FR 2901–2950** — `level9_expert_a.ts` Q1–50 (ABC / `abstractmethod`, propriétés et class/static abstraits, chaînes ABC, `ABCMeta`, `__abstractmethods__`, `register`, `collections.abc` Sized/Iterable/Hashable, `typing.Protocol`, `@runtime_checkable`, duck typing, `Sequence`/`MutableSequence`/`Mapping`/`MutableMapping`/`Set`/`MutableSet`/`Callable`, etc.). Fragments: `scripts/fr-l9-frags/fr-l9-2901-2925.mjs`, `fr-l9-2926-2950.mjs`. Patch: `scripts/patch-fr-l9-2901-2950.mjs` (START ancien **2901:** `textwrap.dedent` anglais → END première ligne **2951:** LBYL anglais). Build OK (`vite build` + `inject-precache.js`).
- **Done:** **Level 9 FR 2951–3000** — `level9_expert_b.ts` Q51–100 (`__dict__` classe/instance, `__subclasses__`, `__slots__` et héritage, `_` vs `__` / mangling, compteur classe, `__init_subclass__`, sous-classes `int`/`float` et `__new__`/`__repr__`, Template Method / Strategy / Factory Method / Observer, SOLID LSP/OCP/SRP/ISP/DIP, Singleton, métaclasse `__call__`, composition vs mixins, C3/MRO, hiérarchie `BaseException`/`Exception`, exceptions custom, `except` tuple, `issubclass`, `KeyboardInterrupt`/`SystemExit`). Fragments: `scripts/fr-l9-frags/fr-l9-2951-2975.mjs`, `fr-l9-2976-3000.mjs`. Patch: `scripts/patch-fr-l9-2951-3000.mjs` (START bloc erroné **2951:** LBYL anglais → END première ligne **`402:`** `lstrip` Level 1 — ne pas couper **402**). Build OK (`vite build` + `inject-precache.js`). **Level 9 FR complet (2701–3000).**
- **Référence banque Level 10 (IDs `3001`–`3300`, 300 questions)** — alignement fichier source → IDs (vérifié dans `src/questionsBank.ts` + `src/data/questions/level10*.ts`) :
  - `level10.ts` (`level10Patterns`) : **3001–3104** (104 questions ; le fichier source contient 104 entrées, pas 100).
  - `level10_intermediate_a.ts` : **3105–3153** (49).
  - `level10_intermediate_b.ts` : **3154–3202** (49) — inclut **3199–3202** (`string`, `textwrap`, `Template`).
  - `level10_expert_a.ts` : **3203–3251** (49) — `logging`, `unittest`, exceptions / `traceback` / `sys`, etc.
  - `level10_expert_b.ts` : **3252–3300** (49) — PEP 8, `asyncio`, idiomes, Zen, DRY.
- **Done:** **Level 10 FR 3001–3050** — `level10Patterns` Q1–50 (IDs **3001–3050**). Fragments: `scripts/fr-l10-frags/fr-l10-3001-3025.mjs`, `fr-l10-3026-3050.mjs`. Patch: `scripts/patch-fr-l10-3001-3050.mjs`. **Insertion** initiale entre **3000** et **402**. Build OK (`vite build` + `inject-precache.js`).
- **Done:** **Level 10 FR 3051–3100** — `level10Patterns` Q51–100 (IDs **3051–3100**). Fragments: `fr-l10-3051-3075.mjs`, `fr-l10-3076-3100.mjs`. Patch: `scripts/patch-fr-l10-3051-3100.mjs` (ancre fin **3050** → **402**). Build OK.
- **Done:** **Level 10 FR 3101–3150** — IDs **3101–3104** (fin de `level10Patterns` Q101–104 : métaclasses, `__slots__`, `typing`, `asyncio`) + IDs **3105–3150** (`level10IntermediateA` Q1–46 : fichiers, `datetime`, `re`, etc.). Fragments: `fr-l10-3101-3125.mjs`, `fr-l10-3126-3150.mjs`. Patch: `scripts/patch-fr-l10-3101-3150.mjs` (ancre fin **3100** → **402**). Build OK.
- **Done:** **Level 10 FR 3151–3200** — IDs **3151–3153** (fin `level10IntermediateA` Q47–49, `re`) + IDs **3154–3200** (début `level10IntermediateB` Q1–47 : `itertools`, `json`, chemins, etc.). Fragments: `fr-l10-3151-3175.mjs`, `fr-l10-3176-3200.mjs`. Patch: `scripts/patch-fr-l10-3151-3200.mjs` (ancre fin **3150** → **402**). Build OK.
- **Done:** **Level 10 FR 3201–3300 (reconstruction + extension)** — **Banque** : **3201–3202** = fin `level10IntermediateB` (ex. `textwrap.dedent`, `string.Template`) ; **3203–3251** = `level10ExpertA` ; **3252–3300** = `level10ExpertB`. **Correction** : l’ancienne insertion 3201–3250 était décalée de **+4** IDs (contenu logging / `unittest` / exceptions placé trop tôt). **Rebuild** : `scripts/patch-fr-l10-rebuild-3201-3300.mjs` — entrées **3201–3204** (`textwrap.dedent`, `Template`, logging 5 niveaux, niveau par défaut) ; réaffectation des blocs historiques **3201–3246 → 3205–3250**, **3247–3250 → 3251–3254** ; entrées **3255–3300** (PEP 8 suite, `asyncio`, idiomes, Zen, DRY). Fragments : `fr-l10-3201-3204-gap.mjs`, `fr-l10-3255-3282.mjs`, `fr-l10-3283-3300.mjs` (+ sources `fr-l10-3201-3225.mjs`, `fr-l10-3226-3250.mjs`). Le script `patch-fr-l10-3201-3250.mjs` est **obsolète** pour le contenu actuel (rebuild supérieur). Build OK. **Level 10 FR in-depth : 3001–3300 complet.**

### Immediate next batches
1. Optional: audits (ex. `301–600`, `glossary.md`) ; vérifications spot banque ↔ FR hors refontes récentes.
2. **Level 10** : aucun lot restant pour les IDs **3001–3300** (genome complet pour ce niveau).

### Remaining range
- None for `592-600` (closed).

## Quality Rules (Non-Negotiable)

- Each ID must be uniquely written (no copy/paste templates across different questions).
- French must match English depth and section parity.
- No placeholder lines (e.g., "see above", generic fallback text).
- Keep explanations pedagogical: concrete examples, edge cases, and execution logic.

### 2026-03-23 (continued) — French Expert residual heading fixes

- **Completed:** inserted missing French Expert-tier 10-section headings/bullets in `src/data/detailedExplanationsTranslations.ts` for:
  - **1866–1900:** missing `Cas d'utilisation courants :` and/or `Cas limites :` in the Expert segment (19 IDs total across this subrange).
  - **2714:** missing `Exécution étape par étape :` in the Expert segment.
- **Script used:** `scripts/fix_fr_missing_expert_sections_19_ids.py`
- **Build verification:** `npm run build` (vite build + `scripts/inject-precache.js`) passed.
- **Next:** run a broader French-English contamination scan to remove any remaining English prose inside French `Expert` blocks (target: IDs 1201–3300), then re-audit structure/heading parity.

### 2026-03-23 (continued) — French micro-prose cleanup

- **Completed:** removed remaining English micro-prose fragments inside French detailed explanations:
  - **3224:** `assertRaises vs pytest.raises` (translated to French wording).
  - **3295:** `Early return`, `nested vs guard clauses`, `validation pipelines`, and `pattern matching` fragments (translated to French wording).
- **Verification:** `npm run build` passed; targeted `rg` checks confirm the old English fragments no longer exist.

### 2026-03-23 (continued) — French micro-prose cleanup (tail)

- **Completed:** removed two remaining English-term fragments inside French detailed explanations:
  - **962:** `guard clauses` → `clauses de garde`.
  - **1796:** `pattern matching d’affectation` → `filtrage par motifs d’affectation`.
- **Build verification:** `npm run build` passed.

### 2026-03-23 (continued) — French micro-prose cleanup (test-framework terms)

- **Completed:** translated remaining English test-framework micro-phrases inside French detailed explanations:
  - **2311:** `pytest markers.` -> `marqueurs pytest`.
  - **3230:** `skip vs expectedFailure vs xfail pytest.` -> `skip, expectedFailure et xfail (pytest)`.
  - **3231:** `expectedFailure vs xfail strict.` -> `expectedFailure par rapport à xfail strict.`
  - **3237:** `doctest vs unittest/pytest.` -> `doctest par rapport à unittest/pytest.`
- **Verification:** `npm run build` passed; targeted checks confirm old fragments are gone.

### 2026-03-23 (continued) — English in-depth dedupe normalization (display-side)

- **Completed:** added English display-side normalization in `getTranslatedDetailedExplanation` (`src/data/detailedExplanationsTranslations.ts`) to handle over-expanded duplicated in-depth blocks.
- **Approach:** for noisy English explanations (high bullet count + full 10-section headings), reconstruct one clean 10-section block and compact each section to concise bullets/steps.
- **Result (spot-check):**
  - `2940`: bullets `335 -> 20`, `Key concepts` occurrences `24 -> 1`.
  - `3298`: bullets `303 -> 14`, `Key concepts` occurrences `11 -> 1`.
  - Non-noisy entries remain unchanged (e.g. `594`, `1201`).
- **Verification:** `npm run build` passed; browser smoke check passed.

## Verification Workflow

For each batch:
1. Read target question IDs from `src/questionsBank.ts`.
2. Update corresponding IDs in `src/data/detailedExplanationsTranslations.ts`.
3. Verify headings and structure consistency.
4. Run build checks after edits.
5. Update this `task.md` checkpoint (completed IDs + next target).

## Blocking Issue Log

- A prior session hit disk-space errors (`No space left on device`) during edits.
- If this occurs again:
  1. Free disk space.
  2. Resume from the last checkpoint in this file.

## Next Action (when resuming)

Level 1 `301-600` French in-depth pass: **done through ID `600`**. Level 2: **601–900 done**. Levels 3–5: **901–1800 done**. **Level 6 FR : 1801–2100 done**. **Level 7 FR : 2101–2400 done**. **Level 8 FR : 2401–2700 done**. **Level 9 FR : 2701–3000 done**. **Level 10 FR : 3001–3300 done** (rebuild 3201–3300 aligné banque). **Genome FR in-depth : niveau 10 bouclé pour cette plage.**
