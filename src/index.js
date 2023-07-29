import _ from 'lodash';
import './style.scss';
import { allTasks } from './functionality.js';
import icon from './icon.png';
import { displaylist } from './display.js';

document.addEventListener('DOMContentLoaded', () => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    allTasks = JSON.parse(storedTasks);
    displaylist();
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

displaylist();
