<?php include("header-tpl.php"); ?>

<?php
// Save Contact if necessary
if (isset($_POST["firstName"])) {
    $fileName = "js/mocks/load-contacts.json";
    $allContactsStr = file_get_contents($fileName);
    $allContacts = json_decode($allContactsStr);
    $lastContact = $allContacts[count($allContacts) - 1];

    $newPerson = array(
        "id" => $lastContact->id + 1,
        "phone" => $_POST["phone"],
        "firstName" => $_POST["firstName"],
        "lastName" => $_POST["lastName"]
    );

    $allContacts[] = $newPerson; // add new item in all contacts array
    file_put_contents($fileName, json_encode($allContacts, JSON_PRETTY_PRINT));

    echo "<p>Contact successfully added!</p>";
}
?>


<div id="breadcrumb">HOME : welcome home</div>

<h1>Agenda</h1>

<form action="" method="post">
    <input type="hidden" name="id">
    <input type="text" name="firstName" placeholder="First Name" required="required">
    <input type="text" name="lastName" placeholder="Last Name">
    <input type="text" name="phone" placeholder="Phone">
    <button>Save</button>
</form>
<br>

<table id="agenda">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th width="90"></th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>

<?php include("footer-tpl.php"); ?>