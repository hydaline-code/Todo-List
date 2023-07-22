import { tasks } from './todo.js';
import icon from './icon.png';

export const List = () => {
  const taskList = document.getElementById('todolist');

  for (let i = 1; i <= 2; i++ ) {

    const titletask = document.createElement('li');
    taskList.appendChild(titletask);
    if (i === 1) {
      titletask.textContent = "Today's To Do";
      const logo = document.createElement('div');
      const line1 = document.createElement('hr');
      titletask.classList.add('titletask');
      logo.classList.add('logo');
      taskList.appendChild(line1);
      titletask.appendChild(logo);

      const myicon = new Image();
      myicon.src = icon;
      logo.appendChild(myicon);
    } else {
      const addtask = document.createElement('li');
      taskList.appendChild(addtask);
      addtask.textContent = 'Add a Task \u2026';
      addtask.classList.add('adtask');
      const icon2 = document.createElement('button');
      icon2.textContent = '\u2795';
      addtask.appendChild(icon2);
      icon2.classList.add('icon2');
    }
  }

  const listItem = document.createElement('li');

  function Check(event) {
    const checkbox = event.target;
    const label = checkbox.nextElementSibling;

    if (checkbox.checked) {
      label.classList.add('completed');
    } else {
      label.classList.remove('completed');
    }
  }
  const arrange = tasks.sort((task1, task2) => task1.index - task2.index);
  arrange.forEach((task) => {
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'box';
    checkbox.addEventListener('change', Check);

    const label = document.createElement('label');
    label.textContent = task.description;
    label.htmlFor = checkbox.id;

    const button = document.createElement('button');
    button.className = 'icon';
    button.innerHTML = '&#8942;';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(button);

    const line = document.createElement('hr');
    taskList.appendChild(line);
    line.classList.add('line');

    taskList.appendChild(listItem);
  });
};

export default List;