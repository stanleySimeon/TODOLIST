import { addTask, deleteTask } from '../modules/todo.js';

// Test addTask function
test('should add a task to the todoList array', () => {
  const task = {
    description: 'test',
    completed: false,
    index: 0,
  };
  const result = addTask(task);
  expect(result).toEqual([{
    description: 'test',
    completed: false,
    index: 0,
  }]);
});

// Test deleteTask function
test('should delete a task from the todoList array', () => {
  const task = {
    description: 'test',
    completed: false,
    index: 0,
  };
  const result = deleteTask(task);
  expect(result).toEqual([]);
});
