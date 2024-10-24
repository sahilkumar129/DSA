const buildTree = require("../blind75/trees/buildTree");
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  if (root1.val != root2.val) return false;
  if (root1.left?.val == root2.right?.val || root1.right?.val == root2.left?.val) {
    const temp = root2.left;
    root2.left = root2.right;
    root2.right = temp;
  }
  if (root1.left?.val != root2.left?.val || root1.right?.val != root2.right?.val) return false;
  if (!flipEquiv(root1.left, root2.left)) return false;
  if (!flipEquiv(root1.right, root2.right)) return false;
  return true;
};

const arr1 = [1, 2, 3, 4, 5, 6, null, null, null, 7, 8],
  arr2 = [99, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7];
const root1 = buildTree(arr1, null, 0),
  root2 = buildTree(arr2, null, 0);
console.log(flipEquiv(root1, root2));
