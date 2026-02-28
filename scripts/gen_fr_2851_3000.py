#!/usr/bin/env python3
"""
Generate French translations for IDs 2851-3000.
Reads from scripts/q2851_3000.json and outputs TypeScript snippets.
Keeps Python terms and code unchanged.
"""
import json
import re

# French translations for short explanations (e) - manual translations
SHORT_FR = {
    2851: ".group(1) renvoie le texte correspondant au premier groupe de capture, soit \"user\".",
    2852: "re.sub peut recevoir une fonction comme remplacement. Le lambda convertit chaque mot en majuscules.",
    2853: "Les chaînes brutes (r\"...\") traitent les backslashes comme des caractères littéraux.",
    2854: "chain() concatène plusieurs itérables en une seule séquence.",
    2855: "chain.from_iterable() prend un seul itérable d'itérables et les aplatit.",
    2856: "product() calcule le produit cartésien de tous les éléments.",
    2857: "permutations('ABC') génère les 3! = 6 arrangements des 3 caractères.",
    2858: "combinations('ABC', 2) renvoie tous les sous-ensembles à 2 éléments sans répétition.",
    2859: "combinations_with_replacement autorise la répétition : ('A','A') et ('B','B') sont inclus.",
    2860: "repeat('x', 3) produit 'x' trois fois.",
    2861: "count(10, 2) commence à 10 et incrémente de 2 : 10, 12, 14, 16.",
    2862: "cycle('AB') répète A, B, A, B... infini. 5 éléments donne ['A','B','A','B','A'].",
    2863: "islice(range(100), 0, 10, 3) prend les éléments aux index 0, 3, 6, 9.",
    2864: "accumulate avec multiplication : 1, 1*2=2, 2*3=6, 6*4=24.",
    2865: "takewhile s'arrête dès que le prédicat est False. À 5, x < 5 est False, donc [1, 3].",
    2866: "dropwhile saute tant que le prédicat est True. Après 5, renvoie [5, 2, 4].",
    2867: "compress sélectionne les éléments où le sélecteur est truthy : A, C, E.",
    2868: "zip_longest complète avec fillvalue=0, la 3ᵉ paire est (0, 5).",
    2869: "starmap dépaquette chaque tuple : pow(2,3)=8, pow(3,2)=9.",
    2870: "Le paramètre indent formate le JSON avec le nombre d'espaces indiqué.",
    2871: "sort_keys=True trie les clés du dictionnaire alphabétiquement.",
    2872: "json.dumps sérialise une liste Python en chaîne JSON '[1, 2, 3]'.",
    2873: "None Python correspond à null en JSON : json.dumps(None) renvoie 'null'.",
    2874: "True Python correspond à true (minuscule) en JSON.",
    2875: "Le null JSON correspond à None en Python : json.loads('null') renvoie None.",
    2876: "Le true JSON correspond à True en Python.",
    2877: "json.loads parse une chaîne JSON en liste Python : [1, 2, 3].",
    2878: "Les ensembles ne sont pas sérialisables en JSON — json.dumps lève TypeError.",
    2879: "separators=(',', ':') supprime les espaces, produisant du JSON compact.",
    2880: "Path.name renvoie le dernier composant du chemin : 'c'.",
    2881: "Path.suffix renvoie l'extension avec le point : '.txt'.",
    2882: "Path.stem renvoie le nom du fichier sans extension : 'c'.",
    2883: "L'opérateur / joint Path et chaînes : Path('a/b') / 'c.txt'.",
    2884: "Path.parent renvoie le répertoire parent : Path('a/b').",
    2885: "Path.parts renvoie un tuple des composants : ('a', 'b', 'c').",
    2886: "Path.suffixes renvoie la liste des extensions : ['.tar', '.gz'].",
    2887: "os.path.join combine les composants avec le séparateur OS.",
    2888: "os.path.splitext sépare en racine et extension : ('file', '.txt').",
    2889: "os.path.basename renvoie le dernier composant : 'c.txt'.",
    2890: "os.path.dirname renvoie la partie répertoire : '/a/b'.",
    2891: "os.sep est '/' sous Unix/macOS et '\\\\' sous Windows.",
    2892: "with_suffix('.md') remplace l'extension, produisant Path('a.md').",
    2893: "string.ascii_lowercase contient les 26 lettres minuscules ASCII.",
    2894: "string.ascii_uppercase contient les 26 lettres majuscules ASCII.",
    2895: "string.digits est la chaîne '0123456789'.",
    2896: "string.punctuation contient tous les caractères de ponctuation ASCII.",
    2897: "string.ascii_letters combine minuscules (26) et majuscules (26) = 52.",
    2898: "string.hexdigits contient les caractères hexadécimaux valides.",
    2899: "string.whitespace contient espace, tab, newline, etc.",
    2900: "textwrap.wrap découpe le texte en lignes de largeur maximale donnée.",
    2901: "textwrap.fill découpe et joint les lignes avec des retours à la ligne.",
    2902: "textwrap.shorten réduit le texte à une largeur maximale avec [...].",
    2903: "textwrap.dedent supprime l'indentation commune.",
    2904: "secrets.token_hex(16) génère une chaîne hexadécimale aléatoire sécurisée.",
    2905: "secrets.choice sélectionne un élément aléatoire de manière cryptographique.",
    2906: "secrets.compare_digest évite les fuites temporelles dans les comparaisons.",
    2907: "hashlib.md5() crée un objet de hachage MD5.",
    2908: "digest() renvoie le hachage brut en bytes.",
    2909: "hexdigest() renvoie le hachage en chaîne hexadécimale.",
    2910: "hashlib.sha256() utilise l'algorithme SHA-256.",
    2911: "hashlib.sha1() utilise l'algorithme SHA-1.",
    2912: "hashlib.sha512() utilise l'algorithme SHA-512.",
    2913: "copy.copy fait une copie superficielle.",
    2914: "copy.deepcopy fait une copie récursive profonde.",
    2915: "deepcopy copie les objets imbriqués récursivement.",
    2916: "shallow copy partage les références des objets imbriqués.",
    2917: "functools.partial fixe des arguments d'une fonction.",
    2918: "functools.reduce applique une fonction à un itérable de gauche à droite.",
    2919: "functools.lru_cache mémorise les résultats des appels.",
    2920: "operator.add est la version fonctionnelle de +.",
    2921: "operator.itemgetter(1) renvoie une fonction qui extrait l'élément à l'index 1.",
    2922: "operator.attrgetter('name') extrait l'attribut name.",
    2923: "functools.cmp_to_key convertit une fonction de comparaison en clé de tri.",
    2924: "PEP 8 recommande 4 espaces par niveau d'indentation.",
    2925: "PEP 8 recommande 79 caractères maximum par ligne.",
    2926: "PEP 8 recommande snake_case pour les noms de fonctions.",
    2927: "PEP 8 recommande CamelCase pour les noms de classes.",
    2928: "PEP 8 recommande ALL_CAPS pour les constantes.",
    2929: "PEP 8 recommande des noms de modules courts en minuscules.",
    2930: "PEP 8 : espaces autour de = dans les assignations.",
    2931: "PEP 8 : pas d'espaces autour de = dans les arguments nommés.",
    2932: "PEP 8 : 2 lignes vides entre les fonctions de niveau supérieur.",
    2933: "PEP 8 : 1 ligne vide entre les méthodes d'une classe.",
    2934: "PEP 8 : imports un par ligne, en haut du fichier.",
    2935: "PEP 8 : ordre stdlib, tiers, local, séparés par des lignes vides.",
    2936: "PEP 8 : utiliser 'is None' ou 'is not None' pour les comparaisons.",
    2937: "PEP 8 : utiliser 'if x:' et 'if not x:' au lieu de == True/False.",
    2938: "Une docstring est une chaîne littérale en première instruction.",
    2939: "PEP 8 : supprimer les espaces en fin de ligne.",
    2940: "Appeler une fonction async renvoie une coroutine, pas la valeur de retour.",
    2941: "type(f()) où f est async renvoie <class 'coroutine'>.",
    2942: "asyncio.run() ou await exécute la coroutine.",
    2943: "asyncio.run() crée une boucle d'événements et exécute la coroutine.",
    2944: "await ne peut être utilisé que dans une fonction async.",
    2945: "asyncio.run(f()) exécute la coroutine et renvoie sa valeur.",
    2946: "asyncio.sleep(1) est une coroutine non bloquante qui attend 1 seconde.",
    2947: "time.sleep bloque le thread ; asyncio.sleep est non bloquant.",
    2948: "asyncio.gather exécute plusieurs coroutines concurremment.",
    2949: "async for itère sur des itérateurs asynchrones.",
    2950: "async with utilise des gestionnaires de contexte asynchrones.",
    2951: "La boucle d'événements gère et planifie les coroutines.",
    2952: "asyncio.create_task planifie la coroutine pour exécution concurrente.",
    2953: "Oui, mais les appels bloquants dans async bloquent la boucle d'événements.",
    2954: "async/await résout la concurrence I/O sans threads.",
    2955: "Pythonic : a, b = b, a pour échanger deux variables.",
    2956: "Pythonic : 'if not my_list:' pour vérifier une liste vide.",
    2957: "Pythonic : ''.join(parts) pour construire une chaîne à partir d'une liste.",
    2958: "Pythonic : isinstance(x, int) pour vérifier le type.",
    2959: "Pythonic : 'if x is None:' pour vérifier None.",
    2960: "Les list comprehensions sont plus Pythonic que map avec lambda.",
    2961: "Pythonic : for k, v in d.items(): pour itérer sur un dictionnaire.",
    2962: "Pythonic : for i, x in enumerate(lst): pour index et valeur.",
    2963: "Pythonic : for a, b in zip(xs, ys): pour itérer sur deux listes.",
    2964: "Pythonic : with open(f) as fh: pour les fichiers.",
    2965: "Les f-strings sont préférées à .format() et %.",
    2966: "defaultdict évite les vérifications manuelles de clé.",
    2967: "\"Flat is better than nested\" — éviter la profonde imbrication.",
    2968: "\"Explicit is better than implicit\" — le code doit montrer clairement son intention.",
    2969: "Citation du Zen de Python (import this).",
    2970: "'import this' affiche le Zen de Python (PEP 20).",
    2971: "EAFP : Easier to Ask Forgiveness than Permission — utiliser try/except.",
    2972: "DRY : Don't Repeat Yourself — éviter la duplication de code.",
    2973: "asyncio.run() exécute la coroutine et renvoie son résultat, soit 42.",
    2974: "asyncio.sleep(1) est une coroutine non bloquante qui attend 1 seconde.",
    2975: "time.sleep() bloque tout le thread ; asyncio.sleep() est non bloquant.",
    2976: "asyncio.gather() exécute plusieurs coroutines concurremment et renvoie tous les résultats.",
    2977: "async for itère sur des itérateurs asynchrones.",
    2978: "async with s'utilise avec des gestionnaires de contexte asynchrones (__aenter__, __aexit__).",
    2979: "La boucle d'événements gère et planifie les coroutines.",
    2980: "asyncio.create_task() enveloppe une coroutine dans une Task et la planifie.",
    2981: "Oui, mais les appels sync bloquants dans async bloquent la boucle d'événements.",
    2982: "async/await permet une concurrence I/O efficace sans threads.",
    2983: "Python permet l'échange par déballage : a, b = b, a.",
    2984: "Utiliser 'if not my_list:' — les collections vides sont falsy.",
    2985: "Utiliser ''.join(parts) — plus rapide et plus Pythonic que += en boucle.",
    2986: "isinstance(x, int) est préféré — fonctionne avec les sous-classes de int.",
    2987: "Utiliser 'is None' — None est un singleton.",
    2988: "Les list comprehensions sont plus Pythonic que map() avec lambda.",
    2989: "Utiliser le déballage : for k, v in d.items():",
    2990: "enumerate() donne index et valeur — plus Pythonic que range(len(lst)).",
    2991: "zip() associe les éléments de plusieurs itérables.",
    2992: "L'instruction 'with' est toujours préférée pour les fichiers.",
    2993: "Les f-strings sont préférées à .format() et % depuis Python 3.6.",
    2994: "defaultdict crée automatiquement les clés absentes.",
    2995: "Éviter l'imbrication profonde — early returns et structures plates.",
    2996: "Le code doit communiquer clairement son intention.",
    2997: "Cette citation est du Zen de Python (import this).",
    2998: "'import this' affiche le Zen de Python (PEP 20).",
    2999: "EAFP : Easier to Ask Forgiveness than Permission — try/except plutôt que pré-vérification.",
    3000: "DRY : Don't Repeat Yourself — éviter la duplication de code.",
}

