/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let currMin = nums[0],
    currMax = nums[0],
    minProduct = nums[0],
    maxProduct = nums[0];
  for (let i = 1; i < nums.length; i++) {
    minProduct = Math.min(nums[i], currMin * nums[i], currMax * nums[i]);
    currMax = Math.max(nums[i], currMin * nums[i], currMax * nums[i]);
    maxProduct = Math.max(maxProduct, currMax);
    currMin = minProduct;
  }
  return maxProduct;
};

const nums = [2, 0, 2, 2, -3, 2, -2, 0, 2, 1, -2]; //[2, 3, -2, 4];
console.log(maxProduct(nums));

// currMin    = 2 0 0 0 -12 -24 -4
// currMax    = 2 0 2 4 -3   2  48
// maxProduct = 2 2 2 4  4   4  48
