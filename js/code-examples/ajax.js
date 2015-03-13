$.ajax({
    url: 'js/mocks/load-addresses.json',
    method: 'POST',
    data: {
        search: 'fasttrackit'
    }
}).done(function (response) {
    if(response.success){
        console.debug(response.data);
    }
});
