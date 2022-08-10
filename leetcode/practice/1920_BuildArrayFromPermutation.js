/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) ans.push(nums[nums[i]]);
  return ans;
};

const nums = [0, 2, 1, 5, 3, 4];
console.log(buildArray(nums));
