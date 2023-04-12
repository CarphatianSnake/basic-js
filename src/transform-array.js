/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!(Array.isArray(arr))) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let result = [...arr];

  result.forEach((item, index) => {

    switch (item) {

      case ("--discard-next"):
        if (index === result.length - 1) {
          result = result.slice(0, -1);
        } else {
          result[index] = "";
          result[index + 1] = "";
        }
        index -= 1;
        break;

      case ("--discard-prev"):
        if (index !== 0) {
          result[index] = "";
          result[index - 1] = "";
        } else {
          result = result.slice(1);
        }
        index -= 1;
        break;

      case ("--double-next"):
        if (index === result.length - 1) {
          result = result.slice(0, -1);
        } else {
          result[index] = result[index + 1];
        }
        break;

      case ("--double-prev"):
        if (index !== 0) {
          result[index] = result[index - 1];
        } else {
          result = result.slice(1);
        }
        break;
        
    }
  })

  return result.filter((item) => item !== "");

}

console.log(transform([ '--discard-prev', 1, 2, 1, 2, 3 ]));

module.exports = {
  transform
};
