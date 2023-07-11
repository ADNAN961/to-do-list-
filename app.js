// selectors 
const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');



// event listeners 
todobutton.addEventListener('click',addtodo);



// functions

function addtodo(event) {
    event.preventdefault();

    // tooo div
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo"); 

    const newtodo = document.createElementN('li');
    newtodo.innertext = 'hey' ;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);

    const completedbutton = document.createElement('button');
    completedbutton.innerHTML= '<i class="fas fa-check"></i>';
    completedbutton.classList.add("complete-btn");
    tododiv.appendChild(completedbutton);

    const trashbutton = document.createElement('button');
    trashbutton.innerHTML= '<i class="fas fa-check"></i>';
    trashbutton.classList.add("complete-btn");
    tododiv.appendChild(trashbutton);

    todolist.appendChild(tododiv);





}