/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  let digitLastInd = 0;
  for (let i = 0; i < number.length - 1; i++) {
    if (number[i] == digit && number[i + 1] > digit)
      return number.slice(0, i) + number.slice(i + 1);
    else if (number[i] == digit) digitLastInd = i;
  }
  return number[number.length - 1] == digit
    ? number.slice(0, -1)
    : number.slice(0, digitLastInd) + number.slice(digitLastInd + 1);
};

const number = "123",
  digit = "3";
console.log(removeDigit(number, digit));
