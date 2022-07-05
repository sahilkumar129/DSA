/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // DP
  // const dp = new Array(nums.length).fill(-1);
  // dp[nums.length-1]=0;
  // for(let i=nums.length-2;i>=0;i--) {
  //     let curr = Number.MAX_SAFE_INTEGER;
  //     for(let j=1;i+j<nums.length && j<=nums[i];j++) {
  //         if(dp[i+j] === -1) continue;
  //         curr = Math.min(curr, dp[i+j]);
  //     }
  //     dp[i] = curr === Number.MAX_SAFE_INTEGER ? -1 : curr + 1;
  // }
  // return dp[0];

  // Greedy
  let l = 0,
    r = 0,
    farthest = 0,
    count = 0;
  while (r < nums.length - 1) {
    for (let i = l; i <= r; i++) farthest = Math.max(farthest, nums[i] + l);
    l = r + 1;
    r = farthest;
    count++;
  }
  return count;
};

const nums = [2, 3, 1, 1, 4];
console.log(jump(nums));
