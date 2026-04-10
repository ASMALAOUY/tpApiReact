# TP – Consommer une API avec React (fetch & axios)

##  Description

Ce projet est une application React qui permet de consommer une API REST en utilisant deux méthodes :

* `fetch()` (méthode native JavaScript)
* `axios` (librairie externe)

L'application affiche :

*  une liste d’articles (avec fetch)
*  une liste d’utilisateurs (avec axios)

---
## Demo

https://github.com/user-attachments/assets/32b6c0e1-26ed-4dff-a26c-9ab03a54b23a


##  Technologies utilisées

* React JS
* JavaScript (ES6)
* Axios
* HTML / CSS

---

##  Installation du projet

### 1. Cloner le projet

```bash
git clone https://github.com/votre-username/tp-api.git
```

### 2. Accéder au dossier

```bash
cd tp-api
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Installer Axios

```bash
npm install axios
```

### 5. Lancer l’application

```bash
npm start
```

 L'application sera disponible sur :

```
http://localhost:3000
```

---

##  Structure du projet

```
tp-api/
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── FetchData.js
│   ├── AxiosData.js
│
├── public/
├── package.json
└── README.md
```

---

##  Fonctionnalités

###  FetchData (fetch)

* Récupère des articles depuis une API
* Affiche 5 articles
* Gestion du chargement (loading)
* Gestion des erreurs
* Bouton "Recharger"

###  AxiosData (axios)

* Récupère des utilisateurs
* Affiche nom, email et ville
* Gestion du chargement
* Gestion des erreurs
* Bouton "Recharger"

---

##  API utilisée

* https://jsonplaceholder.typicode.com/

Endpoints utilisés :

* `/posts`
* `/users`

---

##  Interface utilisateur

* Design moderne avec CSS
* Cards (cartes) pour chaque section
* Boutons interactifs
* Responsive (adapté aux écrans)

---

##  Différence entre fetch et axios

| fetch()               | axios                       |
| --------------------- | --------------------------- |
| intégré au navigateur | librairie externe           |
| nécessite `.json()`   | réponse directe avec `data` |
| plus verbeux          | plus simple                 |

---


##  Gestion des erreurs

L'application gère :

* erreurs réseau
* erreurs serveur
* affichage des messages d’erreur

---

##  Auteur

* Nom : *ASMA LAOUY
