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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const inorder = getInorder(root);
  return inorder[k - 1];
};

var getInorder = function (root) {
  if (!root) return [];
  const left = getInorder(root.left);
  const right = getInorder(root.right);
  return [...left, root.val, ...right];
};

const root = [3, 1, 4, null, 2],
  k = 1;
const head = buildTree(root, null, 0);
console.log(kthSmallest(head, k));
