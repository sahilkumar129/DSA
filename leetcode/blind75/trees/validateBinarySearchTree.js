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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return helper(root).isBST;
};

var helper = function (root) {
  if (!root) return { max: Number.NEGATIVE_INFINITY, min: Number.POSITIVE_INFINITY, isBST: true };
  const leftTree = helper(root.left);
  const rightTree = helper(root.right);
  if (leftTree.isBST && rightTree.isBST && root.val > leftTree.max && root.val < rightTree.min)
    return {
      max: Math.max(leftTree.max, rightTree.max, root.val),
      min: Math.min(leftTree.min, rightTree.min, root.val),
      isBST: true,
    };
  return {
    max: Math.max(leftTree.max, rightTree.max, root.val),
    min: Math.min(leftTree.min, rightTree.min, root.val),
    isBST: false,
  };
};

const arr = [5, 1, 4, null, null, 3, 6];
const root = buildTree(arr, null, 0);
console.log(isValidBST(root));
