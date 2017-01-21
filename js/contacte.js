function getContactHTML(contact) {
    return '<tr>'+
        '<td>' + contact.firstName + '</td>'+
        '<td>' + contact.lastName + '</td>'+
        '<td>' + contact.phone + '</td>'+
        '</tr>';
}
// document.getElementById('agenda').getElementsByTagName('tbody')[0].innerHTML += contact;
//$('#agenda tbody').html(contact1 + contact2 + ...);

var contacts = [
    {firstName: 'Nicolae', lastName: 'Matei', phone: '123'},
    {firstName: 'Vasile', lastName: 'U', phone: '234'},
    {firstName: 'Victor', lastName: 'D', phone: '345'}
];

var contactsHTML = '';
for(var i = 0; i < contacts.length; i++) {
    console.info(contacts[i]);
    contactsHTML += getContactHTML(contacts[i]);
}
$('#agenda tbody').html(contactsHTML);