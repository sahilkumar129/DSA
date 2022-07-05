/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let one = 1,
    two = 1,
    temp;
  while (--n) {
    temp = one;
    one += two;
    two = temp;
  }
  return one;
};

const n = 5;
console.log(climbStairs(n));
