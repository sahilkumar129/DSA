/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    let num = i,
      count = 0;
    while (num) {
      num &= num - 1;
      count++;
    }
    result.push(count);
  }
  return result;
};

const n = 5;
console.log(countBits(n));
