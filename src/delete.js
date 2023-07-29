
import displaylist  from "./display.js";
import  {allTasks } from "./functionality.js";

export const deleteTask = (index) => {
  allTasks.splice(index, 1);
  displaylist(); // Re-render the task list after deleting a task
};


export default deleteTask();