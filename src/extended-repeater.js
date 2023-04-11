/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let result = "";

  const string = `${str}`;

  const validateOptions = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|'
  };

  for (let key in options) {
    validateOptions[key] = key === "addition" ? `${options[key]}` : options[key];
  };

  const { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = validateOptions;

  const addSeparator = (index, separator) => {
    if (index > 0) {
      result += separator;
    }
  }

  if (repeatTimes) {
    for (let i = 0; i < repeatTimes; i++) {

      addSeparator(i, separator);

      result += string;

      if (addition) {
        for (let j = 0; j < additionRepeatTimes; j++) {

          addSeparator(j, additionSeparator);

          result += addition;

        }
      }

    }
  }

  return result
}

console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }));

module.exports = {
  repeater
};
