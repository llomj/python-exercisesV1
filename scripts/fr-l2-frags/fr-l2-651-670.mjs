/** Level 2 FR 651–670 — chaînes, concaténation, répétition, premières comparaisons */
export default {
  651: `La question porte sur (est-ce que) '1' + '1' égal à '2' : la réponse est non, car avec deux chaînes le + concatène : on obtient '11', pas l'addition arithmétique 1+1.

Débutant :
• Deux opérandes str → + = collage de texte.

Intermédiaire :
• Pour obtenir 2 : int('1') + int('1').

Expert :
• Mélanger str et int sans conversion → TypeError sur +.

Concepts clés :
• Surcharge de + selon le type (str vs nombres).

Distinctions clés :
• '1'+'1' vs 1+1.

Fonctionnement :
• Python appelle la concaténation sur str.

Exécution étape par étape :
1. Lit les littéraux '1' et '1'.
2. Applique + sur str → '11'.
3. Compare à '2' → faux.

Ordre des opérations :
• Pas d'arbre d'expressions ici : une seule concaténation.

Cas d'utilisation courants :
• Construire du texte depuis des morceaux.

Cas limites :
• Chaînes vides : '' + '1' → '1'.

Considérations de performance :
• Concaténations répétées : préférer join ou list.

Exemples :
• 'ab' + 'cd' → 'abcd'

Remarques :
• Toujours typer explicitement les entrées utilisateur.`,
  652: `int('1') + int('1') vaut 2 : chaque appel int() produit un entier, puis + est l'addition numérique.

Débutant :
• int sur chiffres décimaux en texte → int.

Intermédiaire :
• Les appels int() s'évaluent avant la somme.

Expert :
• int('ff', 16) montre que le 2e paramètre change la base de lecture.

Concepts clés :
• Conversion puis arithmétique.

Distinctions clés :
• vs '1'+'1' → '11'.

Fonctionnement :
• int('1') → 1, idem, puis 1+1.

Exécution étape par étape :
1. Premier int('1') → 1.
2. Second int('1') → 1.
3. 1 + 1 → 2.

Ordre des opérations :
• Arguments du + évalués de gauche à droite.

Cas d'utilisation courants :
• Sommer deux champs saisis en str.

Cas limites :
• int('') → ValueError.

Considérations de performance :
• Négligeable pour deux conversions.

Exemples :
• int('10') + int('20') → 30

Remarques :
• strip() utile si espaces parasites.`,
  653: `'5' * 2 vaut '55' : la multiplication str × int répète la chaîne, ce n'est pas 5×2=10.

Débutant :
• str * int ≥ 0 → répétition.

Intermédiaire :
• Équivalent à '5' + '5'.

Expert :
• int * str est aussi valide par symétrie.

Concepts clés :
• Répétition de chaîne.

Distinctions clés :
• vs 5 * 2 → 10.

Fonctionnement :
• L'entier indique le nombre de copies concaténées.

Exécution étape par étape :
1. Opérandes '5' et 2.
2. Répétition deux fois → '55'.

Ordre des opérations :
• Une seule opération binaire.

Cas d'utilisation courants :
• Bordures, padding d'espaces.

Cas limites :
• * 0 → ''.

Considérations de performance :
• Très grandes répétitions → mémoire.

Exemples :
• '-' * 3 → '---'

Remarques :
• float comme multiplicateur → TypeError.`,
  654: `5 * 2 vaut 10 : les deux opérandes sont numériques, donc * est la multiplication entière.

Débutant :
• int * int → int (ici).

Intermédiaire :
• Si un float intervient, le résultat devient souvent float.

Expert :
• Pas de débordement fixe en Python 3 int.

Concepts clés :
• Multiplication arithmétique.

Distinctions clés :
• vs '5' * 2 → chaîne.

Fonctionnement :
• Produit mathématique 5×2.

Exécution étape par étape :
1. 5 et 2 évalués.
2. * → 10.

Ordre des opérations :
• * avant + dans les expressions mixtes (hors ce cas).

Cas d'utilisation courants :
• Aires, totaux, compteurs.

Cas limites :
• Très grands int restent exacts.

Considérations de performance :
• Opération primitive rapide.

Exemples :
• 3 * 4 → 12

Remarques :
• Pour du texte répété, utiliser str * n.`,
  655: `Les chaînes hello et world avec + donnent helloworld : concaténation sans espace automatique.

Débutant :
• + entre str joint bout à bout.

Intermédiaire :
• Ajouter un espace : 'hello ' + 'world' ou + ' ' +.

Expert :
• f-strings ou format pour lisibilité sur morceaux nombreux.

Concepts clés :
• Concaténation littérale.

Distinctions clés :
• vs join avec séparateur.

Fonctionnement :
• Nouvelle chaîne allouée avec les deux morceaux.

Exécution étape par étape :
1. 'hello'.
2. 'world'.
3. Résultat 'helloworld'.

Ordre des opérations :
• Gauche à droite si plusieurs +.

Cas d'utilisation courants :
• Prénom + nom, URL + chemin.

Cas limites :
• Très longues chaînes → coût mémoire cumulé.

Considérations de performance :
• join sur liste souvent mieux en boucle.

Exemples :
• 'a' + 'b' + 'c' → 'abc'

Remarques :
• Ne pas confondre avec addition numérique.`,
  656: `Les chaînes cinq et trois en texte avec + donnent 53 en collant les caractères, pas la somme 8 : même piège que pour un plus un en str.

Débutant :
• Lecture digit par digit comme texte.

Intermédiaire :
• int('5')+int('3') → 8.

Expert :
• zfill et formats pour aligner sans concat piégeuse.

Concepts clés :
• Typage des littéraux.

Distinctions clés :
• '53' str vs 53 int.

Fonctionnement :
• Collage '5' puis '3'.

Exécution étape par étape :
1. Deux str.
2. + → '53'.

Ordre des opérations :
• Une seule concaténation.

Cas d'utilisation courants :
• Codes concaténés (attention au sens métier).

Cas limites :
• '' + '5' → '5'.

Considérations de performance :
• Identique à toute concaténation courte.

Exemples :
• '0' + '7' → '07' (texte)

Remarques :
• Valider isdigit() avant int() si besoin.`,
  657: `int('5') + int('3') vaut 8 : conversions explicites puis addition.

Débutant :
• Même idée que int('1')+int('1').

Intermédiaire :
• Ordre d'évaluation des deux int() garanti avant +.

Expert :
• Erreurs de base : int('5', 16) changerait la sémantique.

Concepts clés :
• Pipeline texte → nombre → opération.

Distinctions clés :
• vs '5'+'3'.

Fonctionnement :
• 5 + 3.

Exécution étape par étape :
1. int('5') → 5.
2. int('3') → 3.
3. Somme → 8.

Ordre des opérations :
• Appels de fonction puis binaire +.

Cas d'utilisation courants :
• Addition de deux champs formulaire.

Cas limites :
• Espaces : int(' 5 ') OK en Python 3.

Considérations de performance :
• Deux parses courts.

Exemples :
• int('12') + int('30') → 42

Remarques :
• float() si décimales.`,
  658: `La chaîne abc répétée zéro fois produit une chaîne vide : zéro répétition.

Débutant :
• n=0 est le cas limite utile.

Intermédiaire :
• Cohérent avec la vision "n copies concaténées".

Expert :
• '' * n → '' pour tout n ≥ 0.

Concepts clés :
• Répétition dégénérée.

Distinctions clés :
• vs liste vide ou None.

Fonctionnement :
• Aucun caractère copié.

Exécution étape par étape :
1. 'abc' et 0.
2. Résultat ''.

Ordre des opérations :
• binaire * une fois.

Cas d'utilisation courants :
• Réinitialiser un accumulateur str.

Cas limites :
• n négatif → ValueError.

Considérations de performance :
• Instantané.

Exemples :
• 'x' * 0 → ''

Remarques :
• * -1 interdit pour str.`,
  659: `La séquence abc en str fois 1 redonne abc : une seule répétition, même contenu.

Débutant :
• Identité logique du facteur 1.

Intermédiaire :
• Nouvel objet str peut être créé selon l'implémentation ; contenu identique.

Expert :
• Ne pas confondre avec copie profonde d'objets mutables.

Concepts clés :
• Élément neutre de la répétition.

Distinctions clés :
• vs * 2.

Fonctionnement :
• Une concaténation de un seul morceau.

Exécution étape par étape :
1. 'abc', 1.
2. 'abc'.

Ordre des opérations :
• Direct.

Cas d'utilisation courants :
• Branches qui normalisent un facteur.

Cas limites :
• '' * 1 → ''.

Considérations de performance :
• Minimal.

Exemples :
• 'z' * 1 → 'z'

Remarques :
• Peu usité sauf pour symétrie d'API.`,
  660: `La chaîne abc répétée trois fois donne abcabcabc : trois copies collées.

Débutant :
• Répétition visible sur un mot court.

Intermédiaire :
• Équivalent à trois concaténations successives.

Expert :
• Sur très grand multiplicateur, attention mémoire O(len×n).

Concepts clés :
• Répétition str × int > 1.

Distinctions clés :
• vs 3 * 'abc' (identique en résultat).

Fonctionnement :
• Boucle interne de copie.

Exécution étape par étape :
1. Multiplicateur 3.
2. Produit 'abcabcabc'.

Ordre des opérations :
• Une opération.

Cas d'utilisation courants :
• Motifs, tests, bordures ASCII.

Cas limites :
• n=0 déjà vu.

Considérations de performance :
• Pré-allocation efficace en CPython.

Exemples :
• '[]' * 2 → '[][]'

Remarques :
• join préférable pour listes de morceaux variables.`,
  661: `10 > 5 a pour résultat True : comparaison numérique stricte "strictement supérieur".

Débutant :
• Résultat type bool.

Intermédiaire :
• 10 et 5 sont int comparables directement.

Expert :
• Mix int/float OK ; mix nombre et str → TypeError en Python 3.

Concepts clés :
• Opérateur > sur nombres.

Distinctions clés :
• vs >= (égalité incluse).

Fonctionnement :
• Appel __gt__ ou équivalent.

Exécution étape par étape :
1. 10, 5.
2. Comparaison → True.

Ordre des opérations :
• Une comparaison.

Cas d'utilisation courants :
• if seuil, tri, validations.

Cas limites :
• NaN float : comparaisons toujours False sauf != True.

Considérations de performance :
• Primitives rapides.

Exemples :
• 3 > 3 → False

Remarques :
• Sur str, ordre lexicographique.`,
  662: `5 < 10 vaut True : le membre de gauche est plus petit.

Débutant :
• < signifie "strictement inférieur".

Intermédiaire :
• Chaînes comparées caractère par caractère (ordre Unicode).

Expert :
• Types non ordonnés ensemble → TypeError.

Concepts clés :
• Comparaison ordonnée.

Distinctions clés :
• vs <=.

Fonctionnement :
• Vérifie ordre strict.

Exécution étape par étape :
1. 5, 10.
2. True.

Ordre des opérations :
• binaire une fois.

Cas d'utilisation courants :
• Plages ouvertes (bornes).

Cas limites :
• Égalité : 5 < 5 → False.

Considérations de performance :
• O(1) pour int.

Exemples :
• -1 < 0 → True

Remarques :
• Enchaîner : a < b < c.`,
  663: `10 >= 10 vaut True : "supérieur ou égal" est vrai si égalité.

Débutant :
• >= combine > ou ==.

Intermédiaire :
• utile pour bornes inclusives max.

Expert :
• Sur float, attention aux arrondis si égalité exacte requise.

Concepts clés :
• Comparaison inclusive.

Distinctions clés :
• vs > seul.

Fonctionnement :
• Test (a > b) or (a == b) équivalent logique.

Exécution étape par étape :
1. 10, 10.
2. True.

Ordre des opérations :
• Une comparaison.

Cas d'utilisation courants :
• age >= 18.

Cas limites :
• NaN : toujours faux pour comparaisons reflexives sauf !=.

Considérations de performance :
• Négligeable.

Exemples :
• 0 >= 0 → True

Remarques :
• Lisible pour seuils inclusifs.`,
  664: `5 <= 10 vaut True : la borne supérieure est atteinte côté droit seulement ici (5 plus petit que 10).

Débutant :
• <= = inférieur ou égal.

Intermédiaire :
• Symétrie conceptuelle avec >=.

Expert :
• Enchaînements 0 < x <= 100 idiomatiques.

Concepts clés :
• Borne haute inclusive possible.

Distinctions clés :
• vs <.

Fonctionnement :
• (5 < 10) or (5 == 10) → ici seulement le premier vrai.

Exécution étape par étape :
1. 5, 10.
2. True.

Ordre des opérations :
• Une comparaison.

Cas d'utilisation courants :
• if x <= limite.

Cas limites :
• 10 <= 5 → False.

Considérations de performance :
• O(1).

Exemples :
• 7 <= 7 → True

Remarques :
• Préférer <= pour intervalles fermés à droite.`,
  665: `10 == 10 vaut True : égalité de valeur avec ==.

Débutant :
• == ne regarde pas l'identité d'objet.

Intermédiaire :
• 10 == 10.0 → True (valeurs égales).

Expert :
• __eq__ peut être surchargé sur classes perso.

Concepts clés :
• Égalité structurelle.

Distinctions clés :
• vs is (identité).

Fonctionnement :
• Comparaison par valeur.

Exécution étape par étape :
1. Deux 10.
2. True.

Ordre des opérations :
• binaire.

Cas d'utilisation courants :
• Tests unitaires, conditions.

Cas limites :
• float arrondi : 0.1+0.2 == 0.3 souvent False.

Considérations de performance :
• Rapide pour int.

Exemples :
• 'a' == 'a' → True

Remarques :
• is None recommandé pour None.`,
  666: `10 != 5 vaut True : inégalité vraie quand les valeurs diffèrent.

Débutant :
• != est la négation logique de == pour le résultat booléen.

Intermédiaire :
• Équivalent à not (10 == 5) ici.

Expert :
• Sur NaN, != peut être True même si == False des deux côtés.

Concepts clés :
• Test de différence.

Distinctions clés :
• vs is not.

Fonctionnement :
• Renvoie True si valeurs non égales.

Exécution étape par étape :
1. 10, 5.
2. True.

Ordre des opérations :
• une comparaison.

Cas d'utilisation courants :
• if x != 0.

Cas limites :
• 10 != 10 → False.

Considérations de performance :
• identique à ==.

Exemples :
• 'x' != 'y' → True

Remarques :
• Pour None, x is not None est idiomatique.`,
  667: `10 == 5 vaut False : deux entiers distincts.

Débutant :
• == exige même valeur.

Intermédiaire :
• Pas d'erreur : simple booléen.

Expert :
• Fractions ou Decimal pour égalité rationnelle exacte ailleurs.

Concepts clés :
• Faux positifs impossibles ici.

Distinctions clés :
• vs 10 == 10.

Fonctionnement :
• __eq__ retourne False.

Exécution étape par étape :
1. 10, 5.
2. False.

Ordre des opérations :
• direct.

Cas d'utilisation courants :
• Garde-fous dans if.

Cas limites :
• None : None == None True mais cas différent.

Considérations de performance :
• O(1).

Exemples :
• 0 == 1 → False

Remarques :
• Utiliser approx pour floats.`,
  668: `5 > 10 vaut False : 5 n'est pas au-dessus de 10.

Débutant :
• > strict.

Intermédiaire :
• Symétrie logique avec 10 < 5.

Expert :
• Sur listes, > n'est pas défini en Python 3 (TypeError).

Concepts clés :
• Comparaison fausse.

Distinctions clés :
• vs 10 > 5 True.

Fonctionnement :
• retour booléen False.

Exécution étape par étape :
1. 5, 10.
2. False.

Ordre des opérations :
• une comparaison.

Cas d'utilisation courants :
• rejeter valeurs trop petites.

Cas limites :
• Égalité : 5 > 5 False.

Considérations de performance :
• minime.

Exemples :
• 1 > 2 → False

Remarques :
• Lire toujours de gauche à droite.`,
  669: `10 < 5 vaut False : 10 n'est pas strictement inférieur à 5.

Débutant :
• Sens de la comparaison.

Intermédiaire :
• Inverse de 5 < 10.

Expert :
• Chaînes : ordre lexico, pas longueur d'abord sauf préfixes.

Concepts clés :
• Faux sur nombres ordonnés.

Distinctions clés :
• vs 5 < 10.

Fonctionnement :
• __lt__ retourne False.

Exécution étape par étape :
1. 10, 5.
2. False.

Ordre des opérations :
• simple.

Cas d'utilisation courants :
• validation min < val.

Cas limites :
• 10 < 10 False.

Considérations de performance :
• O(1) int.

Exemples :
• 2 < 1 → False

Remarques :
• Dessiner la droite numérique aide.`,
  670: `5 >= 10 vaut False : 5 n'est ni plus grand ni égal à 10.

Débutant :
• Les deux parties du >= doivent échouer pour donner False ici.

Intermédiaire :
• Équivalent à not (5 < 10)? Non : 5<10 est True donc >= faux, cohérent.

Expert :
• Chaînages : 5 >= 10 >= 3 → (5>=10) and (10>=3) → False.

Concepts clés :
• Test de borne haute côté gauche.

Distinctions clés :
• vs 10 >= 5 True.

Fonctionnement :
• (5>10) or (5==10) → False.

Exécution étape par étape :
1. 5, 10.
2. False.

Ordre des opérations :
• une comparaison.

Cas d'utilisation courants :
• if score >= seuil échoue ici.

Cas limites :
• floats voisins.

Considérations de performance :
• négligeable.

Exemples :
• 3 >= 4 → False

Remarques :
• Pour intervalle, combiner >= et <=.`,
};
