let todos = [];
let editIdx = 0;

function renderOneList() {}

function render() {
  document.querySelector("#todo-tasks").innerHTML="";
  document.querySelector("#in-progress-tasks").innerHTML="";
  document.querySelector("#done-tasks").innerHTML="";
  document.querySelector("#blocked-tasks").innerHTML="";
  // console.log(taskList);

  for (let i = 0; i < todos.length; i++) {
    const containerName = todos[i].status;
    // const todoList = document.getElementById(containerName);
    const containerNewName = "#" + containerName + "-tasks";
    const taskList = document.querySelector(containerNewName);
    const item = todos[i];

    // create task item
    // const x = document.createElement("input");
    // x.setAttribute("type", "radio");
    // x.classList.add("input");

    // const element = document.createElement("div");
    // element.classList.add("todo-item");

    // create task name
    // const titleEl = document.createElement("p");
    // titleEl.innerText = item.name;

    // create edit button
    // const btnEl = document.createElement("button");
    // btnEl.innerText = "Edit";
    // btnEl.onclick = function() {
    //   const modal = document.querySelector("#modal");
    //   modal.style.display = "block";
    //   const submitBtn = document.querySelector(".submit");
    //   submitBtn.style.display = "none"
    //   const editBtn = document.querySelector("#edit-button");
    //   editBtn.style.display = "block";
    //   editIdx = i;
    // }

    // const deleteBtn = document.createElement("button");
    // deleteBtn.innerText = "Delete";
    // deleteBtn.onclick = function () { 
    // };

// const taskHTML = `
// <div class="todo-item">
//   <input type="radio" class="input">
//   <p>${item.name}</p>
//   <button class="edit-btn">Edit</button>
//   <button class="delete-btn">Delete</button>
// </div>
// `;
const taskHTML=`
<div class="todo-item">
<div class="todo-item2">
  <input type="radio" class="input">
  <p class="taskname">${item.name}</p>
  <button class="edit-btn">
  <img src="edit (1).png" class="icon">
  </button>
  <button class="delete-btn">
    <img src="delete.png" class="icon">
  </button>
  </div>
</div>
`;

taskList.innerHTML += taskHTML;

const taskElement = taskList.querySelector(".todo-item:last-child");

const editBtn = taskElement.querySelector(".edit-btn");
editBtn.onclick = function () {
const modal = document.querySelector("#modal");
modal.style.display = "block";
const submitBtn = document.querySelector(".submit");
submitBtn.style.display = "none";
const editBtn = document.querySelector("#edit-button");
editBtn.style.display = "block";
editIdx = i;
};

const deleteBtn = taskElement.querySelector(".delete-btn");
deleteBtn.onclick = function () {
deleteTask(i);  
};

    element.appendChild(x)
    element.appendChild(titleEl);
    element.appendChild(btnEl);
    element.appendChild(deleteBtn);

    taskList.appendChild(element);

    console.log(todos);
  }
}




function addTodo() {
  const modal = document.querySelector("#modal");
  modal.style.display = "block";

}
function saveTodo() {
  const inputValue = document.getElementById("task-name").value;
  const statusValue = document.getElementById("task-status").value;
  todos.push({
    name: inputValue,
    status: statusValue,
  });
  const modal = document.querySelector("#modal");
  modal.style.display = "none";
  render();
}

function edit() {
  const modal = document.querySelector("#modal");
  modal.style.display = "none";
  const inputValue = document.getElementById("task-name").value;
  const statusValue = document.getElementById("task-status").value;
  todos[editIdx].name = inputValue;
  todos[editIdx].status = statusValue;
  render();
}