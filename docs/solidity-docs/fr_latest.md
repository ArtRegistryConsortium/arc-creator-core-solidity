  *   * Solidity
  * Éditer sur GitHub


# Solidity
Avertissement
You are reading a community translation of the Solidity documentation. The Solidity team can give no guarantees on the quality and accuracy of the translations provided. The English reference version is and will remain the only officially supported version by the Solidity team and will always be the most accurate and most up-to-date one. When in doubt, please always refer to the English (original) documentation.
Solidity est un langage orienté objet et de haut niveau pour la mise en œuvre de contrats intelligents. Les contrats intelligents sont des programmes qui régissent le comportement des comptes dans l’état Ethereum.
Solidity est un langage d’accolades. Il est influencé par le C++, le Python et le JavaScript, et est conçu pour cibler la machine virtuelle Ethereum (EVM). Vous pouvez trouver plus de détails sur les langages dont Solidity s’est inspiré dans la section sur les influences linguistiques.
Solidity est typée statiquement, supporte l’héritage, les bibliothèques et les types complexes définis par l’utilisateur, entre autres caractéristiques.
Avec Solidity, vous pouvez créer des contrats pour des utilisations telles que le vote, le crowdfunding, les enchères à l’aveugle et les portefeuilles à signatures multiples.
Lorsque vous déployez des contrats, vous devez utiliser la dernière version publiée de Solidity. Sauf cas exceptionnel, seule la dernière version reçoit des correctifs de sécurité. En outre, les changements de rupture ainsi que les nouvelles fonctionnalités sont introduites régulièrement. Nous utilisons actuellement un numéro de version 0.y.z pour indiquer ce rythme rapide de changement.
Avertissement
Solidity a récemment publié la version 0.8.x qui a introduit de nombreux changements. Assurez-vous de lire la liste complète.
Les idées pour améliorer Solidity ou cette documentation sont toujours les bienvenues, lisez notre guide des contributeurs pour plus de détails.
Astuce
Vous pouvez télécharger cette documentation au format PDF, HTML ou Epub en cliquant sur le menu déroulant des versions dans le coin inférieur gauche et en sélectionnant le format de téléchargement préféré.
## Pour commencer
**1. Comprendre les bases des contrats intelligents**
Si le concept des contrats intelligents est nouveau pour vous, nous vous recommandons de commencer par vous plonger dans la section « Introduction aux contrats intelligents ». dans la section « Introduction aux contrats intelligents », qui couvre :
  * Un exemple simple de smart contract écrit sous Solidity.
  * Les bases de la blockchain.
  * La Ethereum Virtual Machine.


**2. Apprenez à connaître Solidity**
Une fois que vous êtes habitué aux bases, nous vous recommandons de lire les sections « Solidity by Example » et « Description du langage » pour comprendre les concepts fondamentaux du langage.
**3. Installer le compilateur Solidity**
Il existe plusieurs façons d’installer le compilateur Solidity. Il vous suffit de choisir votre option préférée et de suivre les étapes décrites sur la installation page.
Indication
Vous pouvez essayer des exemples de code directement dans votre navigateur grâce à la fonction Remix IDE. Remix est un IDE basé sur un navigateur web qui vous permet d’écrire, de déployer et d’administrer les smart contracts Solidity, sans avoir à sans avoir besoin d’installer Solidity localement.
Avertissement
Comme les humains écrivent des logiciels, ceux-ci peuvent comporter des bugs. Vous devez suivre les meilleures pratiques établies en matière de développement de logiciels lorsque vous écrivez vos contrats intelligents. Cela inclut la révision du code, les tests, les audits et les preuves de correction. Les utilisateurs de contrats intelligents sont parfois plus confiants dans le code que ses auteurs, et les blockchains et les contrats intelligents ont leurs propres problèmes à surveiller. Avant de travailler sur le code de production, assurez-vous de lire la section Considérations de sécurité.
**4. En savoir plus**
Si vous souhaitez en savoir plus sur la création d’applications décentralisées sur Ethereum, le programme Ethereum Developer Resources peut vous aider à trouver de la documentation générale sur Ethereum, ainsi qu’une large sélection de tutoriels, d’outils et de cadres de développement.
Si vous avez des questions, vous pouvez essayer de chercher des réponses ou de les poser sur Ethereum StackExchange, ou sur notre salon Gitter.
## Traductions
Des bénévoles de la communauté aident à traduire cette documentation en plusieurs langues. Leur degré d’exhaustivité et de mise à jour varie. La version anglaise est une référence.
Note
Nous avons récemment mis en place une nouvelle organisation GitHub et un nouveau flux de traduction pour aider à rationaliser les efforts de la communauté. Veuillez vous référer au guide de traduction pour obtenir des informations sur la manière de contribuer aux traductions communautaires en cours.
  * Français
  * Italien (en cours)
  * Japonais
  * Coréen (en cours)
  * Russe (rather outdated)
  * Chinois simplifié (en cours)
  * Espagnol
  * Turc (partiel)


