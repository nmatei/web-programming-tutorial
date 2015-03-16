// show/hide more info
byId('show-info').onclick = function () {
    show('more-info');
    hide('show-info');
};

byId('hide-info').onclick = function () {
    hide('more-info');
    show('show-info');
};

// actions for top links
var links = byId("top-menu").getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        byId("breadcrumb").innerHTML = this.innerHTML + " : " + this.title;
    }
}

function initWidget(widget) {
    widget.getElementsByClassName("header")[0].onclick = function () {
        if (widget.className == "widget") {
            widget.className = "widget collapsed";
        } else {
            widget.className = "widget";
        }
    };
}

// collapse/expand all widgets
var widgets = document.getElementsByClassName('widget');
for(var i = 0; i< widgets.length; i++) {
    // variables scope
    initWidget(widgets[i]);
}
