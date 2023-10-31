/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  arr.sort((a, b) => {
    let countA = countBits(a),
      countB = countBits(b);
    if (countA == countB) return a - b;
    return countA - countB;
  });
  return arr;
};

var countBits = function (num) {
  let count = 0;
  while (num > 0) {
    count++;
    num &= num - 1;
  }
  return count;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sortByBits(arr));
