/** Level 6 FR 2001–2025 — level6_expert_a.ts Q1–25 (Counter) */
export default {
  2001: `Counter("hello")

Débutant :
• Counter parcourt la chaîne et compte chaque lettre : l deux fois, h, e, o une fois.

Intermédiaire :
• La représentation affichée ordonne souvent les éléments par effectif décroissant : l en premier (2), puis les autres (1).

Expert :
• Counter est une sous-classe de dict ; clé absente → 0 sans KeyError.

Concepts clés :
• collections.Counter, itérable de hashables, comptage.

Distinctions clés :
• Counter vs dict manuel avec get(k,0).

Fonctionnement :
• Parcours h,e,l,l,o et incrémente les compteurs internes.

Exécution étape par étape :
1. Construction du mapping lettre → nombre.

Ordre des opérations :
• Appel Counter puis affichage repr.

Cas d'utilisation courants :
• Fréquences, détection d’anagrammes, analyse texte.

Cas limites :
• Éléments non hashables dans l’itérable → erreur.

Considérations de performance :
• Un passage sur l’itérable source.

Exemples :
• Counter sur liste de mots, ou mots-clés Counter(a=3).

Remarques :
• Réponse : représentation Counter avec l:2 en tête (première option du quiz).`,

  2002: `Accès Counter["l"] sur "hello"

Débutant :
• La clé "l" a le compte 2 dans Counter("hello").

Intermédiaire :
• Même syntaxe que d[clé] sur un dict, mais comportement diffère pour clé absente (0).

Expert :
• Utile pour lire un effectif sans if préalable.

Concepts clés :
• Crochets sur Counter, valeur entière.

Distinctions clés :
• dict classique lève KeyError si clé absente.

Fonctionnement :
• Recherche du compte stocké pour la lettre l.

Exécution étape par étape :
1. Retour 2.

Ordre des opérations :
• Counter(...) puis sous-script.

Cas d'utilisation courants :
• Afficher le nombre d’occurrences d’un token.

Cas limites :
• Clé inexistante en Counter → 0 (pas d’exception ici pour lecture seule).

Considérations de performance :
• O(1) amortized comme dict.

Exemples :
• c["x"] après boucle de comptage.

Remarques :
• Réponse : 2.`,

  2003: `Counter et clé manquante "z"

Débutant :
• z n’apparaît pas dans "hello" → le compte vaut 0.

Intermédiaire :
• __missing__ de Counter renvoie 0 sans insérer de clé (lecture seule).

Expert :
• Permet c[k] += 1 sans initialisation préalable.

Concepts clés :
• Clé absente, zéro par défaut.

Distinctions clés :
• dict["z"] lèverait KeyError.

Fonctionnement :
• Interception de l’accès manquant.

Exécution étape par étape :
1. Retour 0.

Ordre des opérations :
• Évaluation Counter puis ["z"].

Cas d'utilisation courants :
• Compteurs incrémentaux sans setdefault.

Cas limites :
• Ne pas confondre avec None.

Considérations de performance :
• Léger comme lookup dict.

Exemples :
• Histogramme avec alphabet complet.

Remarques :
• Réponse : 0.`,

  2004: `most_common(2)

Débutant :
• Les deux paires les plus fréquentes : l avec 2, puis parmi les comptes 1 la première en ordre d’insertion h.

Intermédiaire :
• Résultat : liste de tuples (élément, compte).

Expert :
• Les ex-aequo sur le compte se départagent par ordre d’apparition dans le Counter.

Concepts clés :
• most_common, tri par effectif.

Distinctions clés :
• most_common(1) vs sans argument (tout retourner trié).

Fonctionnement :
• Tri interne par count décroissant puis règle de tie-break.

Exécution étape par étape :
1. [('l', 2), ('h', 1)].

Ordre des opérations :
• Construction Counter puis appel most_common(2).

Cas d'utilisation courants :
• Top-K fréquences.

Cas limites :
• n plus grand que le nombre de clés → tous retournés.

Considérations de performance :
• Implémentation efficace en C pour gros compteurs.

Exemples :
• most_common(3) sur corpus.

Remarques :
• Réponse : [('l', 2), ('h', 1)].`,

  2005: `most_common() sans argument

Débutant :
• Sans n, la méthode renvoie tous les éléments triés du plus fréquent au moins fréquent.

Intermédiaire :
• Ce n’est ni « seulement count>1 » ni une seule valeur.

Expert :
• Équivalent conceptuel à un tri complet de la distribution.

Concepts clés :
• Argument optionnel, liste complète de paires.

Distinctions clés :
• Ne pas croire qu’un argument est obligatoire.

Fonctionnement :
• Parcours trié de toutes les entrées du Counter.

Exécution étape par étape :
1. Quatre paires pour "hello" ordonnées par count puis insertion.

Ordre des opérations :
• Appel sans parenthèses interne : most_common().

Cas d'utilisation courants :
• Exporter toute la distribution triée.

Cas limites :
• Counter vide → liste vide.

Considérations de performance :
• Coût lié au nombre de clés distinctes.

Exemples :
• Journaliser toutes les fréquences.

Remarques :
• Réponse : option « tous les éléments triés par count décroissant ».`,

  2006: `most_common(1) sur liste de nombres

Débutant :
• Le 3 apparaît trois fois, plus que 1 (deux fois) et 2 (une fois).

Intermédiaire :
• Le résultat est une liste d’un tuple : (élément le plus fréquent, son compte).

Expert :
• Attention : [(3, 3)] — le premier 3 est la valeur, le second est l’effectif.

Concepts clés :
• Counter sur liste, top 1.

Distinctions clés :
• Ne pas confondre avec la valeur seule 3.

Fonctionnement :
• Comptage puis sélection du max count.

Exécution étape par étape :
1. [(3, 3)].

Ordre des opérations :
• Counter([...]) puis most_common(1).

Cas d'utilisation courants :
• Mode d’une série discrète.

Cas limites :
• Égalité de fréquence max → tie-break par ordre d’insertion.

Considérations de performance :
• Linéaire en taille de liste.

Exemples :
• Vote majoritaire simple.

Remarques :
• Réponse : [(3, 3)].`,

  2007: `list(Counter("aab").elements())

Débutant :
• elements() répète chaque clé selon son compte : deux a puis un b.

Intermédiaire :
• L’ordre suit l’ordre de première rencontre dans le Counter (ici a puis b).

Expert :
• Les comptes nuls ou négatifs ne sont pas émis.

Concepts clés :
• Iterator elements(), matérialisation list.

Distinctions clés :
• Pas une liste de paires (élément, count).

Fonctionnement :
• Expansion des multiplicités.

Exécution étape par étape :
1. ['a', 'a', 'b'].

Ordre des opérations :
• Counter puis .elements() puis list().

Cas d'utilisation courants :
• Reconstruire une séquence équivalente en multiset.

Cas limites :
• Grand comptes → liste volumineuse.

Considérations de performance :
• Mémoire si list() sur très gros décomptes.

Exemples :
• Rééchantillonner selon fréquences.

Remarques :
• Réponse : ['a', 'a', 'b'].`,

  2008: `Addition de deux Counter

Débutant :
• Les effectifs se additionnent clé par clé : b et c dans les deux chaînes → 2 chacun.

Intermédiaire :
• a et d ne viennent que d’un côté → compte 1.

Expert :
• Le repr peut réordonner par counts décroissants.

Concepts clés :
• Opérateur + sur Counter, somme des comptes.

Distinctions clés :
• Pas la concaténation de chaînes.

Fonctionnement :
• Union des clés avec somme des valeurs positives.

Exécution étape par étape :
1. b:2, c:2, a:1, d:1 selon affichage du quiz.

Ordre des opérations :
• Évaluation des deux Counter puis +.

Cas d'utilisation courants :
• Fusionner des histogrammes.

Cas limites :
• Counter + dict ordinaire : dict traité comme mapping de comptes.

Considérations de performance :
• Linéaire en nombre de clés.

Exemples :
• Agréger logs de plusieurs fichiers.

Remarques :
• Réponse : Counter avec b:2, c:2, a:1, d:1 (première option).`,

  2009: `Soustraction Counter avec -

Débutant :
• On retire les comptes de "bc" à "abc" : b et c tombent à 0 et disparaissent du résultat.

Intermédiaire :
• L’opérateur - enlève les zéros et négatifs du Counter résultat.

Expert :
• Différent de subtract() qui peut laisser des zéros in-place.

Concepts clés :
• Soustraction multiset, élagage des zéros.

Distinctions clés :
• c - d vs c.subtract(d).

Fonctionnement :
• a reste 1, b et c deviennent 0 puis exclus.

Exécution étape par étape :
1. Counter({'a': 1}).

Ordre des opérations :
• Deux Counter puis binaire -.

Cas d'utilisation courants :
• Retirer un lot d’éléments d’un inventaire logique.

Cas limites :
• Résultat vide → Counter().

Considérations de performance :
• Linéaire en clés.

Exemples :
• Différence de sacs multi-ensembles.

Remarques :
• Réponse : Counter({'a': 1}).`,

  2010: `Intersection & entre Counter

Débutant :
• Seules les clés présentes des deux côtés avec le minimum des deux comptes : b et c → 1 chacun.

Intermédiaire :
• a et d ont min 0 avec l’autre côté → exclus.

Expert :
• Analogie multi-ensemble : prendre le minimum de multiplicité.

Concepts clés :
• Opérateur &, minimum des comptes.

Distinctions clés :
• & sur Counter n’est pas identique à & sur sets simples de clés.

Fonctionnement :
• min(1,1) pour b et c.

Exécution étape par étape :
1. Counter({'b': 1, 'c': 1}).

Ordre des opérations :
• Deux Counter puis &.

Cas d'utilisation courants :
• Fréquence commune minimale entre deux sources.

Cas limites :
• Aucune clé partagée → Counter vide.

Considérations de performance :
• Linéaire en clés impliquées.

Exemples :
• Recouvrement de tokens entre deux textes.

Remarques :
• Réponse : Counter({'b': 1, 'c': 1}).`,

  2011: `Union | entre Counter

Débutant :
• Pour chaque lettre, on garde le maximum des deux comptes : a:2, c:2, b:1.

Intermédiaire :
• "aab" donne a:2,b:1 ; "bcc" donne b:1,c:2 → max par clé.

Expert :
• Utile pour fusionner en gardant le pic de fréquence.

Concepts clés :
• Opérateur |, maximum des comptes.

Distinctions clés :
• | ici n’est pas la fusion de dicts générique 3.9+ sur types mixtes sans règle Counter.

Fonctionnement :
• Parcours de l’union des clés avec max.

Exécution étape par étape :
1. Counter({'a': 2, 'c': 2, 'b': 1}) selon repr du QCM.

Ordre des opérations :
• Deux Counter puis |.

Cas d'utilisation courants :
• Borner supérieurement des décomptes combinés.

Cas limites :
• Clé absente d’un côté → compte 0 pour le max.

Considérations de performance :
• Linéaire.

Exemples :
• Combiner deux histogrammes au « pire cas ».

Remarques :
• Réponse : Counter({'a': 2, 'c': 2, 'b': 1}) (première option).`,

  2012: `sum(c.values()) sur Counter("aab")

Débutant :
• Les valeurs sont 2 et 1 pour a et b → somme 3 = longueur de la chaîne source.

Intermédiaire :
• values() donne les effectifs, pas les caractères.

Expert :
• En 3.10+, total() sur Counter fait équivalent.

Concepts clés :
• Vue values, agrégation sum.

Distinctions clés :
• len(c) compterait les clés distinctes, pas la taille totale.

Fonctionnement :
• 2 + 1.

Exécution étape par étape :
1. 3.

Ordre des opérations :
• Counter assigné à c puis values puis sum.

Cas d'utilisation courants :
• Nombre total d’éléments dans un multiset.

Cas limites :
• Counter vide → 0.

Considérations de performance :
• O(nombre de clés) pour la somme.

Exemples :
• Vérifier effectif total après fusion.

Remarques :
• Réponse : 3.`,

  2013: `dict(Counter("aab"))

Débutant :
• dict() copie les paires élément→compte dans un dict classique.

Intermédiaire :
• On perd les opérateurs arithmétiques et le 0 implicite de Counter.

Expert :
• JSON et APIs attendent souvent un dict pur.

Concepts clés :
• Conversion, sous-type vers type de base.

Distinctions clés :
• Le type affiché n’est plus Counter.

Fonctionnement :
• Copie des entrées présentes.

Exécution étape par étape :
1. {'a': 2, 'b': 1}.

Ordre des opérations :
• Counter puis constructeur dict.

Cas d'utilisation courants :
• Sérialisation, immutabilité conceptuelle du type.

Cas limites :
• Comptes négatifs ou zéro selon état du Counter source.

Considérations de performance :
• Copie O(n).

Exemples :
• dict(Counter.fromkeys(...)).

Remarques :
• Réponse : {'a': 2, 'b': 1}.`,

  2014: `update("world") après Counter("hello")

Débutant :
• hello a déjà l:2 ; world ajoute un l → 3.

Intermédiaire :
• update sur Counter additionne les comptes, ne remplace pas comme dict.update sur valeurs arbitraires.

Expert :
• o passe aussi à 2 (1+1), plus w,r,d nouveaux.

Concepts clés :
• update itérable, addition des fréquences.

Distinctions clés :
• dict.update écrase la valeur ; Counter.update cumule.

Fonctionnement :
• Pour chaque lettre de "world", incrémenter le compteur existant.

Exécution étape par étape :
1. c["l"] vaut 3.

Ordre des opérations :
• Création, update in-place, lecture.

Cas d'utilisation courants :
• Flux de données incrémental.

Cas limites :
• update avec mapping négatif possible via subtract séparé.

Considérations de performance :
• Linéaire en longueur de la chaîne ajoutée.

Exemples :
• Lire plusieurs fichiers dans le même Counter.

Remarques :
• Réponse : 3.`,

  2015: `subtract("lo") sur Counter("hello")

Débutant :
• Retirer un l et un o : l passe de 2 à 1.

Intermédiaire :
• subtract modifie le Counter sur place et conserve les zéros (contrairement à -).

Expert :
• Méthode utile pour pipelines où on veut voir les zéros restants.

Concepts clés :
• subtract in-place, soustraction par élément.

Distinctions clés :
• Pas le même effet que l’opérateur - qui renvoie un nouveau Counter élagué.

Fonctionnement :
• Décrémenter les comptes pour l et o.

Exécution étape par étape :
1. c["l"] == 1.

Ordre des opérations :
• Counter, subtract, lecture.

Cas d'utilisation courants :
• Ajuster des inventaires étape par étape.

Cas limites :
• Peut créer des comptes négatifs si on retire trop.

Considérations de performance :
• Linéaire en taille de l’itérable passé à subtract.

Exemples :
• subtract sur autre Counter.

Remarques :
• Réponse : 1.`,

  2016: `subtract("lo") et clé "o"

Débutant :
• o passe de 1 à 0 après soustraction d’un o.

Intermédiaire :
• La clé reste présente avec compte 0 ; "o" in c peut être True.

Expert :
• Lecture c["o"] retourne 0 comme pour clé manquante en affichage, mais la clé existe encore.

Concepts clés :
• Compte zéro conservé par subtract.

Distinctions clés :
• Avec l’opérateur -, la clé o aurait disparu du résultat.

Fonctionnement :
• 1 - 1 sur o.

Exécution étape par étape :
1. 0.

Ordre des opérations :
• subtract puis __getitem__.

Cas d'utilisation courants :
• Détecter explicitement les éléments épuisés mais encore référencés.

Cas limites :
• Nettoyer avec +c pour enlever les zéros.

Considérations de performance :
• Négligeable.

Exemples :
• Vérifier "o" in c après subtract.

Remarques :
• Réponse : 0.`,

  2017: `Unary + sur Counter

Débutant :
• Le + unaire renvoie un nouveau Counter sans les comptes nuls ou négatifs.

Intermédiaire :
• a:4 et b:2 restent ; c:0 et d:-2 sont retirés.

Expert :
• Le Counter d’origine n’est pas modifié.

Concepts clés :
• Nettoyage, copie filtrée.

Distinctions clés :
• Différent du + binaire entre deux Counter.

Fonctionnement :
• Filtrer count > 0.

Exécution étape par étape :
1. Counter({'a': 4, 'b': 2}).

Ordre des opérations :
• Création de c puis + unaire.

Cas d'utilisation courants :
• Après subtract, obtenir un Counter « positif » seulement.

Cas limites :
• Si tout est filtré → Counter().

Considérations de performance :
• Parcours des clés.

Exemples :
• c = +c pour normaliser.

Remarques :
• Réponse : Counter({'a': 4, 'b': 2}).`,

  2018: `Unary - sur Counter

Débutant :
• On négate tous les comptes puis on ne garde que les résultats strictement positifs.

Intermédiaire :
• d était -2 → -(-2)=2, seul positif final.

Expert :
• Interprétable comme extraire le « déficit » inversé.

Concepts clés :
• Négation puis filtrage des positifs.

Distinctions clés :
• Ne pas confondre avec soustraction binaire entre deux Counter.

Fonctionnement :
• a,b,c deviennent non positifs après négation ; seul d reste.

Exécution étape par étape :
1. Counter({'d': 2}).

Ordre des opérations :
• - unaire appliqué au Counter.

Cas d'utilisation courants :
• Manipulations algébriques rares sur multi-ensembles.

Cas limites :
• Résultat vide si aucun négatif source.

Considérations de performance :
• Parcours des entrées.

Exemples :
• Voir la doc collections.Counter pour les détails CPython.

Remarques :
• Réponse : Counter({'d': 2}).`,

  2019: `Égalité de deux Counter

Débutant :
• Même multiset : deux a, deux b, deux c dans les deux chaînes, ordre d’écriture différent.

Intermédiaire :
• == compare les comptes, pas l’ordre d’insertion original.

Expert :
• Base de la détection d’anagrammes.

Concepts clés :
• Égalité structurelle des fréquences.

Distinctions clés :
• Deux chaînes différentes peuvent donner Counter égaux.

Fonctionnement :
• Comparaison clé à clé des effectifs.

Exécution étape par étape :
1. True.

Ordre des opérations :
• Deux constructions Counter puis ==.

Cas d'utilisation courants :
• Tests d’anagrammes, permutations.

Cas limites :
• Counter vides → True entre eux.

Considérations de performance :
• Linéaire en nombre de clés distinctes.

Exemples :
• Counter("listen") == Counter("silent") si mêmes lettres.

Remarques :
• Réponse : True.`,

  2020: `Inégalité de Counter

Débutant :
• "abc" contient un c que "ab" n’a pas → comptes différents.

Intermédiaire :
• Un élément avec effectif différent suffit pour False.

Expert :
• Counter("ab")==Counter("ba") serait True (même multiset).

Concepts clés :
• Comparaison stricte des décomptes.

Distinctions clés :
• Extension d’un multiset ne donne pas égalité.

Fonctionnement :
• c:1 vs 0 implicite.

Exécution étape par étape :
1. False.

Ordre des opérations :
• Construction puis ==.

Cas d'utilisation courants :
• Valider sous-ensemble avec même multiplicité.

Cas limites :
• Deux Counter de tailles totales différentes souvent False.

Considérations de performance :
• Linéaire.

Exemples :
• Vérifier même sac avant permutation.

Remarques :
• Réponse : False.`,

  2021: `Incrémenter Counter vide avec +=

Débutant :
• Première lecture de "a" vaut 0 implicite ; +=1 deux fois → 2.

Intermédiaire :
• Pattern idiomatique sans if "a" in c.

Expert :
• Sur dict normal, il faudrait initialiser avant +=.

Concepts clés :
• += sur Counter, défaut 0.

Distinctions clés :
• Évite KeyError du dict nu.

Fonctionnement :
• Lecture-modification-écriture pour chaque +=.

Exécution étape par étape :
1. c["a"] final 2.

Ordre des opérations :
• Counter(), deux +=, lecture.

Cas d'utilisation courants :
• Boucles de comptage manuel.

Cas limites :
• Clés non hashables impossibles.

Considérations de performance :
• O(1) amortized par opération.

Exemples :
• Compter mots dans un fichier ligne par ligne.

Remarques :
• Réponse : 2.`,

  2022: `sorted sur .items() de Counter("banana")

Débutant :
• sorted trie les tuples par premier élément : ordre alphabétique a, b, n.

Intermédiaire :
• Les effectifs suivent leur lettre : a:3, b:1, n:2.

Expert :
• Pour trier par effectif, utiliser key sur le second membre.

Concepts clés :
• items(), tri lexicographique des clés caractère.

Distinctions clés :
• most_common trie par fréquence, pas sorted(items()).

Fonctionnement :
• Tri stable des paires (lettre, count).

Exécution étape par étape :
1. [('a', 3), ('b', 1), ('n', 2)].

Ordre des opérations :
• Counter puis items puis sorted.

Cas d'utilisation courants :
• Affichage canonique par nom de clé.

Cas limites :
• Clés non comparables → erreur (pas le cas ici).

Considérations de performance :
• O(k log k) pour k clés distinctes.

Exemples :
• sorted(d.items()) sur dict quelconque.

Remarques :
• Réponse : [('a', 3), ('b', 1), ('n', 2)].`,

  2023: `Counter("hello") - Counter("hello")

Débutant :
• Chaque compte moins lui-même donne 0 ; l’opérateur - enlève tous les zéros.

Intermédiaire :
• Résultat Counter vide, pas un dict {} nu du même test d’égalité mais équivalent en contenu.

Expert :
• bool(Counter()) est False.

Concepts clés :
• Auto-soustraction, élagage.

Distinctions clés :
• subtract du même iterable laisserait des zéros visibles en interne.

Fonctionnement :
• Toutes les différences 0 puis filtrage.

Exécution étape par étape :
1. Counter().

Ordre des opérations :
• Deux Counter identiques puis -.

Cas d'utilisation courants :
• Test de différence nulle entre histogrammes.

Cas limites :
• Counter déjà vide reste vide.

Considérations de performance :
• Linéaire en clés.

Exemples :
• Vérifier multiset identique via soustraction bidirectionnelle.

Remarques :
• Réponse : Counter() (première option du quiz).`,

  2024: `len(Counter("hello"))

Débutant :
• len compte les clés distinctes : h,e,l,o → 4, pas la longueur 5 de la chaîne.

Intermédiaire :
• Pour le total d’éléments, utiliser sum(c.values()).

Expert :
• Piège fréquent en interview.

Concepts clés :
• Cardinal de l’ensemble sous-jacent du multiset.

Distinctions clés :
• len(string) vs len(Counter(string)).

Fonctionnement :
• Dénombrement des entrées du mapping.

Exécution étape par étape :
1. 4.

Ordre des opérations :
• Counter puis len.

Cas d'utilisation courants :
• Nombre de catégories uniques.

Cas limites :
• Chaîne vide → 0.

Considérations de performance :
• O(1) en taille du Counter en CPython pour len ? En pratique instantané.

Exemples :
• len(Counter([1,1,2])) → 2.

Remarques :
• Réponse : 4.`,

  2025: `sorted(c.elements()) avec a=2,b=3

Débutant :
• elements produit a,a,b,b,b puis sorted ordonne alphabétiquement.

Intermédiaire :
• Déjà trié ici car tous les a avant tous les b dans l’expansion triée.

Expert :
• Si lettres mélangées dans l’itération, sorted réordonne.

Concepts clés :
• elements, sorted, multiplicité.

Distinctions clés :
• sorted sur elements vs sorted sur keys.

Fonctionnement :
• Expansion puis tri Unicode des caractères.

Exécution étape par étape :
1. ['a', 'a', 'b', 'b', 'b'].

Ordre des opérations :
• Counter kwargs puis elements puis sorted.

Cas d'utilisation courants :
• Reconstituer une liste triée à partir de fréquences.

Cas limites :
• Très grands comptes → liste énorme.

Considérations de performance :
• Coût mémoire de la liste matérialisée.

Exemples :
• Même idée avec entiers hashables.

Remarques :
• Réponse : ['a', 'a', 'b', 'b', 'b'].`,
};
