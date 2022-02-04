let taskList = [];

function createTask() {
    let task = document.querySelector('#Task');
    let table = document.querySelector('#List');

    let tr = document.createElement("tr");
    table.appendChild(tr);

    let td = document.createElement("td");
    taskList.push(task.value);
    tr.appendChild(td);
    td.innerHTML = task.value;
    td = document.createElement("td");
    tr.appendChild(td);
    let button = document.createElement("button");
    button.onclick = function() { deleteTask(taskList.indexOf(task.value), tr); };
    td.appendChild(button);
    button.innerHTML = "Complete";

    task.value="";
}

function deleteTask(index, tr) {
    taskList.splice(index, 1);
    tr.parentNode.removeChild(tr);
}
