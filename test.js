const { add } = require('.')
const { sub } = require('.')
const { mul } = require('.')
const { div } = require('.')

test('add', () => {
  expect(add(1, 2)).toEqual(3)
})

test('sub', () => {
  expect(sub(2, 1)).toEqual(1)
})

test('mul', () => {
  expect(mul(2, 2)).toEqual(4)
})

test('div', () => {
  expect(div(2, 2)).toEqual(1)
})