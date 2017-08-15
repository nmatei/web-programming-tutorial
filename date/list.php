<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "web_dev_1";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM agenda";
$result = $conn->query($sql);

$contacte = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $contacte[] = array(
            "id" => $row["id"],
            "firstName" => $row["first_name"],
            "lastName" => $row["last_name"],
            "phone" => $row["phone"]
        );
    }
}
$conn->close();

echo json_encode($contacte, true);

?>