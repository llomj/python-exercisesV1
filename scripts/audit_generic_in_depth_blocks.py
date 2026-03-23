#!/usr/bin/env python3
"""
Count duplicated generic in-depth boilerplate in question bank TypeScript files.

Looks for the marker:
  Key Concepts:
  • See the key concepts and explanation above for the main ideas and bullet points.

Run from repo root: python3 scripts/audit_generic_in_depth_blocks.py
"""
from __future__ import annotations

import sys
from pathlib import Path

MARKER = "See the key concepts and explanation above for the main ideas and bullet points."


def main() -> int:
    root = Path(__file__).resolve().parents[1]
    questions_dir = root / "src" / "data" / "questions"
    if not questions_dir.is_dir():
        print("Expected", questions_dir, file=sys.stderr)
        return 1

    total = 0
    rows: list[tuple[str, int]] = []
    for path in sorted(questions_dir.glob("*.ts")):
        text = path.read_text(encoding="utf-8")
        n = text.count(MARKER)
        if n:
            rows.append((path.name, n))
            total += n

    print("Generic in-depth marker (Key Concepts duplicate) — count per file:\n")
    for name, n in rows:
        print(f"  {n:4d}  {name}")
    print(f"\nTotal: {total} occurrences across {len(rows)} files")
    print("\nReplace each block with question-specific Key Distinctions … Notes (EN + FR parity in detailedExplanationsTranslations.ts).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
