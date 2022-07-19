/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    let bit = (n >>> i) & 1;
    ans = ans | (bit << (31 - i));
  }
  return ans >>> 0;
};

const n = 43261596;
console.log(reverseBits(n));
