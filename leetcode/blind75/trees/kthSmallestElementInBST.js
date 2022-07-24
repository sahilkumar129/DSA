/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const buildTree = require("./buildTree");

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const inorder = createInorder(root);
  return inorder[k - 1];
};

var createInorder = function (root) {
  const inorder = [];
  const stack = [];
  while (root || stack.length) {
    if (!root) {
      const curr = stack.pop();
      inorder.push(curr.val);
      root = curr.right;
    } else {
      stack.push(root);
      root = root.left;
    }
  }
  return inorder;
};

const arr = [3, 1, 4, null, 2],
  k = 1;
const root = buildTree(arr, null, 0);
console.log(kthSmallest(root, k));
