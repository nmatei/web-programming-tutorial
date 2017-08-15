function getRow(contact) {
    var id = contact.id;
    var phone = contact.phone || '';
    var lastName = contact.lastName || '';
    var firstName = contact.firstName || '';
    var row = '<tr><td>' + lastName + '</td><td>' + firstName + '</td><td>' + phone + '</td>' +
        '<td class="actions">'+
            '<span><a href="date/remove-db.php?id=' + id + '">&#x2716;</a></span> '+
            '<span><a href="#" class="edit" data-id="' + id + '">&#x270E;</a></span>'+
        '</td>' +
        '</tr>';
    return row;
}

var tableContent = '';

function createRow(contact) {
    tableContent += getRow(contact);
}

$.ajax('date/list.php', {
    cache: false,
    dataType: 'json'
}).done(function (contacte) {
    console.debug('contacts loaded', contacte);
    contacte.forEach(createRow);
    $("#contacts-list tbody").html(tableContent);

    $('#contacts-list a.edit').click(function() {
        var id = $(this).data('id');
        var contact = contacte.find(function(c) {
            return c.id == id;
        });
        console.debug('remove', id, contact, this);

        $('input[name=id]').val(contact.id);
        $('input[name=lastName]').val(contact.lastName);
        $('input[name=firstName]').val(contact.firstName);
        $('input[name=phone]').val(contact.phone);
    });
});

// 1. convert from array of arrays into json
// 3. remove contacts (UI)
// 4. edit contact (UI)
// 5. TODO php includes / templates

