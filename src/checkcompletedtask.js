import { allTasks } from './functionality.js';

const checkCompletedTask = (taskIndex) => {
  const task = allTasks.find((t) => t.index === taskIndex);
  if (task) {
    task.completed = !task.completed;
    localStorage.setItem('tasks', JSON.stringify(allTasks));
    const label = document.getElementById(`label-${task.index}`);
    if (label) {
      label.classList.toggle('completed', task.completed);
    }
  }
};
export default checkCompletedTask;
