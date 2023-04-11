/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
const getMatrixElementsSum = m => m.reduce((ac, ar, i) => ac + ar.reduce((a, el, j) => i === 0 || m[i - 1][j] ? a + el : a, 0), 0);

module.exports = {
  getMatrixElementsSum
};
