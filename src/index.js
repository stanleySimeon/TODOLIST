import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';

const container = document.querySelector('.container');

const header = document.createElement('div');
header.className = 'header';
container.appendChild(header);

const title = document.createElement('h1');
title.innerText = "Today's To DO";
header.appendChild(title);

const clearBtn = document.createElement('div');
clearBtn.className = 'clear';
header.appendChild(clearBtn);

const refresh = document.createElement('i');
refresh.className = 'fa fa-refresh';
clearBtn.appendChild(refresh);

const content = document.createElement('div');
content.className = 'content';
container.appendChild(content);

const form = document.createElement('form');
form.className = 'add-item';
form.id = 'form';
content.appendChild(form);

const input = document.createElement('input');
input.id = 'input';
input.type = 'text';
input.placeholder = 'Add to your list...';
form.appendChild(input);

const button = document.createElement('button');
button.id = 'addBtn';
button.type = 'submit';
form.appendChild(button);

const enterBtn = document.createElement('i');
enterBtn.className = 'fa-solid fa-arrow-left';
button.appendChild(enterBtn);

const list = document.createElement('div');
list.id = 'list';
content.appendChild(list);

const clearButton = document.createElement('button');
clearButton.id = 'clearButton';
clearButton.type = 'button';
clearButton.innerText = 'Clear all completed';
container.appendChild(clearButton);

const TodoList = [
  {
    description: 'Morning Session',
    completed: false,
    index: 1,
  },
  {
    description: 'Program time one',
    completed: false,
    index: 2,
  },
  {
    description: 'Break',
    completed: false,
    index: 3,
  },
  {
    description: 'Program time two',
    completed: false,
    index: 4,
  },
  {
    description: 'Standup team meeting',
    completed: false,
    index: 5,
  },
];

const todo = document.getElementById('list');

for (let i = 0; i < 5; i += 1) {
  const addTodo = TodoList[i];
  todo.innerHTML += `
     <li class="item">
     <input type="checkbox" class="ch"></input>
     <p class="text">${addTodo.description}</p>
     <i class="fa fa-trash-alt ch"></i>
     </li>
     `;
}