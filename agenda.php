<?php include("header-tpl.php"); ?>

<div id="breadcrumb">HOME : welcome home</div>

<h1>Agenda</h1>

<form action="js/mocks/load-contacts.json" method="post">
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