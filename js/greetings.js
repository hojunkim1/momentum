const loginForm = document.querySelector("#login"),
  loginInput = document.querySelector("#login input"),
  greeting = document.querySelector("#greeting"),
  Delete = document.querySelector(".delete");

const HIDDEN_CN = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CN);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CN);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreetings();
}
