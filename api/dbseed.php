<?php

use Src\Model\Event;

require 'bootstrap.php';

$statement = <<<EOS
    CREATE TABLE IF NOT EXISTS agxevent (
        id INT(11) NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        startdt DATETIME NOT NULL,
        enddt DATETIME NOT NULL,
        PRIMARY KEY (id)
    ) ENGINE=InnoDB;

    INSERT INTO agxevent
        (id, name, startdt, enddt)
    VALUES
    (1, 'Classe P51', '2020-06-20 10:00:00', '2020-06-20 11:00:00'),
    (2, 'Interview JSLabs', '2020-06-25 14:30:00', '2020-06-25 16:00:00');
EOS;

try {
//    $createTable = $dbConn->exec('DROP TABLE `test`');
    $createTable = $dbConn->exec($statement);
    var_dump($createTable);
    echo "Success!\n";
} catch (\PDOException $e) {
    exit($e->getMessage());
}

$event = new Event($dbConn);

// return all records
$result = $event->findAll();
var_dump($result);

// return the record with id = 1
$result = $event->find(1);
var_dump($result);

// insert a new record
/* $result = $event->insert([
    'name' => 'Concert',
    'startdt' => '2021-01-10 10:20:00',
    'enddt' => '2021-01-10 11:00:00'
]);
var_dump($result);
*/

// update the record with id = 5
echo "---UPDATE---", PHP_EOL;
$result = $event->update(5, [
    'name' => 'Événement surprise (Changement horaire 3)',
    "startdt" => "2020-07-01 13:30:00",
    "enddt" => "2020-07-01 14:30:00"
]);
var_dump($result);

// delete the record with id = 10
// $result = $event->delete(10);