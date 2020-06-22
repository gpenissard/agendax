<?php
require 'bootstrap.php';

$statement = <<<EOS
    CREATE TABLE IF NOT EXISTS agendax.agxevent (
        id INT(11) NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        startdt DATETIME NOT NULL,
        enddt DATETIME NOT NULL,
        PRIMARY KEY (id)
    ) ENGINE=InnoDB;

    INSERT INTO agxevent
        (id, name, startdt, enddt)
    VALUES
    (1, 'Classe P51', '2020-06-20 10:00:00', '2020-06-20 10:00:00'),
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