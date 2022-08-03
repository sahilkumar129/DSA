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
var isSymmetric = function (root) {
  if (!root) return true;
  if (helper(root.left, root.right)) return true;
  return false;
};

var helper = function (l, r) {
  if (!l && !r) return true;
  if (!l || !r) return false;
  if (l.val !== r.val) return false;
  return helper(l.left, r.right) && helper(l.right, r.left);
};

const root = [1, 2, 2, 2, null, 2];
const head = buildTree(root, null, 0);
console.log(isSymmetric(head));
