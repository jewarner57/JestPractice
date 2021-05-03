var FIZZ = 'fizz';
var BUZZ = 'buzz';
var FIZZBUZZ = 'fizzbuzz';
/**
 * Returns true when n is divisible by 3
 * @param {Number} n
 * @returns {Boolean} fizziness
 * */
var isFizzy = function (n, fizzOn) {
    if (fizzOn === void 0) { fizzOn = 3; }
    return n % fizzOn === 0;
};
/**
 * Returns true when n is divisible by 5
 * @param {Number} n
 * @returns {Boolean} buzziness
 */
var isBuzzy = function (n, buzzOn) {
    if (buzzOn === void 0) { buzzOn = 5; }
    return n % buzzOn === 0;
};
/**
 * Returns FIZZ, BUZZ, or FIZZBUZZ when a number is divisible by 3, 5, or both
 * @param {Number} n
 * @returns {String} '', 'FIZZ', 'BUZZ', or 'FIZZBUZZ'
 */
var fizzyBuzzy = function (n, fizzOn, buzzOn) {
    if (fizzOn === void 0) { fizzOn = 3; }
    if (buzzOn === void 0) { buzzOn = 5; }
    var result = '';
    if (isFizzy(n, fizzOn)) {
        result += FIZZ;
    }
    if (isBuzzy(n, buzzOn)) {
        result += BUZZ;
    }
    return result;
};
var fizzBuzz = function (count) {
    var result = { count: count, fizz: 0, buzz: 0, fizzBuzz: 0 };
    for (var i = 1; i <= count; i += 1) {
        var str = fizzyBuzzy(i);
        switch (str) {
            case FIZZ:
                result.fizz += 1;
                break;
            case BUZZ:
                result.buzz += 1;
                break;
            case FIZZBUZZ:
                result.fizzBuzz += 1;
                break;
        }
    }
    return result;
};
module.exports.isFizzy = isFizzy;
module.exports.isBuzzy = isBuzzy;
module.exports.fizzyBuzzy = fizzyBuzzy;
module.exports.fizzBuzz = fizzBuzz;
module.exports.FIZZ = FIZZ;
module.exports.BUZZ = BUZZ;
module.exports.FIZZBUZZ = FIZZBUZZ;
