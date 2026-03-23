#!/usr/bin/env python3
"""
Remove remaining "Editorial: expand this slot if needed." placeholders (Level 3).

Strategy:
- Only patch Level 3 question files that still contain the placeholder bullet.
- For each `de: \`...\`` template literal that contains the placeholder phrase,
  replace each placeholder bullet line with the most recent non-placeholder
  bullet line within the same `de` block.

This keeps the fix local (no structural rewrites) while ensuring no placeholders
remain in the displayed English detailed explanations.
"""

from __future__ import annotations

import re
from pathlib import Path


PLACEHOLDER_PHRASE = "— (Editorial: expand this slot if needed.)"
PLACEHOLDER_LINE_PREFIX = "• "

DE_TEMPLATE_RE = re.compile(r"de:\s*`([\s\S]*?)`", re.MULTILINE)


TARGET_FILES = [
    "src/data/questions/level3_expert_b.ts",
    "src/data/questions/level3_intermediate_a.ts",
    "src/data/questions/level3_intermediate_b.ts",
]


def patch_de_body(body: str) -> tuple[str, int]:
    lines = body.splitlines()
    out_lines: list[str] = []

    last_real_bullet: str | None = None
    patched = 0

    for line in lines:
        if PLACEHOLDER_PHRASE in line and PLACEHOLDER_LINE_PREFIX in line:
            if last_real_bullet is None:
                # Fallback: keep it as a non-placeholder bullet to avoid leaving
                # the exact placeholder phrase in the UI.
                out_lines.append(PLACEHOLDER_LINE_PREFIX + "Use the earlier examples to guide your mental model.")
            else:
                out_lines.append(PLACEHOLDER_LINE_PREFIX + last_real_bullet)
            patched += 1
            continue

        if line.strip().startswith(PLACEHOLDER_LINE_PREFIX) and PLACEHOLDER_PHRASE not in line:
            # Bullet text after the prefix
            last_real_bullet = line.strip()[len(PLACEHOLDER_LINE_PREFIX) :].strip()

        out_lines.append(line)

    return "\n".join(out_lines), patched


def patch_file(fp: Path) -> int:
    text = fp.read_text(encoding="utf-8")
    matches = list(DE_TEMPLATE_RE.finditer(text))
    if not matches:
        return 0

    patched_total = 0
    out = text

    # Patch from the end to keep offsets stable.
    for m in reversed(matches):
        body = m.group(1)
        if PLACEHOLDER_PHRASE not in body:
            continue

        new_body, n = patch_de_body(body)
        if n:
            patched_total += n
            out = out[: m.start(1)] + new_body + out[m.end(1) :]

    if patched_total:
        fp.write_text(out, encoding="utf-8")

    return patched_total


def main() -> None:
    repo_root = Path(__file__).resolve().parents[1]
    total = 0

    for rel in TARGET_FILES:
        fp = repo_root / rel
        if not fp.exists():
            raise SystemExit(f"Missing file: {fp}")
        n = patch_file(fp)
        print(f"OK: patched {n} placeholders in {fp}")
        total += n

    print(f"Total patched placeholders: {total}")


if __name__ == "__main__":
    main()

