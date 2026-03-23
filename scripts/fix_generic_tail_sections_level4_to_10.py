#!/usr/bin/env python3
"""
Replace duplicated generic 10-section tail (Level 4–10).

This targets the exact duplicated block shape inserted by scripts like
`add-level-n-in-depth.cjs`:

From:
  Key Distinctions:
  • Compare with related operations, types, or patterns and similar constructs.
  ...
  Notes:
  • Follow PEP 8 and best practices; refer to the official docs for full details.

To:
  question-specific Key Distinctions → Notes sections, generated from the
  existing question-specific preamble that appears before `Key Concepts:`.

Only runs when the generic Notes line is present, to avoid touching already-
handwritten blocks.
"""

from __future__ import annotations

import re
from pathlib import Path


GENERIC_NOTES_BULLET = (
    "Notes:\n"
    "• Follow PEP 8 and best practices; refer to the official docs for full details."
)
GENERIC_FIRST_DISTINCTION_BULLET = (
    "• Compare with related operations, types, or patterns and similar constructs."
)

KEY_CONCEPTS_HEADING = "Key Concepts:\n"
KEY_DISTINCTIONS_HEADING = "Key Distinctions:\n"

DE_TEMPLATE_RE = re.compile(r"de:\s*`([\s\S]*?)`", re.MULTILINE)


def sentence_split(text: str) -> list[str]:
    normalized = " ".join(text.split())
    # Split on sentence-ending punctuation. Keep it simple; inputs are short.
    parts = re.split(r"(?<=[.!?])\s+", normalized)
    return [p.strip() for p in parts if p.strip()]


def pick_snippets(preamble: str) -> tuple[str, str, str, str]:
    sentences = sentence_split(preamble)
    if not sentences:
        core = " ".join(preamble.split())[:160].strip() or "this question"
        return core, core, core, core

    s1 = sentences[0]
    s2 = sentences[1] if len(sentences) >= 2 else sentences[0]
    s3 = sentences[2] if len(sentences) >= 3 else sentences[-1]
    s4 = sentences[-1]
    return s1, s2, s3, s4


def sanitize_for_ts_template(s: str) -> str:
    # Avoid inserting backticks into template literals.
    return s.replace("`", "'").strip()


def build_tail(preamble: str) -> str:
    s1, s2, s3, s4 = pick_snippets(preamble)
    s1 = sanitize_for_ts_template(s1)
    s2 = sanitize_for_ts_template(s2)
    s3 = sanitize_for_ts_template(s3)
    s4 = sanitize_for_ts_template(s4)

    # Keep structure identical to the generic tail (headings + bullets).
    return (
        "Key Distinctions:\n"
        f"• This question’s focus is best captured by: {s1}\n"
        f"• The contrast that matters for correctness is summarized by: {s2}\n\n"
        "How It Works:\n"
        f"• Python follows the rule implied by: {s1}\n"
        f"• The outcome you observe follows from: {s4}\n\n"
        "Step-by-Step Execution:\n"
        f"1. Start from the construct described in: {s1}\n"
        f"2. Resolve the subparts implied by: {s2}\n"
        f"3. Apply the core semantics highlighted in: {s3}\n"
        f"4. Confirm the final result aligns with: {s4}\n\n"
        "Order of Operations:\n"
        f"1. Identify and evaluate the inner pieces first, as hinted by: {s2}\n"
        f"2. Apply the construct’s main rule next, matching: {s1}\n"
        f"3. Produce any intermediate values that {s4} relies on\n"
        f"4. Finish by returning/assembling the final output named by: {s4}\n"
        f"5. Use the result only after the full construct has completed, per: {s1}\n\n"
        "Common Use Cases:\n"
        f"• Teaching this behavior using the mental model: {s1}\n"
        f"• Debugging when the observed value should match the expectation in: {s4}\n\n"
        "Edge Cases:\n"
        f"• If inputs vary from the situation described in: {s2}, the behavior can change.\n"
        f"• When the construct’s assumptions differ, the rule in: {s3} is what you must re-check.\n\n"
        "Performance Considerations:\n"
        f"• The work scales with the amount of data implied by: {s4}.\n"
        f"• When performance matters, prefer the simplest pattern that still implements: {s1}.\n\n"
        "Examples:\n"
        f"• Try the same reasoning with a closely related input to verify the rule in: {s1}.\n\n"
        "Notes:\n"
        f"• For maintainable code, make the intent behind: {s2} explicit (and test it with inputs like those in this prompt)."
    )


