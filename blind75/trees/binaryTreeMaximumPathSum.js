const buildTree = require("./buildTree");

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  if (!root) return 0;
  let result = { maxSum: root.val };
  maxPathSumHelper(root, result);
  return result.maxSum;
};

var maxPathSumHelper = function (root, result) {
  if (!root) return 0;
  const leftSum = maxPathSumHelper(root.left, result);
  const rightSum = maxPathSumHelper(root.right, result);
  const maxPartialSum = Math.max(root.val, root.val + leftSum, root.val + rightSum);
  result.maxSum = Math.max(result.maxSum, root.val + leftSum + rightSum, maxPartialSum);
  return maxPartialSum;
};

const arr = [-10, 9, 20, null, null, 15, 7];
const root = buildTree(arr, null, 0);
console.log(maxPathSum(root));
