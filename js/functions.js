var newsWidget = document.getElementById('news-widget');
newsWidget.getElementsByClassName('header')[0].onclick = function(){
    if(newsWidget.className == 'widget') {
        newsWidget.className = 'widget collapsed';
    } else {
        newsWidget.className = 'widget';
    }
};


var links = document.getElementById("top-menu").getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        document.getElementById('breadcrumb').innerHTML = this.innerHTML + ' : ' + this.title;
    }
}
