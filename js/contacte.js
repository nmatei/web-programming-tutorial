console.info('lista de contacte');

//var contacts = ['Matei', 'Nicolae', 'Reut', 'Dan', 'Babut', 'Bogdan'];
var contacts = [
    ['Matei',   'Nicolae'],
    ['Reut',    'Dan'],
    ['Babut',   'Bogdan']
];

function getRow(nume, prenume, tel) {
    var row = '<tr><td>' + nume + '</td><td>' + prenume + '</td><td>0756000001</td></tr>';
    return row;
}

var table = document.getElementById('contacts-list');
var tbody = table.getElementsByTagName('tbody')[0];


for(var i = 0; i < contacts.length; i++) {
    var contact = contacts[i];
    tbody.innerHTML += getRow(contact[0], contact[1]);
}