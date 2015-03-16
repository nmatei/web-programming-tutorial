// = = = = = = = = = = = = = = = = = = = =
// Step 1: collapse/expand only news widget
// rename variable name (newsWidget -> widget) to make it look more general
// = = = = = = = = = = = = = = = = = = = =

var widget = document.getElementById("news-widget");
// onclick event widget header
widget.getElementsByClassName("header")[0].onclick = function () {
    if (widget.className == "widget") {
        widget.className = "widget collapsed";
    } else {
        widget.className = "widget";
    }
};

// = = = = = = = = = = = = = = = = = = = =
// Step 2: improve code by moving it all into one anonymous function
// in this case var widget will not be anymore a global variable
// but will be only a variable in that function scope
// = = = = = = = = = = = = = = = = = = = =

(function(){
    // move entire code from Step 1
})();

// = = = = = = = = = = = = = = = = = = = =
// Step 3: create a local function to add onclick event any widget
// and after that call that function with your specific widget as a parameter
// = = = = = = = = = = = = = = = = = = = =

(function(){
    function makeWidgetCollapsible(widget) {
        widget.getElementsByClassName("header")[0].onclick = function () {
            if (widget.className == "widget") {
                widget.className = "widget collapsed";
            } else {
                widget.className = "widget";
            }
        };
    }
    // call the function to add onclick event to news widget
    makeWidgetCollapsible(document.getElementById("news-widget"));

    // now we can call it many times for other widgets
    makeWidgetCollapsible(document.getElementById("help-widget"));
    makeWidgetCollapsible(document.getElementById("google-search"));
})();

// = = = = = = = = = = = = = = = = = = = =
// Step 4: collapse/expand all widget
// the solution from above handle only manually all widgets,
// but if we add more widgets in html, they will not be closable by default.
// now we find all widgets by class name and make them all collapsible using 'for'
// = = = = = = = = = = = = = = = = = = = =
(function () {
    function makeWidgetCollapsible(widget) {
        widget.getElementsByClassName("header")[0].onclick = function () {
            if (widget.className == "widget") {
                widget.className = "widget collapsed";
            } else {
                widget.className = "widget";
            }
        };
    }

    // find all available widgets and make them collapsible
    var widgets = document.getElementsByClassName("widget");
    for (var i = 0 ; i< widgets.length; i++){
        makeWidgetCollapsible(widgets[i]);
    }
})();
