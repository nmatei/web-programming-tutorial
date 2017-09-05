<?php

include "connect-db.php";

$firstName = $_GET["firstName"];
$lastName = $_GET["lastName"];
$phone = $_GET["phone"];

if(isset($_GET["id"]) && $_GET["id"] != '') {
    // update person
    $id = $_GET["id"];
    $sql = "UPDATE agenda set first_name = '$firstName', last_name = '$lastName', phone = '$phone' WHERE id = $id";
} else {
    $sql = "INSERT INTO agenda(first_name, last_name, phone) VALUES('$firstName', '$lastName', '$phone')";
}

echo $sql;

$conn->query($sql);
$conn->close();

header('Location: ../contacte.html');
?>