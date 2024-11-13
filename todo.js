let todos = [];
let blocked = [];
let inprogress = [];
let done = [];

// Todo add
function addOne(newTodo) {
  todos.push(newTodo);
}

// Status uurchluh
function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
}

// Ner uurchluh
function editName(index, name) {
  let item = todos[index];
  item.name = name;
}

// Todo delete one item
function deleteOne(index) {
  todos.splice(index, 1);
}

// RUNNING APLICATION
//     addOne({name:'Hool hiih', status:'TODO'}),
//     addOne({name:'JS sudlah', status:'TODO'}),
//     addOne({name:'Hool hiih', status:'TODO'})

// console.log(todos)
// editStatus(1,'DONE')
// console.log(todos)
// editName(2,'Usand oroh')
// console.log(todos)
// deleteOne(0)
// console.log(todos)

// const tasks=[
//     {name:'shalaa ugaah', status:'todo'},
//     {name:'hivsee ugaah', status:'todo'},
//     {name:'duuge harah', status:'todo'}
//   ];
//   function render(){
//     const output=document.getElementById('tasks');
//     output.innerHTML="";
//     for (let i=0; i<tasks.length; i++){
//       output.innerHTML +='<div class="task">' + tasks[i].name + '</div>';
//     }
//   }

//   function addTask(){
//     const name=prompt();
//     tasks.push({name: name, status:"todo"});
//     render()
//   }

//   function editStatus(index,status){
//     let item=tasks[index];
//     item.status=status
//   }

//   function editName(){
//   }

//   function deleteTask(index){
//     let arr=[];
//     for (let i=0; i<tasks.length; i++){
//       if (i !==index){
//         arr.push(tasks[i])
//       }
//     }
//   }

//   render()

function renderOneList() {}

function render() {
  // console.log(taskList);

  for (let i = 0; i < todos.length; i++) {
    const containerName = todos[i].status;
    const todoList = document.getElementById(containerName);

    const taskList = document.querySelector("#tasks");

    taskList.innerHTML = "";
    const item = todos[i];

    // create task item
    const x = document.createElement("input");
    x.setAttribute("type", "radio");
    x.classList.add("input");

    const element = document.createElement("div");
    element.classList.add("todo-item");

    // create task name
    const titleEl = document.createElement("p");
    titleEl.innerText = item.name;

    // create edit button
    const btnEl = document.createElement("button");
    btnEl.innerText = "Edit";
    btnEl.onclick = function () {
      const newName = prompt("Enter new name");
      editName(i, newName);
      render();
    };

    // delete
    const deleteBtn = document.createElement("button");
    deleteBtn.innetText = "Delete";
    deleteBtn.onclick = function () {
      deleteOne[i];
    };

    element.appendChild(x)
    element.appendChild(titleEl);
    element.appendChild(btnEl);
    element.appendChild(deleteBtn);

    taskList.appendChild(element);
    todoList.appendChild(taskList);
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
