<?php
include ("functions.php");

$conn = getConnection();

$phone = $_POST["phone"];
$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];

if (isset($_POST["id"]) && $_POST["id"] != '') {
    $action = "updated";
    $sql = 'update "Agenda" set nume = $1, prenume = $2, telefon = $3 where id = $4';
    $result = pg_query_params($conn, $sql, array(
        $lastName, $firstName, $phone, (int)$_POST["id"]
    ));
    if(pg_affected_rows($result) > 0) {
        $action = "updated";
    } else {
        $action = "refreshed";
    }
} else {
    $sql = 'insert into "Agenda"(nume, prenume, telefon) values ($1, $2, $3)';
    $result = pg_query_params($conn, $sql, array(
        $lastName, $firstName, $phone
    ));
    $action = "saved";
}

pg_close($conn);

?>