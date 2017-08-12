<?php

include "dbconnect.php";

$stmt = $conn->prepare("INSERT INTO agenda (firstname, lastname, phone) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $firstname, $lastname, $email);

// set parameters and execute
$firstname = $_POST["firstName"];
$lastname = $_POST["lastName"];
$email = $_POST["phone"];
$stmt->execute();

$conn->close();

header("Location: ../contacte.html")
?>

