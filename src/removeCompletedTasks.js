import displaylist from './display.js';
import { allTasks } from './functionality.js';
import updateTaskIndexes from './updateIndexes.js';

const deleteCompletedTasks = () => {
  const completedTasks = allTasks.filter((task) => task.completed);
  completedTasks.forEach((completedTask) => {
    const index = allTasks.findIndex((task) => task.index === completedTask.index);
    if (index !== -1) {
      allTasks.splice(index, 1);
    }
  });
  updateTaskIndexes();
  displaylist();
};

export default deleteCompletedTasks;