const loginForm = document.getElementById("login-form") ;
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginBtnSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS) ;
    const username = loginInput.value ;
    localStorage.setItem("username", username);
    paintGreetings(username);
}

function paintGreetings(username) {
    const todoForm = document.getElementById("todo-form");
    const todoList = document.getElementById("todo-list");
    greeting.innerText = `Hello, ${username}`;
    loginForm.classList.add(HIDDEN_CLASS);
    greeting.classList.remove(HIDDEN_CLASS);
    todoForm.classList.remove(HIDDEN_CLASS);
    todoList.classList.remove(HIDDEN_CLASS);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginBtnSubmit);
} else {
    paintGreetings(savedUserName);
}


