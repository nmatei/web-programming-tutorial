console.info('lista de contacte');

function getRow(contact) {
    var row = '<tr><td>' + contact.nume + '</td><td>' + contact.prenume + '</td><td>'+ contact.phone +'</td>'+
            '<td>[<a href="#" class="remove-contact" data-id="'+ contact.id +'">x</a>]</td>'+
        '</tr>';
    return row;
}

var table = document.getElementById('contacts-list');
var tbody = table.getElementsByTagName('tbody')[0];

console.info("1) before load contacts");

$.ajax('servlet/contacte-list.json').done(function(contacts){
    console.info('3) contacts loaded', contacts);

    contacts.forEach(function(contact) {
        tbody.innerHTML += getRow(contact);
    });

    $('.remove-contact').click(function(){
        var id = $(this).data('id');
        console.info('remove this contact', id, this);
        removeContact(id);
        $(this).closest('tr').remove();
    })
});

console.info("2) after load contacts");

function removeContact(id) {
    $.post('servlet/remove-contact.json', {
        id: id
    })
}