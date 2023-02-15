/* Getting the toDoList from localStorage and parsing it into an array.
If there is no toDoList in localStorage, it will create an empty array. */

const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];

/**
 * It takes a task, adds it to the toDoList array, and then saves the updated array to localStorage
 * @param task - The task to be added to the toDoList array.
 */
const addTask = (task) => {
  toDoList.push(task);
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
};

/**
 * It deletes the task at the given index from the toDoList array,
 * and then saves the updated array to local storage
 * @param index - The index of the task to be deleted.
 */
const deleteTask = (index) => {
  toDoList.splice(index, 1);
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
};

/**
 * It takes an index and a description, and then it updates the description
 * of the task at that index
 * @param index - The index of the task in the toDoList array.
 * @param description - The new description of the task.
 */
const editTask = (index, description) => {
  toDoList[index].description = description;
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
};

/**
 * It takes the task at the index of the drag and drops it at the new index
 * @param index - The index of the task being dragged.
 * @param newIndex - The new index of the task.
 */
const dragTask = (index, newIndex) => {
  if (index < 0 || index >= toDoList.length || newIndex < 0 || newIndex >= toDoList.length) {
    // index or newIndex is out of range
    return;
  }
  const [task] = toDoList.splice(index, 1);
  toDoList.splice(newIndex, 0, task);
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
};

/**
 * It takes an index and a completed value, and updates
 * the toDoList array at that index with the new completed value
 * @param index - The index of the task in the toDoList array.
 * @param completed - a boolean value that indicates whether the task is completed or not.
 */
const updateTask = (index, completed) => {
  toDoList[index].completed = completed;
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
};

/**
 * It loops through the toDoList array, and updates the index
 * property of each task object to match its index in the array
 */
const updateIndexes = () => {
  toDoList.forEach((task, index) => {
    task.index = index;
  });
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
};

/**
 * It filters the toDoList array to only include tasks that have been completed,
 * then it removes each of those tasks from the
 * toDoList array
 */
const clearAllCompleted = () => {
  const completedTasks = toDoList.filter((task) => task.completed);
  completedTasks.forEach((task) => {
    const index = toDoList.indexOf(task);
    toDoList.splice(index, 1);
  });
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
};

/**
 * GetTasks() returns the toDoList array.
 */
const getTasks = () => toDoList;

/* Exporting the functions from the file. */
export {
  addTask,
  deleteTask,
  editTask,
  dragTask,
  updateTask,
  updateIndexes,
  getTasks,
  clearAllCompleted,
  toDoList,
};
