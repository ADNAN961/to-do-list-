// selection 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event listener

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click' , deleteCheck);
filterOption.addEventListener('click', filterTodo);

// functions

function addTodo(event){
    // prevent form from submittng

    event.preventDefault();
    // Todo div 

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //  Create LI 
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check mark button 
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // check trash button 
    const trashdButton = document.createElement('button');
    trashdButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashdButton.classList.add("trash-btn");
    todoDiv.appendChild(trashdButton);
    // /append to do list 
    todoList.appendChild(todoDiv);
    //  clear to do input value 
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    // delete todo 
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
         todo.remove();
        });
       
    }

    // check mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
      }
}

    
    function filterTodo(e) {
        const todos = todoInput.childNodes;
        todos.forEach(function(todo){
            switch(e.target.value){
                case "all":
                    todo.style.display = "flex" ;
                    break;
                case "completed" :
          if (todo.classList.contains('completed')) {
            todo.style.display = 'flex' ;
          } else {
            todo.style.display = "none";
          }

          case "Uncompleted" :
            if (!todo.classList.contains('Uncompleted')) {
              todo.style.display = 'flex' ;
            } else {
              todo.style.display = "none";
            }

            
          


            }
        });
    
    }
    