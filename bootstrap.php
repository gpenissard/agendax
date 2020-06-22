<?php
require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

use Src\System\DbConn;

$dbConn = (new DbConn())->getConn();
