$(document).ready(function () {

    $('#secondary-toggle').click(function () {
        $(this).toggleClass('toggled-on');
        $('#left-bar').toggleClass('toggled-on');
        $('#top-menu').find('ul').toggleClass('toggled-on');
    });

});