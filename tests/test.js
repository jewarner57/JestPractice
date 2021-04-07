const fb = require('../fizzbuzz')

// Test constants
test('fizz', () => {
  expect(fb.FIZZ).toBe('fizz')
})

test('buzz', () => {
  expect(fb.BUZZ).toBe('buzz')
})

test('fizzbuzz', () => {
  expect(fb.FIZZBUZZ).toBe('fizzbuzz')
})

// Test Fizz and Buzz
test('isFizzy', () => {
  expect(fb.isFizzy(3)).toBe(true)
  expect(fb.isFizzy(5)).toBe(false)
  expect(fb.isFizzy(1000)).toBe(false)
  expect(fb.isBuzzy(15)).toBe(true)
})

test('isBuzzy', () => {
  expect(fb.isBuzzy(3)).toBe(false)
  expect(fb.isBuzzy(5)).toBe(true)
  expect(fb.isBuzzy(1000)).toBe(true)
  expect(fb.isBuzzy(15)).toBe(true)
})

// Test FizzyBuzzy
test('fizzyBuzzy', () => {
  expect(fb.fizzyBuzzy(3)).toBe(fb.FIZZ)
  expect(fb.fizzyBuzzy(5)).toBe(fb.BUZZ)
  expect(fb.fizzyBuzzy(1000)).toBe(fb.BUZZ)
  expect(fb.fizzyBuzzy(15)).toBe(fb.FIZZBUZZ)
})

test('fizzyBuzzyAlt', () => {
  expect(fb.fizzyBuzzy(28, 2, 7)).toBe(fb.FIZZBUZZ)
  expect(fb.fizzyBuzzy(132, 2, 7)).toBe(fb.FIZZ)
  expect(fb.fizzyBuzzy(49, 2, 7)).toBe(fb.BUZZ)
  expect(fb.fizzyBuzzy(71, 2, 7)).toBe("")
  expect(fb.fizzyBuzzy(3051, 2, 7)).toBe("")
})

// Test fizzBuzz main function
test('fizzBuzz', () => {
  expect(fb.fizzBuzz(1000000).buzz).toBe(133334)
  expect(fb.fizzBuzz(1000000).fizz).toBe(266667)
  expect(fb.fizzBuzz(1000000).fizzBuzz).toBe(66666)

  expect(fb.fizzBuzz(71).buzz).toBe(10)
  expect(fb.fizzBuzz(71).fizz).toBe(19)
  expect(fb.fizzBuzz(71).fizzBuzz).toBe(4)
})

