function printTasks(tasks) {
    var list = document.getElementById('tasks-list').getElementsByTagName('ul')[0];
    var listHtml = '';

    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        //var checked = task.done ? ' checked=""' : '';
        var taskHtml =
            '<li>' +
                //'<input type="checkbox"' + checked + ' value="' + task.id + '" onclick=markDone("' + task.id + '")>' +
                '<input type="checkbox" value="' + task.id + '" onclick=markDone("' + task.id + '")>' +
                task.name +
            '</li>';
        listHtml += taskHtml;
    }

    list.innerHTML = listHtml;
}


function markDone(id) {
    $.ajax({
        url: 'js/mocks/mark-done.json'
    }).done(function (response) {
        console.debug('task marked done:', response);
        loadTasks();
    });
}

function loadTasks() {
    $.ajax({
        url: 'js/mocks/tasks-list.json'
    }).done(function (response) {
        console.debug('tasks have been loaded:', response);
        printTasks(response.tasks);
    });
}
