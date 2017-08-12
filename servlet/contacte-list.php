<?php
include "dbconnect.php";

$sql = "SELECT * FROM agenda";
$result = $conn->query($sql);

$agenda = array();

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $person = array(
            "id" => $row["ID"],
            "phone" => $row["phone"],
            "nume" => $row["lastname"],
            "prenume" => $row["firstname"]
        );
        // as in java : list.add(person);
        $agenda[] = $person;
    }
} else {
    echo "0 results";
}
$conn->close();

echo json_encode($agenda);
?>