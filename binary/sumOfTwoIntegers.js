/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b) {
    const tmp = (a & b) << 1;
    a = a ^ b;
    b = tmp;
  }
  return a;
};

const a = -1,
  b = -2;
console.log(getSum(a, b));
