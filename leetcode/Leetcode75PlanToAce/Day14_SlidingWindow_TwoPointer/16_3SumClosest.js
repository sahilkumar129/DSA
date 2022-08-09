/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let ans = Infinity;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      const threeSum = nums[i] + nums[l] + nums[r];
      ans = Math.abs(threeSum - target) < Math.abs(ans - target) ? threeSum : ans;
      if (threeSum === target) return ans;
      if (threeSum < target) l++;
      else r--;
    }
  }
  return ans;
};

const nums = [-1, 2, 1, -4],
  target = 1;
console.log(threeSumClosest(nums, target));
