/** Level 2 FR 621–640 */
export default {
  621: `divmod(10, 3) vaut (3, 1) : couple (quotient //, reste %) cohérent.

Débutant :
• Un seul appel pour les deux valeurs.

Intermédiaire :
• divmod(a,b) équivalent à (a // b, a % b) pour int positifs usuels.

Expert :
• peut être plus efficace qu'un double calcul interne.

Concepts clés :
• Quotient-reste simultané.

Distinctions clés :
• divmod vs séparer // et %.

Fonctionnement :
• implémentation unifiée.

Exécution étape par étape :
1. 10 // 3 → 3.
2. 10 % 3 → 1.
3. tuple (3,1).

Ordre des opérations :
• appel unique.

Cas d'utilisation courants :
• conversions base, horloges.

Cas limites :
• b=0 ZeroDivisionError.

Considérations de performance :
• un passage.

Exemples :
• divmod(7,2)

Remarques :
• déballage q,r = divmod(...).`,
  622: `sorted([3, 1, 2]) vaut [1, 2, 3] : nouvelle liste triée, l'original inchangé.

Débutant :
• ordre croissant par défaut.

Intermédiaire :
• ne mute pas la liste passée.

Expert :
• TimSort stable O(n log n).

Concepts clés :
• sorted vs .sort.

Distinctions clés :
• retour nouvelle liste.

Fonctionnement :
• copie puis tri.

Exécution étape par étape :
1. Matérialise éléments.
2. Trie.
3. Retourne liste.

Ordre des opérations :
• appel sorted.

Cas d'utilisation courants :
• affichage ordonné sans effet de bord.

Cas limites :
• éléments non comparables TypeError.

Considérations de performance :
• mémoire O(n) copie.

Exemples :
• sorted("cba")

Remarques :
• key= pour critère.`,
  623: `sorted([3, 1, 2], reverse=True) vaut [3, 2, 1] : ordre décroissant.

Débutant :
• reverse=True inverse le sens du tri.

Intermédiaire :
• stable : égalités gardent ordre relatif.

Expert :
• pas équivalent à sorted puis [::-1] si key complexe.

Concepts clés :
• Tri décroissant.

Distinctions clés :
• reverse param vs slice inverse.

Fonctionnement :
• même algorithme, comparaison inversée.

Exécution étape par étape :
1. Trie avec flag reverse.
2. [3,2,1].

Ordre des opérations :
• sorted kwargs.

Cas d'utilisation courants :
• classements DESC.

Cas limites :
• types hétérogènes.

Considérations de performance :
• O(n log n).

Exemples :
• sorted([1,2,3], reverse=True)

Remarques :
• pour clé inverse, key=lambda x: -x attention types.`,
  624: `5 ** 0 vaut 1 : toute base non nulle à la puissance 0 donne 1.

Débutant :
• convention mathématique usuelle.

Intermédiaire :
• 0**0 est 1 en Python (convention).

Expert :
• définition algébrique anneau.

Concepts clés :
• Exposant zéro.

Distinctions clés :
• 5**0 vs 0**5.

Fonctionnement :
• règle puissance.

Exécution étape par étape :
1. 5**0.
2. 1.

Ordre des opérations :
• **.

Cas d'utilisation courants :
• formules fermées.

Cas limites :
• 0**0 débat math mais Python fixe.

Considérations de performance :
• O(1).

Exemples :
• 100**0

Remarques :
• expliquez 0**0 aux débutants.`,
  625: `0 ** 5 vaut 0 : zéro multiplié répété reste zéro.

Débutant :
• zéro à toute puissance positive nulle.

Intermédiaire :
• 0**0 cas spécial =1.

Expert :
• limite analytique différente en analyse.

Concepts clés :
• Zéro puissance positive.

Distinctions clés :
• 0**5 vs 5**0.

Fonctionnement :
• multiplication répétée dégénérée.

Exécution étape par étape :
1. 0**5.
2. 0.

Ordre des opérations :
• **.

Cas d'utilisation courants :
• annulation polynômes.

Cas limites :
• exposant négatif sur 0 erreur.

Considérations de performance :
• O(1).

Exemples :
• 0**1

Remarques :
• pas de 1/0 ici.`,
  626: `1 ** 100 vaut 1 : un reste identité pour l'exponentiation.

Débutant :
• multiplier 1 par lui-même toujours 1.

Intermédiaire :
• utile en simplifications symboliques.

Expert :
• en modulo, voir ordre multiplicatif.

Concepts clés :
• Identité multiplicative.

Distinctions clés :
• 1**n vs n**1.

Fonctionnement :
• **.

Exécution étape par étape :
1. 1**100.
2. 1.

Ordre des opérations :
• **.

Cas d'utilisation courants :
• bases triviales.

Cas limites :
• N/A.

Considérations de performance :
• optimisé.

Exemples :
• (-1)**2 vs (-1)**3

Remarques :
• signes avec base -1.`,
  627: `5 ** 1 vaut 5 : exposant un est neutre.

Débutant :
• puissance 1 ne change pas la base.

Intermédiaire :
• identité droite de **.

Expert :
• en algèbre logarithmes.

Concepts clés :
• Exposant 1.

Distinctions clés :
• vs *1 identique valeur souvent.

Fonctionnement :
• **.

Exécution étape par étape :
1. 5**1.
2. 5.

Ordre des opérations :
• **.

Cas d'utilisation courants :
• formules générales n=1.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• x**1 pour x variable

Remarques :
• simplifiez en review.`,
  628: `5 % 5 vaut 0 : reste de division par soi-même.

Débutant :
• multiple exact.

Intermédiaire :
• a % a toujours 0 pour a non nul.

Expert :
• congruence mod a.

Concepts clés :
• Reste nul.

Distinctions clés :
• % vs /.

Fonctionnement :
• 5 - (5//5)*5.

Exécution étape par étape :
1. quotient 1 reste 0.

Ordre des opérations :
• %.

Cas d'utilisation courants :
• test divisibilité.

Cas limites :
• a=0 interdit.

Considérations de performance :
• O(1).

Exemples :
• n % n

Remarques :
• n % 1 toujours 0.`,
  629: `5 % 3 vaut 2 : reste classique.

Débutant :
• 3*1=3, il manque 2 pour 5.

Intermédiaire :
• lié à divmod(5,3).

Expert :
• signes avec négatifs : suivre doc Python.

Concepts clés :
• Modulo positif ici.

Distinctions clés :
• math.fmod float différent signe.

Fonctionnement :
• définition Python %.

Exécution étape par étape :
1. 5 mod 3.
2. 2.

Ordre des opérations :
• %.

Cas d'utilisation courants :
• alternance, ruban.

Cas limites :
• b=0.

Considérations de performance :
• O(1).

Exemples :
• 9 % 4

Remarques :
• tests unitaires sur négatifs.`,
  630: `3 % 5 vaut 3 : si dividende < diviseur positif, reste = dividende.

Débutant :
• pas assez pour un pack complet de 5.

Intermédiaire :
• propriété 0 <= r < |b| pour b>0.

Expert :
• cohérent avec horloge.

Concepts clés :
• Petit dividende.

Distinctions clés :
• 3%5 vs 5%3.

Fonctionnement :
• quotient 0.

Exécution étape par étape :
1. 0*5 + 3.
2. reste 3.

Ordre des opérations :
• %.

Cas d'utilisation courants :
• wrap indices.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• 1 % 100

Remarques :
• indexation modulo n.`,
  631: `2 * 3 + 4 vaut 10 : * avant +, donc 6 + 4.

Débutant :
• multiplication d'abord.

Intermédiaire :
• ajoutez parenthèses si vous voulez (2*(3+4)).

Expert :
• mélange types promeut.

Concepts clés :
• Précédence * +.

Distinctions clés :
• vs 2 * (3+4)=14.

Fonctionnement :
• parse tree.

Exécution étape par étape :
1. 2*3=6.
2. 6+4=10.

Ordre des opérations :
• * puis +.

Cas d'utilisation courants :
• polynômes légers.

Cas limites :
• floats.

Considérations de performance :
• trivial.

Exemples :
• 1 + 2 * 3

Remarques :
• PEP 8 espaces autour opérateurs.`,
  632: `2 + 3 * 4 vaut 14 : 3*4 d'abord puis +2.

Débutant :
• même règle : * gagne.

Intermédiaire :
• erreur classique : penser (2+3)*4.

Expert :
• notations scientifiques.

Concepts clés :
• Ordre multiplicatif.

Distinctions clés :
• 632 vs 631 valeurs différentes.

Fonctionnement :
• évaluation standard.

Exécution étape par étape :
1. 3*4=12.
2. 2+12=14.

Ordre des opérations :
• * puis +.

Cas d'utilisation courants :
• aire + marge.

Cas limites :
• N/A.

Considérations de performance :
• trivial.

Exemples :
• 10 + 20 / 5  # 14.0

Remarques :
• / et * même palier gauche-droite.`,
  633: `(2 + 3) * 4 vaut 20 : parenthèses changent l'ordre.

Débutant :
• 2+3=5 puis *4.

Intermédiaire :
• pattern facteur commun explicite.

Expert :
• distributivité lecture.

Concepts clés :
• Groupement.

Distinctions clés :
• vs 2+3*4.

Fonctionnement :
• sous-arbre prioritaire.

Exécution étape par étape :
1. 2+3=5.
2. 5*4=20.

Ordre des opérations :
• parenthèses puis *.

Cas d'utilisation courants :
• tarifs packagés.

Cas limites :
• N/A.

Considérations de performance :
• trivial.

Exemples :
• (a+b)*c patterns

Remarques :
• lisibilité > économie parenthèses.`,
  634: `2 ** 3 + 4 vaut 12 : ** très prioritaire : 8 + 4.

Débutant :
• puissance avant addition.

Intermédiaire :
• 2**(3+4) serait différent.

Expert :
• chaîne ** droite associative seulement entre **.

Concepts clés :
• ** vs +.

Distinctions clés :
• 2**3+4 vs 2+3**4.

Fonctionnement :
• évalue ** d'abord.

Exécution étape par étape :
1. 2**3=8.
2. 8+4=12.

Ordre des opérations :
• ** puis +.

Cas d'utilisation courants :
• croissance + offset.

Cas limites :
• grands **.

Considérations de performance :
• ** peut coûter.

Exemples :
• 10 + 2**8

Remarques :
• parenthèses si doute.`,
  635: `2 + 3 ** 4 vaut 83 : 3**4=81 puis +2.

Débutant :
• la base de la puissance est 3 ici, pas 2+3.

Intermédiaire :
• erreur : (2+3)**4.

Expert :
• notation algèbre.

Concepts clés :
• ** avant +.

Distinctions clés :
• 635 vs 636.

Fonctionnement :
• parse.

Exécution étape par étape :
1. 3**4=81.
2. 2+81=83.

Ordre des opérations :
• ** puis +.

Cas d'utilisation courants :
• séries géométriques décalées.

Cas limites :
• overflow mental.

Considérations de performance :
• ** domine coût.

Exemples :
• 1 + 2**10

Remarques :
• comparez avec (2+3)**4=625.`,
  636: `(2 + 3) ** 4 vaut 625 : base 5 puissance 4.

Débutant :
• parenthèses forcent somme avant puissance.

Intermédiaire :
• croissance rapide.

Expert :
• binôme lié combinatoire.

Concepts clés :
• (a+b)**n.

Distinctions clés :
• vs 2+3**4.

Fonctionnement :
• 5**4.

Exécution étape par étape :
1. 2+3=5.
2. 5**4=625.

Ordre des opérations :
• parenthèses puis **.

Cas d'utilisation courants :
• volume hypercube côté somme.

Cas limites :
• overflow int rare Python.

Considérations de performance :
• exponentiel en n.

Exemples :
• (1+1)**10

Remarques :
• attention coût n grand.`,
  637: `10 / 2 * 4 vaut 20.0 : / et * même priorité, associativité gauche-droite : (10/2)*4.

Débutant :
• de gauche à droite après égalité de priorité.

Intermédiaire :
• pas de multiplication mystérieuse avant division.

Expert :
• PEMDAS simplifié trompe ici ; lire tableau officiel.

Concepts clés :
• Gauche à droite pour * /.

Distinctions clés :
• vs 10 / (2*4).

Fonctionnement :
• 10/2 puis *4.

Exécution étape par étape :
1. 10/2=5.0.
2. 5.0*4=20.0.

Ordre des opérations :
• / puis *.

Cas d'utilisation courants :
• conversions chaînées.

Cas limites :
• floats.

Considérations de performance :
• trivial.

Exemples :
• 12 / 3 * 2

Remarques :
• parenthèses si lecture ambiguë.`,
  638: `10 * 2 / 4 vaut 5.0 : gauche à droite (10*2)/4.

Débutant :
• * puis / au même niveau.

Intermédiaire :
• 20.0 / 4.

Expert :
• commutativité multiplication ne sauve pas mélange /.

Concepts clés :
• Ordre * /.

Distinctions clés :
• vs 10 * (2/4).

Fonctionnement :
• 10*2=20 puis /4.

Exécution étape par étape :
1. 20.
2. 5.0.

Ordre des opérations :
• * puis /.

Cas d'utilisation courants :
• moyennes pondérées simples.

Cas limites :
• division par zéro plus bas.

Considérations de performance :
• trivial.

Exemples :
• 8 * 3 / 4

Remarques :
• float mid-way.`,
  639: `10 - 2 - 3 vaut 5 : - associatif à gauche : (10-2)-3.

Débutant :
• soustractions enchaînées gauche-droite.

Intermédiaire :
• pas 10-(2-3) sauf parenthèses.

Expert :
• relation avec addition négative.

Concepts clés :
• Associativité gauche -.

Distinctions clés :
• 10-2-3 vs 10-(2-3).

Fonctionnement :
• 8 puis -3.

Exécution étape par étape :
1. 10-2=8.
2. 8-3=5.

Ordre des opérations :
• gauche à droite.

Cas d'utilisation courants :
• soldes successifs.

Cas limites :
• floats.

Considérations de performance :
• trivial.

Exemples :
• 100 - 10 - 5

Remarques :
• utilisez += -= accumulators clairs.`,
  640: `10 + 2 - 3 vaut 9 : + et - même priorité, gauche-droite : (10+2)-3.

Débutant :
• addition puis soustraction.

Intermédiaire :
• équivalent à 10 + (2-3)=9 aussi par associativité des additions signées.

Expert :
• groupement mathématique réel identique pour + - enchaînés.

Concepts clés :
• + - gauche à droite.

Distinctions clés :
• cohérent lecture linéaire.

Fonctionnement :
• 12 puis -3.

Exécution étape par étape :
1. 10+2=12.
2. 12-3=9.

Ordre des opérations :
• + puis -.

Cas d'utilisation courants :
• ajustements cumulatifs.

Cas limites :
• N/A.

Considérations de performance :
• trivial.

Exemples :
• 1 + 1 - 1 + 1

Remarques :
• pour floats, réordonner peut changer bitwise.`,
};
