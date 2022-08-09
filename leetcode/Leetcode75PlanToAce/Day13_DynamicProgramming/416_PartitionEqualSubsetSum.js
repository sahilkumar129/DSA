/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canPartition = function(nums) {
//     let sum = 0;
//     for(const num of nums)
//         sum += num;
//     if(sum%2) return false;
//     sum = sum/2;
//     const dp = Array.from(Array(nums.length), () => Array.from(Array(sum+1), () => -1));
//     const dfs = function(i,curr) {
//         if(i===nums.length || curr > sum)
//             return 0;
//         if(curr === sum)
//             return 1;
//         if(dp[i][curr] !== -1)
//             return dp[i][curr];
//         dp[i][curr] = 0;
//         if(dfs(i+1, curr+nums[i]) === 1 || dfs(i+1,curr) === 1)
//             dp[i][curr] = 1;
//         return dp[i][curr];
//     }
//     return dfs(0,0);
// }

var canPartition = function (nums) {
  let sum = nums.reduce((acc, val) => acc + val, 0);
  if (sum % 2) return false;
  sum = sum / 2;
  const dp = new Array(nums.length + 1).fill(0).map((val) => new Array(sum + 1).fill(false));
  for (let i = 0; i <= nums.length; i++) dp[i][0] = true;
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 1; j <= sum; j++) {
      if (j < nums[i]) dp[i][j] = dp[i + 1][j];
      else dp[i][j] = dp[i + 1][j] || dp[i + 1][j - nums[i]];
    }
  }
  return dp[0][sum];
};

const nums = [1, 5, 11, 5];
console.log(canPartition(nums));
