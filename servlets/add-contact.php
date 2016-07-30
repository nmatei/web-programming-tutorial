<?php
include ("functions.php");

$conn = getConnection();

$phone = $_POST["phone"];
$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];

$addResult = pg_query_params($conn, "insert into \"Agenda\"(nume, prenume, telefon) values ($1, $2, $3)", array(
    $lastName, $firstName, $phone
));

pg_close($conn);

?>