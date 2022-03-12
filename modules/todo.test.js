/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions
const TDlist = require('./todo');
const { clearAll } = require('./checkAndClear');

global.localStorage = {
  getItem: jest.fn().mockReturnValue(null),
  setItem: jest.fn().mockReturnValue(null),
};
describe('Edit checking...', () => {
  it('The item should be edited', () => {
    const task = new TDlist();
    task.addTask();
    task.editTask(0, false);
    expect(task.list.length).toBe(1);
    expect(task.list[0].Tcompleted).toBe(false);
  });
  it('Items should be update if Completed', () => {
    clearAll();
  });
});
