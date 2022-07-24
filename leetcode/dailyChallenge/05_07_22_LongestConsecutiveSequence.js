/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let ans = 0,
    set = new Set(nums);
  for (let num of nums) {
    if (set.has(num - 1)) continue;
    let count = 0;
    while (set.has(num)) {
      count++;
      set.delete(num++);
    }
    ans = Math.max(ans, count);
  }
  return ans;
};

const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums));
