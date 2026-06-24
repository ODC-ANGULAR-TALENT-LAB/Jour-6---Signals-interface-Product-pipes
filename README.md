# Shop App

Application de boutique en ligne développée avec **Angular 22** dans le cadre du TP du Jour 5 (ODC Angular Talent Lab).

## Aperçu

L'application présente une vitrine de produits avec :

- un **header** vert collant (sticky) restant visible au défilement, avec la marque et la navigation (Home, Products, Blog, Contact) ;
- un **container** central blanc affichant un message d'accueil et la liste des produits ;
- un **footer** vert.

Les produits s'affichent sous forme de cartes disposées horizontalement et passant automatiquement à la ligne suivante lorsque la rangée est pleine. L'interface est **responsive** (ordinateur, tablette, mobile).

## Architecture des composants

```
src/app/
├── components/
│   ├── header/         # En-tête (marque + navigation)
│   ├── container/      # Zone centrale (titre + liste des produits)
│   ├── productlist/    # Liste des produits (boucle @for)
│   ├── productitem/    # Carte d'un produit (image, nom, prix)
│   └── footer/         # Pied de page
└── models/
    └── product.ts      # Interface Product
```

L'interface `Product` est définie dans `models/product.ts` et réutilisée par les composants.

## Prérequis

- [Node.js](https://nodejs.org/) (version LTS recommandée)
- npm

## Installation

```bash
npm install
```

## Lancer en développement

```bash
npm start
```

L'application est disponible sur [http://localhost:4200](http://localhost:4200) et se recharge automatiquement à chaque modification.

## Build de production

```bash
npm run build
```

Les fichiers générés se trouvent dans le dossier `dist/`.

## Ajouter un produit

1. Déposer l'image dans `src/assets/images/Products/`.
2. Ajouter une entrée dans le tableau `products` de `src/app/components/productlist/productlist.ts` :

```ts
{ name: 'Produit X', image: 'assets/images/Products/mon-image.jpg', price: '12000 Fcfa' }
```

Le produit apparaîtra automatiquement dans la grille.
