#!/usr/bin/env python3
"""
Fill remaining missing French Expert-tier headings (specific IDs).

This patches `src/data/detailedExplanationsTranslations.ts`.

Detected missing headings in French Expert blocks (1201-3300) were:
- `Exécution étape par étape :` for ID 2714
- `Cas d'utilisation courants :` for:
  1885, 1886, 1889, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900
- `Cas limites :` for:
  1866, 1869, 1870, 1888, 1890, 1893, 1894

Insertion rules (within `Expert :` segment):
- Insert `Cas d'utilisation courants :` right before `Cas limites :`
- Insert `Cas limites :` right before `Considérations de performance :`
- Insert `Exécution étape par étape :` right before `Ordre des opérations :`
"""

from __future__ import annotations

import re
from pathlib import Path


TARGET_IDS: dict[int, dict[str, list[str]] | dict[str, list[str]]] = {
    2714: {
        "Exécution étape par étape :": [
            "1. L'enfant appelle la méthode du parent via super().",
            "2. super().method() renvoie 1, puis la méthode de l'enfant calcule 1 + 1.",
            "3. Le comportement est étendu (on modifie le résultat), pas complètement remplacé.",
            "4. On obtient donc Child().method() = 2.",
        ]
    },
    1866: {
        "Cas limites :": [
            "Si deux références ne pointent pas vers exactement le même objet, l'identité (is) peut devenir False plutôt que refléter l'égalité de contenu.",
            "Pour comparer le contenu, préférez == à is.",
        ]
    },
    1869: {
        "Cas limites :": [
            "L'opérateur + n'est pas défini pour deux dictionnaires : Python lève un TypeError.",
            "Pour fusionner des dictionnaires, utilisez plutôt |, ** (unpacking) ou update().",
        ]
    },
    1870: {
        "Cas limites :": [
            "L'opérateur * n'est pas défini pour les dictionnaires : Python lève un TypeError.",
            "Pour copier ou combiner, utilisez dict.copy() ou fusionnez avec | / {**...}.",
        ]
    },
    1888: {
        "Cas limites :": [
            "all(d.values()) renvoie False dès qu'une valeur est falsy (par exemple 0).",
            "Le résultat dépend uniquement de la truthiness des valeurs, pas des clés.",
        ]
    },
    1890: {
        "Cas limites :": [
            "or court-circuite : si get('a') est truthy, get('c') n'est évalué qu'en cas où la première valeur serait falsy.",
            "get(...) renvoie None si la clé manque ; None est falsy et déclenche alors l'expression suivante.",
        ]
    },
    1893: {
        "Cas d'utilisation courants :": [
            "Quand vos données commencent comme des listes mutables, préférez convertir en tuples pour les utiliser comme clés de dictionnaire.",
        ],
        "Cas limites :": [
            "Les clés de dictionnaires doivent être hashables : une liste est mutable et provoque un TypeError.",
            "Convertissez une liste en tuple (tuple([...])) si vous avez besoin d'une clé basée sur ce contenu.",
        ],
    },
    1894: {
        "Cas d'utilisation courants :": [
            "Si vous souhaitez utiliser une structure de type dictionnaire comme clé, convertissez-la en représentation immuable (ex. tuple(d.items())).",
        ],
        "Cas limites :": [
            "Un dictionnaire est mutable et n'est donc pas hashable : l'utiliser comme clé lève un TypeError.",
            "Utilisez une représentation immuable (p.ex. tuple(d.items())) pour fabriquer une clé hashable.",
        ],
    },
    1885: {
        "Cas d'utilisation courants :": [
            "Trouver la clé minimale d'un dictionnaire (min(d)) quand l'ordre naturel des clés a du sens.",
        ]
    },
    1886: {
        "Cas d'utilisation courants :": [
            "Repérer rapidement la valeur maximale via max(d.values()) (plus grande mesure/score parmi les valeurs).",
        ]
    },
    1889: {
        "Cas d'utilisation courants :": [
            "Vérifier efficacement s'il existe au moins une valeur truthy parmi les valeurs avec any(d.values()).",
        ]
    },
    1891: {
        "Cas d'utilisation courants :": [
            "Indexer des données par des clés entières (IDs) et accéder directement via d[1].",
        ]
    },
    1892: {
        "Cas d'utilisation courants :": [
            "Utiliser des clés composites (paires/coordonnées) sous forme de tuples pour des recherches multi-dimensionnelles.",
        ]
    },
    1895: {
        "Cas d'utilisation courants :": [
            "Assigner des valeurs en associant None, True et False à des clés de dictionnaire (toutes hashables).",
        ]
    },
    1896: {
        "Cas d'utilisation courants :": [
            "Comprendre qu'un int et un float peuvent se confondre comme la même clé (collision de hash) : 1 et 1.0.",
        ]
    },
    1897: {
        "Cas d'utilisation courants :": [
            "Prévoir les collisions : lors d'affectations successives, la dernière valeur écrase la précédente quand 1 et 1.0 se confondent.",
        ]
    },
    1898: {
        "Cas d'utilisation courants :": [
            "Diagnostiquer l'effet d'écrasement quand vous affectez d[1] puis d[1.0] : la valeur finale correspond au dernier assigné.",
        ]
    },
    1899: {
        "Cas d'utilisation courants :": [
            "Retirer une paire clé-valeur tout en récupérant la valeur, via pop(key, default).",
        ]
    },
    1900: {
        "Cas d'utilisation courants :": [
            "Supprimer de manière sûre : pop(key, default) renvoie le défaut si la clé n'existe pas, sans lever d'erreur.",
        ]
    },
}


