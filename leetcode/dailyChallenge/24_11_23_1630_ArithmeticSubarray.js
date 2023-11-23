/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const ans = [];
  for (let i = 0; i < l.length; i++) {
    ans.push(isArithmetic(nums, l[i], r[i]));
  }
  return ans;
};

var isArithmetic = function (nums, i, j) {
  const subArr = [...nums.slice(i, j + 1)];
  subArr.sort((a, b) => a - b);
  if (subArr.length < 2) return true;
  const diff = subArr[1] - subArr[0];
  for (let k = 0; k < subArr.length - 1; k++) {
    if (subArr[k + 1] - subArr[k] !== diff) return false;
  }
  return true;
};

const nums = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
  l = [0, 1, 6, 4, 8, 7],
  r = [4, 4, 9, 7, 9, 10];
console.log(checkArithmeticSubarrays(nums, l, r));
