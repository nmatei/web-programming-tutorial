console.debug('1) loading agenda');

function getRow(person) {
    var row = '<tr>'+
        '<td>' + person.firstName + '</td>'+
        '<td>' + person.lastName + '</td>'+
        '<td>07560000001</td>'+
        '<td>' +
            '<button class="edit" data-id="' + person.id + '">edit</button> ' +
            '<button class="remove" data-id="' + person.id + '">x</button>' +
        '</td>'+
        '</tr>';
    return row;
}

$.ajax({
    url: "js/mocks/load-contacts.json"
}).done(function(result) {
    console.debug('3) ajax done', result);
    showContacts(result);
});

function removeContact(id) {
    $.ajax({
        url: "js/mocks/remove-contact.json",
        //type: 'DELETE',
        type: 'POST',
        data: {
            id: id
        }
    }).done(function(result) {
        showContacts(result);
    });
}

console.debug('2) after ajax');

var allContacts = [];
function showContacts(contacts) {
    allContacts = contacts;
    $('#agenda tbody').html('');
    for(var i = 0; i < contacts.length; i++) {
        var person = contacts[i];
        $('#agenda tbody').append(getRow(person));
    }
}

function findContactById(id) {
    for(var i = 0; i < allContacts.length; i++) {
        if(allContacts[i].id == id) {
            return allContacts[i];
        }
    }
    return null;
}

function editContact(id) {
    var person = findContactById(id);
    $("[name='id']").val(person.id);
    $("[name='firstName']").val(person.firstName);
    $("[name='lastName']").val(person.lastName);
    $("[name='phone']").val(person.phone);
}

$('#agenda').on('click', 'button.remove', function(){
    var id = $(this).data('id');
    console.info('remove this contact', this, id);
    removeContact(id);
});

$('#agenda').on('click', 'button.edit', function(){
    var id = $(this).data('id');
    console.info('edit this contact', this, id);
    editContact(id);
});
