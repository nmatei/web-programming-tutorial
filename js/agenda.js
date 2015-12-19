console.info('listing agenda');

var row = '<tr>'+
    '<td>Popescu</td>' +
    '<td>Nicolae</td>' +
    '<td>nick@example.com</td>' +
    '<td><a href="#">Edit</a> <a href="#">Delete</a></td>' +
    '</tr>';

var contacts = [
    ["Popescu",     "Nicolae",  "Nicolae@example.com"],
    ["Petrescu",    "Gabi",     "Gabi@example.com"],
    ["Vasilescu",   "Raul",     "Raul@example.com"],
    ["Ionescu",     "Denisa",   "Denisa@example.com"]
];

var agendaTable = document.getElementById("agenda");
var agendaBody = agendaTable.getElementsByTagName("tbody")[0];

agendaBody.innerHTML = row;

