<?php

$contentString = file_get_contents("contacte.json");
$contacte = json_decode($contentString, true);

if(isset($_GET["id"])) {

    $id = $_GET["id"];

    for ($i = 0; $i < count($contacte); $i++) {
        if($contacte[$i]["id"] == $id) {
            array_splice($contacte, $i, 1);
        }
    }
}

$contentString = json_encode($contacte, true);
file_put_contents("contacte.json", $contentString);

header('Location: ../contacte.html');

?>