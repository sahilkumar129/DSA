/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let positive = 1,
    negative = 1;
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    if (diff < 0) negative = Math.max(negative, 1 + positive);
    if (diff > 0) positive = Math.max(positive, 1 + negative);
  }
  return Math.max(negative, positive);
};

const nums = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];
console.log(wiggleMaxLength(nums));
