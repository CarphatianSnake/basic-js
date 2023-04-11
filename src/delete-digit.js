/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
const deleteDigit = n =>`${n}`
                          .split('')
                          .map((d) => +`${n}`.replace(d, ''))
                          .reduce((a, d) => Math.max(a, +d), 0);

module.exports = {
  deleteDigit
};
