/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce((result, array) => {
    array.forEach((item) => {
      if (item === "^^") {
        result = result + 1;
      }
    })
    return result;
  }, 0)
}

module.exports = {
  countCats
};
