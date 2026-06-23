# Level 2 Audit: IDs 801-900

## Summary

This block is currently marked as Level 2 expert, but a substantial portion of it is too specialized for a progressive early-stage Python learner. The main issue is not raw difficulty alone; it is topic fit. Several questions assume prior knowledge from accounting, number theory, computer architecture, binary encoding, or complex-number math rather than just Python basics.

## Recommended Actions

### Keep

- `807`, `813`, `814`: basic `Decimal` type recognition / conversion / comparison
- `816`, `818`, `820`, `821`, `824`: simple `Fraction` recognition and arithmetic
- `826`, `827`, `831`, `832`, `833`, `834`: introductory complex-number recognition only
- `845`, `850`: `bin(10)` and truthiness of `0b0000`
- `862` to `880`: mostly accessible big-int and base-conversion basics
- `896` to `900`: `isinstance`, bool arithmetic, and `sum` of booleans

### Simplify

- `801` to `806`: keep `Decimal`, but reduce context-heavy wording and avoid `quantize`/rounding-mode dependence this early
- `817`, `819`, `822`, `823`, `825`: keep only if framed as "Python exact fraction" basics, not as subtle representation traps
- `828` to `830`, `835`: keep only if rewritten as direct property/method recognition, not algebra practice
- `851` to `861`: keep a small float-precision cluster, but reduce the number of IEEE edge-case questions involving `inf`, `nan`, and signed zero
- `886` to `895`: keep simple formatting examples, but reduce binary/octal/hex formatting density in early progression

### Move Later

- `808` to `812`: `Decimal("inf")`, `Decimal("nan")`, `is_finite()`, and `sqrt()` are too specialized for Level 2
- `815`: `Decimal("3.14") + 1` mixed-type gotcha is better after clearer numeric-type foundations
- `823`: `Fraction(0.1)` is a representation trap, not a beginner-friendly concept
- `830`: complex multiplication is more math-heavy than Python-heavy
- `836` to `849`: bitwise operators, XOR patterns, shifts, and binary masks should move later
- `881` to `885`: `int.from_bytes` / `to_bytes` should move later

## Structural Recommendation

For Level 2 expert, prefer:

- plain `int` / `float` / `bool` reasoning
- readable comparisons and conversions
- simple formatting that appears in daily Python usage
- a first exposure to `Fraction` or `complex` only as recognition, not as domain knowledge

Avoid clustering niche number systems in one early block. Spread them into later levels or an "advanced numbers" segment.

## French Sync

French question text must preserve Python syntax exactly. During this audit, the following IDs were identified as needing code-parity fixes in French and were corrected:

- `822`, `823`, `828`, `835`, `836`, `842`, `851`, `856`, `857`, `898`, `899`, `901`
