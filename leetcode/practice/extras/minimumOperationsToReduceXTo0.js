// /**
//  * @param {number[]} nums
//  * @param {number} x
//  * @return {number}
//  */
// var minOperations = function (nums, x) {
//   let ans = Number.MAX_SAFE_INTEGER,
//     leftSum = 0;
//   const suffixSum = getSuffixSum(nums);
//   for (let left = 0; left <= nums.length; left++) {
//     leftSum += nums[left - 1] ?? 0;
//     if (leftSum > x) return ans == Number.MAX_SAFE_INTEGER ? -1 : ans;
//     right = getRightOps(x - leftSum, left, suffixSum);
//     if (right != -1) ans = Math.min(ans, left + right);
//   }
//   return ans == Number.MAX_SAFE_INTEGER ? -1 : ans;
// };

// var getRightOps = function (sum, left, suffixSum) {
//   if (sum == 0) return 0;
//   let low = left,
//     high = suffixSum.length - 1,
//     mid;
//   while (low <= high) {
//     mid = Math.floor(low + (high - low) / 2);
//     if (suffixSum[mid] == sum) return suffixSum.length - mid;
//     if (suffixSum[mid] > sum) low = mid + 1;
//     else high = mid - 1;
//   }
//   return -1;
// };

// var getSuffixSum = function (nums) {
//   const suffixSum = Array.from(nums);
//   for (let i = nums.length - 2; i >= 0; i--) suffixSum[i] += suffixSum[i + 1];
//   return suffixSum;
// };

// Sliding Window
var minOperations = function (nums, x) {
  let i = 0,
    j = 0,
    sum = 0,
    target = nums.reduce((a, b) => a + b),
    maxWindowLength = -1;
  target -= x;
  // console.log(target);
  if (target < 0) return -1;
  if (target == 0) return nums.length;
  while (j < nums.length) {
    sum += nums[j];
    while (sum > target) sum -= nums[i++];
    if (sum == target) maxWindowLength = Math.max(maxWindowLength, j - i + 1);
    j++;
  }
  return maxWindowLength == -1 ? -1 : nums.length - maxWindowLength;
};

const nums = [1, 1, 4, 2, 3],
  x = 5;
console.log(minOperations(nums, x));
