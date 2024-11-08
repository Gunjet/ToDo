const todos=[]

// Todo add
function addOne(newTodo){
    todos.push(newTodo)
}

// Status uurchluh
function editStatus(index,status){
    let item=todos[index];
    item.status=status;
}

// Ner uurchluh
function editName(index,name){
    let item=todos[index];
    item.name=name;
}

// Todo delete one item
function deleteOne(index){
    todos.splice(index, 1)

}

// RUNNING APLICATION 
    addOne({name:'Hool hiih', status:'TODO'}),
    addOne({name:'JS sudlah', status:'TODO'}),
    addOne({name:'Hool hiih', status:'TODO'})

console.log(todos)
editStatus(1,'DONE')
console.log(todos)
editName(2,'Usand oroh')
console.log(todos)
deleteOne(0)
console.log(todos)