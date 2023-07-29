import _ from 'lodash';
import './style.scss';
import icon from './icon.png';
import displaylist from './display.js';
import { allTasks } from './functionality.js';
import deleteCompletedTasks from './removeCompletedTasks.js';

document.addEventListener('DOMContentLoaded', () => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    allTasks = JSON.parse(storedTasks);
    displaylist();
  }
});
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', deleteCompletedTasks);
displaylist();
