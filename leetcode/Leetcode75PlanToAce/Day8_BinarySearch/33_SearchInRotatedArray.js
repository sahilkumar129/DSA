/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1,
    mid;
  while (low <= high) {
    mid = parseInt(low + (high - low) / 2);
    if (nums[mid] == target) return mid;
    if (nums[mid] < nums[high] && nums[mid] < target && nums[high] >= target) low = mid + 1;
    else if (nums[mid] > nums[high] && (nums[mid] < target || nums[high] >= target)) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};

const nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
console.log(search(nums, target));
