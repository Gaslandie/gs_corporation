# AGENTS.md — GS Corporation

## Rôle du projet

Ce projet est une maquette statique professionnelle pour le site web de GS Corporation.

Le projet doit être développé progressivement avec Claude Code ou Codex, sous supervision de Mohamed.

Mohamed supervise seulement. Ne pas lui demander d’écrire le code à la main.

## Stack

Utiliser :

- Next.js avec App Router ;
- JavaScript ;
- Bootstrap 5 ;
- Bootstrap Icons ;
- CSS personnalisé ;
- données statiques quand nécessaire.

Ne pas utiliser pour le moment :

- backend ;
- MongoDB ;
- Spring Boot ;
- dashboard admin ;
- authentification ;
- API dynamique ;
- Tailwind CSS.

## Règles de code

Toujours penser à la refactorisation.

Centraliser tout ce qui peut être centralisé :

- couleurs ;
- tailles de texte ;
- espacements ;
- boutons ;
- ombres ;
- bordures ;
- styles de sections ;
- styles de cartes ;
- constantes réutilisables.

Éviter le code dupliqué.

Toutes les couleurs, tailles, espacements et styles réutilisables doivent être centralisés (dans `globals.css` et `src/data`) avant d’être utilisés dans plusieurs composants.

Préparer une structure facile à transformer plus tard en site dynamique Next.js complet.

## Design

Le site doit s’inspirer fortement du style corporate du site Dangote, sans le copier.

Le rendu doit être :

- professionnel ;
- moderne ;
- institutionnel ;
- responsive ;
- propre ;
- crédible pour un groupe multisectoriel.

Chaque page doit respecter les couleurs du logo ou du document correspondant.

Thèmes à respecter (chaque département suit son logo / document client) :

- GS Corporation : rouge, bleu marine, gris, blanc ;
- GS Consulting : bleu marine, jaune, blanc ;
- GS Logistique : bleu marine, orange, gris, blanc ;
- GS Immobilier : bleu marine, marron/or, gris, blanc ;
- GS Agrobusiness : vert, bleu marine, gris, blanc ;
- Les Foreurs de Guinée : bleu ciel/cyan, bleu pétrole foncé, marron/or, gris, blanc.

Note : Les Foreurs de Guinée n'utilise plus le rouge (mise à jour selon le document client).

Les couleurs de chaque département sont centralisées dans les classes de thème de `src/app/globals.css` (`theme-consulting`, `theme-logistique`, `theme-immobilier`, `theme-agrobusiness`, `theme-foreurs`).

## UI / UX

Éviter que les sections se touchent.

Respecter des espacements professionnels entre les sections.

Les boutons ne doivent être ni trop gros ni trop petits.

Respecter les standards Bootstrap et les bonnes pratiques d’interface.

La maquette doit être présentable au client.

## Git

Tous les messages de commit doivent être en français.

Exemples :

- `Initialisation du projet Next.js GS Corporation`
- `Ajout des règles agents du projet`
- `Ajout de la structure de base`
- `Ajout de la page d’accueil`
- `Centralisation des variables de style`

## Documentation

Avant de préparer ou modifier une partie technique importante, vérifier les documentations officielles en ligne quand c’est nécessaire.

Toujours privilégier les méthodes actuelles et recommandées.

## Programme client

Prévoir plus tard un programme de travail sur 30 jours à partager avec le client.

Ne pas le créer dans cette première étape sauf demande explicite.
