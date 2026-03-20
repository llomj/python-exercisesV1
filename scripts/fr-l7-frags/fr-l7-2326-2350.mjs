/** Level 7 FR 2326–2350 — level7_expert_a.ts Q26–50 */
export default {
  2326: `@staticmethod def f return 1 — C.f()

Débutant :
• Pas de self implicite ; C.f() appelle f sans lier d’instance → 1.

Intermédiaire :
• C().f() fonctionne aussi : staticmethod ignore l’instance passée.

Expert :
• Utile pour utilitaires logiquement groupés dans la classe.

Concepts clés :
• Descripteur staticmethod.

Distinctions clés :
• Pas d’erreur « missing self » ici.

Fonctionnement :
• __get__ renvoie la fonction nue.

Exécution étape par étape :
• Résolution sur la classe ou l’instance aboutit au même callable.

Ordre des opérations :
• Appel direct.

Cas d'utilisation courants :
• parseurs, constantes calculées sans état.

Cas limites :
• Ne voit pas cls pour polymorphisme.

Considérations de performance :
• Très léger.

Exemples :
• Voir Q28.

Remarques :
• Réponse : 1 (1re option).`,

  2327: `@classmethod def f(cls) return cls.__name__ — C.f()

Débutant :
• Python passe la classe C comme premier argument → cls.__name__ vaut "C".

Intermédiaire :
• Sur sous-classe D, cls devient D (polymorphisme).

Expert :
• Fabriques from_* idiomatiques.

Concepts clés :
• Liaison à la classe réelle.

Distinctions clés :
• Pas le nom "f".

Fonctionnement :
• classmethod descriptor injecte cls.

Exécution étape par étape :
• C.f() → f(C).

Ordre des opérations :
• cls résolu dynamiquement.

Cas d'utilisation courants :
• constructeurs alternatifs.

Cas limites :
• Méthode abstraite + classmethod : patterns ABC.

Considérations de performance :
• Négligeable.

Exemples :
• D.f() → "D".

Remarques :
• Réponse : "C" (1re option).`,

  2328: `Différence clé staticmethod vs classmethod

Débutant :
• classmethod reçoit cls en premier argument implicite ; staticmethod n’en reçoit aucun.

Intermédiaire :
• classmethod voit la sous-classe concrète ; staticmethod est « aveugle » à la hiérarchie.

Expert :
• Choix : besoin d’instancier cls ou lire attributs de classe vs fonction pure.

Concepts clés :
• Binding différencié.

Distinctions clés :
• Pas « staticmethod plus rapide » comme règle générale absolue.

Fonctionnement :
• Descripteurs distincts.

Exécution étape par étape :
• Voir create() polymorphe vs info() fixe dans la banque.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Dog.create() instancie Dog.

Cas limites :
• Méthodes statiques héritées : toujours même fonction si non surchargée.

Considérations de performance :
• Différence minime.

Exemples :
• Voir banque Animal/Dog.

Remarques :
• Réponse : classmethod reçoit la classe, staticmethod non (1re option).`,

  2329: `retry(times) avec boucle try/except — pattern

Débutant :
• Décorateur de nouvelle tentative : réessaie jusqu’à times puis propage.

Intermédiaire :
• except nu large — en prod filtrer les exceptions.

Expert :
• backoff exponentiel courant pour réseau.

Concepts clés :
• Résilience, idempotence souhaitable.

Distinctions clés :
• Pas cache ni timer seul.

Fonctionnement :
• for i in range(times): try return f.

Exécution étape par étape :
• Dernier tour relance l’exception.

Ordre des opérations :
• return court-circuite la boucle si succès.

Cas d'utilisation courants :
• HTTP, DB.

Cas limites :
• times=0 absurde ici.

Considérations de performance :
• Peut multiplier la latence.

Exemples :
• Voir banque connect().

Remarques :
• Réponse : décorateur retry (1re option).`,

  2330: `debug avec @wraps, print args et retour — pattern

Débutant :
• Journalisation de debug : affiche nom, args/kwargs, puis résultat après l’appel.

Intermédiaire :
• @wraps préserve les métadonnées malgré le wrapper.

Expert :
• logging module + niveaux, pas print en prod.

Concepts clés :
• Observabilité développement.

Distinctions clés :
• Pas retry.

Fonctionnement :
• r = f(...) puis print f"<- ... {r}".

Exécution étape par étape :
• Effet de bord après calcul.

Ordre des opérations :
• f exécuté une fois.

Cas d'utilisation courants :
• Pannes difficiles, recursion trace.

Cas limites :
• Objets non repr-friendly dans le print.

Considérations de performance :
• I/O synchrone coûteux.

Exemples :
• add(3,4) trace.

Remarques :
• Réponse : debug / logging (1re option).`,

  2331: `def dec(f): return f — effet

Débutant :
• Décorateur identité : aucune transformation, même objet fonction.

Intermédiaire :
• Utile comme branche neutre (feature flag, no-op).

Expert :
• Peut servir de point d’extension dans une chaîne conditionnelle.

Concepts clés :
• return f sans wrapper.

Distinctions clés :
• Pas doublement ni suppression.

Fonctionnement :
• dec(f) renvoie f tel quel.

Exécution étape par étape :
• Aucune couche supplémentaire à l’appel.

Ordre des opérations :
• Décoration instantanée O(1).

Cas d'utilisation courants :
• Placeholder, tests.

Cas limites :
• Pas de __wrapped__ ajouté.

Considérations de performance :
• Zéro overhead d’appel.

Exemples :
• hello.__name__ reste "hello".

Remarques :
• Réponse : ne rien changer (identité) (1re option).`,

  2332: `dec(f): return 42 — peut-on renvoyer un non-callable ?

Débutant :
• Oui à la décoration : f devient 42 ; mais f() lèvera TypeError car int n’est pas callable.

Intermédiaire :
• Python ne type pas le retour du décorateur.

Expert :
• Cas pathologique sauf métaprogrammation exotique.

Concepts clés :
• @ = assignation libre.

Distinctions clés :
• Pas d’erreur au moment de @ seul.

Fonctionnement :
• Nom rebound vers 42.

Exécution étape par étape :
• Premier appel () détecte l’erreur.

Ordre des opérations :
• callable(f) False ensuite.

Cas d'utilisation courants :
• Anti-patterns éducatifs.

Cas limites :
• Remplacer par une classe callable autre que fonction.

Considérations de performance :
• N/A.

Exemples :
• Voir Q33.

Remarques :
• Réponse : oui mais l’appel échouera (1re option).`,

  2333: `@dec return 42 — f()

Débutant :
• f est l’entier 42 ; tenter f() provoque TypeError: 'int' object is not callable.

Intermédiaire :
• callable(f) est False.

Expert :
• Message exact peut varier légèrement selon version.

Concepts clés :
• Erreur à l’usage, pas à la définition.

Distinctions clés :
• Pas return 42 de l’appel.

Fonctionnement :
• Opcode CALL sur non-callable.

Exécution étape par étape :
• Échec immédiat de l’appel.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Leçon sur contrats de décorateurs.

Cas limites :
• __call__ sur sous-classe de int impossible.

Considérations de performance :
• N/A.

Exemples :
• Voir Q32.

Remarques :
• Réponse : TypeError (1re option).`,

  2334: `requires_auth avec user.get("auth") — pattern

Débutant :
• Vérification d’autorisation avant délégation : PermissionError si non authentifié.

Intermédiaire :
• Premier paramètre user imposé par le wrapper.

Expert :
• Frameworks web : login_required équivalent.

Concepts clés :
• Gatekeeper, séparation des préoccupations.

Distinctions clés :
• Pas cache.

Fonctionnement :
• if not user.get("auth"): raise.

Exécution étape par étape :
• Sinon return f(user,*a).

Ordre des opérations :
• Auth puis logique métier.

Cas d'utilisation courants :
• Vues protégées.

Cas limites :
• Clé "auth" truthy vs rôles fins.

Considérations de performance :
• Check O(1).

Exemples :
• Bob sans auth.

Remarques :
• Réponse : autorisation / permissions (1re option).`,

  2335: `Retirer un décorateur après coup ?

Débutant :
• Pas d’undecorate built-in ; avec @wraps, __wrapped__ référence l’original pour réassigner.

Intermédiaire :
• Sans wraps, l’original peut rester seulement dans une closure fermée.

Expert :
• inspect.unwrap enlève plusieurs couches.

Concepts clés :
• f = f.__wrapped__ manuel.

Distinctions clés :
• Pas del @ ni fonction undecorate standard.

Fonctionnement :
• Chaîne de wrappers dépilable si __wrapped__ présent.

Exécution étape par étape :
• Accès attribut sur le wrapper.

Ordre des opérations :
• Tests peuvent monkeypatch.

Cas d'utilisation courants :
• Tests unitaires ciblant la fonction nue.

Cas limites :
• Décoration sans wraps : récupération dure.

Considérations de performance :
• N/A.

Exemples :
• Voir banque hello.__wrapped__.

Remarques :
• Réponse : difficile ; __wrapped__ si wraps (1re option).`,

  2336: `f.__wrapped__ is not None avec @wraps

Débutant :
• @wraps installe __wrapped__ vers la fonction d’origine → référence non None → True.

Intermédiaire :
• f est le wrapper mais expose l’original.

Expert :
• inspect.unwrap utilise cette chaîne.

Concepts clés :
• Pointeur vers cible interne.

Distinctions clés :
• Pas False.

Fonctionnement :
• update_wrapper définit l’attribut.

Exécution étape par étape :
• Après décoration complète.

Ordre des opérations :
• Lecture booléenne.

Cas d'utilisation courants :
• Introspection, tests.

Cas limites :
• Multiples wraps : chaîne __wrapped__.__wrapped__.

Considérations de performance :
• N/A.

Exemples :
• callable(f.__wrapped__) True.

Remarques :
• Réponse : True (1re option).`,

  2337: `lambda et syntaxe @

Débutant :
• @ exige une déclaration def ou class ; pas @ avant lambda. Décoration manuelle : g = dec(lambda: ...).

Intermédiaire :
• lambda reste une expression.

Expert :
• AST alternatif pour outils, pas pour le langage standard.

Concepts clés :
• g = decorator(lambda x: x).

Distinctions clés :
• Pas interdit de décorer l’objet lambda, seulement la forme @.

Fonctionnement :
• Assignation classique.

Exécution étape par étape :
• Création lambda puis appel décorateur.

Ordre des opérations :
• Même sémantique qu’avec def.

Cas d'utilisation courants :
• petits handlers.

Cas limites :
• __name__ "<lambda>".

Considérations de performance :
• N/A.

Exemples :
• logged_double = log(lambda x: x*2).

Remarques :
• Réponse : pas de @ sur lambda ; assignation manuelle ok (1re option).`,

  2338: `w.__doc__ = "wrapped" avant return — f.__doc__

Débutant :
• Le nom f référence w ; __doc__ du wrapper vaut "wrapped", pas "original".

Intermédiaire :
• Avec @wraps(f), on copierait la doc d’origine.

Expert :
• Documentation trompeuse sans wraps.

Concepts clés :
• Métadonnées du callable effectif.

Distinctions clés :
• Pas "original".

Fonctionnement :
• Assignation explicite sur w.

Exécution étape par étape :
• Lecture après @dec.

Ordre des opérations :
• Ordre des lignes dans dec.

Cas d'utilisation courants :
• Doc custom du wrapper.

Cas limites :
• None par défaut sans assignation.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : "wrapped" (1re option).`,

  2339: `print("decorating") dans dec — quand s’affiche-t-il ?

Débutant :
• Au moment où @dec s’applique (définition / import), car dec(f) est appelé immédiatement.

Intermédiaire :
• Les appels ultérieurs à f() n’exécutent que w sans re-décorer.

Expert :
• Effets de bord lourds au import : piège classique.

Concepts clés :
• Décoration ≠ appel utilisateur.

Distinctions clés :
• Pas seulement quand f() est invoqué.

Fonctionnement :
• EVAL après def crée f puis appelle dec.

Exécution étape par étape :
• print dans corps de dec avant return w.

Ordre des opérations :
• Module load order.

Cas d'utilisation courants :
• Enregistrement de routes au import.

Cas limites :
• Reload, import circulaire.

Considérations de performance :
• Travail import-time.

Exemples :
• defining function prints once.

Remarques :
• Réponse : à la décoration, pas à chaque appel (1re option).`,

  2340: `Un décorateur peut-il modifier les arguments ?

Débutant :
• Oui : le wrapper reçoit *args/**kwargs, les transforme, puis appelle f avec la nouvelle forme.

Intermédiaire :
• Validation, coercion, injection de défauts.

Expert :
• Signature inspectée peut diverger : attention outils.

Concepts clés :
• Point de contrôle total avant l’original.

Distinctions clés :
• Pas « toujours inchangés ».

Fonctionnement :
• Rebind args localement.

Exécution étape par étape :
• double_first_arg exemple banque.

Ordre des opérations :
• Transformation puis CALL.

Cas d'utilisation courants :
• Normalisation types, auth context.

Cas limites :
• Erreurs si signature incompatible après tweak.

Considérations de performance :
• Coût de copie/tuple rebuild.

Exemples :
• add(3,4) → x doublé → 10.

Remarques :
• Réponse : oui (1re option).`,

  2341: `@dataclass class Point x,y — p = Point(1,2) p.x

Débutant :
• @dataclass génère __init__ à partir des annotations ; p.x est 1.

Intermédiaire :
• __repr__ et __eq__ aussi par défaut.

Expert :
• field(default_factory=...) pour mutables.

Concepts clés :
• Réduction de boilerplate.

Distinctions clés :
• Pas erreur ni tuple seul.

Fonctionnement :
• Code généré assigne self.x.

Exécution étape par étape :
• Point(1,2) remplit les champs.

Ordre des opérations :
• Ordre des champs = ordre des annotations.

Cas d'utilisation courants :
• DTO, configs.

Cas limites :
• __post_init__, frozen=True.

Considérations de performance :
• Légèrement plus lent qu’un simple tuple nommé pour micro-benchs.

Exemples :
• p.y → 2.

Remarques :
• Réponse : 1 (1re option).`,

  2342: `@dataclass génère quelles méthodes par défaut ?

Débutant :
• __init__, __repr__, __eq__ au minimum par défaut.

Intermédiaire :
• __hash__ seulement sous conditions (frozen, eq).

Expert :
• order=True ajoute les comparaisons riches.

Concepts clés :
• Méthodes spéciales auto.

Distinctions clés :
• Pas __lt__ par défaut sans order.

Fonctionnement :
• dataclasses machinery inspecte annotations.

Exécution étape par étape :
• À la création de la classe.

Ordre des opérations :
• Paramètres du décorateur dataclass(...) modulent.

Cas d'utilisation courants :
• Égalité structurelle.

Cas limites :
• eq=False change la donne.

Considérations de performance :
• __eq__ compare champs.

Exemples :
• Point(1,2)==Point(1,2).

Remarques :
• Réponse : __init__, __repr__, __eq__ (1re option).`,

  2343: `add_method(cls) cls.greet = lambda self: "hi" — C().greet()

Débutant :
• Décorateur de classe ajoute un attribut callable ; sur instance, liaison self → "hi".

Intermédiaire :
• Fonction lambda devient fonction dans le dict de classe.

Expert :
• types.MethodType si besoin de rattacher différemment.

Concepts clés :
• Mutation de classe après définition.

Distinctions clés :
• Pas erreur.

Fonctionnement :
• Descriptor function → méthode liée.

Exécution étape par étape :
• greet trouvé sur le type.

Ordre des opérations :
• @add_method après corps class.

Cas d'utilisation courants :
• Mixins dynamiques.

Cas limites :
• lambda sans annotation types.

Considérations de performance :
• N/A.

Exemples :
• hasattr(C,'greet').

Remarques :
• Réponse : "hi" (1re option).`,

  2344: `class Decorator avec count — trois hello() puis hello.count

Débutant :
• hello est une instance ; chaque appel __call__ incrémente self.count ; après 3 appels, count vaut 3.

Intermédiaire :
• count vit sur l’instance décorateur, pas sur la fonction brute.

Expert :
• thread-safety non garanti.

Concepts clés :
• État mutable sur objet callable.

Distinctions clés :
• Pas 0 ni 1 après trois appels.

Fonctionnement :
• self.count += 1 avant self.f().

Exécution étape par étape :
• Trois traversées de __call__.

Ordre des opérations :
• Lecture hello.count après séquence.

Cas d'utilisation courants :
• quotas, métriques.

Cas limites :
• Réinitialisation manuelle nécessaire.

Considérations de performance :
• Incrément négligeable.

Exemples :
• Voir banque.

Remarques :
• Réponse : 3 (1re option).`,

  2345: `trace avec -> et <- prints — rôle

Débutant :
• Trace entrée et sortie avec valeur retournée imprimée après l’appel.

Intermédiaire :
• Utile pour récursion et pipelines.

Expert :
• Remplacer par logging structured.

Concepts clés :
• Deux hooks autour de f.

Distinctions clés :
• Pas blocage ni entrée seule.

Fonctionnement :
• print avant, r=f, print après, return r.

Exécution étape par étape :
• Ordre garanti sauf exception avant second print.

Ordre des opérations :
• Exception : sortie sans <- sauf finally externe.

Cas d'utilisation courants :
• Debug algorithmes.

Cas limites :
• Objets volumineux dans print.

Considérations de performance :
• I/O.

Exemples :
• add trace 7.

Remarques :
• Réponse : entrée + sortie avec retour (1re option).`,

  2346: `abc.abstractmethod — qu’est-ce ?

Débutant :
• Décorateur qui marque une méthode comme abstraite : les sous-classes concrètes doivent l’implémenter avant instanciation.

Intermédiaire :
• ABCMeta + __isabstractmethod__.

Expert :
• combine avec @property possible (ordre des décorateurs compte).

Concepts clés :
• Contrat d’interface en OOP Python.

Distinctions clés :
• Pas « rend privé ».

Fonctionnement :
• Instanciation bloquée si méthode abstraite restante.

Exécution étape par étape :
• TypeError à la construction si incomplet.

Ordre des opérations :
• Héritage multiple : union des abstract.

Cas d'utilisation courants :
• plugins, frameworks.

Cas limites :
• classes dynamiques.

Considérations de performance :
• Check à l’instanciation.

Exemples :
• Circle implémente area.

Remarques :
• Réponse : marqueur méthode abstraite (1re option).`,

  2347: `@functools.total_ordering

Débutant :
• Génère les méthodes de comparaison manquantes à partir de __eq__ et d’une des inégalités.

Intermédiaire :
• Évite six implémentations manuelles.

Expert :
• Peut être un peu plus lent que tout écrire à la main.

Concepts clés :
• Ordre total dérivé.

Distinctions clés :
• Pas tri automatique magique des instances globales.

Fonctionnement :
• Classe décorée reçoit __le__, __gt__, etc. synthétisés.

Exécution étape par étape :
• Appels Score(5) > Score(3) délèguent.

Ordre des opérations :
• Nécessite __eq__ + une relation d’ordre.

Cas d'utilisation courants :
• Clés triables simples.

Cas limites :
• Incohérence si __eq__ et __lt__ contradictoires.

Considérations de performance :
• Délégations multiples.

Exemples :
• Voir banque Score.

Remarques :
• Réponse : génère comparaisons depuis __eq__ + une autre (1re option).`,

  2348: `Comment le wrapper accède-t-il à l’original dans un décorateur fonction ?

Débutant :
• Par fermeture : f est une variable libre dans la portée englobante du wrapper.

Intermédiaire :
• __closure__ / cell_contents en introspection.

Expert :
• Équivalent à attribut self.f pour décorateur classe.

Concepts clés :
• Closure LEGB.

Distinctions clés :
• Pas variable globale ni import spécial.

Fonctionnement :
• CELL liée au frame du décorateur.

Exécution étape par étape :
• wrapper créé dans decorator(f).

Ordre des opérations :
• f capturé au moment où return wrapper.

Cas d'utilisation courants :
• Tous les décorateurs fonctions.

Cas limites :
• f rebinding rare si hack.

Considérations de performance :
• Closure très efficace.

Exemples :
• hello.__closure__.

Remarques :
• Réponse : via closure (1re option).`,

  2349: `@contextlib.contextmanager sur générateur

Débutant :
• Transforme une fonction générateur avec un yield unique en gestionnaire de contexte utilisable avec with.

Intermédiaire :
• Code avant yield = entrée, après = sortie (même en exception via GeneratorExit).

Expert :
• threading.Lock peut s’utiliser ainsi via contextmanager helper existant.

Concepts clés :
• __enter__/__exit__ synthétisés.

Distinctions clés :
• Pas async par défaut (autre décorateur).

Fonctionnement :
• _GeneratorContextManager.

Exécution étape par étape :
• with démarre générateur jusqu’au yield.

Ordre des opérations :
• finally implicite via suite du générateur.

Cas d'utilisation courants :
• ressources, timing, mocks.

Cas limites :
• yield plusieurs fois : erreur.

Considérations de performance :
• Léger overhead vs classe dédiée.

Exemples :
• Acquiring / Using / Releasing.

Remarques :
• Réponse : context manager pour with (1re option).`,

  2350: `@dec1 @dec2 def f — équivalent

Débutant :
• f = dec1(dec2(f_original)) : dec2 plus proche du def s’applique en premier.

Intermédiaire :
• Composition dec1 ∘ dec2 sur la fonction de base.

Expert :
• Vérifier avec des décorateurs qui marquent des chaînes comme dans la banque.

Concepts clés :
• Même règle que Q10–Q11.

Distinctions clés :
• Pas dec2(dec1(f)) pour cet ordre vertical.

Fonctionnement :
• Deux assignations imbriquées.

Exécution étape par étape :
• Création f, wrap interne, wrap externe.

Ordre des opérations :
• Lecture du fichier top-to-bottom mais application bottom-up.

Cas d'utilisation courants :
• auth + validation + route.

Cas limites :
• Ordre inverse change la chaîne.

Considérations de performance :
• Deux couches.

Exemples :
• '[(hi)]' exemple banque.

Remarques :
• Réponse : f = dec1(dec2(f)) (1re option).`,
};
