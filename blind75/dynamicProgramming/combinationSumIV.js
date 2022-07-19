/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Memoized
 */
var combinationSum4 = function (nums, target) {
  const dp = new Map();
  const dfs = function (target) {
    if (target < 0) return 0;
    if (target === 0) return 1;
    if (!dp.has(target)) {
      let count = 0;
      nums.forEach((num) => (count += dfs(target - num)));
      dp.set(target, count);
    }
    return dp.get(target);
  };
  return dfs(target);
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  target = 26;
const time1 = new Date().getTime();
console.log(combinationSum4(nums, target));
const time2 = new Date().getTime();
console.log("time taken(secs)", (time2 - time1) / 1000);
