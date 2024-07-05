var utils  = require('course-utilities');
var hello = utils.load('./hello.js', 'hello');
var add = utils.load('./hello.js', 'add');

test('outputs the correct string', () => {
  expect(hello()).toBe("Hello World!");
});

test("adds correctly", () => {
  expect(add(5, 5)).toBe(10);
});

test("checks string correctly", () => {
  expect(isEmptyString("")).toBe(true);
});