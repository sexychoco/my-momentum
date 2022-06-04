const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

function handleSubmitBtn(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  paintGreeting(username);
  localStorage.setItem("username", username);
}

function paintGreeting(username) {
  greeting.innerText = `${username}'s Diary`;
  greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");
if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", handleSubmitBtn);
} else {
  loginForm.classList.add("hidden");
  paintGreeting(savedUsername);
}

loginForm.addEventListener("submit", handleSubmitBtn);
