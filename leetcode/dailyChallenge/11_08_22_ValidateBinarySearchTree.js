/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const buildTree = require("../blind75/trees/buildTree");

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return helper(root).isBST;
};

var helper = function (root) {
  if (!root) return { isBST: true, min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER };
  const left = helper(root.left);
  const right = helper(root.right);
  if (!left.isBST || !right.isBST || root.val <= left.max || root.val >= right.min)
    return { isBST: false };
  return {
    isBST: true,
    min: Math.min(left.min, right.min, root.val),
    max: Math.max(left.max, right.max, root.val),
  };
};

const root = [5, 1, 4, null, null, 3, 6];
const head = buildTree(root, null, 0);
console.log(isValidBST(head));
