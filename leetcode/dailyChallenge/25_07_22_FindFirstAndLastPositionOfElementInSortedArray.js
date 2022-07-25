/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [searchFirstIndex(nums, target), searchLastIndex(nums, target)];
};

var searchFirstIndex = function (nums, target) {
  let low = 0,
    high = nums.length - 1,
    mid,
    ans = -1;
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] >= target) {
      if (nums[mid] === target) ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return ans;
};

var searchLastIndex = function (nums, target) {
  let low = 0,
    high = nums.length - 1,
    mid,
    ans = -1;
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] <= target) {
      if (nums[mid] === target) ans = mid;
      low = mid + 1;
    } else high = mid - 1;
  }
  return ans;
};

const nums = [5, 7, 7, 8, 8, 10],
  target = 8;
console.log(searchRange(nums, target));
