/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
  let left = new Array(nums.length).fill(0),
    right = new Array(nums.length).fill(0),
    ans = new Array(nums.length).fill(0);
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    left[i] = left[i - 1] + i * diff;
  }
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[nums.length - i] - nums[nums.length - i - 1];
    right[nums.length - i - 1] = right[nums.length - i] + i * diff;
  }
  for (let i = 0; i < nums.length; i++) ans[i] = left[i] + right[i];
  return ans;
};

const nums = [1, 4, 6, 8, 10];
console.log(getSumAbsoluteDifferences(nums));

// 1 4 6 8  10
// 0  3 7 13 21
// 24 12 6 2 0
// 24 15 13 15 21
