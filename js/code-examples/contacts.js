function showContacts(contacts) {
    var contactsHTML = '';
    for (var i = 0; i < contacts.length; i++) {
        contactsHTML +=
            '<tr>' +
                '<td>' +
                    contacts[i][0] +
                '</td>' +
                '<td>' +
                    contacts[i][1] +
                '</td>' +
                '<td>' +
                    '<button data-id="' + contacts[i][2] + '" class="remove">x</button> ' +
                    '<button data-id="' + contacts[i][2] + '" class="edit">edit</button>' +
                '</td>' +
            '</tr>';
    }

    $('#contacts-list tbody').html(contactsHTML);

    $('#contacts-list .remove').click(function () {
        var id = $(this).data('id');
        console.debug('click on remove', id);
        removeContact(id);
    });

    $('#contacts-list .edit').click(function () {
        var id = $(this).data('id');
        console.debug('click on edit', id);
        editContact(id);
    });
}

function removeContact(id) {
    $.ajax({
        url: 'js/mocks/remove-contact.json',
        data: {
            id: id
        }
    }).done(function (contacts) {
        console.debug('contact have been removed:', contacts);
        showContacts(contacts);
    });
}

function loadContacts() {
    $.ajax({
        url: 'js/mocks/load-contacts.json'
    }).done(function (contacts) {
        console.debug('contacts have been loaded:', contacts);
        // store in global variable so can be accessed in edit
        window.contacts = contacts;
        showContacts(contacts);
    });
}

function findContactById(id) {
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i][2] == id) {
            return contacts[i];
        }
    }
}

function editContact(id) {
    var contact = findContactById(id);

    $('#contact-form .save').show();
    $('#contact-form .add').hide();

    $('#contact-form [name="id"]').val(id);
    $('#contact-form [name="name"]').val(contact[0]);
    $('#contact-form [name="phone"]').val(contact[1]);
}

function resetContact() {
    $('#contact-form .save').hide();
    $('#contact-form .add').show();
}