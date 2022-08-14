/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  let ans = "0";
  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      const curr = `${number.slice(0, i)}${number.slice(i + 1)}`;
      ans = curr > ans ? curr : ans;
    }
  }
  return ans;
};

const number = "123",
  digit = "3";
console.log(removeDigit(number, digit));
