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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSameTree = function (root, subroot) {
  if (root == null || subroot == null) {
    if (root == subroot) return true;
    else return false;
  }
  if (root.val !== subroot.val) return false;
  return isSameTree(root.left, subroot.left) && isSameTree(root.right, subroot.right);
};

const arr1 = [3, 4, 5, 1, 2, null, null, null, null, 0],
  arr2 = [4, 1, 2];
const root = buildTree(arr1, null, 0);
const subRoot = buildTree(arr2, null, 0);
console.log(isSubtree(root, subRoot));
