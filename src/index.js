import './input.css';
import {
  addTask, deleteTask, getTasks, dragTask, updateTask, updateIndexes, editTask, clearAllCompleted,
} from '../modules/todo.js';

const input = document.querySelector('.input');
const addButton = document.querySelector('.input-btn');
const reload = document.getElementById('reload-btn');
const clearAll = document.getElementById('clear-all-completed-btn');

reload.addEventListener('click', () => {
  window.location.reload();
});

addButton.addEventListener('click', () => {
  window.location.reload();
  if (input.value === '') {
    return;
  }
  addTask({
    description: input.value,
    completed: false,
    index: 0,
  });
});

getTasks().forEach((task) => {
  const li = document.createElement('li');
  li.style.display = 'flex';
  li.classList.add('item');
  li.style.justifyContent = 'space-between';
  li.style.padding = '10px 8px';
  li.style.borderBottom = '1px solid #ccc';
  li.innerHTML = `
    <span class="w-11/12 flex items-center space-x-2">
      <input type="checkbox" class="checkbox w-5 h-5" ${task.completed ? 'checked' : ''}>
      <p class="description">${task.description}</p>
    </span>
    <span class="w-1/12 flex justify-center items-center">
      <button class="delete-btn w-5 hidden"><img src="/src/asset/delete.png" alt="delete"></button>
      <button class="drag-btn edit-btn w-5"><img src="/src/asset/dot-vertical-filled.svg" alt="delete"></button>
    </span>

  `;
  document.querySelector('.input-list').appendChild(li);
});

const checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    updateTask(index, checkbox.checked);
    if (checkbox.checked) {
      checkbox.nextElementSibling.classList.add('line-through');
    } else {
      checkbox.nextElementSibling.classList.remove('line-through');
    }
  });
  checkbox.addEventListener('click', () => {
    updateIndexes();
  });
});

const editButtons = document.querySelectorAll('.edit-btn');

editButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const description = document.querySelectorAll('.description')[index];
    const input = document.createElement('input');
    input.style.width = '100%';
    input.style.outline = 'none';
    input.value = description.textContent;
    input.classList.add('edit-input');

    description.replaceWith(input);

    const deleteButton = document.querySelectorAll('.delete-btn')[index];
    deleteButton.classList.remove('hidden');

    const editButton = document.querySelectorAll('.edit-btn')[index];
    editButton.classList.add('hidden');

    input.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        editTask(index, input.value);
      }
    });

    input.addEventListener('blur', () => {
      editTask(index, input.value);
      window.location.reload();
    });

    deleteButton.addEventListener('click', () => {
      const item = document.querySelectorAll('.item')[index];
      item.parentNode.removeChild(item);
      deleteTask(index);
    });
  });
});

const dragButtons = document.querySelectorAll('.drag-btn');

dragButtons.forEach((button, index) => {
  button.addEventListener('dragstart', () => {
    dragTask(index);
  });

  button.addEventListener('dragend', () => {
    window.location.reload();
  });
});

clearAll.addEventListener('click', () => {
  clearAllCompleted();
  window.location.reload();
});
