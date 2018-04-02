function getRow(firstName, lastName, phone) {
    return "<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + phone + "</td></tr>";
}

var persons = [
    getRow("Nicolae", "Matei", "321"),
    getRow("Andrei", "Ille", "123"),
    getRow("Raluca", "Ignat", "543")
];

var rows = '';

persons.forEach(function(person) {
    rows += person;
});

$('#phone-book tbody').html(rows);