EXPERT_LABEL = "Expert :"
ORDRE_HEADING = "Ordre des opérations :"
CONSID_PERF_HEADING = "Considérations de performance :"
CAS_LIMITES_HEADING = "Cas limites :"
CAS_USAGE_HEADING = "Cas d'utilisation courants :"
EXEC_HEADING = "Exécution étape par étape :"


def find_template_bounds(full_text: str, id_: int) -> tuple[int, int]:
    """
    Return indices (bt_start, bt_end_exclusive) within full_text for the template literal.
    bt_start points to opening backtick `, bt_end_exclusive points just after closing backtick `.
    """
    # Match lines like: `<id>: `...` (allowing leading indentation and spaces before the backtick).
    start_re = re.compile(rf"^\s*{id_}:\s*`", re.M)
    m = start_re.search(full_text)
    if not m:
        raise SystemExit(f"Entry not found for id {id_}")
    bt_start = m.end() - 1
    i = bt_start + 1
    while i < len(full_text):
        if full_text[i] == "\\":
            i += 2
            continue
        if full_text[i] == "`":
            return bt_start, i + 1
        i += 1
    raise RuntimeError(f"No closing backtick for id {id_}")


def sanitize_for_ts_template(s: str) -> str:
    return s.replace("`", "'")


def insert_into_expert(template_body: str, heading: str, bullets: list[str]) -> tuple[str, bool]:
    expert_idx = template_body.find(EXPERT_LABEL)
    if expert_idx == -1:
        return template_body, False
    expert_seg = template_body[expert_idx:]

    if heading in expert_seg:
        return template_body, False

    if heading == EXEC_HEADING:
        anchor = expert_seg.find(ORDRE_HEADING)
        if anchor == -1:
            return template_body, False
        insert_at = expert_idx + anchor
        steps = "\n".join(bullets)
        insertion = f"{EXEC_HEADING}\n{steps}\n\n"
        return template_body[:insert_at] + insertion + template_body[insert_at:], True

    if heading == CAS_USAGE_HEADING:
        # Insert before Cas limites
        anchor = expert_seg.find(CAS_LIMITES_HEADING)
        if anchor == -1:
            return template_body, False
        insert_at = expert_idx + anchor
        lines = "\n".join("• " + sanitize_for_ts_template(b) for b in bullets)
        insertion = f"{CAS_USAGE_HEADING}\n{lines}\n\n"
        return template_body[:insert_at] + insertion + template_body[insert_at:], True

    if heading == CAS_LIMITES_HEADING:
        # Insert before Considérations de performance
        anchor = expert_seg.find(CONSID_PERF_HEADING)
        if anchor == -1:
            return template_body, False
        insert_at = expert_idx + anchor
        lines = "\n".join("• " + sanitize_for_ts_template(b) for b in bullets)
        insertion = f"{CAS_LIMITES_HEADING}\n{lines}\n\n"
        return template_body[:insert_at] + insertion + template_body[insert_at:], True

    return template_body, False


def main() -> None:
    repo_root = Path(__file__).resolve().parents[1]
    target_path = repo_root / "src/data/detailedExplanationsTranslations.ts"
    full_text = target_path.read_text(encoding="utf-8")

    total = 0
    for id_, patch in TARGET_IDS.items():
        bt_start, bt_end = find_template_bounds(full_text, id_)
        template_body = full_text[bt_start + 1 : bt_end - 1]

        patched_any = False
        for heading, bullets in patch.items():
            template_body2, ok = insert_into_expert(template_body, heading, bullets)
            if ok:
                patched_any = True
                template_body = template_body2

        if patched_any:
            total += 1
            full_text = full_text[: bt_start + 1] + template_body + full_text[bt_end - 1 :]
            print(f"OK: patched id={id_}")
        else:
            print(f"SKIP: id={id_} had nothing to patch (or anchor missing).")

    if total == 0:
        raise SystemExit("No ids patched.")

    target_path.write_text(full_text, encoding="utf-8")
    print(f"Total ids patched: {total}")


if __name__ == "__main__":
    main()

