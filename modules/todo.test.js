import { addTask, deleteTask } from './todo.js';

/* This is a mock function that is used to test the localStorage object. */
global.localStorage = {
  getItem: jest.fn().mockReturnValue(null),
  setItem: jest.fn().mockReturnValue(null),
};

// Test addTask function
describe('addTask', () => {
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
});

// Test deleteTask function
describe('deleteTask', () => {
  test('should delete a task from the todoList array', () => {
    const task = {
      description: 'test',
      completed: false,
      index: 0,
    };
    const result = deleteTask(task);
    expect(result).toEqual([]);
  });
});