def load_questions():
    with open("scripts/q2851_3000.json") as f:
        return json.load(f)

def escape_ts(s):
    """Escape for TypeScript template literal."""
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")

def translate_de_en_to_fr(text):
    """Translate structural labels only; keep code and Python terms unchanged."""
    # Translate section headers
    replacements = [
        ("Key concepts:", "Concepts clés :"),
        ("How it works:", "Comment ça fonctionne :"),
        ("Example:", "Exemple :"),
        ("Examples:", "Exemples :"),
        ("Common uses:", "Usages courants :"),
        ("Edge cases:", "Cas particuliers :"),
        ("Workaround — custom encoder:", "Contournement — encodeur personnalisé :"),
    ]
    result = text
    for en, fr in replacements:
        result = result.replace(en, fr)
    # Translate bullet points that are purely English prose (simple patterns)
    # We keep code blocks, function names, etc. unchanged
    return result

def gen_short_ts(questions):
    lines = ["  // IDs 2851-3000: Level 10 Expert B (itertools, json, pathlib, string, textwrap, etc.)"]
    for q in questions:
        qid = q["id"]
        fr = SHORT_FR.get(qid)
        if fr:
            escaped = fr.replace("\\", "\\\\").replace('"', '\\"')
            lines.append(f'  {qid}: "{escaped}",')
    return "\n".join(lines)

def main():
    questions = load_questions()
    short_ts = gen_short_ts(questions)
    print("=== SHORT EXPLANATIONS (add before closing };) ===\n")
    print(short_ts)

if __name__ == "__main__":
    main()
