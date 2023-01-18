/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let sum = 0,
    currMin = 0,
    currMax = 0,
    minSum = nums[0],
    maxSum = nums[0];
  for (const num of nums) {
    currMax = Math.max(currMax, 0) + num;
    maxSum = Math.max(maxSum, currMax);
    currMin = Math.min(currMin, 0) + num;
    minSum = Math.min(minSum, currMin);
    sum += num;
  }
  return minSum === sum ? maxSum : Math.max(maxSum, sum - minSum);
};

const nums = [1, -2, 3, -2];
console.log(maxSubarraySumCircular(nums));
