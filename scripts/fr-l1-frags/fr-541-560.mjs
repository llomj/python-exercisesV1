/** Level 1 FR 541–560 — keys match QUESTIONS_BANK ids */
export default {
  541: `None == False vaut False : None n'est pas le booléen False.

Débutant :
• Trois concepts : None, False, 0 sont distincts.

Intermédiaire :
• if not None et if not False se comportent pareil mais valeurs différentes.

Expert :
• SQL NULL analogie imparfaite.

Concepts clés :
• None vs False.

Distinctions clés :
• bool(None) est False mais None n'est pas False.

Fonctionnement :
• comparaison == déléguée → False.

Exécution étape par étape :
1. None == False.
2. False.

Ordre des opérations :
• ==.

Cas d'utilisation courants :
• API où absent ≠ faux booléen.

Cas limites :
• numpy/pandas autres sémantiques.

Considérations de performance :
• O(1).

Exemples :
• None is False  # False

Remarques :
• Tests explicites is None / is False.`,
  542: `None == "" vaut False : absence de valeur n'est pas chaîne vide.

Débutant :
• None n'est pas un str.

Intermédiaire :
• if not x attrape les deux ; distinguez avec is None.

Expert :
• JSON null vs "".

Concepts clés :
• None vs str vide.

Distinctions clés :
• trois états : None, "", whitespace.

Fonctionnement :
• __eq__ ne matche pas None à "".

Exécution étape par étape :
1. None == "".
2. False.

Ordre des opérations :
• ==.

Cas d'utilisation courants :
• formulaires optionnels.

Cas limites :
• pandas NaN.

Considérations de performance :
• O(1).

Exemples :
• bool("") vs bool(None)

Remarques :
• validez schémas explicitement.`,
  543: `x = None puis x is None vaut True : test idiomatique du singleton.

Débutant :
• is compare identité.

Intermédiaire :
• PEP 8 : is None.

Expert :
• évite surcharges __eq__.

Concepts clés :
• is None.

Distinctions clés :
• is vs ==.

Fonctionnement :
• compare id(x) à id(None).

Exécution étape par étape :
1. x lie None.
2. x is None → True.

Ordre des opérations :
• assignation puis is.

Cas d'utilisation courants :
• paramètres optionnels.

Cas limites :
• mocks.

Considérations de performance :
• O(1).

Exemples :
• def f(x=None): return x is None

Remarques :
• pas if x seul si 0 valide.`,
  544: `Sans return, une fonction renvoie None implicitement.

Débutant :
• None est la valeur par défaut.

Intermédiaire :
• return sans expression aussi None.

Expert :
• annotations -> None.

Concepts clés :
• return implicite.

Distinctions clés :
• procédure vs fonction.

Fonctionnement :
• bytecode insère None.

Exécution étape par étape :
1. Corps exécuté.
2. None renvoyé.

Ordre des opérations :
• fin fonction.

Cas d'utilisation courants :
• effets de bord.

Cas limites :
• générateurs.

Considérations de performance :
• négligeable.

Exemples :
• def f(): pass; f()

Remarques :
• mypy détecte oublis.`,
  545: `Après def f(): pass, type(f()) est NoneType : l'appel renvoie None.

Débutant :
• pass ne produit pas de valeur.

Intermédiaire :
• type(None) alias NoneType.

Expert :
• type(f) reste function.

Concepts clés :
• NoneType.

Distinctions clés :
• type(f) vs type(f()).

Fonctionnement :
• call retour None.

Exécution étape par étape :
1. f().
2. None.
3. type → NoneType.

Ordre des opérations :
• call puis type.

Cas d'utilisation courants :
• stubs.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• type((lambda: None)())

Remarques :
• documentez contrat.`,
  546: `def f(): return puis f() is None : True car return nu renvoie None.

Débutant :
• return seul ≡ return None conceptuellement.

Intermédiaire :
• style explicite return None si ambigu.

Expert :
• bytecode charge None.

Concepts clés :
• return vide.

Distinctions clés :
• early exit.

Fonctionnement :
• None produit.

Exécution étape par étape :
1. Appel f.
2. None.
3. is None True.

Ordre des opérations :
• appel puis is.

Cas d'utilisation courants :
• parseurs.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• assert (lambda: None)() is None

Remarques :
• tests lisibles.`,
  547: `[None, None, None] == [None] * 3 vaut True : égalité élément par élément ; trois None égaux.

Débutant :
• == structurelle.

Intermédiaire :
• *3 duplique référence None, pas un problème pour ==.

Expert :
• piège différent avec [[]]*3.

Concepts clés :
• list ==, répétition.

Distinctions clés :
• == vs is sur listes entières.

Fonctionnement :
• __eq__ liste.

Exécution étape par étape :
1. Compare trois positions.
2. True.

Ordre des opérations :
• ==.

Cas d'utilisation courants :
• sentinelles.

Cas limites :
• longueurs différentes.

Considérations de performance :
• O(n).

Exemples :
• [1]*3 == [1,1,1]

Remarques :
• mutable interne autre cas.`,
  548: `str(None) vaut "None" : texte du mot, pas chaîne vide.

Débutant :
• debug print.

Intermédiaire :
• JSON null ≠ "None".

Expert :
• i18n fixe anglais.

Concepts clés :
• str(None).

Distinctions clés :
• str(None) vs "".

Fonctionnement :
• __str__ NoneType.

Exécution étape par étape :
1. None.
2. "None".

Ordre des opérations :
• str().

Cas d'utilisation courants :
• logs concaténés.

Cas limites :
• ne parsez pas "None".

Considérations de performance :
• O(1).

Exemples :
• repr(None)

Remarques :
• sérialisation dédiée.`,
  549: `repr(None) vaut "None" : ici identique à str pour le singleton.

Débutant :
• REPL cohérent.

Intermédiaire :
• objectif réévaluation limité.

Expert :
• f"{x!r}".

Concepts clés :
• repr NoneType.

Distinctions clés :
• repr vs str ici égaux.

Fonctionnement :
• repr builtin.

Exécution étape par étape :
1. None.
2. 'None'.

Ordre des opérations :
• repr().

Cas d'utilisation courants :
• logs techniques.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• ascii(None)

Remarques :
• utile debug.`,
  550: `None in [1, None, 3] vaut True : in trouve l'élément None au milieu.

Débutant :
• scan linéaire.

Intermédiaire :
• None == None à la position.

Expert :
• set avec None OK.

Concepts clés :
• __contains__ liste.

Distinctions clés :
• None in list vs clé dict.

Fonctionnement :
• compare chaque élément.

Exécution étape par étape :
1. Parcourt liste.
2. Trouve None.
3. True.

Ordre des opérations :
• in.

Cas d'utilisation courants :
• données avec trous.

Cas limites :
• NaN special.

Considérations de performance :
• O(n).

Exemples :
• 0 in [0,1]

Remarques :
• index pour position.`,
  551: `id(42) == id(42) vaut True : même expression, même petit int souvent mis en cache.

Débutant :
• id entier identité mémoire.

Intermédiaire :
• CPython small int cache.

Expert :
• ne pas dépendre pour grands entiers.

Concepts clés :
• id, int cache.

Distinctions clés :
• portable logique évite id.

Fonctionnement :
• réutilisation objet int.

Exécution étape par étape :
1. Deux id(42).
2. égaux.

Ordre des opérations :
• appels id.

Cas d'utilisation courants :
• debug rare.

Cas limites :
• grands int.

Considérations de performance :
• O(1).

Exemples :
• id(None)==id(None)

Remarques :
• peu utile métier.`,
  552: `a = []; b = []; a is b vaut False : deux listes vides distinctes.

Débutant :
• is ≠ contenu.

Intermédiaire :
• == serait True.

Expert :
• shallow copy nouvelle id.

Concepts clés :
• identité list.

Distinctions clés :
• is vs ==.

Fonctionnement :
• deux allocations.

Exécution étape par étape :
1. Liste a.
2. Liste b.
3. is False.

Ordre des opérations :
• créations puis is.

Cas d'utilisation courants :
• éviter partage accidentel.

Cas limites :
• a=b=[] puis True.

Considérations de performance :
• O(1).

Exemples :
• [] is []

Remarques :
• alias explicite si besoin.`,
  553: `a = [1, 2]; b = [1, 2]; a == b vaut True : égalité structurelle.

Débutant :
• éléments égaux ordre égal.

Intermédiaire :
• récursif sur conteneurs.

Expert :
• [1] == [1.0] True.

Concepts clés :
• list __eq__.

Distinctions clés :
• == True, is souvent False.

Fonctionnement :
• paire à paire.

Exécution étape par étape :
1. 1==1, 2==2.
2. True.

Ordre des opérations :
• ==.

Cas d'utilisation courants :
• tests.

Cas limites :
• types incomparables TypeError.

Considérations de performance :
• O(n).

Exemples :
• [1,2]==[1,2]

Remarques :
• attention int/float.`,
  554: `a = [1, 2]; b = [1, 2]; a is b vaut False : objets distincts.

Débutant :
• même contenu, identités différentes.

Intermédiaire :
• copie shallow.

Expert :
• pas d'interning listes.

Concepts clés :
• is list.

Distinctions clés :
• is vs ==.

Fonctionnement :
• ids différents.

Exécution étape par étape :
1. Deux listes.
2. is False.

Ordre des opérations :
• is.

Cas d'utilisation courants :
• détecter alias.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• a=b=[1]; a is b

Remarques :
• partage volontaire b=a.`,
  555: `a = [1, 2]; b = a; a is b vaut True : alias même liste.

Débutant :
• un objet deux noms.

Intermédiaire :
• mutation visible via les deux.

Expert :
• refcounting.

Concepts clés :
• référence partagée.

Distinctions clés :
• alias vs copie.

Fonctionnement :
• même id.

Exécution étape par étape :
1. Crée liste.
2. b référence même.
3. is True.

Ordre des opérations :
• assign puis is.

Cas d'utilisation courants :
• modifier liste argument.

Cas limites :
• rebind casse lien.

Considérations de performance :
• O(1).

Exemples :
• def f(l): l.append(1)

Remarques :
• documentez mutation.`,
  556: `a = "hello"; b = "hello"; a is b souvent True en CPython (internage), mais == reste le test texte portable.

Débutant :
• effet visible identique souvent.

Intermédiaire :
• ne pas coder métier sur is.

Expert :
• str construites dynamiquement : is peut False.

Concepts clés :
• internage str.

Distinctions clés :
• littéraux vs runtime.

Fonctionnement :
• même objet ou non.

Exécution étape par étape :
1. Deux noms.
2. is souvent True.

Ordre des opérations :
• is.

Cas d'utilisation courants :
• curiosité CPython.

Cas limites :
• longues str.

Considérations de performance :
• O(1).

Exemples :
• "a"*1000

Remarques :
• == portable.`,
  557: `a = (1, 2); b = (1, 2); a == b vaut True : tuples comparés élément par élément.

Débutant :
• immuables, contenu détermine ==.

Intermédiaire :
• is peut False malgré == True.

Expert :
• hashable si éléments hashables.

Concepts clés :
• tuple __eq__.

Distinctions clés :
• tuple vs list comparaisons.

Fonctionnement :
• compare positions.

Exécution étape par étape :
1. 1==1,2==2.
2. True.

Ordre des opérations :
• ==.

Cas d'utilisation courants :
• clés dict composées.

Cas limites :
• éléments non ordonnables.

Considérations de performance :
• O(n).

Exemples :
• (1,)==(1,)

Remarques :
• virgule singleton.`,
  558: `type(42) == int vaut True : la classe renvoyée est int.

Débutant :
• type donne la classe.

Intermédiaire :
• comparaison de types avec ==.

Expert :
• sous-classes : isinstance plus souple.

Concepts clés :
• type, ==.

Distinctions clés :
• type vs isinstance.

Fonctionnement :
• int == int.

Exécution étape par étape :
1. type(42)→int.
2. True.

Ordre des opérations :
• type puis ==.

Cas d'utilisation courants :
• introspection rare.

Cas limites :
• mocks.

Considérations de performance :
• O(1).

Exemples :
• type([])==list

Remarques :
• isinstance préféré héritage.`,
  559: `type(42) is int vaut True : objet type int unique.

Débutant :
• is sur classes built-in.

Intermédiaire :
• singleton type.

Expert :
• cohérent avec int identité stable.

Concepts clés :
• identité classe int.

Distinctions clés :
• is vs == souvent pareil.

Fonctionnement :
• même objet type.

Exécution étape par étape :
1. type(42).
2. is int.

Ordre des opérations :
• type puis is.

Cas d'utilisation courants :
• tests stricts.

Cas limites :
• bool subclass int pour isinstance pas pour type.

Considérations de performance :
• O(1).

Exemples :
• type(True) is bool

Remarques :
• voir 560 pour isinstance(True,int).`,
  560: `isinstance(True, int) vaut True : bool est sous-classe de int (héritage historique).

Débutant :
• surprise fréquente.

Intermédiaire :
• True+1 vaut 2.

Expert :
• exclure bool : type(x) is int.

Concepts clés :
• MRO bool→int.

Distinctions clés :
• isinstance vs type is.

Fonctionnement :
• recherche sous-classe.

Exécution étape par étape :
1. True instance bool.
2. bool subclass int.
3. True.

Ordre des opérations :
• isinstance.

Cas d'utilisation courants :
• piège validation types.

Cas limites :
• tests 1 vs True.

Considérations de performance :
• O(1).

Exemples :
• issubclass(bool,int)

Remarques :
• PEP explique design.`,
};
