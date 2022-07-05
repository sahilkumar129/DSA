/**
 * @param {number[]} nums
 * @return {number[]}
 * O(n) with O(1) space complexity
 */
// var productExceptSelf = function (nums) {
//   let zeroCount = 0;
//   const arrayProduct = nums.reduce((prod, num) => {
//     if (num === 0) {
//       zeroCount++;
//       return prod;
//     }
//     return prod * num;
//   }, 1);
//   const result = nums.map((num) => {
//     if (num === 0 && zeroCount > 1) return 0;
//     if (num !== 0 && zeroCount > 0) return 0;
//     if (num === 0) return arrayProduct;
//     return arrayProduct / num;
//   });
//   return result;
// };

/**
 * O(n) without using division operator
 * L = 1 -1 -1 0 0
 * R = 1  3 -9 0 0
 * O = 0  0  9 0 0
 */
// var productExceptSelf = function (nums) {
//   const leftProduct = [1],
//     rightProduct = [1];
//   for (let i = 1; i < nums.length; i++) {
//     leftProduct.push(leftProduct[leftProduct.length - 1] * nums[i - 1]);
//   }
//   for (let i = nums.length - 2; i >= 0; i--) {
//     rightProduct.push(rightProduct[rightProduct.length - 1] * nums[i + 1]);
//   }
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     result.push(leftProduct[i] * rightProduct[nums.length - i - 1]);
//   }

//   return result;
// };

/**
 * O(n) with O(1) space complexity
 */
var productExceptSelf = function (nums) {
  let currProduct = 1,
    result = [1];
  for (let i = 1; i < nums.length; i++) {
    currProduct = currProduct * nums[i - 1];
    result.push(currProduct);
  }
  currProduct = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    currProduct *= nums[i + 1];
    result[i] *= currProduct;
  }
  return result;
};

const nums = [-1, 1, 0, -3, 3]; //[1, 2, 3, 4];
console.log(productExceptSelf(nums));
