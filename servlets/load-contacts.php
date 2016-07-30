<?php
include ("functions.php");

$conn = getConnection();
$records = getContacts($conn);
pg_close($conn);

echo json_encode($records);

?>