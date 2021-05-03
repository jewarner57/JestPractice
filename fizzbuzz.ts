const FIZZ: string = 'fizz'
const BUZZ: string = 'buzz'
const FIZZBUZZ: string = 'fizzbuzz'

/** 
 * Returns true when n is divisible by 3 
 * @param {Number} n
 * @returns {Boolean} fizziness 
 * */
const isFizzy = (n: number, fizzOn: number = 3): boolean => {
  return n % fizzOn === 0
}

/**
 * Returns true when n is divisible by 5
 * @param {Number} n 
 * @returns {Boolean} buzziness
 */
const isBuzzy = (n: number, buzzOn: number = 5): boolean => {
  return n % buzzOn === 0
}

/**
 * Returns FIZZ, BUZZ, or FIZZBUZZ when a number is divisible by 3, 5, or both
 * @param {Number} n
 * @returns {String} '', 'FIZZ', 'BUZZ', or 'FIZZBUZZ'
 */
const fizzyBuzzy = (n: number, fizzOn: number = 3, buzzOn: number = 5): string => {
  let result: string = ''
  if (isFizzy(n, fizzOn)) { result += FIZZ }
  if (isBuzzy(n, buzzOn)) { result += BUZZ }
  return result
}

/**
 * Generates a results object describing a sequence of fizz buzz for count.
 * @param {Number} count 
 * @returns {Object} with properties count, fizz, buzz, and fizzbuzz
 */
type Result = { count: number, fizz: number, buzz: number, fizzBuzz: number }

const fizzBuzz = (count: number): Result => {
  let result: Result = { count: count, fizz: 0, buzz: 0, fizzBuzz: 0 };

  for (let i: number = 1; i <= count; i += 1) {
    const str: string = fizzyBuzzy(i)

    switch (str) {
      case FIZZ:
        result.fizz += 1
        break
      case BUZZ:
        result.buzz += 1
        break
      case FIZZBUZZ:
        result.fizzBuzz += 1
        break
    }
  }
  return result
}

module.exports.isFizzy = isFizzy
module.exports.isBuzzy = isBuzzy
module.exports.fizzyBuzzy = fizzyBuzzy
module.exports.fizzBuzz = fizzBuzz
module.exports.FIZZ = FIZZ
module.exports.BUZZ = BUZZ
module.exports.FIZZBUZZ = FIZZBUZZ

