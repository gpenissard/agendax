# agendax

## Présentation

Back-end api pour le TP P51 Inspirée de 
    * [Build a Simple REST API in PHP](https://developer.okta.com/blog/2019/03/08/simple-rest-api-php)

## Composants

* [Composer](https://getcomposer.org/) pour la gestion des packages externes.
* Produits tiers utilisés:
    * [PHP dotenv](https://github.com/vlucas/phpdotenv) pour la gestion des variable d'environnement (fichiers `.env` et `.env.example`)
    * [PHPUnit](https://phpunit.de/getting-started/phpunit-9.html)

## Database

Tables:
* `agxevent`: Les événements (le nom event est refusé)

Fichier `dbseed.php` pour pré-remplir la base de données (fixture)

## API

* `GET /event`: Renvoie tous les événements
* `GET /event/{id}`: Renvoie un événement
* `POST /event`: Ajoute un événement
* `PUT /event/{id}`: Met à jour un événement
* `DELETE /event/{id}`: Supprime un événement

API testée avec l'extension Chrome [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=fr)