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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  return helper(root).head;
};

var helper = function (root) {
  if (!root) return { head: null, tail: null };
  const head = root;
  while (root.right && !root.left) root = root.right;
  if (!root.left) return { head, tail: root };
  const right = root.right;
  let { head: leftHead, tail: leftTail } = helper(root.left);
  root.right = leftHead;
  root.left = null;
  leftTail.right = right;
  const { tail: rightTail } = helper(leftTail);
  return { head, tail: rightTail };
};

const root = [1, 2, 5, 3, 4, null, 6];
const head = buildTree(root, null, 0);
console.log(flatten(head));
