<?php
include ("functions.php");

$conn = getConnection();
$id = $_POST["id"];
$deleteResult = pg_query($conn, "delete from \"Agenda\" where id = $id");

$records = getContacts($conn);
pg_close($conn);

echo json_encode($records);

?>