/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];

  str.split('').forEach((ltr, i) => {
    if (result.length && ltr === result[result.length - 1][0]) {
      result[result.length - 1][1] += 1;
    } else {
      result.push([ltr, 1]);
    }
  })
  
  return result.map((item) => item[1] > 1 ? `${item[1]}${item[0]}` : item[0]).join('');
}

console.log(encodeLine('aabbbc'));

module.exports = {
  encodeLine
};
