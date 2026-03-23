#!/usr/bin/env python3
"""
Insert missing French `Ordre des opérations :` sections for specific IDs.

Targets (Level 4–10 Expert, French): 2610, 2615, 2649, 2806, 2811,
2919, 3252, 3253, 3254.

For each ID:
- If the Expert tier is missing the exact heading `Ordre des opérations :`
  but contains `Cas d'utilisation courants :`,
  insert `Ordre des opérations :` right before `Cas d'utilisation courants :`.
"""

from __future__ import annotations

import re
from pathlib import Path


TARGET_IDS: list[int] = [
    2610,
    2615,
    2649,
    2806,
    2811,
    2919,
    3252,
    3253,
    3254,
]


TARGET_ORDER_BULLETS: dict[int, list[str]] = {
    2610: [
        "Repérez le risque : un défaut mutable direct (items: list = []) serait créé une seule fois et partagé entre toutes les instances.",
        "Appliquez la règle @dataclass : les mutables en défaut sont refusés pour éviter l'effet de bord classique (liste partagée).",
        "Remplacez par field(default_factory=list) : la fabrique appelle list() à chaque création d'instance.",
        "Vérifiez la conséquence : chaque instance reçoit son propre objet liste, donc modifier l'une n'affecte pas les autres.",
    ],
    2615: [
        "Comprenez quels comparateurs sont générés : __lt__, __le__, __gt__ et __ge__ quand order=True est activé.",
        "Sachez sur quoi s'appuie l'ordre : un tuple de valeurs de champs, dans l'ordre des champs définis dans le dataclass.",
        "Rappelez la contrainte : order=True requiert l'existence de l'égalité (eq=True), sinon l'ordre riche n'est pas complet.",
    ],
    2649: [
        "Comparez d'abord les points structurants : immutabilité (namedtuple) versus mutabilité (dataclasses), et les différences d'accès (indexation).",
        "Reliez ensuite les choix de conception : dataclass vise des objets plus riches (options frozen, __post_init__, field(default_factory)).",
        "Concluez avec le critère de sélection : namedtuple pour des enregistrements simples et immuables, dataclass pour des objets de données avec logique/validation.",
    ],
    2806: [
        "Rappelez le rôle de l'algorithme : C3 produit une MRO cohérente en respectant l'ordre local des bases et la monotonicité.",
        "Appliquez la règle Python 3 : C3 est l'unique algorithme utilisé pour calculer la résolution d'ordre des méthodes.",
        "Anticipez l'échec : si une linéarisation valide n'existe pas, Python lève un TypeError.",
    ],
    2811: [
        "Formulez les deux contraintes : l'ordre des bases dans C impose A avant B, tandis que la MRO de B (qui hérite de A) impose B avant A.",
        "Identifiez le conflit : ces deux contraintes ne peuvent pas être satisfaites simultanément.",
        "Concluez via C3 : l'algorithme doit respecter tout à la fois l'ordre local et la linéarisation parent, donc l'échec déclenche un TypeError.",
    ],
    2919: [
        "Gardez l'effet concret en tête : isinstance() et issubclass() renvoient True, même s'il n'y a pas d'héritage réel des méthodes/attributs.",
        "Appliquez la règle ABC.register() : la classe enregistrée devient une « sous-classe virtuelle » de l'ABC.",
        "Vérifiez la conséquence : la reconnaissance passe, mais la classe n'obtient pas automatiquement l'implémentation de l'ABC.",
    ],
    3252: [
        "Évitez les tabulations : mélanger des tabs et des espaces est déconseillé et peut entraîner des erreurs en Python 3.",
        "Appliquez la règle PEP 8 : chaque niveau d'indentation correspond à 4 espaces.",
        "Pour les lignes de continuation, alignez sur le délimiteur d'ouverture (parens, crochets, accolades) plutôt que d'insérer des tabs.",
    ],
    3253: [
        "Distinguez les seuils : 79 caractères pour les lignes de code, et 72 pour les docstrings et commentaires.",
        "Réduisez les lignes longues en utilisant la continuation implicite via (), [], {}.",
        "En dernier recours, utilisez une continuation explicite avec `\\` seulement si la continuation implicite ne suffit pas.",
    ],
    3254: [
        "Adoptez la convention PEP 8 : des noms en snake_case, donc des minuscules séparées par des underscores.",
        "Appliquez-la de façon cohérente : fonctions, méthodes et variables doivent suivre le même style.",
        "Évitez les styles camelCase/PascalCase dans un code PEP 8.",
    ],
}


EXPERT_LABEL = "Expert :"
ORDER_HEADING = "Ordre des opérations :"
CAS_UTILISATION_HEADING = "Cas d'utilisation courants :"


def extract_template_for_id(full_text: str, id_: int) -> tuple[int, int]:
    start_pat = re.compile(rf"^\s*{id_}:\s*`", re.M)
    m = start_pat.search(full_text)
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


def patch_template_body(template_body: str, bullets: list[str]) -> tuple[str, bool]:
    expert_idx = template_body.find(EXPERT_LABEL)
    if expert_idx == -1:
        return template_body, False
    expert_segment = template_body[expert_idx:]

    if ORDER_HEADING in expert_segment:
        return template_body, False

    cas_idx = expert_segment.find(CAS_UTILISATION_HEADING)
    if cas_idx == -1:
        return template_body, False

    insert_at = expert_idx + cas_idx
    order_section = ORDER_HEADING + "\n" + "\n".join(f"• {b}" for b in bullets) + "\n\n"
    new_body = template_body[:insert_at] + order_section + template_body[insert_at:]
    return new_body, True


def main() -> None:
    repo_root = Path(__file__).resolve().parents[1]
    target_path = repo_root / "src/data/detailedExplanationsTranslations.ts"
    full_text = target_path.read_text(encoding="utf-8")

    total = 0
    for id_ in TARGET_IDS:
        bt_start, bt_end = extract_template_for_id(full_text, id_)
        template_body = full_text[bt_start + 1 : bt_end - 1]
        new_body, ok = patch_template_body(template_body, TARGET_ORDER_BULLETS[id_])
        if ok:
            total += 1
            full_text = full_text[: bt_start + 1] + new_body + full_text[bt_end - 1 :]
        else:
            print(f"SKIP id={id_} (already had Ordre des opérations or missing insertion point)")

    print(f"OK: patched {total} entries (inserted Ordre des opérations : headings).")
    if total == 0:
        raise SystemExit("No entries patched; aborting.")

    target_path.write_text(full_text, encoding="utf-8")


if __name__ == "__main__":
    main()

