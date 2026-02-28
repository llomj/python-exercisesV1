#!/usr/bin/env python3
"""Insert generated detailed translations 2851-3000 into detailedExplanationsTranslations.ts"""
import re

def main():
    with open("src/data/detailedExplanationsTranslations.ts", "r", encoding="utf-8") as f:
        content = f.read()

    # Find the exact closing of 2850: `,\n};
    old_tail = 'print(m.group(2))   # "host"`,\n};'
    end_idx = content.rfind(old_tail)
    if end_idx == -1:
        print("Closing pattern not found")
        return 1

    with open("scripts/fr_de_2851_3000_out.txt", "r", encoding="utf-8") as g:
        new_entries = g.read().rstrip()

    new_tail = 'print(m.group(2))   # "host"`,\n' + new_entries + '\n};'
    new_content = content[:end_idx] + new_tail + content[end_idx + len(old_tail):]
    with open("src/data/detailedExplanationsTranslations.ts", "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Updated detailedExplanationsTranslations.ts successfully")
    return 0

if __name__ == "__main__":
    exit(main())
