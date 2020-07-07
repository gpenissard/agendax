<?php
require "../bootstrap.php";
use Src\Controller\EventController;

const EVENT_PATH_INDEX = 1;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($requestMethod === "OPTIONS") {
    header("HTTP/1.1 204 No Content");
    header("Access-Control-Allow-Origin: *"); 
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE"); 
    header("Access-Control-Allow-Headers: X-PINGOTHER, Content-Type");
    exit();
}

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

// all of our endpoints start with /person
// everything else results in a 404 Not Found
if ($uri[EVENT_PATH_INDEX] !== 'event') {
    header("HTTP/1.1 404 Not Found");
    exit();
}

// the user id is, of course, optional and must be a number:
$eventId = null;
if (isset($uri[EVENT_PATH_INDEX + 1])) {
    $eventId = (int) $uri[EVENT_PATH_INDEX + 1];
}


// pass the request method and user ID to the PersonController and process the HTTP request:
$controller = new EventController($dbConn, $requestMethod, $eventId);
$controller->processRequest();