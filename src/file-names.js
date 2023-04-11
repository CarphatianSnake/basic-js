/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const temp = names;
  const result = [];
  const counters = {};
  
  while (temp.length) {
    if (!(temp[0] in counters)) {
      counters[temp[0]] = 1;
    }

    if (!result.includes(temp[0])) {
      result.push(temp.shift());
    } else {
      const el = temp.shift();
      if (temp[0] in counters) {
        counters[temp[0]] += 1;
      }
      result.push(`${el}(${counters[el]})`);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
