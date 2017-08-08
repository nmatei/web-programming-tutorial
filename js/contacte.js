function getRow(contact) {
    var id = contact.id;
    var phone = contact.phone || '';
    var lastName = contact.lastName || '';
    var firstName = contact.firstName || '';
    var row = '<tr><td>' + lastName + '</td><td>' + firstName + '</td><td>' + phone + '</td>' +
        '<td class="actions">'+
            '<span><a href="date/remove.html?id=' + id + '">&#x2716;</a></span> '+
            '<span><a href="#">&#x270E;</a></span>'+
        '</td>' +
        '</tr>';
    return row;
}

var tableContent = '';

function createRow(contact) {
    tableContent += getRow(contact);
}

$.ajax('date/contacte.json', {
    cache: false,
    dataType: 'json'
}).done(function (contacte) {
    console.debug('contacts loaded', contacte);
    contacte.forEach(createRow);
    $("#contacts-list tbody").html(tableContent);
});

// 1. convert from array of arrays into json
// 2. load contacts from json file with AJAX
// 3. remove contacts (UI)
// 4. edit contact (UI)
// 5. TODO php includes / templates
// 6. TODO create new number (auto increment when add new contact)