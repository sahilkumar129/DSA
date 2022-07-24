/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  return Math.max(nums[0], robHelper(nums.slice(1)), robHelper(nums.slice(0, -1)));
};

const robHelper = function (nums) {
  const dp = new Array(nums.length + 1).fill(0);
  dp[nums.length - 1] = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    dp[i] = Math.max(dp[i + 1], nums[i] + dp[i + 2]);
  }
  console.log(dp);
  return dp[0];
};

const nums = [1, 2, 3, 1];
console.log(rob(nums));
