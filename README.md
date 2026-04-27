# KimuKoList

Une application web pour explorer des jeux vidéo et gérer ton catalogue personnel. Recherche des jeux, consulte leurs détails, et garde une trace de ce que tu joues, as terminé ou abandonné.

---

## Fonctionnalités technique du site

- **Explorer** : Recherche des jeux en temps réel grâce à la barre de recherche
- **Détails d'un jeu** : Clique sur un jeu pour voir sa description, sa note, ses genres, son développeur et son éditeur
- **Catalogue personnel** : Ajoute des jeux à ta liste avec un statut (En cours / Terminé / Abandonné)
- **Filtres** : Filtre ton catalogue par statut depuis la page "Mon catalogue"
- **Persistance** : Ton catalogue est sauvegardé dans le `localStorage` — il reste après fermeture du navigateur (très pratique)

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