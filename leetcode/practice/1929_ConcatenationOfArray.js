/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) nums.push(nums[i]);
  return nums;
};

const nums = [1, 2, 1];
console.log(getConcatenation(nums));