# Contenu
Index des mots-clés, Page de recherche
Principes de base
  * Introduction Aux Smart Contracts
    * Un Simple Smart Contract
    * Les bases de la blockchain
    * La machine virtuelle Ethereum
  * Installation du compilateur Solidity
    * Versionnage
    * Remix
    * npm / Node.js
    * Docker
    * Paquets Linux
    * Paquets macOS
    * Binaires statiques
    * Construire à partir de la source
    * Options CMake
    * La chaîne de version en détail
    * Informations importantes sur les versions
  * Solidity par l’exemple
    * Contrat de Vote
    * Enchères à l’aveugle
    * Achat à distance sécurisé
    * Canal de micropaiement
    * Contrats modulaires (Librairie)


Description de la langue
  * Mise en page d’un fichier source Solidity
    * Identificateur de licence SPDX
    * Pragmas
    * Importation d’autres fichiers sources
    * Commentaires
  * Structure d’un contrat
    * Variables d’état
    * Fonctions
    * Modificateurs de fonction
    * Événements
    * Erreurs
    * Types de structures
    * Types d’Enum
  * Types
    * Value Types
    * Reference Types
    * Type Mapping
    * Les opérateurs (arithmetique)
    * Conversions entre types élémentaires
    * Conversions entre littéraux et types élémentaires
  * Unités et variables disponibles dans le monde entier
    * Unités d’éther
    * Unités de temps
    * Variables et fonctions spéciales
  * Expressions et structures de contrôle
    * Structures de contrôle
    * Appels de fonction
    * Créer des contrats via `new` (nouveau)
    * Ordre d’évaluation des expressions
    * Affectation
    * Champ d’application et déclarations
    * Arithmétique vérifiée ou non vérifiée
    * Gestion des erreurs : Assert, Require, Revert et Exceptions
  * Contrats
    * Création de contrats
    * Visibilité et Getters
    * Modificateurs de fonction
    * Variables d’état constantes et immuables
    * Fonctions
    * Événements
    * Les erreurs et la déclaration de retour en arrière
    * Héritage
    * Contrats abstraits
    * Interfaces
    * Bibliothèques
    * Utiliser For
  * Assemblage en ligne
    * Exemple
    * Accès aux variables, fonctions et bibliothèques externes
    * Choses à éviter
    * Conventions dans Solidity
  * Aide-mémoire
    * Ordre de Préséance des Opérateurs
    * Variables Globales
    * Spécification de la Visibilité des Fonctions
    * Modificateurs
    * Mots clés réservés
  * Langue Grammaire


Compilateur
  * Utilisation du compilateur
    * Utilisation du compilateur en ligne de commande
    * Réglage de la version de l’EVM sur la cible
    * Description JSON des entrées et sorties du compilateur
    * Outils de compilation
  * Analyse de la sortie du compilateur
  * Changements apportés au Codegen basé sur Solidity IR
    * Changements uniquement sémantiques
    * Internes


