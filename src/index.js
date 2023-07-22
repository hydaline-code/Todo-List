import _ from 'lodash';
import './style.scss';
import { tasks } from './todo.js';
import List from './todolist.js';
import { reloadPage } from './reload';
 
    tasks;
    List();
    reloadPage();

    document.addEventListener('DOMContentLoaded', () => {
      const load = document.querySelector('.logo');
      load.addEventListener('click', () => {
        reloadPage();
      });
    });
    

    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', () => {
      const todoList = document.querySelector('#todolist');
      const completedTasks = todoList.querySelectorAll('.completed');
      const active = document.querySelector('.active');
  
      completedTasks.forEach((task) => {
        task.remove();
        active.remove();
      });
    });

  
  
  
  
  
  
  
  