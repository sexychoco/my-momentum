const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-content");

let toDos = [];

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem("todo", JSON.stringify(toDos));
}

function paintToDos(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleSubmitBtn(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  paintToDos(newToDoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleSubmitBtn);

const savedToDos = localStorage.getItem("todo");
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  toDos.forEach(paintToDos);
}
