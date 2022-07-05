/** Solution 1
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function (nums) {
//   const n = nums.length,
//     nSum = (n * (n + 1)) / 2,
//     currSum = nums.reduce((sum, n) => sum + n);
//   return nSum - currSum;
// };

// Solution 2 (Bit Manipulation)
var missingNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i] ^ (i + 1);
  }
  return result;
};

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums));
