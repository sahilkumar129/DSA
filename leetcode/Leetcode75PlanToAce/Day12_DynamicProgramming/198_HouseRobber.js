/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let a = 0,
    b = nums[0];
  for (let i = 2; i <= nums.length; i++) {
    let temp = b;
    b = Math.max(b, nums[i - 1] + a);
    a = temp;
  }
  return b;
};

const nums = [2, 7, 9, 3, 1];
console.log(rob(nums));
