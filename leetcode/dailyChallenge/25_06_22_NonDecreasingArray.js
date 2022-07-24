/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let found = false,
    prev;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1]) continue;
    else {
      if (found) return false;
      if (nums[i + 2] < nums[i]) if (i > 0 && nums[i + 1] < nums[i - 1]) return false;
      found = true;
    }
  }
  return true;
};

const nums = [4, 2, 3];
console.log(checkPossibility(nums));
