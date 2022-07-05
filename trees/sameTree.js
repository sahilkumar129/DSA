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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (root1, root2) {
  if (!root1 || !root2) {
    if (root1 === root2) return true;
    return false;
  }

  if (root1.val !== root2.val) return false;
  const leftMatch = isSameTree(root1.left, root2.left);
  const rightMatch = isSameTree(root1.right, root2.right);
  return leftMatch && rightMatch;
};

const p = [1, 2, 3],
  q = [1, 2, 3];
const root1 = buildTree(p, null, 0);
const root2 = buildTree(q, null, 0);
// console.log(root1, root2);
console.log(isSameTree(root1, root2));
