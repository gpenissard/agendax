# agendax

## Présentation

Base de projet pour le TP 582-P51-MA, Prog. Inter. C/S, gr.17612

Deux parties:
1. Sous-dossier **api**:  API back-end (sans interface HM), inspirée de [Build a Simple REST API in PHP](https://developer.okta.com/blog/2019/03/08/simple-rest-api-php)
1. Sous-dossier **fe**: Partie front-end

## Back-end (API)

Travail inspiré de:
* [Build a Simple REST API in PHP](https://developer.okta.com/blog/2019/03/08/simple-rest-api-php)
* [How To Create A Simple REST API in PHP? Step By Step Guide!](https://www.codeofaninja.com/2017/02/create-simple-rest-api-in-php.html)

### Composants

* [Composer](https://getcomposer.org/) pour la gestion des packages externes.
* Produits tiers utilisés:
    * [PHP dotenv](https://github.com/vlucas/phpdotenv) pour la gestion des variable d'environnement (fichiers `.env` et `.env.example`)
    * [PHPUnit](https://phpunit.de/getting-started/phpunit-9.html), pas utilisé présentement

Après l'installation de Composer, lancez `composer install` depuis une fenêtre terminal (`composer update` pour d'éventuelles mises-à-jour).

### Variabes d'environnement

Adaptez votre propre version du fichier `.env` notamment pour y placez vos paramètres de DB.

### Database

À remanier à votre goût.

* Nom: agendax
* Tables(1):
    * `agxevent`: Les événements (le nom event est refusé par mysql)

Fichier `dbseed.php` pour pré-remplir la base de données (fixture) et faire quelques appels directs à l'objet Model\Event

### API

Prise en charge par le controler Controller\EventController. 

Voici les requêtes implantées:

* `GET /event`: Renvoie tous les événements
* `GET /event/{id}`: Renvoie un événement
* `POST /event`: Ajoute un événement. Les données doivent être au format
```
{
"name":"GPTest2118",
"startdt":"2020-07-01 10:00:00",
"enddt":"2020-07-01 11:30:00",
"category":"Job"
}
```    
* `PUT /event/{id}`: Met à jour un événement. Même format de données que POST /event
* `DELETE /event/{id}`: Supprime un événement

API testée avec l'extension Chrome [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=fr). Voir les copies d'écran dans le répertoire doc.

### .htaccess

Il permet de rediriger toutes les requêtes vers public/index.php

## Front-end (fe)

Inspiré de:
* [AJAX CRUD Tutorial Using JavaScript, JSON and PHP – Step by Step Guide!](https://www.codeofaninja.com/2015/06/php-crud-with-ajax-and-oop.html)




