# Wuthering Waves Helper

Wuthering Waves Helper est une application web destinée à aider les joueurs de Genshin Impact à optimiser leurs personnages et leurs équipes grâce à des guides détaillés sur les armes, artefacts, talents et synergies d'équipe.

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [EJS](https://ejs.co/)

## Installation

Suivez les étapes ci-dessous pour installer et exécuter l'application :

1. **Cloner le repository :**

   ```bash
   git clone (https://github.com/LeoPonchon/Wuthering-Waves-Helper.git)
   cd wuthering-waves-helper
   ```

2. **Démarrer les conteneurs Docker :**

   Utilisez Docker Compose pour démarrer les services nécessaires en arrière-plan.

   ```bash
   docker compose up -d
   ```

3. **Accéder à l'application :**

   Ouvrez votre navigateur web et rendez-vous à l'adresse suivante :

   ```
   http://localhost:4000
   ```

   Vous pouvez changer le port par défaut (4000) en modifiant la variable `PORT` dans le fichier `.env`.

## Configuration

Pour personnaliser la configuration de l'application, modifiez le fichier `.env` situé à la racine du projet. Voici un exemple de contenu pour le fichier `.env` :

```dotenv
PORT=4000
# Ajoutez d'autres variables de configuration ici
```
