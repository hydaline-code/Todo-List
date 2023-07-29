import { forEach } from 'lodash';
import { allTasks } from './functionality.js';
import icon from './icon.png';
import checks from './completed.js';

export const displaylist = () => {
  const taskList = document.getElementById('todolist');
  taskList.innerHTML = '';

  const div = document.getElementById('header');
  div.innerHTML = '';
  const titletask = document.createElement('li');
  div.appendChild(titletask);
  titletask.textContent = "Today's To Do";
  const logo = document.createElement('button');
  const line1 = document.createElement('hr');
  titletask.classList.add('titletask');
  logo.classList.add('logo');
  div.appendChild(line1);
  titletask.appendChild(logo);
  const myicon = new Image();
  myicon.src = icon;
  logo.appendChild(myicon);

  const addtask = document.createElement('li');
  div.appendChild(addtask);
  addtask.textContent = 'Add a Task \u2026';
  addtask.classList.add('adtask');
  const icon2 = document.createElement('button');
  icon2.textContent = '\u2795';
  addtask.appendChild(icon2);
  icon2.classList.add('icon2');

  icon2.addEventListener('click', () => {
    addtask.style.display = 'none';
    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.className = 'new-task-input';
    taskInput.placeholder = 'Enter a new task...';
    taskInput.style.width = '100%';
    taskInput.style.margin = '0.5rem';
    div.appendChild(taskInput);

    taskInput.addEventListener('keydown', (event) => {
      localStorage.setItem('tasks', JSON.stringify(allTasks));
      if (event.key === 'Enter' && taskInput.value.trim() !== '') {
        const description = taskInput.value.trim();
        const tasknum = allTasks.length + 1;
        const newTask = {
          description,
          index: tasknum,
          completed: false,
        };
        allTasks.push(newTask);
        taskInput.value = '';
        displaylist();
      }
    });
    const line = document.createElement('hr');
    line.classList.add('line');

    const newTaskItem = document.createElement('li');
    newTaskItem.appendChild(taskInput);
    newTaskItem.appendChild(line);

    div.insertBefore(newTaskItem, addtask);

    taskInput.focus();

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.adtask') && !event.target.closest('.new-task-input')) {
        newTaskItem.remove();
        addtask.style.display = 'flex';
      }
    });
  });

  allTasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'box';
    checkbox.addEventListener('change', checks);

    const label = document.createElement('label');
    label.classList.add('mytask');
    label.textContent = task.description;
    label.htmlFor = checkbox.id;

    const button = document.createElement('button');
    button.className = 'icon';
    button.innerHTML = '&#8942;';

    if ((index + 1) % 2 !== 0) {
      listItem.classList.add('odd');
    }

    const updateTaskIndexes = () => {
      allTasks.forEach((task, index) => {
        task.index = index + 1;
      });
    };

    button.addEventListener('click', (event) => {
      button.style.display = 'none';

      const deleteIcon = document.createElement('div');
      deleteIcon.className = 'delete-icon';
      deleteIcon.innerHTML = '&#128465;';

      const deleteTask = (index) => {
        allTasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(allTasks));
        updateTaskIndexes();
        displaylist();
      };

      deleteIcon.addEventListener('click', (index) => {
        deleteTask(index);
      });

      const editIcon = document.createElement('div');
      editIcon.className = 'edit-icon';
      editIcon.innerHTML = '&#9998;';

      const editTask = (index, edited) => {
        const allTasks = JSON.parse(localStorage.getItem('tasks'));
        allTasks.forEach((task) => {
          if (task.index === (index + 1)) {
            task.description = edited;
          }
          localStorage.setItem('tasks', JSON.stringify(allTasks));
        });
      };

      editIcon.addEventListener('click', () => {
        label.contentEditable = 'true';
        label.style.backgroundColor = 'blue';
        label.focus();

        document.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            label.contentEditable = 'false';
            label.style.backgroundColor = 'transparent';
            editTask(index, label.textContent);
          }
        });
      });

      listItem.appendChild(deleteIcon);
      listItem.appendChild(editIcon);

      document.addEventListener('click', (event) => {
        if (!event.target.closest('.list')) {
          editIcon.remove();
          deleteIcon.remove();
          label.contentEditable = 'false';
          button.style.display = 'block';
        }
      });
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(button);

    const line = document.createElement('hr');
    taskList.appendChild(line);
    line.classList.add('line');

    taskList.appendChild(listItem);
  });

  localStorage.setItem('tasks', JSON.stringify(allTasks));
};

export default displaylist;
