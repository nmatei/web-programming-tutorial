

var row1 = "<tr><td>Nicolae</td><td>Matei</td><td>0</td></tr>";
var row2 = "<tr><td>Andrei</td><td>Ille</td><td>0</td></tr>";

//document.getElementById('phone-book').getElementsByTagName('tbody')[0].innerHTML = row1 + row2;
$('#phone-book tbody').html(row1 + row2);

