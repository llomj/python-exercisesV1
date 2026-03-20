/** Level 2 FR 601–620 — numeric ops, aligned with QUESTIONS_BANK */
export default {
  601: `10 + 5 * 2 vaut 20 : la multiplication * a une priorité plus forte que l'addition +, donc on calcule d'abord 5 * 2 puis on ajoute 10.

Débutant :
• Sans parenthèses, * et / passent avant + et -.
• Ici : 5 * 2 = 10, puis 10 + 10 = 20.

Intermédiaire :
• Les opérateurs de même niveau se lisent de gauche à droite (sauf **).
• Les parenthèses changent totalement l'ordre.

Expert :
• Voir la table de priorité officielle ; ** est le plus liant.

Concepts clés :
• Précédence, associativité, PEMDAS adapté à Python.

Distinctions clés :
• 10 + 5 * 2 ≠ (10 + 5) * 2.

Fonctionnement :
• L'arbre syntaxique place * plus bas que +.

Exécution étape par étape :
1. Évaluer 5 * 2 → 10.
2. Évaluer 10 + 10 → 20.

Ordre des opérations :
• * avant +.

Cas d'utilisation courants :
• Formules sans tout parenthéser.

Cas limites :
• Mélange float/int promeut vers float si besoin.

Considérations de performance :
• Négligeable pour scalaires.

Exemples :
• 2 + 3 * 4  # 14

Remarques :
• Parenthèses explicites évitent les erreurs de lecture.`,
  602: `(10 + 5) * 2 vaut 30 : les parenthèses forcent d'abord l'addition, puis la multiplication.

Débutant :
• Tout ce qui est entre parenthèses est évalué en premier.
• Ici 10 + 5 = 15, puis 15 * 2 = 30.

Intermédiaire :
• Parenthèses imbriquées : l'intérieur le plus profond d'abord.

Expert :
• Les tuples (a, b) utilisent aussi des parenthèses mais autre grammaire.

Concepts clés :
• Groupement explicite.

Distinctions clés :
• Avec vs sans parenthèses change radicalement le résultat.

Fonctionnement :
• Le parseur construit une sous-expression prioritaire.

Exécution étape par étape :
1. 10 + 5 → 15.
2. 15 * 2 → 30.

Ordre des opérations :
• Parenthèses puis *.

Cas d'utilisation courants :
• Moyennes, facteurs communs.

Cas limites :
• Trop de parenthèses nuisent à la lisibilité.

Considérations de performance :
• Négligeable.

Exemples :
• (1 + 2) * 3

Remarques :
• Style : n'ajoutez des parenthèses que si nécessaire ou pour clarté.`,
  603: `10 / 2 vaut 5.0 en Python 3 : l'opérateur / est la division « vraie » qui renvoie toujours un float, même si le quotient est entier.

Débutant :
• Le résultat a une partie décimale (souvent .0).

Intermédiaire :
• Ce n'est pas la division entière ; pour ça, utilisez //.

Expert :
• Python 2 mélangeait comportements ; Python 3 unifie avec float.

Concepts clés :
• Division vraie, float.

Distinctions clés :
• / vs //.

Fonctionnement :
• __truediv__ sur int/float.

Exécution étape par étape :
1. Convertir si besoin en float pour le chemin de calcul.
2. Produit 5.0.

Ordre des opérations :
• / a priorité classique multiplicative.

Cas d'utilisation courants :
• Moyennes, proportions exactes.

Cas limites :
• Division par zéro → ZeroDivisionError.

Considérations de performance :
• float plus coûteux que int mais marginal.

Exemples :
• 1 / 2  # 0.5

Remarques :
• math.floor(a/b) si besoin d'entier.`,
  604: `10 // 3 vaut 3 : la division entière (floor division) tronque vers moins l'infini.

Débutant :
• Pas de partie décimale dans le résultat int.

Intermédiaire :
• Pour les négatifs, // n'est pas la même chose que int(truncate) vers zéro.

Expert :
• // appelle __floordiv__.

Concepts clés :
• Floor division, int résultat typique.

Distinctions clés :
• 10 // 3 vs 10 / 3.

Fonctionnement :
• math.floor(a/b) pour des positifs simples.

Exécution étape par étape :
1. Quotient réel ≈ 3.33.
2. Plancher → 3.

Ordre des opérations :
• Même famille que * en priorité.

Cas d'utilisation courants :
• Indexation par blocs, pagination.

Cas limites :
• float // float donne float floor.

Considérations de performance :
• Rapide.

Exemples :
• 7 // 2  # 3

Remarques :
• divmod donne quotient et reste.`,
  605: `10 % 3 vaut 1 : le modulo renvoie le reste de la division euclidienne compatible avec //.

Débutant :
• 3 * 3 = 9, reste 1 pour arriver à 10.

Intermédiaire :
• Signe du résultat suit le diviseur en Python (convention définie).

Expert :
• pow(a, b, m) combine puissance et modulo efficacement.

Concepts clés :
• Reste, congruence.

Distinctions clés :
• % pour math ; pas pour formatage de str (autre opérateur legacy).

Fonctionnement :
• a - (a // b) * b.

Exécution étape par étape :
1. // puis multiplication puis soustraction.

Ordre des opérations :
• Même priorité que *.

Cas d'utilisation courants :
• Pair/impair, cycles, hash.

Cas limites :
• modulo 0 interdit.

Considérations de performance :
• O(1).

Exemples :
• 15 % 5  # 0

Remarques :
• Attention aux négatifs : tester sur cas réels.`,
  606: `2 ** 3 vaut 8 : ** est l'exponentiation (puissance).

Débutant :
• 2 multiplié par lui-même 3 fois.

Intermédiaire :
• ** lie plus fort que * et +.

Expert :
• Pour matrices, @ est distinct ; ** reste scalaire/objet surchargé.

Concepts clés :
• Puissance entière ou float.

Distinctions clés :
• ** vs pow() deux arguments.

Fonctionnement :
• __pow__.

Exécution étape par étape :
1. Base 2, exposant 3.
2. 8.

Ordre des opérations :
• ** très prioritaire.

Cas d'utilisation courants :
• Croissance, surfaces, bits.

Cas limites :
• 0**0 convention 1 en Python.

Considérations de performance :
• Exposants énormes explosent.

Exemples :
• 10 ** 2  # 100

Remarques :
• math.pow retourne toujours float.`,
  607: `2 ** 2 ** 3 vaut 256 : ** est associatif à droite, donc 2 ** (2 ** 3) = 2 ** 8.

Débutant :
• On calcule d'abord l'exposant du haut : 2**3 = 8.

Intermédiaire :
• Pas (2**2)**3 qui serait 64.

Expert :
• Seul ** est right-associative parmi les opérateurs binaires usuels.

Concepts clés :
• Associativité à droite.

Distinctions clés :
• Chaîne de ** vs chaîne de + (gauche-droite).

Fonctionnement :
• Parse tree groupe à droite.

Exécution étape par étape :
1. 2**3 → 8.
2. 2**8 → 256.

Ordre des opérations :
• ** d'abord à droite.

Cas d'utilisation courants :
• Tours imbriqués exponentiels rares ; surtout piège examen.

Cas limites :
• Overflow mental ; utiliser des parenthèses.

Considérations de performance :
• Croissance exponentielle.

Exemples :
• 3**2**2  # 81

Remarques :
• Parenthèses rendent l'intention évidente.`,
  608: `10 / 0 lève ZeroDivisionError : la division par zéro est interdite pour / et //.

Débutant :
• Aucun nombre réel standard ne convient.

Intermédiaire :
• Même 0.0 dénominateur interdit.

Expert :
• float('inf') n'est pas produit par /0 en Python pur.

Concepts clés :
• Erreur runtime arithmétique.

Distinctions clés :
• 0/10 OK vs 10/0.

Fonctionnement :
• Vérification dénominateur.

Exécution étape par étape :
1. Évaluation tente division.
2. Exception.

Ordre des opérations :
• N/A (échec).

Cas d'utilisation courants :
• Garde-fous avant division.

Cas limites :
• numpy peut donner inf selon contexte.

Considérations de performance :
• N/A.

Exemples :
• try/except ZeroDivisionError

Remarques :
• Testez dénominateur ou utilisez une epsilon.`,
  609: `0 / 10 vaut 0.0 : zéro numérateur donne zéro en float pour la division vraie.

Débutant :
• Résultat est float.

Intermédiaire :
• 0 // 10 vaut 0 int.

Expert :
• signes : 0.0 a signe 0.0 ambigu en IEEE rarement visible ici.

Concepts clés :
• Zéro en numérateur OK.

Distinctions clés :
• 0/10 vs 10/0.

Fonctionnement :
• Division standard.

Exécution étape par étape :
1. 0 divisé par 10.
2. 0.0.

Ordre des opérations :
• /.

Cas d'utilisation courants :
• Probabilités nulles.

Cas limites :
• N/A.

Considérations de performance :
• trivial.

Exemples :
• 0.0 / 5

Remarques :
• Comparer avec tolérance pour floats.`,
  610: `10 * 0 vaut 0 : multiplication par zéro annule.

Débutant :
• Résultat int 0 ici.

Intermédiaire :
• 10 * 0.0 → 0.0 float si un opérande float.

Expert :
• Anneau des nombres : élément absorbant.

Concepts clés :
• Zéro multiplicatif.

Distinctions clés :
• int vs float selon promotion.

Fonctionnement :
• __mul__.

Exécution étape par étape :
1. 10 * 0.
2. 0.

Ordre des opérations :
• * avec même priorité que /.

Cas d'utilisation courants :
• Réinitialiser accumulations.

Cas limites :
• 0 * inf nan en IEEE float.

Considérations de performance :
• O(1).

Exemples :
• 0 * 1_000_000

Remarques :
• Attention contexte float avancé.`,
  611: `abs(-5) vaut 5 : valeur absolue retire le signe.

Débutant :
• Distance à zéro sur la droite réelle.

Intermédiaire :
• abs fonctionne aussi sur complexes (module).

Expert :
• __abs__ surchargeable.

Concepts clés :
• Magnitude, signe.

Distinctions clés :
• abs vs copysign.

Fonctionnement :
• builtin abs.

Exécution étape par étape :
1. -5.
2. 5.

Ordre des opérations :
• appel fonction.

Cas d'utilisation courants :
• Différences, tolérances.

Cas limites :
• abs sur bool (sous-type int).

Considérations de performance :
• O(1).

Exemples :
• abs(3-10)

Remarques :
• math.fabs pour float strict.`,
  612: `abs(5) vaut 5 : déjà positif, inchangé.

Débutant :
• abs ne diminue jamais la valeur pour réels positifs.

Intermédiaire :
• idempotent sur R+.

Expert :
• |x| pour réels.

Concepts clés :
• Positif stable par abs.

Distinctions clés :
• abs(0) est 0.

Fonctionnement :
• test signe.

Exécution étape par étape :
1. 5 positif.
2. 5.

Ordre des opérations :
• abs.

Cas d'utilisation courants :
• normalisation entrée.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• abs(0)

Remarques :
• combinez avec min/max pour bornes.`,
  613: `round(3.49) vaut 3 : arrondi à l'entier le plus proche ; ici .49 est en dessous de .5.

Débutant :
• round sans second argument → int (ou long int) proche.

Intermédiaire :
• Les ties .5 suivent arrondi au pair (banquier).

Expert :
• Erreurs binaires des floats peuvent décaler le tie.

Concepts clés :
• Arrondi, float.

Distinctions clés :
• round vs int(truncate).

Fonctionnement :
• __round__.

Exécution étape par étape :
1. 3.49.
2. plus proche 3.

Ordre des opérations :
• appel round.

Cas d'utilisation courants :
• affichage entier.

Cas limites :
• round(2.675, 2) surprise classique.

Considérations de performance :
• O(1).

Exemples :
• round(-2.4)

Remarques :
• Decimal pour finance stricte.`,
  614: `round(3.51) vaut 4 : .51 dépasse la moitié, entier supérieur.

Débutant :
• Demi-distance à 3 et 4 : plus proche de 4.

Intermédiaire :
• round(x, n) pour n décimales.

Expert :
• ties pairs pour .5 exact.

Concepts clés :
• Arrondi supérieur ici.

Distinctions clés :
• floor vs ceil vs round.

Fonctionnement :
• algorithme round builtin.

Exécution étape par étape :
1. 3.51.
2. 4.

Ordre des opérations :
• round.

Cas d'utilisation courants :
• comptage humain.

Cas limites :
• float imprécis.

Considérations de performance :
• O(1).

Exemples :
• round(1.5)  # 2 pair

Remarques :
• math.floor/ceil si règle fixe.`,
  615: `round(3.5) vaut 4 en Python 3 : à tie exact .5, arrondi au pair le plus proche (3.5 → 4 car 4 pair).

Débutant :
• Diffère de « toujours vers le haut ».

Intermédiaire :
• round(4.5) → 4 (pair).

Expert :
• Stabilité statistique sur séries.

Concepts clés :
• Round half to even.

Distinctions clés :
• Python vs Excel parfois.

Fonctionnement :
• spec IEEE-like pour ties.

Exécution étape par étape :
1. 3.5 tie.
2. choisit 4.

Ordre des opérations :
• round.

Cas d'utilisation courants :
• agrégats neutres biais.

Cas limites :
• floats non représentables.

Considérations de performance :
• O(1).

Exemples :
• round(2.5)

Remarques :
• documentez règle métier si différente.`,
  616: `min(5, 10, 2) vaut 2 : minimum parmi plusieurs arguments positionnels.

Débutant :
• compare tous et garde le plus petit.

Intermédiaire :
• min(iterable) autre forme.

Expert :
• key= pour critère custom.

Concepts clés :
• Minimum, comparaison.

Distinctions clés :
• min vs sorted()[0].

Fonctionnement :
• parcourt arguments.

Exécution étape par étape :
1. Compare 5,10,2.
2. 2 gagne.

Ordre des opérations :
• appel fonction.

Cas d'utilisation courants :
• bornes, jeux.

Cas limites :
• types non ordonnables TypeError.

Considérations de performance :
• O(n) arguments.

Exemples :
• min([7,1,9])

Remarques :
• default= pour iterable vide (3.4+).`,
  617: `max(5, 10, 2) vaut 10 : symétrique de min.

Débutant :
• plus grande valeur.

Intermédiaire :
• key= pour tuples etc.

Expert :
• heapq.nlargest pour k meilleurs efficacement.

Concepts clés :
• Maximum.

Distinctions clés :
• max vs tri complet.

Fonctionnement :
• compare et retient.

Exécution étape par étape :
1. Parcourt 5,10,2.
2. 10.

Ordre des opérations :
• appel.

Cas d'utilisation courants :
• normalisation, scores.

Cas limites :
• vide sans default erreur.

Considérations de performance :
• O(n).

Exemples :
• max("banana")  # lettre max ordre lexico

Remarques :
• prudence types mixtes.`,
  618: `pow(3, 2) vaut 9 : puissance, équivalent à 3**2.

Débutant :
• trois au carré.

Intermédiaire :
• pow peut prendre trois arguments pour modulo.

Expert :
• trois arguments utilisent algo exponentiation modulaire rapide.

Concepts clés :
• Exponentiation builtin.

Distinctions clés :
• pow vs ** vs math.pow.

Fonctionnement :
• __pow__ ou chemin optimisé.

Exécution étape par étape :
1. Base 3 exp 2.
2. 9.

Ordre des opérations :
• appel fonction.

Cas d'utilisation courants :
• crypto, grands entiers.

Cas limites :
• overflow rare en int Python (arbitraire).

Considérations de performance :
• mod trois args efficace.

Exemples :
• pow(2,10)

Remarques :
• ** souvent plus lisible pour deux args.`,
  619: `pow(2, 3, 5) vaut 3 : calcule 2**3 mod 5 soit 8 mod 5 = 3 sans grossir intermédiaire autant.

Débutant :
• troisième argument = modulo.

Intermédiaire :
• utile cryptographie.

Expert :
• complexité logarithmique en exposant.

Concepts clés :
• Exponentiation modulaire.

Distinctions clés :
• (2**3)%5 équivalent mais moins efficace pour grands nombres.

Fonctionnement :
• réductions répétées.

Exécution étape par étape :
1. 2**3 = 8.
2. 8 % 5 = 3.

Ordre des opérations :
• fonction ternaire intégrée.

Cas d'utilisation courants :
• RSA pédagogique, PRNG.

Cas limites :
• m=0 ou négatif : erreur.

Considérations de performance :
• bien meilleur que pow puis % pour géants.

Exemples :
• pow(10, 9, 7)

Remarques :
• toujours m premier si >1.`,
  620: `sum([1, 2, 3]) vaut 6 : additionne tous les éléments de l'itérable.

Débutant :
• départ 0 par défaut.

Intermédiaire :
• sum([]) vaut 0.

Expert :
• start permet autre neutre (attention types).

Concepts clés :
• Réduction somme.

Distinctions clés :
• sum vs boucle manuelle.

Fonctionnement :
• accumulate.

Exécution étape par étape :
1. Itère 1,2,3.
2. total 6.

Ordre des opérations :
• appel sum.

Cas d'utilisation courants :
• totaux, scores.

Cas limites :
• str dans liste TypeError sans start compatible.

Considérations de performance :
• O(n).

Exemples :
• sum(range(5))

Remarques :
• math.fsum pour précision float.`,
};
