console.info("shopping list init");

function getRow(produs, cantitate) {
    return '<tr>'+
        '<td>' + produs + '</td>'+
        '<td>' + cantitate + '</td>'+
        '</tr>';
}

function showList(shoppingList) {
    var lista = '';
    for(var i = 0; i < shoppingList.length; i++) {
        var produs = shoppingList[i];
        lista += getRow(produs.nume, produs.cantitate);
    }

    document.getElementsByTagName('tbody')[0].innerHTML = lista;
}

var shoppingList = [
    {nume: 'Paine', cantitate: 1},
    {nume: 'Suc', cantitate: 3},
    {nume: 'Mere', cantitate: 10}
];

showList(shoppingList);