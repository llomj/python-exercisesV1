#!/usr/bin/env python3
"""
Fix missing French "Exemples :" sections for specific IDs.

Batch: Level 4–10 Expert, IDs 1862–1871.

What this patches:
- For each ID, if the Expert tier lacks the exact heading `Exemples :`
  and has `Remarques :`, insert:
    Exemples :
    • <question-specific bullet>
  directly before `Remarques :`.
"""

from __future__ import annotations

import re
from pathlib import Path


TARGET_EXAMPLE_BULLETS: dict[int, str] = {
    1862: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier la règle suivante : les dictionnaires ayant des valeurs différentes pour les mêmes clés ne sont pas égaux.",
    1863: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier la règle suivante : les dictionnaires ayant des ensembles de clés différents ne sont pas égaux.",
    1864: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier la règle suivante : l'opérateur != vérifie si deux dictionnaires sont différents.",
    1865: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier la règle suivante : l'opérateur is vérifie si deux variables référencent le même objet, pas si elles ont le même contenu.",
    1866: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier la règle suivante : un objet est toujours identique à lui-même.",
    1867: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier la règle suivante : un dictionnaire vide est « falsy » dans les contextes booléens.",
    1868: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier la règle suivante : un dictionnaire non vide est « truthy » dans les contextes booléens.",
    1869: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier la règle suivante : les dictionnaires ne prennent pas en charge l'opérateur + pour la concaténation.",
    1870: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier la règle suivante : les dictionnaires ne prennent pas en charge l'opérateur * pour la répétition.",
    1871: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier la règle suivante : les vues d'un dictionnaire sont dynamiques et reflètent les changements du dictionnaire.",
    1872: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que la vue renvoyée par d.values() est dynamique : après d['b'] = 2, list(v) inclut aussi la nouvelle valeur.",
    1873: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que la vue renvoyée par d.items() est dynamique : après d['b'] = 2, list(i) contient aussi la paire ajoutée.",
    1874: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que parcourir directement un dictionnaire dans une boucle for itère sur les clés : print(k) affiche les clés, pas les valeurs.",
    1875: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que itérer sur .values() renvoie les valeurs : print(v) affiche les valeurs associées aux clés.",
    1876: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que .items() fournit des paires (clé, valeur) : dans for k, v, print(k, v) affiche les clés et leurs valeurs.",
    1877: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que list(dictionnaire) convertit un dictionnaire en liste de ses clés.",
    1878: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que tuple(dictionnaire) convertit un dictionnaire en tuple de ses clés.",
    1879: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que set(dictionnaire) convertit un dictionnaire en ensemble de ses clés.",
    1880: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que sorted(dictionnaire) trie les clés et renvoie la liste des clés triées.",
    1881: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que {'a': 1}.fromkeys(...) crée un nouveau dictionnaire avec les clés demandées et des valeurs par défaut (None quand aucune valeur n'est fournie).",
    1882: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que fromkeys(keys, default) utilise la seconde valeur fournie comme valeur par défaut pour toutes les clés.",
    1883: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que dict.fromkeys(...) est une méthode de classe : elle crée un nouveau dictionnaire en ignorant le dictionnaire de départ.",
    1884: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que max(d) applique le maximum sur les clés lorsqu'il reçoit un dictionnaire directement.",
    1885: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que min(d) applique le minimum sur les clés lorsqu'il reçoit un dictionnaire directement.",
    1886: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que max(d.values()) renvoie la plus grande valeur parmi les valeurs.",
    1887: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que sum(d.values()) additionne toutes les valeurs du dictionnaire.",
    1888: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que all(d.values()) vérifie que toutes les valeurs sont truthy.",
    1889: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que any(d.values()) renvoie True s'il existe au moins une valeur truthy.",
    1890: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que l'opérateur or renvoie la première valeur truthy, ou la dernière valeur si toutes sont falsy.",
    1891: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que les clés entières fonctionnent tout à fait dans un dictionnaire (même si les valeurs sont des chaînes).",
    1892: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que les clés de type tuple fonctionnent dans les dictionnaires, car les tuples sont immuables et hashables.",
    1893: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que les clés de type liste ne fonctionnent pas dans les dictionnaires, car les listes sont mutables et non hashables.",
    1894: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que les clés de type dictionnaire ne fonctionnent pas dans les dictionnaires, car un dictionnaire est mutable et donc non hashable.",
    1895: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que None, True et False peuvent être des clés de dictionnaire : ils sont hashables (immuables).",
    1896: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que 1 (int) et 1.0 (float) sont considérés comme la même clé dans les dictionnaires, car ils ont le même hash.",
    1897: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que 1 (int) et 1.0 (float) se comportent comme la même clé dans les dictionnaires, ce qui fait collision lors de l'insertion.",
    1898: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que d[1.0] écrase la même entrée que d[1] : 1 et 1.0 correspondent à la même clé de dictionnaire.",
    1899: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que pop() renvoie la vraie valeur si la clé existe, même si vous fournissez une valeur par défaut.",
    1900: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que pop() renvoie la valeur par défaut quand la clé n'existe pas, à condition qu'une valeur par défaut soit fournie.",
    1953: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que cette compréhension construit un dictionnaire de fréquence des caractères en parcourant les caractères uniques et en comptant chaque occurrence.",
    1957: "Essayez le même raisonnement avec une entrée étroitement liée pour vérifier que cette compréhension construit un dictionnaire de fréquence des mots, puis lit le nombre associé à \"the\".",
}


ENTRY_START_RE = re.compile(r"^(\s*)(\d+):\s*`", re.M)

EXPERT_LABEL = "Expert :"
EXAMPLES_HEADING = "Exemples :"
REMARKS_HEADING = "Remarques :"


def extract_template_for_id(full_text: str, id_: int) -> tuple[int, int]:
    """
    Returns (start_backtick_index, end_backtick_index_exclusive) for the template literal.
    """
    # Find entry start
    start_pat = re.compile(rf"^\s*{id_}:\s*`", re.M)
    m = start_pat.search(full_text)
    if not m:
        raise SystemExit(f"Entry not found for id {id_}")

    bt_start = m.end() - 1  # index of opening backtick
    i = bt_start + 1
    while i < len(full_text):
        if full_text[i] == "\\":
            i += 2
            continue
        if full_text[i] == "`":
            return bt_start, i + 1
        i += 1
    raise RuntimeError(f"No closing backtick for id {id_}")


def patch_entry_body(template_body: str, bullet: str) -> tuple[str, bool]:
    # Work within the Expert tier to keep the structure stable.
    expert_idx = template_body.find(EXPERT_LABEL)
    if expert_idx == -1:
        return template_body, False

    expert_segment = template_body[expert_idx:]

    if EXAMPLES_HEADING in expert_segment:
        return template_body, False

    remarks_idx = expert_segment.find(REMARKS_HEADING)
    if remarks_idx == -1:
        return template_body, False

    insert_at = expert_idx + remarks_idx
    insertion = f"{EXAMPLES_HEADING}\n• {bullet}\n\n"
    new_body = template_body[:insert_at] + insertion + template_body[insert_at:]
    return new_body, True


def main() -> None:
    repo_root = Path(__file__).resolve().parents[1]
    target_path = repo_root / "src/data/detailedExplanationsTranslations.ts"
    full_text = target_path.read_text(encoding="utf-8")

    total_patched = 0
    for id_, bullet in TARGET_EXAMPLE_BULLETS.items():
        bt_start, bt_end = extract_template_for_id(full_text, id_)
        template_body = full_text[bt_start + 1 : bt_end - 1]
        new_body, ok = patch_entry_body(template_body, bullet)
        if ok:
            total_patched += 1
            full_text = full_text[: bt_start + 1] + new_body + full_text[bt_end - 1 :]
        else:
            print(f"SKIP id={id_} (already had Exemples or missing labels)")

    if total_patched == 0:
        print("No entries patched.")
        return

    target_path.write_text(full_text, encoding="utf-8")
    print(f"OK: patched {total_patched} entries (inserted Exemples : headings).")


if __name__ == "__main__":
    main()

