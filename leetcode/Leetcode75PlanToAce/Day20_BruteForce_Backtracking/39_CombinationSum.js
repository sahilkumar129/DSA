/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  const dfs = function (i, left, curr) {
    if (i >= candidates.length || left < 0) return;
    if (left === 0) {
      result.push(curr);
      return;
    }
    dfs(i, left - candidates[i], [...curr, candidates[i]]);
    dfs(i + 1, left, curr);
  };
  dfs(0, target, []);
  return result;
};

const candidates = [2, 3, 6, 7],
  target = 7;
console.log(combinationSum(candidates, target));
