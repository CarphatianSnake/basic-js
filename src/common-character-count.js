/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  const temp = [];
  let result = 0;

  const getCount = (s, l) => [...s.matchAll(l)].length;

  s1.split('').forEach((ltr) => {
    if (!temp.includes(ltr)) {
      temp.push(ltr);
      result += Math.min(getCount(s1, ltr), getCount(s2, ltr));
    }
  })

  return result;
  
}

module.exports = {
  getCommonCharacterCount
};
