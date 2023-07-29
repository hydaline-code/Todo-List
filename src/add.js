
import  {allTasks } from "./functionality.js";
import icon from './icon.png';
import displaylist  from "./display.js";

export const list = () => {
//   const taskList = document.getElementById('todolist');

//   function Check(event) {
//     const checkbox = event.target;
//     const listItem = checkbox.closest('li');
  
//     if (checkbox.checked) {
//       listItem.classList.add('completed');
//       const line = listItem.nextElementSibling;
//       if (line && line.classList.contains('line')) {
//         line.classList.add('active');
//       }
//     } else {
//       listItem.classList.remove('completed');
//     }
//   }

  /*for (let i = 1; i <= 2; i += 1) {
    const titletask = document.createElement('li');
    taskList.appendChild(titletask);
    if (i === 1) {
      titletask.textContent = "Today's To Do";
      const logo = document.createElement('button');
      const line1 = document.createElement('hr');
      titletask.classList.add('titletask');
      logo.classList.add('logo');
      taskList.appendChild(line1);
      titletask.appendChild(logo);
      const myicon = new Image();
      myicon.src = icon;
      logo.appendChild(myicon);
   } else {
      const addtask = document.createElement('li');
      taskList.appendChild(addtask);
      addtask.textContent = 'Add a Task \u2026';
      addtask.classList.add('adtask');
      const icon2 = document.createElement('button');
      icon2.textContent = '\u2795';
      addtask.appendChild(icon2);
      icon2.classList.add('icon2');
    }
  }*/
  
      // Event listener for the plus button to add a new task

    
       /* taskInput.addEventListener('keydown', (event) => {
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
            taskList.appendChild(addtask);
          //  addtask.appendChild(icon2);
          // icon2.addEventListener('click', icon2ClickHandler);

            taskInput.remove();
          
          }
     
    });
  
//displaylist();
    };
  
*/
 };

//export default list;
displaylist(); 