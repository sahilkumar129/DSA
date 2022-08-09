/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function(nums) {
//     const dp = new Array(nums.length+1).fill(-1);
//     const dfs = function(i) {
//         if(i===nums.length)
//             return 0;
//         if(dp[i] !== -1)
//             return dp[i];
//         dp[i]=1;
//         for(let j=i+1;j<nums.length;j++) {
//             if(nums[j] > nums[i])
//                 dp[i] = Math.max(dp[i], dfs(j) + 1);
//         }
//         return dp[i];
//     }
//     let ans=0;
//     for(let i=0;i<nums.length;i++)
//         ans = Math.max(ans, dfs(i));
//     return ans;
// };

var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length + 1).fill(1);
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) dp[i] = Math.max(dp[i], 1 + dp[j]);
    }
  }
  let ans = 0;
  for (let len of dp) ans = Math.max(ans, len);
  return ans;
};

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
