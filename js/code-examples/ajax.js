// = = = = = = = = = = = = = = = = = = = =
// 1) AJAX example that load JSON from SERVER SIDE
// = = = = = = = = = = = = = = = = = = = =

$.ajax({
    url: 'js/mocks/load-address.json',
    method: 'POST',
    data: {
        name: 'Daniel'
    }
}).done(function (response) {
    console.debug('address have been loaded:', response);
    // in this case response is directly entire contact
    console.info(response.name + ' - ' + response.phone);
});


// = = = = = = = = = = = = = = = = = = = =
// 2) AJAX example that load a more COMPLEX JSON from SERVER SIDE
// that contains a array with all contacts
// = = = = = = = = = = = = = = = = = = = =

$.ajax({
    url: 'js/mocks/load-addresses.json',
    method: 'POST'
}).done(function (response) {
    console.debug('addresses have been loaded:', response);
    if(response.success){
        for (var i = 0 ; i < response.addresses.length ; i++) {
            console.info(response.addresses[i].name + ' - ' + response.addresses[i].phone);
        }
    }
});

// = = = = = = = = = = = = = = = = = = = =
// 3) AJAX example that loads HTML content from SERVER SIDE
// and add it at the end of element with id content (append)
// = = = = = = = = = = = = = = = = = = = =

function getServerCard() {
    $.ajax({
        url: 'templates/card.html',
        method: 'GET',
        data: {
            name: 'A'
        }
    }).done(function (response) {
        console.debug('card have been loaded');
        console.debug(response);

        // add card response at the end (concatenate) of 'content' element
        document.getElementById('content').innerHTML += response;

        // or more simple with jquery
        //$("#content").append(response);
    });
}

// call this function to load a card from server
getServerCard();
