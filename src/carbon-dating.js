const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  if (typeof sampleActivity !== "string") {
    return false;
  }

  const a = +sampleActivity;

  if (isNaN(a) || a <= 0 || a > HALF_LIFE_PERIOD) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const activities = MODERN_ACTIVITY / a
  const t = Math.log(activities) / k;

  if (t < 0) {
    return false;
  }

  return Math.ceil(t);
}

console.log(dateSample('ACTIVITY OVER 9000'));

module.exports = {
  dateSample
};
