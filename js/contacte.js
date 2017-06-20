console.info('lista de contacte');

var contacts = [
    {phone: '0756000001', nume: 'Matei', prenume: 'Nicolae'},
    {phone: '0756000002', nume: 'Reut', prenume: 'Dan'},
    {phone: '0756000003', nume: 'Babut', prenume: 'Bogdan'}
];

function getRow(nume, prenume, tel) {
    var row = '<tr><td>' + nume + '</td><td>' + prenume + '</td><td>'+ tel +'</td></tr>';
    return row;
}

var table = document.getElementById('contacts-list');
var tbody = table.getElementsByTagName('tbody')[0];

// for(var i = 0; i < contacts.length; i++) {
//     var contact = contacts[i];
//     tbody.innerHTML += getRow(contact.nume, contact.prenume, contact.phone);
// }

contacts.forEach(function(contact) {
    tbody.innerHTML += getRow(contact.nume, contact.prenume, contact.phone);
});
