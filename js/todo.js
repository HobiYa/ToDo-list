const toDoForm = document.querySelector('.todo-form');
const toDoInput = document.querySelector('.todo-form input');
const toDoList = document.querySelector('.todo-list');

const TODOS_KEY = 'todos';
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //localStorage에 array의 모양으로 저장됨
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove(); //li를 지운다
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function LineThrough (arr){
  const span = arr.target.parentElement;
  span.className = 'todo-array__done';
}

function padingTodo(newTodo) {
  const li = document.createElement('li'); //li추가
  li.id = newTodo.id;
  const span = document.createElement('span'); //span추가
  span.addEventListener('click', LineThrough)
  span.innerText = newTodo.text; //span 텍스트는 newTodo텍스트다
  const button = document.createElement('span'); //span추가
  button.className = 'del'; //button의 class 추가
  button.innerText = '완료'; //button의 삭제 텍스트 추가
  button.addEventListener('click', deleteToDo);
  li.appendChild(span); //li요소 안에 span 넣음
  li.appendChild(button); //li요소 안에 span넣음
  toDoList.appendChild(li); //toDoList 안에 li 넣음
}

function todosubmit(event) {
  event.preventDefault(); //입력시 새로고침 안됨
  const newTodo = toDoInput.value; //newTodo는 toDoInput의 텍스트 값을 받는다
  toDoInput.value = ''; //입력 받고 엔터 누르면 toDoInput값은 사라짐
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //toDos(array)에 값이 넣어진다
  padingTodo(newTodoObj); //위에 있는 값을 불러옴
  saveToDos();
}

toDoForm.addEventListener('submit', todosubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(padingTodo);
}
