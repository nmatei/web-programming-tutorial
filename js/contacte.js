console.info('lista de contacte');

function getRow(contact) {
    var row = '<tr><td>' + contact.nume + '</td><td>' + contact.prenume + '</td><td>'+ contact.phone +'</td>'+
            '<td>[<a href="servlet/remove-contact.json?id=' + contact.id + '">x</a>]</td>'+
        '</tr>';
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
        tbody.innerHTML += getRow(contact);
    });
});

console.info("2) after load contacts");