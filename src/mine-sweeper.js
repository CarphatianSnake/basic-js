/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  
  function lookAround(row, cell) {

    let result = 0;

    for (let i = -1; i <= 1; i++) {

      if (matrix[row + i]) {

        for (let j = -1; j <= 1; j++) {

          if (matrix[row + i][cell + j] && !(row + i === row && cell + j === cell)) {

              result += 1;

          }

        }

      }

    }

    return result;

  }

  return matrix.map((arr, row) => arr.map((item, cell) => lookAround(row, cell)));

}

console.log(minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]));

module.exports = {
  minesweeper
};
