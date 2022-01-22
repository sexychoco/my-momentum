const loginForm = document.querySelector("#login-form");
const longinInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function handleSubmitBtn(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = longinInput.value;
  localStorage.setItem("username", username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `${username}'s Diary`;
  greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", handleSubmitBtn);

const savedUsername = localStorage.getItem("username");
if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", handleSubmitBtn);
} else {
  loginForm.classList.add("hidden");
  paintGreetings(savedUsername);
}
