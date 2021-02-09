# L'application web des CaenCamp

<!-- LES BADGES
![Tests](https://github.com/CaenCamp/api-caencamp/workflows/phpunit/badge.svg?branch=main) ![Top language](https://img.shields.io/github/languages/top/CaenCamp/front-caencamp.svg) ![Contributors](https://img.shields.io/github/contributors/CaenCamp/front-caencamp.svg) ![License](https://img.shields.io/github/license/CaenCamp/front-caencamp.svg) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) -->

Les contenus des CaenCamp sont maintenant disponibles via une API REST (Hydra) et via une API GraphQL.
Il s’agit donc de développer un nouveau front afin d’exposer ces données sur le même mode d’organisation que le site actuel, mais aussi en rajoutant une section sur les offres d’emploi.
Le front ne servira pas dans un premier temps à alimenter les contenus (l’API dispose d’une interface d’administration dédiée).
L’enjeu est de réaliser un site le plus économe possible (en termes de poids final, de cout à la génération…) mais aussi pleinement accessible ! La définition des bonnes pratiques permettant d’atteindre cet objectif et la mise en place des outils permettant de mesurer cette qualité sont presque un chantier en soi !

Les technologies choisies pour démarrer ce chantier sont : [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript), [Vue.js](https://vuejs.org/) et [NuxtJS](https://fr.nuxtjs.org/)

## Démarrage rapide

Une description rapide des [pré-requis](./docs/CONTRIBUTING.md#lenvironnement-de-développement) sur l'environnement local permettant de lancer un `make install`.

Le `Makefile` devra toujours comporter au moins les recettes suivantes :

- help
- install
- start
- test

Vous trouverez plus d'informations sur les `Makefile` sur le [guide des Coding Caen.Camp](https://github.com/CaenCamp/coding-caen-camp/blob/master/formalisme.md#le-makefile).

```bash
make install
cp .env.example .env
```

et lancer le projet avec :

```bash
make start
```

Le projet est alors disponible sur <http://localhost:xxxx>

## Participer au projet

Vous souhaitez participer ? Merci à vous :+1:

Et c’est très simple :

-   Si vous ne savez pas par où commencer, vous pouvez jeter un coup d’œil aux [**issues**](https://github.com/CaenCamp/front-caencamp/issues).
-   Voir les cartes des fonctionnalités à développer sur [**tableau Kanban**](https://github.com/orgs/CaenCamp/projects/2) du projet.
-   Une fois que vous savez quoi faire, vous pouvez consulter le [**guide du contributeur**](./docs/CONTRIBUTING.md) pour vous lancer.

Et si vous ne trouvez toujours pas quoi faire dans les issues existantes et/ou que vous avez d’autres idées, n’hésitez pas à créer une nouvelle issue.

## Trouver de la documentation

Certes, le [code et ses tests sont la meilleur documentation](https://martinfowler.com/bliki/CodeAsDocumentation.html).

Pour autant, le code ne fait pas tous le projet. Vous trouverez donc, en plus de code, des informations sur le projet dans :

- [le guide du contributeur](./docs/CONTRIBUTING.md)
- [le wiki du projet](https://github.com/CaenCamp/front-caencamp/wiki)
- [les ADR.s (notes sur les décisions d'architecture)](./docs/adr/README.md)

Si vous ne savez pas trop comment participer à un projet open-source, vous pouvez aussi jeter un oeil sur notre ["Petit guide de participation aux projets des CaenCamp.s pour ceux qui ne saurait pas trop par où commencer."](https://github.com/CaenCamp/coding-caen-camp)

## License

Les projets des Coding Caen.Camp.s sont sous license [GNU GPLv3](LICENSE)
