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
    ["Popescu",     "Nicolae",  "Nicolae@example.com"],
    ["Petrescu",    "Gabi",     "Gabi@example.com"],
    ["Vasilescu",   "Raul",     "Raul@example.com"],
    ["Ionescu",     "Denisa",   "Denisa@example.com"]
];

var agendaTable = document.getElementById("agenda");
var agendaBody = agendaTable.getElementsByTagName("tbody")[0];

var contactsHTML = '';

for(var i = 0; i < contacts.length; i++) {
    var person = contacts[i];
    contactsHTML += getRow(person[0], person[1], person[2]);
}

agendaBody.innerHTML = contactsHTML;
