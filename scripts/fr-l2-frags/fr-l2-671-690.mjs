/** Level 2 FR 671–690 — booléens, chaînages, appartenance, identité */
export default {
  671: `5 == 5 and 10 > 5 vaut True : and exige les deux sous-expressions vraies.

Débutant :
• and a une priorité plus basse que == et > ici.

Intermédiaire :
• Court-circuit : si la gauche était False, la droite ne s'évalue pas.

Expert :
• Les opérandes peuvent être non bool après test de vérité (hors ce cas pur bool).

Concepts clés :
• Conjonction logique.

Distinctions clés :
• vs or.

Fonctionnement :
• Évalue 5==5 → True, puis 10>5 → True, puis True and True.

Exécution étape par étape :
1. 5 == 5 → True.
2. 10 > 5 → True.
3. True and True → True.

Ordre des opérations :
• Comparaisons avant and.

Cas d'utilisation courants :
• Conditions composées.

Cas limites :
• 0 and 1 → 0 (valeur, pas bool strict) en contexte général.

Considérations de performance :
• Court-circuit évite coût à droite.

Exemples :
• True and False → False

Remarques :
• Utiliser parenthèses si mélange avec or.`,
  672: `5 == 5 and 5 > 10 vaut False : la deuxième comparaison est fausse.

Débutant :
• Un seul False suffit pour and.

Intermédiaire :
• La gauche True force l'évaluation de la droite.

Expert :
• Si la gauche avait été False, la droite ne s'exécuterait pas.

Concepts clés :
• Échec sur la deuxième condition.

Distinctions clés :
• vs 671 où les deux sont vraies.

Fonctionnement :
• True and False → False.

Exécution étape par étape :
1. 5 == 5 → True.
2. 5 > 10 → False.
3. True and False → False.

Ordre des opérations :
• Comparaisons puis and.

Cas d'utilisation courants :
• Valider plusieurs critères simultanés.

Cas limites :
• Ne pas compter sur l'évaluation droite si gauche fausse.

Considérations de performance :
• Mettre le test le plus probable faux en premier pour gagner.

Exemples :
• 1 == 1 and 2 > 3 → False

Remarques :
• Lire and comme "et aussi".`,
  673: `5 == 10 or 10 > 5 vaut True : or vrai si au moins une branche vraie.

Débutant :
• Ici la gauche est fausse mais la droite vraie.

Intermédiaire :
• Court-circuit : True à gauche aurait sauté la droite.

Expert :
• pattern valeur or défaut (hors bool purs).

Concepts clés :
• Disjonction inclusive.

Distinctions clés :
• vs and.

Fonctionnement :
• False or True → True.

Exécution étape par étape :
1. 5 == 10 → False.
2. 10 > 5 → True.
3. False or True → True.

Ordre des opérations :
• Comparaisons puis or.

Cas d'utilisation courants :
• Alternatives acceptables.

Cas limites :
• False or False → False.

Considérations de performance :
• Mettre condition la plus probable vraie à gauche.

Exemples :
• 0 == 1 or 2 == 2 → True

Remarques :
• xor n'existe pas en mot-clé ; utiliser != sur bool ou ^.`,
  674: `5 == 10 or 5 > 10 vaut False : les deux comparaisons échouent.

Débutant :
• or nécessite au moins un True.

Intermédiaire :
• Les deux membres sont évalués ici car gauche fausse.

Expert :
• Chaîner plusieurs or : aucun True → False final.

Concepts clés :
• Double échec logique.

Distinctions clés :
• vs 673.

Fonctionnement :
• False or False → False.

Exécution étape par étape :
1. 5 == 10 → False.
2. 5 > 10 → False.
3. False or False → False.

Ordre des opérations :
• Comparaisons puis or.

Cas d'utilisation courants :
• Rejeter si aucune option ne tient.

Cas limites :
• Avec effets de bord à droite, l'évaluation peut s'arrêter tôt si gauche True.

Considérations de performance :
• Court-circuit à gauche.

Exemples :
• False or False → False

Remarques :
• not (A or B) ≡ (not A) and (not B).`,
  675: `not 5 == 10 vaut True : not a une priorité plus faible que == en Python, donc c'est not (5 == 10).

Débutant :
• 5 == 10 est False, not False → True.

Intermédiaire :
• Parenthèses explicites clarifient : not (5 == 10).

Expert :
• not 5 == 10 n'est pas (not 5) == 10 (illégal : not sur int).

Concepts clés :
• Négation d'une comparaison.

Distinctions clés :
• vs 5 != 10 (même résultat ici).

Fonctionnement :
• Évalue == puis inverse le bool.

Exécution étape par étape :
1. 5 == 10 → False.
2. not False → True.

Ordre des opérations :
• == avant not (liaison du not au résultat de la comparaison).

Cas d'utilisation courants :
• if not condition.

Cas limites :
• not sur types : vérité Python (truthiness).

Considérations de performance :
• négligeable.

Exemples :
• not True → False

Remarques :
• Préférer != pour la lisibilité quand c'est équivalent.`,
  676: `not 5 == 5 vaut False : la comparaison est True, inversée en False.

Débutant :
• not inverse le booléen obtenu.

Intermédiaire :
• Équivalent à 5 != 5 (faux).

Expert :
• Attention aux objets personnalisés avec __bool__.

Concepts clés :
• Négation d'une égalité vraie.

Distinctions clés :
• vs not 5 == 10.

Fonctionnement :
• not True → False.

Exécution étape par étape :
1. 5 == 5 → True.
2. not True → False.

Ordre des opérations :
• == puis not.

Cas d'utilisation courants :
• refuser quand égalité attendue.

Cas limites :
• not not True → True.

Considérations de performance :
• trivial.

Exemples :
• not (1 < 2) → False

Remarques :
• Lire de droite à gauche pour repérer le sous-arbre not.`,
  677: `5 < 10 < 15 vaut True : comparaison chaînée = (5 < 10) and (10 < 15).

Débutant :
• Le milieu 10 est réutilisé, pas réécrit deux fois.

Intermédiaire :
• Toutes les comparaisons doivent passer.

Expert :
• a < f(x) < b évalue f(x) une seule fois (important si f coûteux).

Concepts clés :
• Sucre syntaxique du and.

Distinctions clés :
• vs (5 < 10) and (5 < 15) (différent).

Fonctionnement :
• Vérifie chaîne croissante stricte.

Exécution étape par étape :
1. 5 < 10 → True.
2. 10 < 15 → True.
3. True and True → True.

Ordre des opérations :
• Chaînage traduit en ands binaires.

Cas d'utilisation courants :
• 0 < x < 100.

Cas limites :
• 5 < 10 < 5 → False (deuxième lien faux).

Considérations de performance :
• Une seule évaluation du terme central.

Exemples :
• 1 < 2 < 3 → True

Remarques :
• Mélanger < et > est valide mais à lire avec soin.`,
  678: `15 > 10 > 5 vaut True : chaînage descendant (15 > 10) and (10 > 5).

Débutant :
• Même mécanisme que le chaînage croissant.

Intermédiaire :
• Idiom pour suite strictement décroissante.

Expert :
• Équivalent propre à trois comparaisons séquentielles sur le même pivot.

Concepts clés :
• Chaîne décroissante stricte.

Distinctions clés :
• vs 5 < 10 < 15.

Fonctionnement :
• Deux > composés par and implicite.

Exécution étape par étape :
1. 15 > 10 → True.
2. 10 > 5 → True.
3. True and True → True.

Ordre des opérations :
• Chaînage.

Cas d'utilisation courants :
• Vérifier ordre tri décroissant local.

Cas limites :
• 15 > 10 > 20 → False.

Considérations de performance :
• central évalué une fois.

Exemples :
• 3 > 2 > 1 → True

Remarques :
• Très lisible pour bornes doubles.`,
  679: `5 == 5 == 5 vaut True : chaînage d'égalités = (5 == 5) and (5 == 5).

Débutant :
• Les trois littéraux sont égaux deux à deux ici.

Intermédiaire :
• Ne pas confondre avec "les trois mêmes objets" (identité).

Expert :
• Cas pathologique : a == b == c peut être True sans a is c (objets distincts égaux).

Concepts clés :
• Égalité pairwise sur la chaîne.

Distinctions clés :
• vs (5 == 5) == 5 où le membre droit compare bool à int (False en Python).

Fonctionnement :
• True and True → True.

Exécution étape par étape :
1. 5 == 5 → True.
2. 5 == 5 → True (milieu commun).
3. True and True → True.

Ordre des opérations :
• Chaînage ==.

Cas d'utilisation courants :
• Vérifier plusieurs égalités alignées.

Cas limites :
• 5 == 5 == 10 → False.

Considérations de performance :
• O(1).

Exemples :
• x == y == z pour trois nombres égaux.

Remarques :
• (5==5)==5 est une autre expression (faux).`,
  680: `5 != 10 != 15 vaut True : chaînage (5 != 10) and (10 != 15).

Débutant :
• Vérifie deux inégalités adjacentes, pas "tous différents entre eux" au sens ensemble.

Intermédiaire :
• 5 et 15 peuvent être égaux dans d'autres motifs ; ici ils sont différents aussi par coïncidence.

Expert :
• Pour exiger que trois variables soient deux à deux différentes, il faut d'autres tests (a!=b, a!=c, b!=c).

Concepts clés :
• Inégalité chaînée.

Distinctions clés :
• vs not (5 == 10 == 15).

Fonctionnement :
• True and True → True.

Exécution étape par étape :
1. 5 != 10 → True.
2. 10 != 15 → True.
3. True and True → True.

Ordre des opérations :
• Chaînage !=.

Cas d'utilisation courants :
• Détecter progression sans plateaux égaux.

Cas limites :
• 5 != 5 != 5 → False (premier lien faux).

Considérations de performance :
• O(1).

Exemples :
• 1 != 2 != 3 → True

Remarques :
• Lire toujours le pivot central deux fois.`,
  681: `5 in [1, 2, 3, 4, 5] vaut True : appartenance séquentielle (liste).

Débutant :
• in parcourt jusqu'à trouver une égalité.

Intermédiaire :
• Complexité O(n) liste.

Expert :
• set ou dict pour tests d'appartenance fréquents O(1) amorti.

Concepts clés :
• Test de présence.

Distinctions clés :
• vs index() qui lève si absent.

Fonctionnement :
• __contains__ sur list.

Exécution étape par étape :
1. Parcourt éléments.
2. Trouve 5 → True.

Ordre des opérations :
• Une opération in.

Cas d'utilisation courants :
• if valeur in options.

Cas limites :
• [[]] contenant listes mutables rare pour débutants.

Considérations de performance :
• list longue → coûteux.

Exemples :
• 'b' in ['a','b'] → True

Remarques :
• Égalité par == élément par élément.`,
  682: `10 in [1, 2, 3, 4, 5] vaut False : 10 n'apparaît pas dans cette liste finie.

Débutant :
• in retourne False si aucune égalité.

Intermédiaire :
• Pas d'exception : booléen seulement.

Expert :
• Sur générateur infini, attention à la non-terminaison (hors cas fini ici).

Concepts clés :
• Absence dans la collection.

Distinctions clés :
• vs 681.

Fonctionnement :
• Scan complet jusqu'à la fin.

Exécution étape par étape :
1. Compare 10 à chaque élément.
2. Aucun match → False.

Ordre des opérations :
• Une expression in.

Cas d'utilisation courants :
• Filtrer entrées invalides.

Cas limites :
• Liste vide : toujours False pour tout x.

Considérations de performance :
• n comparaisons max.

Exemples :
• 99 in [1,2,3] → False

Remarques :
• Utiliser set pour grands volumes.`,
  683: `5 not in [1, 2, 3] vaut True : 5 est absent de cette liste courte.

Débutant :
• not in = négation de in.

Intermédiaire :
• Équivalent à not (5 in [1,2,3]).

Expert :
• L'optimiseur peut réécrire mais sémantique identique.

Concepts clés :
• Test d'absence lisible.

Distinctions clés :
• vs in.

Fonctionnement :
• in puis inversion logique du bool.

Exécution étape par étape :
1. 5 in [1,2,3] → False.
2. not False → True (via not in).

Ordre des opérations :
• not in opérateur unique.

Cas d'utilisation courants :
• if x not in seen.

Cas limites :
• même coût que in.

Considérations de performance :
• Préférer set pour répétitions.

Exemples :
• 'z' not in 'abc' → True

Remarques :
• Style Pythonique pour exclusions.`,
  684: `1 not in [1, 2, 3] vaut False : 1 est bien présent en tête de liste.

Débutant :
• not in faux dès la première occurrence trouvée.

Intermédiaire :
• Arrêt dès match sur in interne.

Expert :
• Doublons : présent si au moins une occurrence.

Concepts clés :
• Présence détectée.

Distinctions clés :
• vs 683.

Fonctionnement :
• in True → not in False.

Exécution étape par étape :
1. 1 in liste → True immédiatement.
2. not in → False.

Ordre des opérations :
• not in.

Cas d'utilisation courants :
• Vérifier qu'une valeur n'est PAS dans une whitelist (échoue ici).

Cas limites :
• Liste vide : x not in [] toujours True pour tout x.

Considérations de performance :
• meilleur cas O(1) si premier élément.

Exemples :
• 2 not in [2] → False

Remarques :
• Lire not in comme une seule unité.`,
  685: `'a' in 'abc' vaut True : sous-chaîne d'un seul caractère trouvée.

Débutant :
• in sur str cherche une sous-séquence contiguë.

Intermédiaire :
• Sensible à la casse : 'A' in 'abc' faux.

Expert :
• Complexité worst-case liée à l'algorithme de recherche (CPython optimisé).

Concepts clés :
• Sous-chaîne.

Distinctions clés :
• vs caractère par caractère manuel.

Fonctionnement :
• find-like interne.

Exécution étape par étape :
1. Cherche 'a' dans 'abc'.
2. Position 0 → True.

Ordre des opérations :
• une opération.

Cas d'utilisation courants :
• if '@' in email.

Cas limites :
• '' in toute chaîne → True.

Considérations de performance :
• Pour motifs complexes, regex.

Exemples :
• 'bc' in 'abc' → True

Remarques :
• Ne pas confondre avec list de caractères (conceptuel).`,
  686: `'x' in 'abc' vaut False : aucune occurrence de la sous-chaîne 'x'.

Débutant :
• Retour booléen sans erreur.

Intermédiaire :
• 'x' not in 'abc' serait True.

Expert :
• Normalisation Unicode peut surprendre pour caractères composés.

Concepts clés :
• Absence de motif.

Distinctions clés :
• vs 685.

Fonctionnement :
• Parcours ou Boyer-Moore-like selon impl.

Exécution étape par étape :
1. Recherche 'x'.
2. Échec → False.

Ordre des opérations :
• simple.

Cas d'utilisation courants :
• valider absence de caractère interdit.

Cas limites :
• chaîne vide : 'x' in '' False.

Considérations de performance :
• court-circuit possible.

Exemples :
• 'xyz' in 'abc' → False

Remarques :
• Pour pattern, utiliser regex ou startswith/endswith.`,
  687: `5 is 5 vaut True en pratique pour petits int : CPython met en cache certains entiers (singletons -5..256 typiquement).

Débutant :
• is teste l'identité (même objet), pas seulement la valeur.

Intermédiaire :
• Deux littéraux 5 peuvent partager la même adresse.

Expert :
• Ne pas coder en dépendant du cache ; pour les valeurs, utiliser ==.

Concepts clés :
• Identité sur int mis en cache.

Distinctions clés :
• vs 5 == 5 (valeur).

Fonctionnement :
• id(a) == id(b).

Exécution étape par étape :
1. Deux objets int 5 souvent identiques.
2. is → True.

Ordre des opérations :
• binaire is.

Cas d'utilisation courants :
• Surtout None, True, False avec is.

Cas limites :
• Grands int calculés différemment : is peut être False malgré == True.

Considérations de performance :
• is est très rapide.

Exemples :
• None is None → True

Remarques :
• Règle d'style : is pour singletons seulement.`,
  688: `Deux listes littérales [1, 2] et [1, 2] avec is donnent False : deux objets distincts même si le contenu est égal.

Débutant :
• is faux ≠ contenu différent ; ici contenu égal mais objets différents.

Intermédiaire :
• [1,2] == [1,2] serait True.

Expert :
• Seule une assignation partage l'identité : a=b; a is b True.

Concepts clés :
• Nouvelle liste à chaque littéral.

Distinctions clés :
• == valeur vs is identité.

Fonctionnement :
• Deux allocations séparées.

Exécution étape par étape :
1. Crée liste A.
2. Crée liste B.
3. A is B → False.

Ordre des opérations :
• is.

Cas d'utilisation courants :
• Détecter si deux références pointent sur le même objet.

Cas limites :
• objets internés rares pas concernés.

Considérations de performance :
• Deux constructions O(n) petit ici.

Exemples :
• a = [1]; a is a → True

Remarques :
• Toujours == pour comparer le contenu des listes.`,
  689: `5 is not 10 vaut True : deux entiers distincts, identités différentes.

Débutant :
• is not est la négation de is.

Intermédiaire :
• Même remarque de cache : ici 5 et 10 sont clairement distincts.

Expert :
• x is not None idiomatique.

Concepts clés :
• Objets différents.

Distinctions clés :
• vs 5 != 10 (valeur aussi vraie).

Fonctionnement :
• not (5 is 10).

Exécution étape par étape :
1. 5 is 10 → False.
2. is not → True.

Ordre des opérations :
• is not opérateur unique.

Cas d'utilisation courants :
• if ref is not sentinel.

Cas limites :
• confondre is not avec (is (not x)) — parenthèses.

Considérations de performance :
• rapide.

Exemples :
• [] is not [] → True

Remarques :
• Lire is not comme un seul opérateur.`,
  690: `None is None vaut True : None est un singleton ; toutes les références pointent sur le même objet.

Débutant :
• Une seule instance None en mémoire.

Intermédiaire :
• Toujours écrire is None, pas == None (style et robustesse avec __eq__).

Expert :
• NoneType non sous-classable.

Concepts clés :
• Singleton None.

Distinctions clés :
• vs x is None pour variable x aussi True si x vaut None.

Fonctionnement :
• Identité garantie par le langage.

Exécution étape par étape :
1. Deux références None.
2. Même id → True.

Ordre des opérations :
• is.

Cas d'utilisation courants :
• paramètres optionnels par défaut None.

Cas limites :
• pas de "plusieurs None" distincts.

Considérations de performance :
• comparaison d'identité minimale.

Exemples :
• a = None; b = None; a is b → True

Remarques :
• PEP 8 impose is / is not pour None.`,
};
