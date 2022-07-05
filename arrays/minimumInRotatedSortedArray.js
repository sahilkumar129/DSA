/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0,
    high = nums.length - 1,
    mid;
  while (low < high) {
    mid = parseInt(low + (high - low) / 2);
    // console.log(low, mid, high);
    if (nums[mid] < nums[high]) high = mid;
    else low = mid + 1;
  }
  return nums[low];
};

const nums = [11, 13, 15, 17];
console.log(findMin(nums));
