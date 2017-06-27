// show/hide more info
$('#show-info').click(function () {
    $('#more-info').show();
    $('#show-info').hide();
});

$('#hide-info').click(function () {
    $('#more-info').hide();
    $('#show-info').show();
});

// collapse/expand all widgets
// $(".widget .header").click(function () {
//     var widget = $(this).parent();
//     widget.toggleClass('collapsed');
// });

// close widget with animation
$(".widget .header").click(function () {
   var widget = $(this).parent();
   widget.find('.content').animate({
       height: "toggle",
       opacity: "toggle"
   }, {
       duration: 400
   });
   widget.toggleClass('x-collapsed');
});

// actions for top links
// $("#top-menu a").click(function () {
//     $("#breadcrumb").text(this.innerHTML + " : " + this.title);
//     return false;
// });

