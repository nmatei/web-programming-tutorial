<?php

function getConnection() {
    return pg_connect("host=54.93.65.5 port=5432 dbname=4_iAndrei user=fasttrackit_dev password=fasttrackit_dev");
}

function getContacts($conn) {
    $result = pg_query($conn, 'select * from "Agenda" order by prenume, nume');
    $records = array();

    while ($row = pg_fetch_array($result)) {
        $person = array(
            "id" => $row["id"],
            "phone" => $row["telefon"],
            "firstName" => $row["prenume"],
            "lastName" => $row["nume"]
        );
        $records[] = $person;
    }
    return $records;
}
?>