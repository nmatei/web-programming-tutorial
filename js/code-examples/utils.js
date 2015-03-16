function byId(id) {
    return document.getElementById(id);
}
function hide(id) {
    byId(id).style.display = 'none';
}
function show(id) {
    byId(id).style.display = '';
}
