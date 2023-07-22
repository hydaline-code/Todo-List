import List from './todolist.js';

export const  reloadPage = () => {
  const taskList = document.getElementById('todolist');
  taskList.innerHTML = ''; 

  List();
 
}

document.addEventListener('DOMContentLoaded', reloadPage);
