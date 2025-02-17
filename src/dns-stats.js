/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  domains.forEach((d) => {
    d.split('.')
     .reverse()
     .reduce((acc, item) => {
       const temp = `${acc}.${item}`;
       result[temp] = 0;
       return temp;
     }, '')
  })

  for (let domain in result) {
    const d = domain.split('.')
                  .slice(1)
                  .reverse()
                  .join('.');

    domains.forEach((item) => {
      if (item.endsWith(d)) {
        result[domain] += 1;
      }
    })
  }

  return result;
}

module.exports = {
  getDNSStats
};
