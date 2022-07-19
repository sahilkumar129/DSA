/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const visited = new Set();
  return helper(n, visited);
};

var helper = function (n, visited) {
  if (n === 1) return true;
  if (visited.has(n)) return false;
  visited.add(n);
  let newNum = 0;
  while (n > 0) {
    newNum += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }
  return helper(newNum, visited);
};

const n = 2;
console.log(isHappy(n));
