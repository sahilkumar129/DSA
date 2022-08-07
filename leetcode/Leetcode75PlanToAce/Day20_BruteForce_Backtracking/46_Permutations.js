/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [],
    visited = new Set();
  const dfs = function (curr) {
    if (visited.size === nums.length) {
      result.push([...curr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited.has(i)) continue;
      visited.add(i);
      curr.push(nums[i]);
      dfs(curr);
      curr.pop();
      visited.delete(i);
    }
  };
  dfs([]);
  return result;
};

const nums = [1, 2, 3];
console.log(permute(nums));
