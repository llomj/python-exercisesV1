#!/usr/bin/env python3
"""
Level 4 generic tail cleanup (fast mode).

Goal: Remove the exact duplicated Key Concepts marker detected by
`scripts/audit_generic_in_depth_blocks.py` in all Level 4 question files.

This replaces only the bullet line:
  • See the key concepts and explanation above for the main ideas and bullet points.

…with a question-specific bullet extracted from the explanation text that appears
immediately before the `Key Concepts:` heading in each `de` template string block.

This is intentionally narrow to keep the change small and safe.
"""

from __future__ import annotations

import re
from pathlib import Path


GENERIC_KEY_CONCEPTS_LINE = "• See the key concepts and explanation above for the main ideas and bullet points."
KEY_CONCEPTS_HEADING = "Key Concepts:\n"

DE_TEMPLATE_RE = re.compile(r"de:\s*`([\s\S]*?)`", re.MULTILINE)


def sentenceify(text: str) -> str:
    # Normalize whitespace so we can reliably split into sentences.
    normalized = " ".join(text.split())
    # Split on typical sentence-ending punctuation followed by whitespace.
    parts = re.split(r"(?<=[.!?])\s+", normalized)
    return parts[-1].strip() if parts else normalized.strip()


def patch_file(path: Path) -> int:
    content = path.read_text(encoding="utf-8")
    matches = list(DE_TEMPLATE_RE.finditer(content))

    patched = 0
    out = content

    # We rebuild via slicing so the indices remain valid.
    for m in reversed(matches):
        body = m.group(1)
        if GENERIC_KEY_CONCEPTS_LINE not in body:
            continue
        if KEY_CONCEPTS_HEADING not in body:
            continue

        idx = body.index(KEY_CONCEPTS_HEADING)
        preamble = body[:idx].strip()
        key_sentence = sentenceify(preamble)
        key_sentence = key_sentence.replace("`", "'")

        replacement_line = f"• {key_sentence}"
        body2 = body.replace(GENERIC_KEY_CONCEPTS_LINE, replacement_line, 1)

        out = out[: m.start(1)] + body2 + out[m.end(1) :]
        patched += 1

    if patched:
        if GENERIC_KEY_CONCEPTS_LINE in out:
            # If this triggers, it means we missed some template blocks.
            remaining = out.count(GENERIC_KEY_CONCEPTS_LINE)
            raise SystemExit(f"BUG: {path} still has {remaining} generic lines after patching.")
        path.write_text(out, encoding="utf-8")
    return patched


def main() -> None:
    repo_root = Path(__file__).resolve().parents[1]
    question_dir = repo_root / "src/data/questions"

    files = [
        question_dir / "level4.ts",
        question_dir / "level4_for_loops.ts",
        question_dir / "level4_while_batch1.ts",
        question_dir / "level4_while_loops.ts",
        question_dir / "level4_while_batch3.ts",
        question_dir / "level4_while_batch4.ts",
    ]

    total = 0
    for f in files:
        if not f.exists():
            raise SystemExit(f"Missing expected file: {f}")
        n = patch_file(f)
        print(f"OK: patched {n} blocks in {f}")
        total += n

    print(f"Total patched Level 4 blocks: {total}")


if __name__ == "__main__":
    main()

