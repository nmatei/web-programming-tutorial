function getRow(firstName, lastName, phone) {
    phone = phone || '';
    lastName = lastName || '';
    firstName = firstName || '';
    var row = '<tr><td>' + lastName + '</td><td>' + firstName + '</td><td>' + phone + '</td></tr>';
    return row;
}

var tableContent = '';

function createRow(contact){
    tableContent += getRow(contact.firstName, contact.lastName, contact.phone);
}

$.ajax('date/contacte.json').done(function(contacte){
    console.info('contacte', contacte);
    contacte.forEach(createRow);
    $("#contacts-list tbody").html(tableContent);
});

// 1. convert from array of arrays into json
// 2. load contacts from json file with AJAX
// 3. remove contacts (UI)
// 4. edit contact (UI)
