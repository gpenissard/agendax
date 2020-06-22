<?php
namespace Src\System;

class DbConn {

    private $dbConn = null;

    public function __construct()
    {
        $host = $_ENV['DB_HOST'];
        $port = $_ENV['DB_PORT'];
        $db   = $_ENV['DB_DATABASE'];
        $user = $_ENV['DB_USERNAME'];
        $pass = $_ENV['DB_PASSWORD'];
        //var_dump($host, $port, $db, $user, $pass);
        try {
            $this->dbConn = new \PDO(
                "mysql:host=$host;port=$port;charset=utf8mb4;dbname=$db",
                $user,
                $pass
            );
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
        //var_dump($this->dbConn);
    }

    public function getConn()
    {
        return $this->dbConn;
    }
}