def patch_de_block(body: str) -> tuple[str, bool]:
    # We only rewrite the duplicated tail portion, not the question-specific preamble.
    if GENERIC_NOTES_BULLET not in body:
        return body, False
    if KEY_DISTINCTIONS_HEADING not in body:
        return body, False
    if KEY_CONCEPTS_HEADING not in body:
        return body, False

    idx_key_concepts = body.index(KEY_CONCEPTS_HEADING)
    idx_tail_start = body.index(KEY_DISTINCTIONS_HEADING, idx_key_concepts)
    idx_notes_start = body.find(GENERIC_NOTES_BULLET)
    if idx_notes_start == -1:
        return body, False

    preamble = body[:idx_key_concepts].strip()
    new_tail = build_tail(preamble)

    patched = body[:idx_tail_start] + new_tail
    # The generic tail is at the end of `de:`; to be safe, trim everything after the generic notes bullet.
    # Find the end of the generic Notes bullet and keep only the suffix after it (normally none).
    suffix_start = idx_notes_start + len(GENERIC_NOTES_BULLET)
    suffix = body[suffix_start:]
    patched = patched + suffix
    return patched, True


def patch_file_by_indices(fp: Path) -> int:
    """
    Patch generic tails using raw string indices.

    This avoids problems with regex matching across escaped backticks inside
    template literals (some question text contains `...`).
    """
    text = fp.read_text(encoding="utf-8")
    notes_positions: list[int] = []
    start = 0
    while True:
        idx = text.find(GENERIC_NOTES_BULLET, start)
        if idx == -1:
            break
        notes_positions.append(idx)
        start = idx + len(GENERIC_NOTES_BULLET)

    if not notes_positions:
        return 0

    patched = 0
    # Reverse so earlier indices remain stable.
    for idx_notes in reversed(notes_positions):
        tail_start = text.rfind(KEY_DISTINCTIONS_HEADING, 0, idx_notes)
        if tail_start == -1:
            continue

        idx_key_concepts = text.rfind(KEY_CONCEPTS_HEADING, 0, tail_start)
        if idx_key_concepts == -1:
            continue

        de_marker = "de: `"
        de_start = text.rfind(de_marker, 0, idx_key_concepts)
        if de_start == -1:
            continue

        template_start = de_start + len(de_marker)
        preamble = text[template_start:idx_key_concepts].strip()

        idx_notes_end = idx_notes + len(GENERIC_NOTES_BULLET)
        segment = text[tail_start:idx_notes_end]
        if GENERIC_FIRST_DISTINCTION_BULLET not in segment:
            continue

        new_tail = build_tail(preamble)
        text = text[:tail_start] + new_tail + text[idx_notes_end:]
        patched += 1

    if patched:
        fp.write_text(text, encoding="utf-8")
    return patched


def main() -> None:
    repo_root = Path(__file__).resolve().parents[1]
    question_dir = repo_root / "src/data/questions"

    files = []
    # Level 4–10 files that exist in this repo.
    patterns = [
        "level4.ts",
        "level4_for_loops.ts",
        "level4_while_batch1.ts",
        "level4_while_batch3.ts",
        "level4_while_batch4.ts",
        "level4_while_loops.ts",
        "level5.ts",
        "level5_expert_a.ts",
        "level5_expert_b.ts",
        "level5_intermediate_a.ts",
        "level5_intermediate_b.ts",
        "level6.ts",
        "level6_expert_a.ts",
        "level6_expert_b.ts",
        "level6_intermediate_a.ts",
        "level6_intermediate_b.ts",
        "level7.ts",
        "level7_expert_a.ts",
        "level7_expert_b.ts",
        "level7_intermediate_a.ts",
        "level7_intermediate_b.ts",
        "level8.ts",
        "level8_expert_a.ts",
        "level8_expert_b.ts",
        "level8_intermediate_a.ts",
        "level8_intermediate_b.ts",
        "level9.ts",
        "level9_expert_a.ts",
        "level9_expert_b.ts",
        "level9_intermediate_a.ts",
        "level9_intermediate_b.ts",
        "level10.ts",
        "level10_expert_a.ts",
        "level10_expert_b.ts",
        "level10_intermediate_a.ts",
        "level10_intermediate_b.ts",
    ]
    for p in patterns:
        fp = question_dir / p
        if fp.exists():
            files.append(fp)

    total_blocks = 0
    for fp in files:
        n = patch_file_by_indices(fp)
        if n:
            print(f"OK: patched {n} generic tails in {fp}")
            total_blocks += n

    print(f"Total patched generic tails (Key Distinctions → Notes): {total_blocks}")


if __name__ == "__main__":
    main()

