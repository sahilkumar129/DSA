/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const ans = [],
    set = new Set();
  const dfs = function (i, last, sub) {
    if (i >= nums.length) return;
    let prev;
    if (sub.length === 0 || last <= nums[i]) {
      prev = sub.length;
      sub += nums[i] + ":";
      set.add(sub);
      dfs(i + 1, nums[i], sub);
      sub = sub.slice(0, prev);
    }
    dfs(i + 1, last, sub);
  };
  dfs(0, -100, "");
  for (const value of set) {
    const sub = value.split(":");
    sub.pop();
    if (sub.length > 1) ans.push(sub);
  }
  return ans;
};

const nums = [4, 6, 7, 7];
console.log(findSubsequences(nums));
