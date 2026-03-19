# Python Exercises Learn - AI Agent Operational Rules

## 1. Genome Checkpoint (STRICT STATE)
- **Target**: 3300 Questions (Level 0: 300 + Levels 1–10: 300 each = 3300 total).
- **Current Progress**: 3300 / 3300 Questions
- **Last Fulfilled ID**: 3300 (Level 0 complete at 300/300, ALL 10 levels complete at 300/300 each)
- **Uniqueness Level**: HIGH VARIANCE MANDATED.
- **Rule**: All 3300 questions must be unique. Every question must be a unique logical challenge. No repetitive patterns. Repetitive patterns are considered a failure of educational integrity.
- **Level 0**: Tadpole – very first steps (print, variables, values, type(), simple expressions). For complete beginners. Easier than Level 1.

## 2. Consent & Modification Rules
- **Explicit Consent**: No changes shall be made to the source code without explicit user approval.
- **Layout Preservation**: Do not deviate from the existing visual identity.
- **Incremental Updates**: Keep updates as minimal as possible while satisfying requirements.
- **Strict Scope Control**: When the user asks for a specific change, implement only that request. Do not add extra UI elements, display changes, or additional features unless explicitly requested.

## 3. Glossary & Educational Integrity
- **Glossary Source of Truth**: The `glossary.md` file is the master reference.
- **Consistency Rule**: All definitions must be consistent with `glossary.md`.
- **Pre-Change Check**: Agents must always consult `ps.md` and `planning.md` before making changes.
- **Debugging Reference**: Agents must always consult `ps.md` for debugging information and urgent issues.

## 4. The 3,300-Question Genome Goal
- **Completion Task**: Reach exactly 3,300 high-quality Python questions (Level 0: 300 + Levels 1–10: 300 each).
- **Status**: 3,300 ACHIEVED. Level 0 (Tadpole) COMPLETE at 300/300. ALL 10 levels COMPLETE at 300/300 each. Genome checkpoint FULFILLED.
- **Diversity Rule**: Use at least 10 logic templates per stage to ensure students encounter varied syntax and conceptual challenges.

## 5. Testing and Deployment Rules
- **Testing Requirement**: Agents must always run tests before telling the user that the app should deploy successfully.
- **Layout Preservation**: Agents must never change the layout of the app when making changes unless explicitly asked by the user.
- **Debugging Reference**: Agents must always consult ps.md for debugging information.
- **Browser Testing**: Agents must always test the app in the browser first to ensure it works and opens correctly before pushing to Git.
- **User Consent for Commits**: Agents must always ask the user for approval before committing to Git.

## 6. Internationalization & French Mode
- **Goal**: Transform this app into a fully bilingual experience (English and French). This is critical.
- **Full French Mode**: When the user selects French, **all** visible UI text and explanations must appear in French (navigation, buttons, panels, short explanations, detailed explanations, and advanced panels like Code Versatility).
- **Structural Parity**: French detailed explanations (explication du codon / description approfondie) must be structurally identical to the English versions: same sections (Key concepts, How it works, Examples, Common uses, Edge cases, etc.), same level of detail, Python code unchanged.
- **Fallback Rule**: Only fall back to English when a French translation truly does not exist yet; once added, the French version must fully mirror the English content in depth and structure.

## 6b. In-Depth Codon Explanation Structure (Level 0 upwards)
- **Level 0 First**: Start by enforcing this structure for all Level 0 detailed explanations (IDs 1–300), then apply the same pattern progressively to higher levels.
- **Keep Existing Tiers**: For each question, keep the current `Beginner / Intermediate / Expert` explanation exactly as-is.
- **Append 10-Section Block (English)**: Under the Expert section, append a clearly separated block with the following headings in this exact order, each followed by rich, pedagogical content:
  1. Key Concepts:
  2. Key Distinctions:
  3. How It Works:
  4. Step-by-Step Execution:
  5. Order of Operations:
  6. Common Use Cases:
  7. Edge Cases:
  8. Performance Considerations:
  9. Examples:
  10. Notes:
