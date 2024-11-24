
let todos = [];
let editIdx = 0;

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
          <div style="display: flex; justify-content: start; align-items: center; gap:10px;">
            <div class="task-circle"></div>
            <p class="taskname">${item.name}</p>
          </div>

          <div>
            <span id="edit-btn" class="material-symbols-outlined">edit</span>
            <span id="delete-btn" class="material-symbols-outlined">delete</span>
          </div>
        </div>
      </div>
    `;

    taskList.innerHTML += taskHTML;

    const taskElement = taskList.querySelector(".todo-item:last-child");
    const editBtn = taskElement.querySelector("#edit-btn");
    const deleteBtn = taskElement.querySelector("#delete-btn");

    editBtn.onclick = function () {
      const modal = document.querySelector("#modal");
      modal.style.display = "block";
      const submitBtn = document.querySelector(".submit");
      submitBtn.style.display = "none";
      const editBtn = document.querySelector("#edit-button");
      editBtn.style.display = "block";
      editIdx = i;
    };

    deleteBtn.onclick = function () {
      deleteTask(i); 
    };
  }
}

function deleteTask(index) {
  todos.splice(index, 1);
  render();  
}

function addTodo() {
  const modal = document.querySelector("#modal");
  const taskNameInput = document.getElementById("task-name");
  const taskStatusSelect = document.getElementById("task-status");
  const submitBtn = document.querySelector(".submit");
  const editBtn = document.querySelector("#edit-button");

  taskNameInput.value = ''; 
  taskStatusSelect.value = '';  

  submitBtn.style.display = "block";  
  editBtn.style.display = "none"; 

  modal.style.display = "block";
}

function saveTodo() {
  const inputValue = document.getElementById("task-name").value;
  const statusValue = document.getElementById("task-status").value;

  if (!inputValue || !statusValue) {
    alert("Please enter both a task name and status.");
    return;
  }

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

function closeModal() {
  const modal = document.querySelector("#modal");
  const taskNameInput = document.getElementById("task-name");
  const taskStatusSelect = document.getElementById("task-status");
  const submitBtn = document.querySelector(".submit");
  const editBtn = document.querySelector("#edit-button");

  // Clear the input fields
  taskNameInput.value = '';  // Clear task name input
  taskStatusSelect.value = '';  // Reset task status to default

  modal.style.display = "none";

  submitBtn.style.display = "block";
  editBtn.style.display = "none";
}

document.getElementById("close-modal").onclick = closeModal;


