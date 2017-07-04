function getRow(firstName, lastName, phone) {
    phone = phone || '';
    lastName = lastName || '';
    firstName = firstName || '';
    var row = '<tr><td>' + lastName + '</td><td>' + firstName + '</td><td>' + phone + '</td></tr>';
    return row;
}

var contacte = [
    {firstName: 'Nicolae', lastName: 'Matei', phone: '01'},
    {firstName: 'Nicoleta', lastName: 'Matei', phone: '02'},
    {firstName: 'Andrei', lastName: 'Ion', phone: '03'},
    {firstName: 'Alexandra', lastName: 'Vasile', phone: '04'},
    {firstName: 'Andrei'},
    {lastName: 'Basescu'}
];

var tableContent = '';

function createRow(contact){
    tableContent += getRow(contact.firstName, contact.lastName, contact.phone);
}

for(var i = 0; i < contacte.length; i++) {
    createRow(contacte[i]);
}

// contacte.forEach(createRow);

$("#contacts-list tbody").html(tableContent);


// 1. convert from array of arrays into json
// 2. load contacts from json file with AJAX
// 3. remove contacts (UI)
// 4. edit contact (UI)




var person = {
    lastName: "Matei",
    firstName: "Nicolae",
    age: 19,
    married: true,
    skills: ["html", "css", "js"],
    voiceCall: function(nume) {
        console.info('te rog sa suni pe ', nume);
    },
    partner: {
        firstName: "M",
        age: 18
    }
};

console.info(person.firstName);
person.voiceCall("Soacra");
