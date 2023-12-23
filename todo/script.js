// script.js
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
        li.onclick = removeTodo;
        todoList.appendChild(li);
        todoInput.value = '';
    }
}

function removeTodo() {
    this.remove();
}
