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
button.type = 'button';
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

export default class TodoList {
  LIST = [];

  saveToDo() {
    const todos = JSON.stringify(this.LIST);
    localStorage.setItem('todos', todos);
  }

  getStoredTodos() {
    this.LIST = JSON.parse(
      localStorage.getItem('todos'),
    );
  }

  addTodo(description) {
    const todo = {
      description,
      completed: false,
      index: this.LIST.length + 1,
    };
    this.LIST.push(todo);
    this.saveToDo();
  }

  editItem(text, index) {
    this.LIST[index - 1].description = text.textContent;
    this.saveToDo();
  }

  completedTodo(status, index) {
    this.LIST[index - 1].completed = status;
    this.saveToDo();
  }

  removeTodo = (index) => {
    const updatedArray = this.LIST.filter((taskIndex) => taskIndex !== index);
    updatedArray.forEach((item, index) => {
      item.index = index + 1;
    });
    localStorage.setItem('todos', JSON.stringify(updatedArray));
    window.location.reload();
  };

  updateIndex() {
    this.LIST.map((a) => {
      a.index = this.LIST.indexOf(a) + 1;
      return a;
    });
  }
}

const todo = new TodoList();

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  window.location.reload();
});

export const createTodo = () => {
  const itemList = document.querySelector('#list');
  itemList.replaceChildren();

  if (todo.LIST.length > 0) {
    const taskContainer = document.createElement('ul');
    taskContainer.className = 'list';
    itemList.appendChild(taskContainer);
    todo.LIST.map((map) => {
      const list = document.createElement('li');
      list.className = 'todo';
      taskContainer.appendChild(list);

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'checkbox';
      list.appendChild(checkbox);
      if (map.completed === true) {
        checkbox.checked = 'checked';
      }

      checkbox.onclick = (e) => {
        todo.completedTodo(e.target.checked, map.index);
      };

      const inputElement = document.createElement('p');
      inputElement.id = 'inputValue';
      inputElement.textContent = map.description;
      list.appendChild(inputElement);

      inputElement.addEventListener('click', () => {
        inputElement.contentEditable = true;
      });

      const buttonRmv = document.createElement('button');
      // buttonRmv.id = 'rmvButton';
      buttonRmv.type = 'button';
      buttonRmv.id = map.index;
      list.appendChild(buttonRmv);

      const removeIcon = document.createElement('i');
      removeIcon.className = 'fa fa-trash-alt removeIcon';
      buttonRmv.appendChild(removeIcon);

      buttonRmv.addEventListener('click', () => {
        for (let i = 0; i < list.length; list + 1) {
          if (localStorage.getItem('todos', todo)) {
            if (todo.completed === true) {
              localStorage.removeItem('list');
            }
          }
        }
      });

      inputElement.addEventListener('keyup', (e) => {
        if (e.target.id === 'inputValue') {
          if (e.key === 'Enter') {
            createTodo();
          } else {
            todo.editItem(e.target, map.index);
          }
          localStorage.setItem('todos', todo);
        }
      });

      taskContainer.append(list);
      return list;
    });
    itemList.appendChild(taskContainer);
  }
};

const saveList = () => {
  if (localStorage.getItem('todos')) {
    todo.getStoredTodos();
    createTodo();
  }
};

export { saveList };

const getAddTodos = () => {
  const addToDO = document.getElementById('input');
  const description = addToDO.value;
  if (description !== '') {
    todo.addTodo(description);
    createTodo();
    addToDO.value = '';
  }
};
export { getAddTodos };

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', getAddTodos);