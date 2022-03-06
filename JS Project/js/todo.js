const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODO_DATA_KEY = "todoData";

let todoData = [] ;

function saveTodo() {
    localStorage.setItem(TODO_DATA_KEY,JSON.stringify(todoData));
}

function deleteTodo(event) {
    const li = event.target.parentElement ;
    todoData = todoData.filter( (Todo) => Todo.id !== parseInt(li.id));
    saveTodo();
    li.remove();
}

function todoCheck(event) {
    const li = event.target.parentElement ;
    const span = li.querySelector("span");
    span.classList.toggle("checked");

}

function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const input = document.createElement("input");
    input.type = "checkbox";
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.classList.add("button-style");
    button.addEventListener("click",deleteTodo);
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    input.addEventListener("click",todoCheck);
    todoList.appendChild(li)
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value ;
    todoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    };
    paintTodo(newTodoObj);
    todoData.push(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodoData = localStorage.getItem(TODO_DATA_KEY);

if (savedTodoData) {
    const parsedTodoData = JSON.parse(savedTodoData) ;
    todoData = parsedTodoData;
    parsedTodoData.forEach(paintTodo);    
}