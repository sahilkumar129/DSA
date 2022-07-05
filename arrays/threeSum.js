/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let threeSum,
      left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      threeSum = nums[i] + nums[left] + nums[right];
      if (threeSum < 0) left++;
      else if (threeSum > 0) right--;
      else {
        ans.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] == nums[left - 1]) left++;
      }
    }
  }
  return ans;
};

const array = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
console.log(threeSum(array));
