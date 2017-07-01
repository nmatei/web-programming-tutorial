
function getRow(firstName, lastName, phone) {
    var row = '<tr><td>' + lastName + '</td><td>' + firstName + '</td><td>' + phone + '</td></tr>';
    return row;
}

var contacte = [
    ['Nicolae',   'Matei', '01'],
    ['Nicoleta',  'Matei', '02'],
    ['Andrei',    'I',     '03'],
    ['Alexandra', 'V',     '04']
];

var tableContent = '';
for(var i = 0; i< contacte.length; i++) {
    var contact = contacte[i];
    tableContent += getRow(contact[0], contact[1], contact[2]);
}

$("#contacts-list tbody").html('hackerii au preluat comanda calculatorului lui matei! trololo');

