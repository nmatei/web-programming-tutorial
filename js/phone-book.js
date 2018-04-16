function getRow(firstName, lastName, phone) {
    return "<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + phone + "</td></tr>";
}

var persons = [];
console.info('loading persons');

$.ajax({
    url: 'js/mocks/phone-book.json',
    method: "GET"
}).done(function (data) {
    console.info('done:', data);
    display(data);
});

function display(persons) {
    var rows = '';

    function createRows(person) {
        rows += getRow(person.firstName, person["lastName"], person['phone']);
    }

    persons.forEach(createRows);

    $('#phone-book tbody').html(rows);
}