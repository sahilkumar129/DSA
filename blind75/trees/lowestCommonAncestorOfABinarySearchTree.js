/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const buildTree = require("./buildTree");

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  if ((root.val >= p && root.val <= q) || (root.val >= q && root.val <= p)) return root;
  if (root.val > p && root.val > q) return lowestCommonAncestor(root.left, p, q);
  return lowestCommonAncestor(root.right, p, q);
};

const arr = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
  p = 2,
  q = 8;
const root = buildTree(arr, null, 0);
console.log(lowestCommonAncestor(root, p, q));
