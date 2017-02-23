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

$.ajax('js/mocks/shopping-list.json').success(function(shoppingList){
    console.info(shoppingList);
    showList(shoppingList);
});
console.info('done');