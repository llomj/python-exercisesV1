/** Level 6 FR 1926–1950 — level6_intermediate_a.ts Q26–50 */
export default {
  1926: `Intersection des clés de deux dicts

Débutant :
• d1.keys() & d2.keys() retourne les clés présentes dans les deux mappings → {'b'} ici.

Intermédiaire :
• Seul "b" est commun à d1 et d2.

Expert :
• Vue & vue ou vue & set selon opérande droit.

Concepts clés :
• Intersection d’ensembles de clés.

Distinctions clés :
• Ne fusionne pas les valeurs ; clés seulement.

Fonctionnement :
• d1 a,b ; d2 b,c → commun b.

Exécution étape par étape :
1. Calcul d’intersection.

Ordre des opérations :
• Évaluation des deux vues puis &.

Cas d'utilisation courants :
• Schéma commun entre deux enregistrements.

Cas limites :
• Aucune clé commune → set() vide.

Considérations de performance :
• O(taille) typique.

Exemples :
• Planifier jointure sur clés.

Remarques :
• Réponse : {'b'}.`,

  1927: `Union des clés

Débutant :
• d1.keys() | d2.keys() → toutes clés apparaissant dans l’un ou l’autre → {'a','b','c'}.

Intermédiaire :
• | est l’union ensembliste.

Expert :
• Résultat set, pas dict.

Concepts clés :
• Union de clés.

Distinctions clés :
• | sur dict eux-mêmes (3.9+) fusionne paires ; ici seulement clés.

Fonctionnement :
• a depuis d1, b partagé, c depuis d2.

Exécution étape par étape :
1. Ensemble à trois éléments.

Ordre des opérations :
• Opérateur | sur vues/set.

Cas d'utilisation courants :
• Couverture totale des champs possibles.

Cas limites :
• Ordre d’itération du set non garanti pour affichage.

Considérations de performance :
• Linéaire.

Exemples :
• Planifier outer join de schémas.

Remarques :
• Réponse : {'a', 'b', 'c'}.`,

  1928: `Différence de clés

Débutant :
• d1.keys() - d2.keys() : clés dans d1 absentes de d2 → {'a'}.

Intermédiaire :
• "b" est dans d2 donc exclu ; "c" n’était pas dans d1 donc n’apparaît pas à gauche du -.

Expert :
• Asymétrique : pas la même chose que d2 - d1.

Concepts clés :
• Différence ensembliste.

Distinctions clés :
• Complément vs intersection.

Fonctionnement :
• Clés d1 : a,b ; enlever celles de d2 : b → reste a.

Exécution étape par étape :
1. Résultat singleton a.

Ordre des opérations :
• - sur vues/set.

Cas d'utilisation courants :
• Champs seulement dans la première source.

Cas limites :
• Si d1 ⊆ d2 → set vide.

Considérations de performance :
• O(n).

Exemples :
• Détecter colonnes supprimées.

Remarques :
• Réponse : {'a'}.`,

  1929: `Différence symétrique avec clés

Débutant :
• d.keys() ^ {"a","c"} : clés dans l’un ou l’autre mais pas les deux → b (dans d seul) et c (dans set seul) → {'b','c'}.

Intermédiaire :
• "a" est dans les deux → exclu du xor.

Expert :
• Utile pour changements bidirectionnels simples.

Concepts clés :
• XOR ensembliste.

Distinctions clés :
• vs | et &.

Fonctionnement :
• Ensemble clés d : a,b ; autre a,c ; a commun ; reste b et c.

Exécution étape par étape :
1. b seulement dans d ; c seulement dans set.

Ordre des opérations :
• ^ binaire.

Cas d'utilisation courants :
• Détecter désaccord de présence de champs.

Cas limites :
• Affichage set non ordonné.

Considérations de performance :
• O(n).

Exemples :
• Symmetric diff de deux ensembles de noms.

Remarques :
• Réponse : {'b', 'c'}.`,

  1930: `Appartenance à la vue keys

Débutant :
• "a" in d.keys() est équivalent à "a" in d → True.

Intermédiaire :
• La vue se comporte comme un ensemble des clés pour in.

Expert :
• O(1) amorti comme d directement.

Concepts clés :
• Test de présence de clé.

Distinctions clés :
• in sur d.values() teste les valeurs, pas les clés.

Fonctionnement :
• Hash lookup de "a".

Exécution étape par étape :
1. True.

Ordre des opérations :
• in après construction vue (vue cheap).

Cas d'utilisation courants :
• Code explicite sur .keys() pour lisibilité.

Cas limites :
• Sous-clé str : "a" in d vs substring.

Considérations de performance :
• Préférable à try/KeyError pour branche fréquente parfois discutable selon style.

Exemples :
• if k in d.keys(): rarement nécessaire vs if k in d.

Remarques :
• Réponse : True.`,

  1931: `**kwargs capture

Débutant :
• f(a=1,b=2) avec def f(**kwargs) regroupe les arguments nommés dans un dict → {'a':1,'b':2}.

Intermédiaire :
• kwargs est un dict ordinaire (copie des bindings).

Expert :
• *args pour positionnels ; ** pour nommés.

Concepts clés :
• Empaquetage arguments, dict résultat.

Distinctions clés :
• Noms doivent être identifiants valides pour passer en kwargs.

Fonctionnement :
• Construction du mapping au moment de l’appel.

Exécution étape par étape :
1. kwargs reçoit les paires.

Ordre des opérations :
• Appel de fonction.

Cas d'utilisation courants :
• Wrappers, forwarding, APIs flexibles.

Cas limites :
• Collision avec paramètres explicites nommés (ordre de définition).

Considérations de performance :
• Petit coût construction dict.

Exemples :
• def g(**k): return len(k).

Remarques :
• Réponse : {'a': 1, 'b': 2}.`,

  1932: `Dépaquetage **d dans un appel

Débutant :
• f(**d) avec d={"a":1,"b":2} passe a=1 et b=2 aux paramètres a et b → retour 3.

Intermédiaire :
• Les clés du dict doivent correspondre aux noms de paramètres requis.

Expert :
• Peut combiner positionnels et ** partiel (hors snippet).

Concepts clés :
• Unpacking d’un mapping en kwargs.

Distinctions clés :
• ** en appel vs ** en littéral dict.

Fonctionnement :
• Liaison a←1, b←2 puis a+b.

Exécution étape par étape :
1. 1+2 → 3.

Ordre des opérations :
• Évaluation d puis appel.

Cas d'utilisation courants :
• Passer options dict à une fonction à paramètres nommés.

Cas limites :
• Clé inconnue → TypeError unexpected keyword.

Considérations de performance :
• N/A.

Exemples :
• plt.plot(**style_dict) patterns.

Remarques :
• Réponse : 3.`,

  1933: `Fusion ** collision

Débutant :
• {**d1, **d2} avec même clé "a" : le second mapping l’emporte → {"a":2}.

Intermédiaire :
• d1 entièrement écrasé sur les clés communes par d2.

Expert :
• Chaîne ** gauche-droite : dernier gagne toujours.

Concepts clés :
• Fusion, priorité droite.

Distinctions clés :
• | sur dicts même règle de collision.

Fonctionnement :
• Insérer d1 puis d2 écrase a.

Exécution étape par étape :
1. Résultat une clé a:2.

Ordre des opérations :
• Littéral évalué de gauche à droite.

Cas d'utilisation courants :
• Defaults puis overrides.

Cas limites :
• Plusieurs dicts : dernier gagne pour chaque clé.

Considérations de performance :
• Nouveau dict.

Exemples :
• {**base, **env, **cli}.

Remarques :
• Réponse : {"a": 2}.`,

  1934: `dict(zip(keys, vals))

Débutant :
• zip aligne a:1, b:2, c:3 ; dict(...) construit le mapping.

Intermédiaire :
• zip s’arrête au plus court ; ici longueurs égales.

Expert :
• dict(zip) est l’idiome standard pour deux colonnes parallèles.

Concepts clés :
• zip, constructeur dict depuis paires.

Distinctions clés :
• zip strict=True (3.10+) pour longueurs égales exigées.

Fonctionnement :
• Itération trois paires.

Exécution étape par étape :
1. dict trois entrées.

Ordre des opérations :
• zip lazy puis consommation par dict().

Cas d'utilisation courants :
• Reconstituer dict depuis CSV colonnes.

Cas limites :
• longueurs différentes : perte silencieuse sans strict.

Considérations de performance :
• O(n).

Exemples :
• inverser avec zip(*d.items()).

Remarques :
• Réponse : {"a": 1, "b": 2, "c": 3}.`,

  1935: `Liste en comprehension sur clés choisies

Débutant :
• [d[k] for k in ["a","c"]] récupère les valeurs pour ces clés dans l’ordre de la liste → [1, 3].

Intermédiaire :
• KeyError si une clé manque (ici a et c existent).

Expert :
• d.get(k) dans la comprehension si optionnel.

Concepts clés :
• Lookup répété, ordre imposé par la liste de clés.

Distinctions clés :
• Pas le même ordre que d.values().

Fonctionnement :
• k=a→1, k=c→3.

Exécution étape par étape :
1. Liste deux éléments.

Ordre des opérations :
• Comprehension gauche-droite.

Cas d'utilisation courants :
• Projeter colonnes dans un ordre précis.

Cas limites :
• Clé manquante → erreur.

Considérations de performance :
• O(len(liste clés)).

Exemples :
• [d[k] for k in sorted(d)].

Remarques :
• Réponse : [1, 3].`,

  1936: `Dict comprehension avec filtre in d

Débutant :
• Garde k dans ["a","c"] et vérifie k in d → paires a et c → {"a":1,"c":3}.

Intermédiaire :
• Le if k in d est redondant si les clés sont garanties mais reste sûr.

Expert :
• Peut combiner conditions sur v.

Concepts clés :
• Filtrage par liste de clés, membership.

Distinctions clés :
• vs dict((k,d[k]) for k in ...) équivalent.

Fonctionnement :
• k=a : in d oui, ajout ; k=c : oui ; ordre liste a,c → ordre insertion a puis c.

Exécution étape par étape :
1. Deux paires dans le nouveau dict.

Ordre des opérations :
• Ordre de la liste ["a","c"] pour l’itération.

Cas d'utilisation courants :
• Sous-dict stable pour API partielle.

Cas limites :
• Si k pas in d, ignoré silencieusement.

Considérations de performance :
• O(nombre de k candidats).

Exemples :
• {k:d[k] for k in keys if condition}.

Remarques :
• Réponse : {"a": 1, "c": 3}.`,

  1937: `get manquant is None

Débutant :
• d.get("c") retourne None ; is None → True.

Intermédiaire :
• Distinction valeur absente vs valeur None stockée (voir 1938).

Expert :
• (k in d) plus explicite pour absence réelle.

Concepts clés :
• get défaut None, test is None.

Distinctions clés :
• get("c") or default mélange falsy.

Fonctionnement :
• Pas de clé c → None.

Exécution étape par étape :
1. None is None True.

Ordre des opérations :
• Appel get puis is.

Cas d'utilisation courants :
• Branches optionnelles.

Cas limites :
• Si c existait avec valeur None, même résultat pour get is None.

Considérations de performance :
• Un lookup.

Exemples :
• if d.get("port") is None: ...

Remarques :
• Réponse : True.`,

  1938: `Valeur None stockée

Débutant :
• d.get("a") retourne None (la valeur) ; is None → True.

Intermédiaire :
• Ici la clé est présente ; le test ne distingue pas absence et None sans in.

Expert :
• Pour distinguer : ("a" in d) and d["a"] is None ou sentinel unique.

Concepts clés :
• None comme valeur légitime.

Distinctions clés :
• 1937 absence vs 1938 présence valeur None.

Fonctionnement :
• get renvoie la valeur None stockée.

Exécution étape par étape :
1. is None True.

Ordre des opérations :
• get puis is.

Cas d'utilisation courants :
• JSON null, champs optionnels explicitement nuls.

Cas limites :
• Ne pas utiliser if not d.get("a") si 0 ou False valides.

Considérations de performance :
• Un lookup.

Exemples :
• Schéma avec trois états : absent / null / valeur.

Remarques :
• Réponse : True.`,

  1939: `in teste la clé pas la valeur

Débutant :
• "a" in d est True même si la valeur est None ; in vérifie la présence de clé.

Intermédiaire :
• Ne pas confondre avec test de truthiness de d["a"].

Expert :
• __contains__ du mapping.

Concepts clés :
• Membership sur clés.

Distinctions clés :
• None in d.values() serait autre test.

Fonctionnement :
• Clé "a" existe.

Exécution étape par étape :
1. True.

Ordre des opérations :
• Opérateur in.

Cas d'utilisation courants :
• if "debug" in os.environ:

Cas limites :
• Pas de sous-chaîne : clé exacte.

Considérations de performance :
• O(1) amorti.

Exemples :
• "b" in {"a":None} → False.

Remarques :
• Réponse : True.`,

  1940: `sum(values) rappel

Débutant :
• sum(d.values()) → 1+2+3 = 6.

Intermédiaire :
• Itère les valeurs dans l’ordre d’insertion du dict.

Expert :
• start optionnel de sum.

Concepts clés :
• Agrégation sur mapping.

Distinctions clés :
• sum(d) invalide ici (str clés).

Fonctionnement :
• Addition des trois entiers.

Exécution étape par étape :
1. 6.

Ordre des opérations :
• values() puis sum.

Cas d'utilisation courants :
• Totaux, scores.

Cas limites :
• Types non additifs mélangés.

Considérations de performance :
• O(n).

Exemples :
• math.fsum pour floats.

Remarques :
• Réponse : 6.`,

  1941: `join sur valeurs str

Débutant :
• " ".join(d.values()) concatène "hello" et "world" avec espace → "hello world".

Intermédiaire :
• join exige des str ; ici ok.

Expert :
• join sur generator d’strings pour grandes données.

Concepts clés :
• str.join, itération des valeurs.

Distinctions clés :
• join keys au lieu de values donnerait autre texte.

Fonctionnement :
• mappe valeurs en une chaîne.

Exécution étape par étape :
1. "hello" + " " + "world".

Ordre des opérations :
• Ordre d’insertion a puis b → hello puis world.

Cas d'utilisation courants :
• Phrases, URLs fragments.

Cas limites :
• Valeur non str → TypeError.

Considérations de performance :
• Linéaire en longueur totale.

Exemples :
• "\n".join pour lignes.

Remarques :
• Réponse : "hello world".`,

  1942: `all générateur sur valeurs

Débutant :
• all(v > 0 for v in d.values()) : 1>0 et 2>0 → True.

Intermédiaire :
• Générateur lazy ; all court-circuite au premier False.

Expert :
• Équivalent à min(d.values()) > 0 si numériques comparables.

Concepts clés :
• all, générateur, prédicat sur valeurs.

Distinctions clés :
• all(d) testerait les clés str (truthy).

Fonctionnement :
• Deux tests vrais.

Exécution étape par étape :
1. True.

Ordre des opérations :
• Itération values ordre insertion.

Cas d'utilisation courants :
• Valider positivité d’un batch.

Cas limites :
• dict vide : all(...) True (aucun faux rencontré).

Considérations de performance :
• Court-circuit.

Exemples :
• all(n % 2 for ...) pour parité.

Remarques :
• Réponse : True.`,

  1943: `any avec test égalité zéro

Débutant :
• any(v == 0 for v in d.values()) : 1==0 faux, 0==0 vrai → True.

Intermédiaire :
• any s’arrête au premier True.

Expert :
• 0 in d.values() O(n) set construction possible mais ici générateur suffit.

Concepts clés :
• any, égalité sur valeurs.

Distinctions clés :
• 0 est falsy mais ici test explicite == 0.

Fonctionnement :
• Deuxième valeur déclenche True.

Exécution étape par étape :
1. Court-circuit possible après b.

Ordre des opérations :
• Ordre values a puis b.

Cas d'utilisation courants :
• Détecter anomalie nulle dans des mesures.

Cas limites :
• Float proche de zéro pas == 0.

Considérations de performance :
• Court-circuit.

Exemples :
• any(v < 0 ...).

Remarques :
• Réponse : True.`,

  1944: `len(d)

Débutant :
• len({"a":1,"b":2,"c":3}) → 3 paires.

Intermédiaire :
• Compte les entrées, pas la taille mémoire exacte.

Expert :
• O(1) en CPython pour dict standard.

Concepts clés :
• Cardinalité du mapping.

Distinctions clés :
• len(d.values()) même nombre ici.

Fonctionnement :
• Compteur interne.

Exécution étape par étape :
1. 3.

Ordre des opérations :
• len builtin.

Cas d'utilisation courants :
• Vérifier qu’un cache a grossi.

Cas limites :
• dict vide 0.

Considérations de performance :
• O(1).

Exemples :
• if len(d) > N: prune.

Remarques :
• Réponse : 3.`,

  1945: `reversed(d)

Débutant :
• reversed(d) inverse l’ordre d’itération des clés (insertion 3.7+) → list → ['b','a'] pour a puis b insérés.

Intermédiaire :
• Ne renverse pas les valeurs sans clés.

Expert :
• reversed(d.keys()) équivalent.

Concepts clés :
• Ordre inverse d’itération, matérialisation list.

Distinctions clés :
• reversed(d.items()) pour paires inversées.

Fonctionnement :
• Itérateur inverse sur séquence de clés.

Exécution étape par étape :
1. b puis a.

Ordre des opérations :
• reversed puis list.

Cas d'utilisation courants :
• Parcourir dans l’ordre LIFO logique des clés.

Cas limites :
• Avant 3.7 ordre non portable pour inverse « logique ».

Considérations de performance :
• O(n) pour list().

Exemples :
• for k in reversed(d):.

Remarques :
• Réponse : ['b', 'a'].`,

  1946: `min sur items avec key valeur

Débutant :
• min(d.items(), key=lambda x: x[1]) choisit la paire de valeur minimale → ('a', 1).

Intermédiaire :
• x est (clé, valeur) ; x[1] est la valeur comparée.

Expert :
• min sans key utiliserait ordre tuple lexicographique (pas l’intention).

Concepts clés :
• min avec key, items().

Distinctions clés :
• min(d, key=d.get) donnerait seulement la clé 'a'.

Fonctionnement :
• Compare 1 et 2 ; garde ('a',1).

Exécution étape par étape :
1. Résultat tuple.

Ordre des opérations :
• items() puis min.

Cas d'utilisation courants :
• Trouver entrée de score minimal avec son nom.

Cas limites :
• dict vide → ValueError.

Considérations de performance :
• O(n).

Exemples :
• max(..., key=lambda x: x[1]) pour max.

Remarques :
• Réponse : ('a', 1).`,

  1947: `+= sur valeur entière

Débutant :
• d["a"] += 1 lit 1, ajoute 1, réécrit → d["a"] vaut 2.

Intermédiaire :
• __iadd__ sur int ou équivalent in-place pour int rebinding.

Expert :
• Pour int immuable, += recrée l’int et réassigne la clé.

Concepts clés :
• Opération in-place syntaxique sur slot de dict.

Distinctions clés :
• Si valeur non numérique → TypeError.

Fonctionnement :
• d["a"] = d["a"] + 1.

Exécution étape par étape :
1. 1+1 → 2 stocké sous a.

Ordre des opérations :
• Lookup puis add puis store.

Cas d'utilisation courants :
• Compteurs dans dict.

Cas limites :
• clé absente → KeyError.

Considérations de performance :
• O(1).

Exemples :
• d[k] -= 1 décrément.

Remarques :
• Réponse : {"a": 2}.`,

  1948: `Compteur avec get et +1

Débutant :
• d["a"] = d.get("a", 0) + 1 : absent → 0+1 → {"a":1}.

Intermédiaire :
• Pattern fréquent pour histogrammes.

Expert :
• Éviter defaultdict(int) explicite dans du code minimal.

Concepts clés :
• get avec défaut 0, incrément.

Distinctions clés :
• Si "a" existait avec valeur 3, deviendrait 4.

Fonctionnement :
• get → 0 ; +1 ; assignation.

Exécution étape par étape :
1. Premier passage compte à 1.

Ordre des opérations :
• Évaluation complète du membre droit puis assignation.

Cas d'utilisation courants :
• Word count, votes.

Cas limites :
• Valeur non int → erreur au +.

Considérations de performance :
• Deux lookups si optim naïf ; acceptable.

Exemples :
• Boucle sur mots avec ce corps.

Remarques :
• Réponse : {"a": 1}.`,

  1949: `Filtre k in chaîne (sous-chaîne)

Débutant :
• if k in "ac" teste si la clé k est une sous-chaîne de "ac" : 'a' oui, 'b' non → seulement {"a":1}.

Intermédiaire :
• Piège : ce n’est pas membership dans un ensemble {'a','c'} sauf coïncidence ; ici 'a' in 'ac' True, 'b' in 'ac' False.

Expert :
• Pour tester ensemble de clés, utiliser set(['a','c']) ou {'a','c'}.

Concepts clés :
• in sur str = sous-chaîne, pas caractère seul sauf si str longueur 1 chaque.

Distinctions clés :
• k in {'a','c'} serait plus clair en intention.

Fonctionnement :
• 'a' sous-chaîne de 'ac' ; 'b' non.

Exécution étape par étape :
1. Seule paire a conservée.

Ordre des opérations :
• Comprehension sur items.

Cas d'utilisation courants :
• Montre le piège substring ; code réel préfère set.

Cas limites :
• 'c' in 'ac' True aussi mais pas de clé 'c' dans d.

Considérations de performance :
• O(n) items.

Exemples :
• Remplacer par if k in {'a','c'}.

Remarques :
• Réponse : {"a": 1}.`,

  1950: `Alias partagé

Débutant :
• e = d copie la référence ; e["b"]=2 mute le même objet que d → d voit aussi b.

Intermédiaire :
• Pas de copy() : identité id(d)==id(e).

Expert :
• Pour copie indépendante : copy, dict(), {**d}.

Concepts clés :
• Référence, mutation visible via tous les noms.

Distinctions clés :
• e = d.copy() aurait isolé (shallow).

Fonctionnement :
• Même dict sous deux noms.

Exécution étape par étape :
1. d initial {"a":1}
2. assignation via e ajoute b:2 sur le même objet

Ordre des opérations :
• Assignations séquentielles.

Cas d'utilisation courants :
• Fonctions qui mutent le dict passé.

Cas limites :
• Objets imbriqués toujours partagés en shallow copy.

Considérations de performance :
• Zéro copie ici.

Exemples :
• def f(x): x['k']=1 ; f(d).

Remarques :
• Réponse : {"a": 1, "b": 2}.`,
};
