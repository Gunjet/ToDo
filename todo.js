let todos = [];
let editIdx = null;

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
        <div style="display: flex; justify-content: start; align-items: center; gap:10px; ">
          <div class="task-circle"></div>
          <p class="taskname">${item.name}</p>
        </div>
        <div class="icons">
          <button class="edit-btn">
            <img src="edit.png" class="icon">
          </button>
          <button class="delete-btn" data-index="${i}">
            <img src="delete.png" class="icon">
          </button>
        </div>
      </div>
    </div>
    `;
    taskList.innerHTML += taskHTML;

    const taskElement = taskList.querySelector(".todo-item:last-child");

    const editBtn = taskElement.querySelector(".edit-btn");
    editBtn.onclick = function () {
      const modal = document.querySelector("#modal");
      modal.style.display = "block";
      document.querySelector(".title2").textContent = "Edit task";
      
      const taskToEdit = todos[i];
      document.getElementById("task-name").value = taskToEdit.name;
      document.getElementById("task-status").value = taskToEdit.status;
      
      document.querySelector(".submit").style.display = "none";
      document.querySelector("#edit-button").style.display = "block";
    
      editIdx = i;
    };
    const deleteBtn = taskElement.querySelector(".delete-btn");
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
  document.getElementById("task-name").value = "";
  document.getElementById("task-status").value = "";
  const modal = document.querySelector("#modal");
  modal.style.display = "block";
  document.querySelector(".submit").style.display = "block";
  document.querySelector("#edit-button").style.display = "none";
  document.querySelector(".title2").textContent = "Enter task";
  editIdx = null;
}

function saveTodo() {
  const inputValue = document.getElementById("task-name").value;
  const statusValue = document.getElementById("task-status").value;
  
  if (inputValue && statusValue) { 
    todos.push({
      name: inputValue,
      status: statusValue,
    });
    const modal = document.querySelector("#modal");
    modal.style.display = "none";
    render();
  }
}

function edit() {
  const inputValue = document.getElementById("task-name").value;
  const statusValue = document.getElementById("task-status").value;
  
  if (inputValue && statusValue) { 
    todos[editIdx].name = inputValue;
    todos[editIdx].status = statusValue;

    const modal = document.querySelector("#modal");
    modal.style.display = "none";

    render();
  }
}
function closeModal() {
  const modal = document.querySelector("#modal");
  modal.style.display = "none";
  resetModal();
}
function resetModal() {
  document.getElementById("task-name").value = "";
  document.getElementById("task-status").value = "";
  document.querySelector(".submit").style.display = "block";
  document.querySelector("#edit-button").style.display = "none";
  document.querySelector(".title2").textContent = "Enter task";
  
  editIdx = null;
}

function addTodo() {
  const modal = document.querySelector("#modal");
  modal.style.display = "block";
  document.querySelector(".submit").style.display = "block";
  document.querySelector("#edit-button").style.display = "none";

  document.querySelector(".title2").textContent = "Enter task";

  editIdx = null;
}

function saveTodo() {
  const inputValue = document.getElementById("task-name").value;
  const statusValue = document.getElementById("task-status").value;
  
  if (inputValue && statusValue) {
    todos.push({
      name: inputValue,
      status: statusValue,
    });

    const modal = document.querySelector("#modal");
    modal.style.display = "none"; 
    render(); 
  }
}

function edit() {
  const inputValue = document.getElementById("task-name").value;
  const statusValue = document.getElementById("task-status").value;
  
  if (inputValue && statusValue) {
    todos[editIdx].name = inputValue;
    todos[editIdx].status = statusValue;

    const modal = document.querySelector("#modal");
    modal.style.display = "none";
    render(); 
  }
}


