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
    console.log(low, mid, high);
    if (nums[mid] == target) return mid;
    if (nums[mid] < nums[high] && nums[mid] < target && nums[high] >= target) low = mid + 1;
    else if (nums[mid] > nums[high] && (nums[mid] < target || nums[high] >= target)) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};

const nums = [1],
  target = 1;
console.log(search(nums, target));
