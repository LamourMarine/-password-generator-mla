# Générateur de mots de passe sécurisé

L'objectif est de créer une petite application web permettant de générer des mots de passe sécurisés en fonction de la longueur choisie par l'utilisateur.

<div align="center">
    <img src="./images/password-generator.svg" alt="password-generator.svg" style="width: 500px !important;">
</div>

## Contexte du projet

Je suis formateur en développement web et je vais aborder des notions fondamentales telles que l'interaction JavaScript/HTML et la personnalisation de l'interface utilisateur.  
J'ai besoin d'une application qui permet de générer un mot de passe aléatoire en fonction d'une longueur donnée par l'utilisateur, comprise entre 12 et 128 caractères.

L'utilisateur pourra interagir directement avec l'application via un bouton pour générer un mot de passe, ainsi qu'un champ de saisie pour définir la longueur souhaitée du mot de passe.

À vous de jouer 😃!

## Modalités pédagogiques

**Activité individuelle en mode collaboratif.**

### Étape 1 : Création de l'interface utilisateur

- Implémentez une interface utilisateur simple avec un bouton pour générer un mot de passe et un champ d'entrée pour spécifier la longueur du mot de passe.
- Ajoutez un conteneur pour afficher le mot de passe généré.

Exemples dans le dossier `models`.

### Étape 2 : Logique de génération des mots de passe

- Implémentez une fonction JavaScript pour générer un mot de passe aléatoire en fonction de la longueur définie par l'utilisateur.
- Assurez-vous que le mot de passe contient des caractères variés : majuscules, minuscules, chiffres et caractères spéciaux.
- Utilisez des méthodes JavaScript comme `Math.random()` et `charAt()` pour sélectionner aléatoirement des caractères dans une chaîne prédéfinie.

### Étape 3 : Interaction et personnalisation

- Connectez le bouton de génération de mot de passe avec la fonction JavaScript pour mettre à jour dynamiquement le mot de passe dans l'interface utilisateur lorsque l'utilisateur clique sur le bouton.
- Ajoutez des contrôles pour définir les contraintes de longueur du mot de passe (entre 12 et 128 caractères).

### Bonus

- Ajoutez la possibilité de choisir différents types de caractères à inclure dans le mot de passe (chiffres, lettres, symboles).

### Deadline

Livraison du projet dans les 24 heures à compter du début du brief.

## Modalités d'évaluation

- Correction entre pairs à l'aide d'une grille d'évaluation.

## Livrables

- Un dépôt GitHub.
- Un screen de votre grille d'évaluation.

## Critères de performance

- Ajoutez la grille d'évaluation ci-dessous dans le README de la personne que vous corrigez.
- Pensez à compléter le ***nom de la personne corrigée*** et le ***nom du correcteur*** dans l'entête du tableau.
- Indiquez le **nombre d'étoiles obtenues** (l'étoile d'une catégorie est obtenue si tous ses critères de performance sont validés).

| *Marine*                               |                               | *Térence *                |
|  :---- | :----: | :----: |
| Critères de performance                |                               | Remarques du correcteur   |
| ***Interface utilisateur***            |                               |                           |
| - L'interface est claire et intuitive  | <ul><li>- [x] &nbsp;</li><ul> |                           |
| - Respect des contraintes de longueur  | <ul><li>- [x] &nbsp;</li><ul> |                           |
|                                        | <ul><li>- [x] ⭐</li><ul>     |                           |
| ***Fonctionnalités***                  |                               |                           |
| - Génération correcte de mots de passe | <ul><li>- [x] &nbsp;</li><ul> |                           |
| - Inclusion de caractères variés       | <ul><li>- [x] &nbsp;</li><ul> |                           |
| - Réactivité du bouton de génération   | <ul><li>- [x] &nbsp;</li><ul> |                           |
| - Gestion des erreurs d'entrée         | <ul><li>- [x] &nbsp;</li><ul> |                           |
|                                        | <ul><li>- [x] ⭐</li><ul>     |                           |
| ***Code***                             |                               |                           |
| - Organisation et lisibilité du code   | <ul><li>- [x] &nbsp;</li><ul> |                           |
| - Respect des bonnes pratiques JS/HTML | <ul><li>- [x] &nbsp;</li><ul> |                           |
| - Commentaires dans le code            | <ul><li>- [x] &nbsp;</li><ul> |                           |
|                                        | <ul><li>- [x] ⭐</li><ul>     |                           |
| ***Bonus***                            |                               |                           |
| - Ajout d'options supplémentaires      | <ul><li>- [x] &nbsp;</li><ul> |                           |
|                                        | <ul><li>- [x] ⭐</li><ul>     |                           |
| ***Livrables***                        |                               |                           |
| - Projet livré dans les délais         | <ul><li>- [x] &nbsp;</li><ul> |                           |
|                                        | <ul><li>- [x] ⭐</li><ul>     |                           |

**Nombre d'étoiles obtenues** : ⭐⭐⭐⭐⭐

## Ressources

- [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)

## Auteurs, contributeurs

- [Nicolas Herbez](https://github.com/nicolas-herbez)
