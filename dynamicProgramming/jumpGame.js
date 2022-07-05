/**
 * @param {number[]} nums
 * @return {boolean}
 * Recursive
 */
// var canJump = function (nums) {
//   const dp = new Array(nums.length - 1).fill(-1);
//   const dfs = function (i) {
//     if (i >= nums.length) return false;
//     if (i == nums.length - 1) return true;
//     if (dp[i] != -1) return dp[i];
//     for (let j = 1; j <= nums[i]; j++) {
//       if (dfs(i + j)) {
//         dp[i] = true;
//         return true;
//       }
//     }
//     dp[i] = false;
//     return false;
//   };
//   return dfs(0);
// };

// Bottom Up(O(n2))
// var canJump = function (nums) {
//   const dp = new Array(nums.length - 1).fill(false);
//   dp[nums.length - 1] = true;
//   for (let i = nums.length - 2; i >= 0; i--) {
//     for (let j = 1; j <= nums[i]; j++) {
//       if (dp[i + j]) {
//         dp[i] = true;
//         break;
//       }
//       dp[i] = false;
//     }
//   }
//   return dp[0];
// };

// Bottom Up(O(n))
var canJump = function (nums) {
  let dp = new Array(nums.length - 1).fill({ minJump: 0, canJump: false });
  dp[nums.length - 1] = { minJump: 1, canJump: true };
  for (let i = nums.length - 2; i >= 0; i--) {
    if (dp[i + 1].minJump <= nums[i]) dp[i] = { minJump: 1, canJump: true };
    else dp[i] = { minJump: dp[i + 1].minJump + 1, canJump: false };
  }
  return dp[0].canJump;
};

const nums = [2, 3, 1, 1, 4];
console.log(canJump(nums));
