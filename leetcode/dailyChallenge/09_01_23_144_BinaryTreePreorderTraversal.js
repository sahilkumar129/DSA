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
 * @return {number[]}
 */
var preorderRecTraversal = function (root) {
  if (!root) return [];
  const left = preorderTraversal(root.left);
  const right = preorderTraversal(root.right);
  return [root.val, ...left, ...right];
};

var preorderTraversal = function (root) {
  let ans = [],
    curr = root,
    stack = [];
  while (curr || stack.length) {
    if (!curr) curr = stack.pop();
    if (curr.right) stack.push(curr.right);
    ans.push(curr.val);
    curr = curr.left;
  }
  return ans;
};

const root = [1, null, 2, null, null, 3];
const head = buildTree(root, null, 0);
console.log(preorderRecTraversal(head));
console.log(preorderTraversal(head));
