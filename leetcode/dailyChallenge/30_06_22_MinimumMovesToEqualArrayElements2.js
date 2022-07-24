/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  let ans = 0;
  nums.sort((a, b) => a - b);
  const median =
    nums.length % 2 === 1
      ? nums[(nums.length - 1) / 2]
      : Math.round((nums[Math.floor((nums.length - 1) / 2)] + nums[nums.length / 2]) / 2);
  for (const num of nums) ans += Math.abs(median - num);
  return ans;
};

const nums = [1, 2, 3];
console.log(minMoves2(nums));

// 0 0 1 6 8
// 1 1 1

// [0,0,0,1,1,6,6,7,7,8,9]

// 0 0 1 6 8
// 1 1 1

// [0,0,0,1,1,6,6,7,7,8,9]
