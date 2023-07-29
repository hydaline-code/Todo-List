import { allTasks } from './functionality.js';

const checks = (event) => {
  const checkbox = event.target;
  const listItem = checkbox.closest('li');
  const label = listItem.querySelector('label');
  const taskIndex = Array.from(label.parentNode.children).indexOf(label);
  const task = allTasks[taskIndex];

  if (checkbox.checked) {
    task.completed = true;
    label.classList.add('completed');
  } else {
    task.completed = false;
    label.classList.remove('completed');
  }
};

export default checks;
