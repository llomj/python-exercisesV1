/** French detailed blocks Level 1 IDs 491–500 */
export default {
  491: `f"{1234567:_}" vaut "1_234_567" : le underscore dans le format groupe les milliers pour la lisibilité.

Débutant :
• Le séparateur _ est inséré entre groupes de trois chiffres depuis la droite.

Intermédiaire :
• Disponible pour int (et certaines versions pour float).

Expert :
• Ne change pas la valeur, seulement l'affichage.

Concepts clés :
• Séparateurs de milliers en formatage.

Distinctions clés :
• Affichage vs littéral Python 1_234_567 en code source.

Fonctionnement :
• Moteur de format insère _.

Exécution étape par étape :
1. Entier 1234567.
2. Insertion des _.

Ordre des opérations :
• f-string.

Cas d'utilisation courants :
• Logs de gros nombres.

Cas limites :
• Locales humaines différentes (virgule, espace).

Considérations de performance :
• Négligeable.

Exemples :
• f"{1000:_}"

Remarques :
• Pour vraie locale, module locale ou babel.`,
  492: `f"{ {1: 2} }" vaut exactement la chaîne "{1: 2}" (7 caractères) : le dict est converti en texte comme dans un print du mapping.

Débutant :
• Les accolades externes délimitent l'expression f-string ; l'intérieur {1: 2} est un dict littéral.

Intermédiaire :
• Pour afficher des accolades littérales dans une f-string, doublez-les {{ }}.

Expert :
• !r sur l'expression changerait la représentation (souvent avec quotes).

Concepts clés :
• f-string avec expression dict, conversion str implicite.

Distinctions clés :
• Affichage dict vs repr complet avec quotes parfois différent.

Fonctionnement :
• Évalue {1:2} puis format.

Exécution étape par étape :
1. Dict singleton.
2. str utilisée dans f-string.
3. Chaîne visible "{1: 2}".

Ordre des opérations :
• Expression puis assemblage.

Cas d'utilisation courants :
• Debug rapide de petits mappings.

Cas limites :
• Dict non trié en affichage avant 3.7 historique ; aujourd'hui ordre insertion.

Considérations de performance :
• Faible.

Exemples :
• f"{ {'a':1} }"

Remarques :
• json.dumps pour JSON réel.`,
  493: `"Name: %(name)s" % {"name": "Alice"} vaut "Name: Alice" : l'opérateur % avec dict nomme les placeholders %(name)s.

Débutant :
• %s attend une str ; Alice est injectée.

Intermédiaire :
• Un seul dict à droite ; clés doivent correspondre.

Expert :
• Moins souple que format ; attention sécurité si gabarit externe.

Concepts clés :
• Formatage % style printf, mapping.

Distinctions clés :
• % vs .format vs f-string.

Fonctionnement :
• Scan du gabarit et remplacement.

Exécution étape par étape :
1. Dict avec name.
2. Substitution.
3. Chaîne finale.

Ordre des opérations :
• Évaluation dict puis %.

Cas d'utilisation courants :
• Code legacy, SQL paramétré via drivers sûrs seulement.

Cas limites :
• Clé manquante → KeyError.

Considérations de performance :
• OK pour petits gabarits.

Exemples :
• "%(x)d" % {"x": 3}

Remarques :
• Évitez % pour concaténation utilisateur directe.`,
  494: `"Hello, {name}!".format_map({"name": "Bob"}) vaut "Hello, Bob!" : format_map lit directement le mapping sans copie via kwargs.

Débutant :
• {name} est remplacé par la valeur du dict.

Intermédiaire :
• Utile avec UserDict ou mappings custom.

Expert :
• Diffère de **kwargs qui exige identifiants Python valides.

Concepts clés :
• format_map, SimpleNamespace patterns.

Distinctions clés :
• format_map vs format(**d).

Fonctionnement :
• __getitem__ sur le mapping.

Exécution étape par étape :
1. Mapping Bob.
2. Substitution name.
3. Chaîne salutation.

Ordre des opérations :
• Évaluation dict puis format_map.

Cas d'utilisation courants :
• i18n, templates data-driven.

Cas limites :
• Clé absente → KeyError.

Considérations de performance :
• Comparable à format.

Exemples :
• collections.ChainMap usages

Remarques :
• f-string souvent plus lisible en interne.`,
  495: `ascii("café") utilise des échappements ASCII pour les non ASCII : chaîne comme 'caf\\xe9' avec quotes (repr-like).

Débutant :
• é devient séquence \\xe9 en hexadécimal du point de code.

Intermédiaire :
• Similaire à repr pour str non ASCII souvent.

Expert :
• Utile pour logs 7-bit sûrs.

Concepts clés :
• ascii(), échappement Unicode.

Distinctions clés :
• ascii vs str() naturel.

Fonctionnement :
• Remplace non ASCII par escapes.

Exécution étape par étape :
1. Texte café.
2. Produire forme échappée.

Ordre des opérations :
• Appel ascii.

Cas d'utilisation courants :
• Protocoles ASCII, debugging.

Cas limites :
• Lisibilité humaine réduite.

Considérations de performance :
• O(n).

Exemples :
• ascii("€")

Remarques :
• encode('unicode_escape') lié mais différent.`,
  496: `repr("hello") inclut souvent des quotes : "'hello'" ; str("hello") vaut "hello" : deux conversions affichage, objectifs différents.

Débutant :
• str : lisible ; repr : souvent réévaluable ou explicite.

Intermédiaire :
• En REPL, repr domine parfois pour ambiguïté.

Expert :
• __repr__ vs __str__ sur types custom.

Concepts clés :
• str vs repr.

Distinctions clés :
• f"{x!r}" force repr.

Fonctionnement :
• Appels PyObject_Str / Repr.

Exécution étape par étape :
1. Même objet "hello".
2. Deux représentations textuelles.

Ordre des opérations :
• Indépendants.

Cas d'utilisation courants :
• Logs techniques vs UI.

Cas limites :
• Caractères rares : longues séquences d'échappement.

Considérations de performance :
• Faible.

Exemples :
• repr("\\n")

Remarques :
• Choisissez selon audience.`,
  497: `isinstance("hello", str) vaut True : str est le type des chaînes Unicode.

Débutant :
• Vérifie le type (classe) de l'objet.

Intermédiaire :
• isinstance accepte tuple de types : isinstance(x,(str,bytes)).

Expert :
• Préféré à type(x)==str pour héritage (sous-classes).

Concepts clés :
• isinstance, introspection.

Distinctions clés :
• isinstance vs type(x) is str (pas de sous-types).

Fonctionnement :
• Parcourt la MRO.

Exécution étape par étape :
1. Objet str.
2. Classe str.
3. True.

Ordre des opérations :
• Appel isinstance.

Cas d'utilisation courants :
• Validation API, polymorphisme.

Cas limites :
• ABC register peut influencer.

Considérations de performance :
• O(1) typiquement.

Exemples :
• isinstance(1,int)

Remarques :
• Évitez isinstance abusif : duck typing souvent suffit.`,
  498: `isinstance(42, str) vaut False : un int n'est pas une str.

Débutant :
• Types distincts.

Intermédiaire :
• Conversion str(42) pour obtenir une str.

Expert :
• numpy scalars etc. peuvent surprendre hors stdlib.

Concepts clés :
• Typage, isinstance négatif.

Distinctions clés :
• 42 vs "42".

Fonctionnement :
• MRO ne contient pas str.

Exécution étape par étape :
1. int 42.
2. Test str.
3. False.

Ordre des opérations :
• isinstance.

Cas d'utilisation courants :
• Branches selon type.

Cas limites :
• bool subclass de int (True isinstance int).

Considérations de performance :
• O(1).

Exemples :
• isinstance(True,int)  # True

Remarques :
• Attention piège bool/int.`,
  499: `"2var".isidentifier() vaut False : un identifiant ne peut pas commencer par un chiffre.

Débutant :
• Règles lexicales Python pour noms.

Intermédiaire :
• isidentifier ne garantit pas que le nom n'est pas un mot-clé.

Expert :
• keyword.iskeyword séparement.

Concepts clés :
• isidentifier, lexique.

Distinctions clés :
• valide lexicalement vs mot réservé.

Fonctionnement :
• Vérifie pattern NAME.

Exécution étape par étape :
1. Chaîne "2var".
2. Premier caractère chiffre.
3. False.

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Valider noms de colonnes dynamiques.

Cas limites :
• Identifiants Unicode possibles selon règles.

Considérations de performance :
• O(len).

Exemples :
• "_ok".isidentifier()

Remarques :
• Normalisez avant test.`,
  500: `type("hello") is str vaut True en CPython : la classe de l'objet str littéral est exactement str (pas une sous-classe).

Débutant :
• type(x) retourne la classe.
• is compare identité de classe.

Intermédiaire :
• Pour instances utilisateur héritant de str, type peut différer.

Expert :
• isinstance plus souple pour sous-types.

Concepts clés :
• type(), is, classe built-in str.

Distinctions clés :
• type(x) is str vs isinstance(x,str).

Fonctionnement :
• Objet.__class__ comparé à str.

Exécution étape par étape :
1. "hello" instance de str.
2. type → str.
3. str is str → True.

Ordre des opérations :
• type puis is.

Cas d'utilisation courants :
• Tests stricts rares ; préférez isinstance.

Cas limites :
• Sous-classes : type n'est pas str.

Considérations de performance :
• O(1).

Exemples :
• type([]) is list

Remarques :
• En général API publique : isinstance.`,
};
