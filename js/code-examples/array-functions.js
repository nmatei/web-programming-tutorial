var contacte = [
    {"firstName": "Nicolae", "lastName": "Matei", "phone": "01"},
    {"firstName": "Nicoleta", "lastName": "Matei", "phone": "02"},
    {"firstName": "Andrei", "lastName": "Ion", "phone": "03"},
    {"firstName": "Alexandra", "lastName": "Vasile", "phone": "04"},
    {"firstName": "Andrei"},
    {"lastName": "Basescu"}
];

function callContact(contact) {
    console.info('calling...', contact.firstName);
}
function feedContact(contact) {
    console.info('feeding...', contact.firstName);
}
function forEachContacts(action){
    for(var i = 0; i < contacte.length; i++) {
        action(contacte[i]);
    }
}
forEachContacts(callContact);
forEachContacts(feedContact);

contacte.forEach(function(contact) {
    console.info('calling...', contact.firstName);
});
contacte.forEach(function(contact) {
    console.info('feeding...', contact.firstName);
});
