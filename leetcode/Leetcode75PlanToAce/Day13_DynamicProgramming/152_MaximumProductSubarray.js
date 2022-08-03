/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let minProduct = 1,
    maxProduct = 1,
    ans = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let currMin = minProduct;
    minProduct = Math.min(nums[i], nums[i] * currMin, nums[i] * maxProduct);
    maxProduct = Math.max(nums[i], nums[i] * currMin, nums[i] * maxProduct);
    ans = Math.max(ans, maxProduct);
  }
  return ans;
};

const nums = [2, 3, -2, 4];
console.log(maxProduct(nums));
