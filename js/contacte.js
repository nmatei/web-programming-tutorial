console.info('lista de contacte');

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



console.info("1) before load contacts");

$.ajax('servlet/contacte-list.json').done(function(contacts){
    console.info('3) contacts loaded', contacts);

    contacts.forEach(function(contact) {
        tbody.innerHTML += getRow(contact.nume, contact.prenume, contact.phone);
    });
});

console.info("2) after load contacts");