const { add } = require('.')
const { sub } = require('.')

test('add', () => {
  expect(add(1, 2)).toEqual(3)
})

test('sub', () => {
  expect(sub(2, 1)).toEqual(1)
})
