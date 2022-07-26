/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const buildTree = require("../../blind75/trees/buildTree");

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let ans = 0;
  const prefixSum = new Map([[0, 1]]);
  const dfs = function (curr, pathSum) {
    if (!curr) return;
    const currSum = pathSum + curr.val;
    ans += prefixSum.get(currSum - targetSum) ?? 0;
    prefixSum.set(currSum, (prefixSum.get(currSum) ?? 0) + 1);
    dfs(curr.left, currSum);
    dfs(curr.right, currSum);
    prefixSum.set(currSum, prefixSum.get(currSum) - 1);
    if (prefixSum.get(currSum) === 0) prefixSum.delete(currSum);
  };
  dfs(root, 0);
  return ans;
};

const root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
  targetSum = 22;
const head = buildTree(root, null, 0);
console.log(pathSum(head, targetSum));
