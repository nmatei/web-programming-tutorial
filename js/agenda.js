console.debug('1) loading agenda');

function getRow(person) {
    var row = '<tr>'+
        '<td>' + person.firstName + '</td>'+
        '<td>' + person.lastName + '</td>'+
        '<td>' + person.phone + '</td>'+
        '<td>' +
            '<button type="button" class="edit" data-id="' + person.id + '">edit</button> ' +
            '<button type="button" class="remove" data-id="' + person.id + '">x</button>' +
        '</td>'+
        '</tr>';
    return row;
}

function loadContacts() {
    $.ajax({
        url: "servlets/load-contacts.php",
        dataType: 'json',
        cache:false
    }).done(function(result) {
        console.debug('3) ajax done', result);
        showContacts(result);
    });
}

if($('#agenda').length) {
    loadContacts();
}

function removeContact(id) {
    $.ajax({
        url: "servlets/remove-contact.php",
        //type: 'DELETE',
        type: 'POST',
        dataType: 'json',
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

function inlineEditContact(id, editButton) {
    var person = findContactById(id);
    var tr = $(editButton).parents('tr');
    console.debug(editButton, tr.children('td').get(0));

    tr.parents('form').children('input[name="id"]').val(person.id);

    var firstNameInput = $('<input name="firstName">');
    var lastNameInput = $('<input name="lastName">');
    var phoneInput = $('<input name="phone">');

    firstNameInput.val(person.firstName);
    lastNameInput.val(person.lastName);
    phoneInput.val(person.phone);

    $(tr.children('td').get(0)).html('').append(firstNameInput);
    $(tr.children('td').get(1)).html('').append(lastNameInput);
    $(tr.children('td').get(2)).html('').append(phoneInput);

    $(tr.children('td').get(3)).html('').append('<button type="submit">Save</button>')
}

$('#agenda').on('click', 'button.remove', function(){
    var id = $(this).data('id');
    console.info('remove this contact', this, id);
    removeContact(id);
});

$('#agenda').on('click', 'button.edit', function(){
    var id = $(this).data('id');
    console.info('edit this contact', id);
    //editContact(id);
    inlineEditContact(id, this);
});
