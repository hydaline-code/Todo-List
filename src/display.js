import { forEach } from 'lodash';
import  {allTasks } from './functionality.js';
import icon from './icon.png';


export const displaylist = () => {
  const taskList = document.getElementById('todolist');
  taskList.innerHTML = '';
      
const div = document.getElementById('header')
div.innerHTML = ''; 
const titletask = document.createElement('li');
  div.appendChild(titletask);
    titletask.textContent = "Today's To Do";
    const logo = document.createElement('button');
    const line1 = document.createElement('hr');
    titletask.classList.add('titletask');
    logo.classList.add('logo');
    div.appendChild(line1);
    titletask.appendChild(logo);
    const myicon = new Image();
    myicon.src = icon;
    logo.appendChild(myicon);

    const addtask = document.createElement('li');
    div.appendChild(addtask);
    addtask.textContent = 'Add a Task \u2026';
    addtask.classList.add('adtask');
    const icon2 = document.createElement('button');
    icon2.textContent = '\u2795';
    addtask.appendChild(icon2);
    icon2.classList.add('icon2');
   
    icon2.addEventListener('click', () => {
     //icon2.style.display='none';
    addtask.style.display ='none'
      const taskInput = document.createElement('input');
      taskInput.type = 'text';
      taskInput.className = 'new-task-input';
      taskInput.placeholder = 'Enter a new task...';
      taskInput.style.width='100%';
      taskInput.style.margin='0.5rem';
      div.appendChild(taskInput);

      taskInput.addEventListener('keydown', (event) => {
        localStorage.setItem('tasks', JSON.stringify(allTasks));
        if (event.key === 'Enter' && taskInput.value.trim() !== '') {
          const description = taskInput.value.trim();
          const tasknum = allTasks.length + 1;
          const newTask = {
            description: description,
            index: tasknum,
            completed: false,
          };
          allTasks.push(newTask);
          taskInput.value = '';
          displaylist();
        }
        // const storedTasks = localStorage.getItem('allTasks');
        // if (storedTasks) {
        //   allTasks = JSON.parse(storedTasks);
        // }
      
      });
      const line = document.createElement('hr');
      line.classList.add('line');
    
      const newTaskItem = document.createElement('li');
      newTaskItem.appendChild(taskInput);
      newTaskItem.appendChild(line);
    
      div.insertBefore(newTaskItem, addtask);
    
      taskInput.focus();

      document.addEventListener('click', (event) => {
        if (!event.target.closest('.adtask') && !event.target.closest('.new-task-input')) {
          newTaskItem.remove();
         addtask.style.display ='flex';
        }
      });
  });

 allTasks.forEach((task, index) => {

    const listItem = document.createElement('li');
    listItem.classList.add('list');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'box';
    checkbox.addEventListener('change', Check);

    const label = document.createElement('label');
    label.textContent = task.description;
    label.htmlFor = checkbox.id;

    const button = document.createElement('button');
    button.className = 'icon';
    button.innerHTML = '&#8942;';

    if ((index + 1) % 2 !== 0) {
      listItem.classList.add('odd');
    }

    const updateTaskIndexes = () => {
      allTasks.forEach((task, index) => {
        task.index = index + 1;
      });
    };
  
    button.addEventListener('click', (event) => {
     button.style.display='none'
    //  button.classList.add('flex');
  
      const deleteIcon = document.createElement('div');
      deleteIcon.className = 'delete-icon';
      deleteIcon.innerHTML = '&#128465;';

    const deleteTask = (index) => {
        allTasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(allTasks));
        updateTaskIndexes();
        displaylist(); 
      };
      
      deleteIcon.addEventListener('click', (index) => {
        deleteTask(index);
      });
  

      const editIcon = document.createElement('div');
      editIcon.className = 'edit-icon';
      editIcon.innerHTML = '&#9998;';

      const editTask = (index, edited) => {
        if (index >= 0 && index < allTasks.length) {
          allTasks[index].description = edited;
          localStorage.setItem('tasks', JSON.stringify(allTasks));
          displaylist(); 
        
        }
      };
  
      
      editIcon.addEventListener('click', () => {
       
        const taskDescription = listItem.querySelector('label').textContent;
        if (checkbox.checked) {
          alert("Cannot edit a completed task.");
          return; 
        }
       
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'edit-input';
        editInput.value = taskDescription;
        editInput.style.background = 'red';
       
        button.style.display='none';
        editIcon.style.display='none';
        deleteIcon.style.display ='none';
       
        listItem.replaceChild(editInput, listItem.querySelector('label'));
        editInput.focus();
       

      editInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          localStorage.setItem('tasks', JSON.stringify(allTasks));
          button.style.display='block';
          const editedDes = editInput.value.trim();
          const index = event.index;
            editTask(index, editedDes);
            const newLabel = document.createElement('label');
            newLabel.textContent = editedDes;
            listItem.replaceChild(newLabel, editInput);
        } else if (event.key !== 'Enter')  {
          button.style.display='none';
        }    
      }); 
    });
    
      listItem.appendChild(deleteIcon);
      listItem.appendChild(editIcon);

      document.addEventListener('click', (event) => {
        if (!event.target.closest('.list') ) {
          editIcon.remove();
          deleteIcon.remove();
          button.style.display='block';
        }
      });
     
    });
    
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(button);

    const line = document.createElement('hr');
    taskList.appendChild(line);
    line.classList.add('line');

    taskList.appendChild(listItem);
  });

  function Check(event) {
    const checkbox = event.target;
    const listItem = checkbox.closest('li');
    const label = listItem.querySelector('label');
    const taskIndex = Array.from(label.parentNode.children).indexOf(label);
   const task = allTasks[taskIndex];
   localStorage.setItem('tasks', JSON.stringify(allTasks));
    if (!task) {
      console.error("Task not found.");
      return;
    }
    if (checkbox.checked) {
        task.completed =true;
      label.classList.add('completed');
    }  else {
      task.completed = false;
      label.classList.remove('completed');
    }
   
  }

  localStorage.setItem('tasks', JSON.stringify(allTasks));

};

export default displaylist;