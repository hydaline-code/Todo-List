import { displaylist } from './display.js';
import { allTasks } from './functionality.js';

const reloadPage = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      allTasks = JSON.parse(storedTasks);
      displaylist(); // Call displaylist() after retrieving tasks from local storage
    }
  });
};
// export default reloadPage;
