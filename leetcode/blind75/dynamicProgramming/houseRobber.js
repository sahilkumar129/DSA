/**
 * @param {number[]} nums
 * @return {number}
 * Recursive
 */
// var rob = function (nums) {
//   let maxSum = 0;
//   const dfs = function (i, currSum) {
//     if (i >= nums.length) {
//       maxSum = Math.max(maxSum, currSum);
//       return;
//     }
//     dfs(i + 2, currSum + nums[i]);
//     dfs(i + 1, currSum);
//   };
//   dfs(0, 0);
//   return maxSum;
// };

// Memoized
// const rob = function (nums) {
//   let dp = new Map();
//   const dfs = function (i) {
//     if (i >= nums.length) return 0;
//     if (!dp.has(i)) {
//       const incl = dfs(i + 2) + nums[i];
//       const excl = dfs(i + 1);
//       dp.set(i, Math.max(incl, excl));
//     }
//     return dp.get(i);
//   };
//   return dfs(0);
// };

// Bottom Up
const rob = function (nums) {
  const dp = new Array(nums.length + 1).fill(0);
  dp[nums.length - 1] = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    dp[i] = Math.max(dp[i + 1], nums[i] + dp[i + 2]);
  }
  return dp[0];
};

const nums = [1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3];
console.log(rob(nums));
