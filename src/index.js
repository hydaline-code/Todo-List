import _ from 'lodash';
import './style.scss';
import  {allTasks } from "./functionality.js";
import icon from './icon.png';
import displaylist from './display.js';

//import reloadPage from './reload.js';


displaylist(); 

document.addEventListener('DOMContentLoaded', () => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    allTasks = JSON.parse(storedTasks);
    displaylist(); // Call displaylist() after retrieving tasks from local storage
  }
});
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
  const todoList = document.querySelector('#todolist');
  const completedTasks = document.querySelectorAll('.list');
  const active = document.querySelector('.active');

  completedTasks.forEach((task) => {
    task.remove();
    active.remove();
  });
});


