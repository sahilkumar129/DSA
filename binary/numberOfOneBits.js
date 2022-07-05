/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  // for (let i = 0; i < 32; i++) {
  // count += n & (1 << i) ? 1 : 0;
  // }
  while (n) {
    n &= n - 1;
    count++;
  }
  return count;
};

const n = -3;
console.log(hammingWeight(n));
