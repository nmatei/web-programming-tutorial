console.info('listing agenda');

function getRow(lastName, firstName, email, id) {
    var row = '<tr>'+
        '<td>' + lastName + '</td>' +
        '<td>' + firstName + '</td>' +
        '<td>' + email + '</td>' +
        '<td>' +
            '<a href="#" class="edit-contact" data-id="' + id + '">Edit</a> ' +
            '<a href="#" class="delete-contact" data-id="' + id +  '">Delete</a>'+
        '</td>' +
        '</tr>';
    return row;
}

function showContacts(contacts) {
    var agendaTable = document.getElementById("agenda");
    var agendaBody = agendaTable.getElementsByTagName("tbody")[0];
    var contactsHTML = '';

    for(var i = 0; i < contacts.length; i++) {
        var person = contacts[i];
        contactsHTML += getRow(person.lastName, person.firstName, person.email, person.id);
    }

    agendaBody.innerHTML = contactsHTML;
}

function deleteContact(id) {
    $.ajax({
        url: "js/mocks/mark-done.json", // remove
        cache: false,
        method: 'POST',
        data: {
            id: id
        }
    }).done(function(status) {
        console.debug(status);
        loadContacts();
    });
}

function loadContacts() {
    $.ajax({
        url: "js/mocks/load-agenda.json",
        cache: false
    }).done(function(contacts) {
        console.debug('loaded contacts', contacts);
        showContacts(contacts);

        //document.getElementsByClassName("delete-contact")[0].click = function(){};
        // vs jquery click
        $('.delete-contact').click(function(){
            var id = $(this).data('id');
            console.debug('clicked on delete', id, this);
            deleteContact(id);
        });
    });
}

loadContacts();