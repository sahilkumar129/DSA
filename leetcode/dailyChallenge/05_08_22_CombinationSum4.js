/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Recursive(Memoization)
// var combinationSum4 = function(nums, target) {
//     const dp = new Array(target+1).fill(-1);
//     const dfs = function(sum) {
//         if(sum < 0) return 0;
//         if(sum === 0) return 1;
//         if(dp[sum] !== -1) return dp[sum];
//         dp[sum] = 0;
//         for(const num of nums)
//             dp[sum] += dfs(sum-num);
//         return dp[sum];
//     }
//     return dfs(target);
// }

// Bottom Up
var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let sum = 1; sum <= target; sum++) {
    for (const num of nums) {
      if (sum - num < 0) continue;
      dp[sum] += dp[sum - num];
    }
  }
  return dp[target];
};

const nums = [1, 2, 3],
  target = 4;
console.log(combinationSum4(nums, target));