- **Unique per question (CRITICAL)**: Each question ID must have its **own unique** content for every section (Key Concepts, Key Distinctions, How It Works, Step-by-Step Execution, Order of Operations, Common Use Cases, Edge Cases, Performance Considerations, Examples, Notes). **No copy-paste**: the same generic text must NOT be reused across different questions. Every description must apply specifically to that individual question (e.g. for "What is type('')?" the content must be about the empty string and type(''), not generic "type()" text). Work in **small batches** (e.g. 5–15 questions at a time) so each section can be very descriptive and pedagogically rich.
- **French Parity**: For every English in-depth explanation that uses this 10-part structure, the French detailed explanation **must** mirror it section-for-section (same 10 headings translated, same ideas, same order, **equally unique and descriptive**). No generic placeholders (e.g. "Voir les sections Débutant et Expert", "Comparer avec les types proches") in French: each ID gets its own tailored French text. No English-only sections are allowed once the French version exists.
- **Header styling parity**: In French mode, the in-depth section headers (Concepts clés, Distinctions clés, Fonctionnement, Exécution étape par étape, Ordre des opérations, Cas d'utilisation courants, Cas limites, Considérations de performance, Exemples, Remarques) must use the **same syntax/theme highlighting** as the English headers (Key Concepts, How It Works, Step-by-Step Execution, etc.)—e.g. the same accent class (e.g. `text-indigo-400`, uppercase, tracking) in `QuizView.tsx`. Keep both English and French heading patterns in the `headingPatterns` array so styling is language-agnostic.
- **Learning Focus**: Each section should teach the concept, not just restate the code. Use concrete mini-scenarios, comparisons, and short code examples inside `Examples:` rather than long theory dumps. Explanations must be in-depth in both English and French to help the user learn Python.

## 7. Monetisation Goal
- **Goal**: Monetise this app later. Quality must be top-notch.

## 8. Verify Code Instruction
- When the user types "verify code", the agent's role is to verify and debug any problems, issues, conflicts, or potential bugs in the codebase.

## 9. CRITICAL: Full Offline Support (MOST IMPORTANT — DO NOT BREAK)

**The app MUST work fully offline.** If the user turns off the internet and reopens the app, it must load and run exactly as when online. This is the highest priority feature.

### Rules all agents MUST follow
- **Never remove or break offline behavior.** Do not change the build step that generates `dist/sw.js` or the service worker logic that precaches assets.
- **Build process:** Production build MUST run `vite build && node scripts/inject-precache.js`. Do not change to `cp sw.js dist/sw.js` or drop the inject step. The inject script reads `dist/index.html`, extracts all hashed JS/CSS asset URLs, and injects them into `dist/sw.js` so the service worker precaches them at install. Without this, the app will not work offline after reopen.
- **Service worker:** Root `sw.js` is the template. `public/sw.js` must stay in sync with root `sw.js`. The file in `dist/` is generated at build time by `scripts/inject-precache.js` and must not be committed; only the template is in the repo.
- **Do not:** Remove or bypass `scripts/inject-precache.js`; change `PRECACHE_ASSETS` usage in `sw.js`; return `undefined` from fetch handlers (return a 503 Response instead); or change navigation fallback (must try `event.request`, then `base + 'index.html'`, then `base`).
- **Testing:** Before any deploy or claim that the app works, verify offline: build, serve or deploy, open the app once online, then disable network (or go offline), reopen the app. It must load and run. If it does not, offline support is broken.
- **PWA:** Keep `manifest.json` correct so the app can be installed as a PWA.
- **PWA updates (e.g. phone app):** So the installed PWA gets new code after a deploy: (1) The app registers the service worker with a cache-busted URL (`sw.js?v=<buildId>`, where `buildId` is set at build time in `vite.config.ts`). (2) The inject script sets a unique `CACHE_NAME` per build in `dist/sw.js`, so when the new SW activates it purges old caches. (3) The **Refresh App** button must wait for SW unregister and cache clear to finish before redirecting (use `Promise.all` then `location.replace(origin + path + '?t=' + Date.now())`). (4) Settings shows build id as version so the user can confirm they got the new bundle after refresh. If the phone still shows the old app: suggest removing the PWA from home screen and re-adding from the site, or clearing site data. Do not remove the `__SW_VERSION__` define or the cache-name replacement in `inject-precache.js`.

**If you change caching, routing, base path, or the build pipeline, you MUST re-verify offline behavior and leave this section intact.**

## 10. Repository Exclusivity (CRITICAL — DO NOT PUSH OTHER PROJECTS HERE)
- **This repo only:** All commits and pushes must be for the **Python Exercises Learn** app only. The only GitHub repo for this project is **https://github.com/llomj/python-exercisesV1.git**.
- **No other project here:** Do not commit, push, or deploy code from any other project (e.g. Tjump / Philosophy Explorer) to this repository. Philosophy Explorer and related work belong in **https://github.com/llomj/Tjump.git** only.
- **Before pushing:** Confirm that every file and commit belongs to the Python exercises app. If in doubt, do not push.
