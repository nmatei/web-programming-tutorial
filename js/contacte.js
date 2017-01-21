function getContactHTML(contact) {
    return '<tr>'+
        '<td>' + contact[0] + '</td>'+
        '<td>' + contact[1] + '</td>'+
        '<td>' + contact[2] + '</td>'+
        '</tr>';
}
// document.getElementById('agenda').getElementsByTagName('tbody')[0].innerHTML += contact;
//$('#agenda tbody').html(contact1 + contact2 + ...);

var contacts = [
    ['Matei', 'Nicolae', '123'],
    ['Vasile', 'U', '234'],
    ['Victor', 'D', '345']
];

var contactsHTML = '';
for(var i = 0; i < contacts.length; i++) {
    console.info(contacts[i]);
    contactsHTML += getContactHTML(contacts[i]);
}
$('#agenda tbody').html(contactsHTML);