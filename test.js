const add = require('.')

test('add', () => {
  expect(add(1, 2)).toEqual(3)
})

test('sub', () => {
  expect(add(2, 1)).toEqual(1)
})