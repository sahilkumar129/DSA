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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let ans = 0;
  const helper = function (head) {
    if (!head) return 0;
    const left = helper(head.left);
    const right = helper(head.right);
    const diameter = left + right + 1;
    ans = Math.max(ans, diameter);
    return Math.max(left, right) + 1;
  };
  helper(root);
  return ans - 1;
};

const root = [1, 2, 3, 4, 5];
const head = buildTree(root, null, 0);
console.log(diameterOfBinaryTree(head));
