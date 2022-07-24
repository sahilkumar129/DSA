/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let a = 0,
    b = 1;
  while (n-- > 0) {
    let temp = a;
    a = a + b;
    b = temp;
  }
  return a;
};

const n = 10;
console.log(fib(n));
