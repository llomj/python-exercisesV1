/** Level 10 FR — bank IDs 3201–3204 (textwrap ×2, Template, logging intro). */
export default {
  3201: `import textwrap — textwrap.dedent("  hello\\n  world") — résultat ?

Débutant :
• Les espaces communs en tête de chaque ligne sont retirés : on obtient "hello\\nworld" sans indentation de bloc.

Intermédiaire :
• Seules les lignes « vides » avec espaces sont normalisées ; la coupure de ligne est conservée.

Expert :
• Utile pour réaligner des chaînes littérales indentées comme du code dans le source.

Concepts clés :
• dedent lit toutes les lignes et enlève le plus grand préfixe blanc partagé.

Distinctions clés :
• dedent vs strip() global vs lstrip ligne par ligne à la main.

Fonctionnement :
• Calcule la marge minimale non vide puis la retire à chaque ligne.

Exécution étape par étape :
1. Découpe en lignes.
2. Trouve l’indentation minimale.
3. Retire ce préfixe ; première ligne vide ignorée pour le calcul.

Ordre des opérations :
• Pas d’évaluation Python des sous-chaînes : traitement texte pur.

Cas d'utilisation courants :
• Docstrings ou snippets SQL/HTML indentés dans le fichier .py.

Cas limites :
• Mélange tabs/espaces peut surprendre ; mélange d’indentations profondes différentes.

Considérations de performance :
• Linéaire en taille de chaîne.

Exemples :
• dedent('''\\n  a\\n    b''') aligne sur la marge réelle.

Remarques :
• Réponse : "hello\\nworld" — 1re option.`,
  3202: `from string import Template — Template("Hello $name").substitute(name="World") ?

Débutant :
• "Hello World" : les placeholders $name sont remplacés par les clés du mapping.

Intermédiaire :
• substitute exige toutes les clés ; safe_substitute laisse le texte si manquant.

Expert :
• Moins flexible que str.format / f-strings mais utile pour entrées utilisateur (évite l’injection de format).

Concepts clés :
• Template PEP 292 ; syntaxe « dollar + identifiant » ou forme avec accolades.

Distinctions clés :
• Template vs format avec {} ; sécurité et erreurs différentes.

Fonctionnement :
• Parse le modèle, remplace par valeurs str() du dictionnaire.

Exécution étape par étape :
1. Crée l’objet Template.
2. substitute injecte name="World".
3. Retourne la chaîne finale.

Ordre des opérations :
• Remplacement après validation des noms attendus.

Cas d'utilisation courants :
• Messages i18n simples, modèles édités par des non-développeurs.

Cas limites :
• $$ pour un dollar littéral ; attributs $obj.attr non supportés comme en format.

Considérations de performance :
• Suffisant pour volumes modestes.

Exemples :
• Template("$$99").substitute() → "$99".

Remarques :
• Réponse : "Hello World" — 1re option.`,
  3203: `import logging — combien de niveaux « standard » documentés ?

Débutant :
• Cinq : DEBUG, INFO, WARNING, ERROR, CRITICAL (valeurs numériques croissantes).

Intermédiaire :
• NOTSET (0) existe en dessous mais n’est pas compté comme « niveau usuel » dans la question.

Expert :
• Le filtrage compare entiers ; le seuil du logger décide de l’émission.

Concepts clés :
• Hiérarchie de gravité.

Distinctions clés :
• 5 vs mention de NOTSET.

Fonctionnement :
• Chaque niveau est une constante entière prédéfinie.

Exécution étape par étape :
• Lecture de la doc / constantes du module.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Choix du niveau basicConfig.

Cas limites :
• Bibliothèques tierces peuvent logger en DEBUG très verbeux.

Considérations de performance :
• Coût surtout si handlers nombreux.

Exemples :
• logging.INFO typique pour services.

Remarques :
• Réponse : 5 — 1re option.`,
  3204: `import logging — niveau par défaut du logger racine sans configuration explicite ?

Débutant :
• WARNING : en dessous, DEBUG et INFO ne passent pas sur le handler par défaut.

Intermédiaire :
• basicConfig(level=logging.DEBUG) abaisse le seuil pour la durée du processus.

Expert :
• Les loggers enfants héritent du niveau du parent jusqu’à ajustement.

Concepts clés :
• Politique « bruit réduit » par défaut.

Distinctions clés :
• Niveau du logger vs niveau du handler.

Fonctionnement :
• lastResort handler stderr avec seuil WARNING.

Exécution étape par étape :
• Premier log ou getLogger root utilise ces défauts.

Ordre des opérations :
• Configuration utilisateur peut tout changer.

Cas d'utilisation courants :
• Scripts courts sans setup : voir seulement avertissements et erreurs.

Cas limites :
• Tests qui oublient basicConfig : absence de logs INFO attendus.

Considérations de performance :
• Moins de logs = moins d’I/O.

Exemples :
• print(logging.getLogger().level) peut montrer NOTSET sur l’objet mais le handler filtre WARNING.

Remarques :
• Réponse : WARNING — 1re option.`,
};
