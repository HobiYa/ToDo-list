const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const hello = document.querySelector('#hello');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function login(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  padintGreetings(username);
}

function padintGreetings(username) {
  hello.innerText = `안녕하세요`;
  greeting.innerText = `${username}님!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  hello.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', login);
} else {
  padintGreetings(saveUsername);
}
