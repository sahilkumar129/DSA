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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null;
  const tempLeft = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(tempLeft);
  return root;
};

const arr = [4, 2, 7, 1, 3, 6, 9];
const root = buildTree(arr, null, 0);
console.log(invertTree(root));
