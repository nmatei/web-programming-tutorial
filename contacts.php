<?php include "header.php" ?>

    <div id="content-wrapper">
        <?php include "sidebar.php" ?>

        <div id="content">
            <div id="breadcrumb">Contacts</div>

            <form id="contact-form" action="contacts.php">
                <input type="hidden" name="id"/>
                <input type="text" name="name" placeholder="Name" required/>
                <input type="text" name="phone" placeholder="Phone" required/>
                <button type="submit" class="add">Add</button>
                <button type="submit" class="save">Save</button>
                <button type="reset" onclick="resetContact()">Reset</button>
            </form>

            <table id="contacts-list">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>phone</th>
                        <th width="100">actions</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
        <div class="clear"></div>
    </div>

<?php include "footer.php"?>