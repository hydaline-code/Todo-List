import { displaylist } from "./display.js";
import loadTasks from "./functionality.js";

export const reloadPage = () => {
  const taskList = document.getElementById('todolist');
  taskList.innerHTML = '';
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    allTasks = JSON.parse(storedTasks);
  }
  displaylist();
};
export default reloadPage;

