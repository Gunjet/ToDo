let todos = [];
let editIdx = 0;

function renderOneList() {}

function render() {
  document.querySelector("#todo-tasks").innerHTML = "";
  document.querySelector("#in-progress-tasks").innerHTML = "";
  document.querySelector("#done-tasks").innerHTML = "";
  document.querySelector("#blocked-tasks").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const containerName = todos[i].status;
    const containerNewName = "#" + containerName + "-tasks";
    const taskList = document.querySelector(containerNewName);
    const item = todos[i];
    const taskHTML = `
<div class="todo-item">
      <div class="todo-item2">
      <div style="display: flex; justify-content: start;
       align-items: center; gap:10px; ">
        <div class="task-circle"></div>
        <p class="taskname">${item.name}</p>
      </div>
      
        <div><button class="edit-btn">
          <img src="edit.png" class="icon">
        </button>
        <button class="delete-btn">
          <img src="delete.png" class="icon">
        </button></div>
        
        </div>
      </div>
`;

    taskList.innerHTML += taskHTML;

    console.log(todos[i])

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


    console.log(todos);
  }
}

function deleteTask(index) {
  todos.splice(index, 1);
  render();
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