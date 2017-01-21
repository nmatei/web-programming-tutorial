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

$.ajax('servlets/contacts.json', {
    success: function(contacts){
        console.info('contacts loaded', contacts);
        showContacts(contacts);
    }
});

console.info('page loaded');