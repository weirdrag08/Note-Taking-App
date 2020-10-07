// Add a new task. 
let taskInput = document.getElementById("new-task");  
  
// first button 
let addButton = document.getElementsByTagName("button")[0];  
  
// ul of #incomplete-tasks 
let incompleteTaskHolder = document.getElementById("incomplete-tasks");  
  
// completed-tasks 
let completedTasksHolder = document.getElementById("completed-tasks");  


// function to create new task item 
let createNewTaskElement = function (taskString) { 
   
    let listItem = document.createElement("li"); 
   
    // input (checkbox) 
    let checkBox = document.createElement("input"); // checkbox 
    let label = document.createElement("label"); // label 
    let deleteButton = document.createElement("button"); // delete button 
   
    label.innerText = taskString; 
   
    checkBox.type = "checkbox"; 
  
    deleteButton.innerText = "Delete"; 
    deleteButton.className = "delete"; 
   
    listItem.appendChild(checkBox); 
    listItem.appendChild(label); 
    listItem.appendChild(deleteButton); 
    return listItem; 
} 

let addTask = function () { 
    console.log("Add Task..."); 
   
    let listItem = createNewTaskElement(taskInput.value); 
   
    if (taskInput.value == "") { 
        return; 
    } 
   
    // Append listItem to incompleteTaskHolder 
    incompleteTaskHolder.appendChild(listItem); 
    bindTaskEvents(listItem, taskCompleted); 
   
    taskInput.value = ""; 
   
} 

let deleteTask = function () { 
    console.log("Delete Task..."); 
   
    let listItem = this.parentNode; 
    let ul = listItem.parentNode; 
    // Remove the parent list item from the ul. 
    ul.removeChild(listItem); 
   
} 
   
let taskCompleted = function () { 
    console.log("Complete Task..."); 
   
    // Append the task list item to the #completed-tasks 
    let listItem = this.parentNode; 
    completedTasksHolder.appendChild(listItem); 
    bindTaskEvents(listItem, taskIncomplete); 
   
} 
   

let taskIncomplete = function () { 
    console.log("Incomplete Task..."); 
    // Mark task as incomplete. 
    let listItem = this.parentNode; 
    incompleteTaskHolder.appendChild(listItem); 
    bindTaskEvents(listItem, taskCompleted); 
} 


addButton.onclick = addTask; 
addButton.addEventListener("click", addTask); 
   
let bindTaskEvents = function (taskListItem, checkBoxEventHandler) { 
    console.log("bind list item events"); 
    let checkBox = taskListItem.querySelector("input[type=checkbox]"); 
    let deleteButton = taskListItem.querySelector("button.delete"); 
    deleteButton.onclick = deleteTask; 
    checkBox.onchange = checkBoxEventHandler; 
} 
   
for (let i = 0; i < incompleteTaskHolder.children.length; i++) { 
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted); 
} 

for (let i = 0; i < completedTasksHolder.children.length; i++) {  
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete); 
} 


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}


const open=document.getElementById('open')
const modal_container=document.getElementById('modal-container')
const close=document.getElementById('close')

open.addEventListener('click', ()=>{
    modal_container.classList.add('show');
});


close.addEventListener('click', ()=>{
    modal_container.classList.remove('show');
});