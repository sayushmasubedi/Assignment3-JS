document.addEventListener('DOMContentLoaded', function () {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');

    addTaskBtn.addEventListener('click', function () {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
            li.classList.toggle('completed');
            taskList.appendChild(li); // Move to bottom
        });

        const taskText = document.createElement('span');
        taskText.textContent = text;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
