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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  if (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) return true;
  return false;
};

const p = [1, 2, 3],
  q = [1, 2, 3];
const root1 = buildTree(p, null, 0),
  root2 = buildTree(q, null, 0);
console.log(isSameTree(root1, root2));
