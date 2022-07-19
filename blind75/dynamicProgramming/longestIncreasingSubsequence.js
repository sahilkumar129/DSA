/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);
  for (let i = nums.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) dp[i] = Math.max(dp[i], 1 + dp[j]);
    }
  }
  let ans = dp[0];
  dp.forEach((d) => {
    ans = Math.max(ans, d);
  });
  return ans;
};

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
