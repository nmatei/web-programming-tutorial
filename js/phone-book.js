function getRow(firstName, lastName, phone) {
    return "<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + phone + "</td></tr>";
}

var persons = [
    // firstName, lastName, phone
    ["Nicolae", "Matei", "321"],
    ["Andrei", "Ille", "123"],
    ["Raluca", "Ignat", "543"],
    ["Damaris", "Sighiartau", "876"]
];

var rows = '';

persons.forEach(function(person) {
    rows += getRow(person[0], person[1], person[2]);
});

$('#phone-book tbody').html(rows);

