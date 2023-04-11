/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();

  if (month > 1 && month < 5) {
    return "spring";
  }

  if (month > 4 && month < 8) {
    return "summer";
  }

  if (month > 7 && month < 11) {
    return "fall"
  }

  return "winter";
}

console.log(getSeason(new Date(2019, 7, 8, 9, 10, 11)));

module.exports = {
  getSeason
};