Internes
  * Disposition des variables d’état dans le stockage
    * Mappings et tableaux dynamiques
    * Sortie JSON
  * Mise en page en mémoire
    * Différences par rapport à l’agencement du stockage
  * Mise en page des données d’appel
  * Nettoyer les variables
  * Source Mappings (SourceMap de Compilation)
  * L’optimiseur
    * Avantages de l’optimisation du code Solidity
    * Différences entre le code optimisé et le code non optimisé
    * Exécution des paramètres de l’optimiseur
    * Module d’optimisation basé sur l’opcode
    * Module optimiseur basé sur Yul
  * Métadonnées du contrat
    * Encodage du hachage des métadonnées dans le bytecode
    * Utilisation pour la génération automatique d’interface et NatSpec
    * Utilisation pour la vérification du code source
  * Spécification ABI pour les contrats
    * Conception de base
    * Sélecteur de fonctions
    * Codage des arguments
    * Types
    * Critères de conception pour l’encodage
    * Spécification formelle de l’encodage
    * Sélecteur de fonctions et codage des arguments
    * Exemples
    * Utilisation des types dynamiques
    * Événements
    * Erreurs
    * JSON
    * Mode de codage strict
    * Mode Packed non standard
    * Codage des paramètres d’événements indexés


Matériel supplémentaire
  * Solidity v0.5.0 Changements de rupture
    * Changements uniquement sémantiques
    * Changements sémantiques et syntaxiques
    * Exigences d’explicitation
    * Éléments dépréciés
    * Interopérabilité avec les anciens contrats
    * Exemple
  * Solidity v0.6.0 Changements de rupture
    * Changements dont le compilateur pourrait ne pas être averti
    * Exigences d’explicitation
    * Changements sémantiques et syntaxiques
    * Nouvelles fonctionnalités
    * Changements d’interface
    * Comment mettre à jour votre code
  * Solidity v0.7.0 Changements de rupture
    * Changements silencieux de la sémantique
    * Modifications de la syntaxe
    * Suppression des fonctionnalités inutilisées ou dangereuses
    * Changements d’interface
    * Comment mettre à jour votre code
  * Solidity v0.8.0 Changements de rupture
    * Changements silencieux de la sémantique
    * Nouvelles restrictions
    * Changements d’interface
    * Comment mettre à jour votre code
  * Format NatSpec
    * Exemple de documentation
    * Tags
    * Sortie de documentation
  * Considérations de sécurité
    * Pièges
    * Recommandations
  * SMTChecker et vérification formelle
    * Tutoriel
    * Options et réglages de SMTChecker
    * Abstraction et faux positifs
    * Hypothèses du monde réel
  * Ressources
    * Ressources générales
    * Environnements de développement intégrés (Ethereum)
    * Intégrations de l’éditeur
    * Outils Solidity
    * Analyseurs et grammaires Solidity tiers
  * Résolution du chemin d’importation
    * Système de fichiers virtuel
    * Importations
    * Chemin de base et chemins d’inclusion
    * Chemins autorisés
    * Remappage des importations
    * Utilisation des URLs dans les importations
  * Yul
    * Motivation et description de haut niveau
    * Exemple simple
    * Utilisation autonome
    * Description informelle de Yul
    * Spécification de Yul
    * Spécification de l’objet Yul
    * Optimiseur de Yul
    * Exemple complet d’ERC20
  * Guide de style
    * Introduction
    * Présentation du code
    * Ordre de mise en page
    * Conventions d’appellation
    * NatSpec
  * Modèles communs
    * Retrait des contrats
    * Restriction de l’accès
    * Machine à états
  * Liste des bogues connus
  * Contribution
    * Appels de l’équipe
    * Comment signaler des problèmes
    * Flux de travail pour les demandes de Pull
    * Exécution des tests du compilateur
    * Exécution du Fuzzer via AFL
    * Moustaches
    * Guide de style de la documentation
    * Conception du langage Solidity
  * Guide de la marque Solidity
    * La marque Solidity
    * Nom de marque Solidity
    * Licence du logo Solidity
    * Directives relatives au logo Solidity
    * Crédits
  * Influences de la langue


