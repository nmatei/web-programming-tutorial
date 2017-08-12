<?php

include "dbconnect.php";

$id = $_POST["id"];

$sql = "DELETE FROM agenda WHERE ID = $id";
$result = $conn->query($sql);

$conn->close();

?>
{
  "success": true
}