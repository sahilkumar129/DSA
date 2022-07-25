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
 * @return {boolean}
 */
var isBalanced = function (root) {
  return isBalancedHelper(root) === -1 ? false : true;
};

var isBalancedHelper = function (root) {
  if (!root) return 0;
  const left = isBalancedHelper(root.left);
  const right = isBalancedHelper(root.right);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
  return Math.max(left, right) + 1;
};

const root = [3, 9, 20, null, null, 15, 7];
const head = buildTree(root, null, 0);
console.log(isBalanced(head));
