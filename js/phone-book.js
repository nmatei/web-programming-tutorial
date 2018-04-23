function getRow(firstName, lastName, phone) {
    return "<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + phone + "</td></tr>";
}

var persons = [];
console.info('loading persons');

$.ajax({
    url: 'js/mocks/phone-book.json',
    method: "GET"
}).done(function (persons) {
    console.info('done:', persons);
    display(persons);
});

function display(persons) {
    var rows = '';

    function createRows(person) {
        rows += getRow(person.firstName, person["lastName"], person['phone']);
    }

    persons.forEach(createRows);

    rows += '<tr>' +
        '<td><input type="text" required name="firstName" placeholder="Enter first name"></td>' +
        '<td><input type="text" name="lastName" placeholder="Enter last name"></td>' +
        '<td><input type="text" required name="phone" placeholder="Enter phone">' +
        '<button type="submit">Add</button></td>' +
        '</tr>';

    $('#phone-book tbody').html(rows);
}