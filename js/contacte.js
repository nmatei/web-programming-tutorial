function getContactHTML(contact) {
    return '<tr>'+
        '<td>' + contact.firstName + '</td>'+
        '<td>' + contact.lastName + '</td>'+
        '<td>' + contact.phone + '</td>'+
        '</tr>';
}

var contacts = [];

function showContacts(contacts) {
    var contactsHTML = '';
    for(var i = 0; i < contacts.length; i++) {
        console.info(contacts[i]);
        contactsHTML += getContactHTML(contacts[i]);
    }
    $('#agenda tbody').html(contactsHTML);
}

function loadContacts() {
    $.ajax('servlets/contacts.json', {
        success: function(contacts){
            console.info('contacts loaded', contacts);
            showContacts(contacts);
        }
    });
}
loadContacts();

function saveContact(contact) {
    $.ajax('servlets/saveContact.json', {
        method: 'POST',
        data: contact
    });
}

// var contact = {
//     nume: 'xxx',
//     pren: 'eee'
// };
// saveContact(contact);

console.info('page loaded');