# KimuKoList

Une application web pour explorer des jeux vidéo et gérer ton catalogue personnel. Recherche des jeux, consulte leurs détails, et garde une trace de ce que tu joues, as terminé ou abandonné.

---

## Fonctionnalités technique du site

- **Explorer** : Recherche des jeux en temps réel grâce à la barre de recherche
- **Détails d'un jeu** : Clique sur un jeu pour voir sa description, sa note, ses genres, son développeur et son éditeur
- **Catalogue personnel** : Ajoute des jeux à une liste avec un statut (En cours / Terminé / Abandonné)
- **Filtres** : Filtre ton catalogue par statut depuis la page "Mon catalogue"
- **Persistance** : catalogue est sauvegardé dans le `localStorage` il reste après fermeture du navigateur utilisation du "useContext et createContext" (très pratique)

---

## Installation

### Prérequis

- Une clé API RAWG (gratuite sur [rawg.io/apidocs](https://rawg.io/apidocs)) limite de 20k requête + création de compte obligatoire

### Étapes pour lancer le projet sur sa machine

```bash
# Cloner le repo
git clone https://github.com/Hurtrex/KimukoListPublic
cd kimukolist

# Installer les dépendances
npm install

# Créer le fichier d'environnement
echo "VITE_API_KEY=ta_cle_api_rawg" > .env

# Lancer en développement
npm run dev
```

---

### L'application web final en ligne
https://kimukolist.onrender.com/

### Features à ajouter dans le future
- Filtre dans la bar de recherche.
- Faire en sorte que lorsque l'on cherche un jeux, celui avec le plus de review sort en premier pour éviter que la recherche soit remplit de jeux inutile.
- Rendre le site plus moderne.
- Rendre les GamesCards plus beaux plus d'info sans rendre la page encombré.
- Plus de jeux soit montré lors de la recherche
- Un "Game of the day" qui montre un jeux aléatoire pour faire explorér le client
- Très ambitieux mais un système qui permettrai de suivre les achievements comme https://steamhunters.com/ ou https://truesteamachievements.com/