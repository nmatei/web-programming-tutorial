console.info('listing agenda');

function getRow(lastName, firstName, email) {
    var row = '<tr>'+
        '<td>' + lastName + '</td>' +
        '<td>' + firstName + '</td>' +
        '<td>' + email + '</td>' +
        '<td><a href="#">Edit</a> <a href="#">Delete</a></td>' +
        '</tr>';
    return row;
}

var contacts = [
    {lastName:"Popescu",     firstName:"Nicolae",  email:"Nicolae@example.com"},
    {lastName:"Petrescu",    firstName:"Gabi",     email:"Gabi@example.com"},
    {lastName:"Vasilescu",   firstName:"Raul",     email:"Raul@example.com"},
    {lastName:"Ionescu",     firstName:"Denisa",   email:"Denisa@example.com"}
];

var agendaTable = document.getElementById("agenda");
var agendaBody = agendaTable.getElementsByTagName("tbody")[0];

var contactsHTML = '';

for(var i = 0; i < contacts.length; i++) {
    var person = contacts[i];
    contactsHTML += getRow(person.lastName, person.firstName, person.email);
}

agendaBody.innerHTML = contactsHTML;
