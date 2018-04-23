function getRow(person) {
    return "<tr>" +
        "<td>" + person.firstName + "</td>" +
        "<td>" + person.lastName + "</td>" +
        "<td>" + person.phone + "</td>" +
        `<td><a href='tmp/remove-contact.html?id=${person.id}'>x</a></td>` +
        "</tr>";
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
        rows += getRow(person);
    }

    persons.forEach(createRows);

    rows += '<tr>' +
        '<td><input type="text" required name="firstName" placeholder="Enter first name"></td>' +
        '<td><input type="text" name="lastName" placeholder="Enter last name"></td>' +
        '<td><input type="text" required name="phone" placeholder="Enter phone"></td>' +
        '<td><button type="submit">Add</button></td>' +
        '</tr>';

    $('#phone-book tbody').html(rows);
}