import './style.css';
import { checkbox as checkBox, clearAll } from '../checkAndClear.js';
import TDlist from '../todo.js';

if (localStorage.getItem('list') !== null) {
  const list = JSON.parse(localStorage.getItem('list'));
  TDlist.displayList(list);
}

const description = document.querySelectorAll('.description');

const clear = document.querySelector('.fa-sync-alt');
clear.addEventListener('click', () => {
  window.location.reload();
});

const getFocus = (event) => {
  const li = event.target.parentNode;
  const ellips = event.target.nextElementSibling;
  const trash = ellips.nextElementSibling;
  li.style.backgroundColor = 'transparent';
  ellips.style.visibility = 'hidden';
  trash.style.visibility = 'visible';
};

const lostFocus = (event) => {
  const li = event.target.parentNode;
  const ellips = event.target.nextElementSibling;
  const trash = ellips.nextElementSibling;
  li.style.color = '#cc992d';
  ellips.style.visibility = 'visible';
  trash.style.visibility = 'hidden';
};

description.forEach((element) => {
  element.addEventListener('focus', getFocus);
  element.addEventListener('blur', lostFocus);
});

//  Function edit task

description.forEach((element) => {
  element.addEventListener('change', (event) => {
    const task = new TDlist();
    task.editTask(Number(event.target.id) - 1, event.target.value);
  });
});

// function add task

const form = document.getElementById('sub_form');
const Nitem = document.getElementById('new-item');
const submit = (event) => {
  if (Nitem.value === '') {
    event.preventDefault();
  } else {
    const task = new TDlist(false, Nitem.value);
    task.addTask();
  }
};
form.addEventListener('submit', submit);

// function remove task

const trash = document.querySelectorAll('.trash');
trash.forEach((element) => {
  element.addEventListener('click', function (event) {
    event.stopImmediatePropagation();
    const index = this.parentNode.getAttribute('index');
    const task = new TDlist();
    task.removeTask(Number(index));
  });
});

// Function clear all
const container = document.querySelector('.container');
const clearButton = document.createElement('button');
clearButton.id = 'clearButton';
clearButton.type = 'reset';
clearButton.innerText = 'Clear all completed';
container.appendChild(clearButton);

const checkbox = document.querySelectorAll('.checkbox');

checkbox.forEach((element) => {
  element.addEventListener('click', function () {
    checkBox(this);
  });
});

const removeAllCompleted = document.getElementById('clearButton');
function removeItem() { // deletes item from localStorage
  const key = document.getElementById('Tcompleted'); // gets key from user
  localStorage.removeItem(key);
}

window.onload = function () {
  removeAllCompleted.addEventListener('click', clearAll);
  document.getElementById('clearButton').onclick = removeItem;
};
