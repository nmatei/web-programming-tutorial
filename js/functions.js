// show/hide more info
document.getElementById('show-info').onclick = function () {
    document.getElementById('more-info').style.display = 'inline';
    document.getElementById('show-info').style.display = 'none';
};

document.getElementById('hide-info').onclick = function () {
    document.getElementById('more-info').style.display = 'none';
    document.getElementById('show-info').style.display = 'inline';
};

// collapse/expand news widget
var newsWidget = document.getElementById("news-widget");
newsWidget.getElementsByClassName("header")[0].onclick = function () {
    if (newsWidget.className == "widget") {
        newsWidget.className = "widget collapsed";
    } else {
        newsWidget.className = "widget";
    }
};

// collapse/expand help widget
var helpWidget = document.getElementById("help-widget");
helpWidget.getElementsByClassName("header")[0].onclick = function () {
    if (helpWidget.className == "widget") {
        helpWidget.className = "widget collapsed";
    } else {
        helpWidget.className = "widget";
    }
};

// collapse/expand google search widget
var googleSearchWidget = document.getElementById("google-search");
googleSearchWidget.getElementsByClassName("header")[0].onclick = function () {
    if (googleSearchWidget.className == "widget") {
        googleSearchWidget.className = "widget collapsed";
    } else {
        googleSearchWidget.className = "widget";
    }
};

// collapse/expand google search widget
var colorPickerWidget = document.getElementById("color-picker-widget");
colorPickerWidget.getElementsByClassName("header")[0].onclick = function () {
    if (colorPickerWidget.className == "widget") {
        colorPickerWidget.className = "widget collapsed";
    } else {
        colorPickerWidget.className = "widget";
    }
};


//var widgets = document.getElementsByClassName("widget");
//for (var i = 0; i < widgets.length; i++) {
//    var widget = widgets[i];
//    widget.getElementsByClassName("header")[0].onclick = toggleWidget(widget);
//}


//function toggleWidget(widget) {
//    if (widget.className == "widget") {
//        widget.className = "widget collapsed";
//    } else {
//        widget.className = "widget";
//    }
//}
//
//
//var widgets = document.getElementsByClassName("widget");
//for (var i = 0; i < widgets.length; i++) {
//    var widget = widgets[i];
//    var header = widgets[i].getElementsByClassName("header")[0];
//    header.onclick = function () {
//        var parent = header.parentNode;
//        if (parent.className == "widget") {
//            parent.className = "widget collapsed";
//        } else {
//            parent.className = "widget";
//        }
//        ;
//    };
//}
//;

// actions for top links
var links = document.getElementById("top-menu").getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {

    links[i].onclick = function () {
        document.getElementById("breadcrumb").innerHTML = this.innerHTML + " : " + this.title;
        if (window.location.href.indexOf("index.html") < 1) {
            window.location.href = "file:///C:/Users/Flaviu/Dropbox/fasttrackit/web-programming-tutorial/index.html"
        }
        //TODO: Fix bug: all menu links redirect the user to the homepage after accessing the Contacts List page
        manageContent(this.getAttribute("name"));
    }
}

// Hiding or displaying corresponding content based on selected menu
var content = document.getElementById("content");
function manageContent(contentName) {
    hideDynamicContent();
    var correspondingContent = document.getElementsByName(contentName)[1];
    correspondingContent.classList.remove("hidden");
}

// Hiding all dynamic content
var dynamicContent = content.getElementsByClassName("dynamic-content");
function hideDynamicContent() {
    for (var j = 0; j < dynamicContent.length; j++) {
        if (!dynamicContent[j].classList.contains("hidden")) {
            dynamicContent[j].classList.add("hidden");
        }
    }
}

// Clearing search field
var contactSearchField = document.getElementById("contacts-search-keyword");
contactSearchField.onclick = function () {
    if (this.classList.contains("default-state")) {
        this.value = "";
        this.classList.remove("default-state")
    }
}

// Populating empty search field with the default text when not focused
document.getElementsByTagName("body")[0].onclick = function () {
    if (contactSearchField.value == "" && contactSearchField != document.activeElement) {
        contactSearchField.value = "Enter contact name or phone number"
        contactSearchField.classList.add("default-state")
    }
}