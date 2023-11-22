/**
 * @param {number[][]} nums
 * @return {number[]}
 */
// var findDiagonalOrder = function(nums) {
//     const ans = [],
//         map = new Map();
//     let maxSum = 0;
//     for(let i=0; i<nums.length; i++) {
//         for(let j=0; j<nums[i].length; j++) {
//             map.set(i+j, [...(map.get(i+j) ?? []), nums[i][j]]);
//             maxSum = Math.max(maxSum, i+j);
//         }
//     }
//     for(let i=0; i<=maxSum; i++) {
//         if(map.has(i))
//         ans.push(...reverse(map.get(i)));
//     }
//     return ans;
// };

// var reverse = function(nums) {
//     for(let i=0; i<nums.length/2; i++) {
//         swap(nums, i, nums.length-i-1);
//     }
//     return nums;
// }

// var swap = function(nums, i, j) {
//     const temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
// }

var findDiagonalOrder = function (nums) {
  const ans = [];
  let q = [`0-0`];
  while (q.length) {
    const visited = new Set();
    const tempQ = [...q];
    q = [];
    for (let i = 0; i < tempQ.length; i++) {
      const [j, k] = tempQ[i].split("-").map((x) => +x);
      ans.push(nums[j][k]);
      if (nums[j + 1]?.[k] && !visited.has(`${j + 1}-${k}`)) {
        q.push(`${j + 1}-${k}`);
        visited.add(`${j + 1}-${k}`);
      }
      if (nums[j]?.[k + 1] && !visited.has(`${j}-${k + 1}`)) {
        q.push(`${j}-${k + 1}`);
        visited.add(`${j}-${k + 1}`);
      }
    }
  }
  return ans;
};

const nums = [[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]];
console.log(findDiagonalOrder(nums));
