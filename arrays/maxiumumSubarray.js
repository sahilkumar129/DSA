/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currMaxSum = nums[0],
    maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currMaxSum = Math.max(nums[i], currMaxSum + nums[i]);
    maxSum = Math.max(maxSum, currMaxSum);
  }
  return maxSum;
};

const nums = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums));
