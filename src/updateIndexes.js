import { allTasks } from './functionality.js';

const updateTaskIndexes = () => {
  allTasks.forEach((task, index) => {
    task.index = index + 1;
  });
};
export default updateTaskIndexes;