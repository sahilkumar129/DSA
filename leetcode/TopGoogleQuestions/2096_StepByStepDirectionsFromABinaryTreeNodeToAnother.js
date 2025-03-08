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
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
  const dir = helper(root, startValue, destValue);
  return dir.path;
};

var helper = function (root, start, dest) {
  if (!root) return { path: "", foundStart: false, foundDest: false };

  const left = helper(root.left, start, dest);
  const right = helper(root.right, start, dest);

  if (left.foundStart && left.foundDest) return left;
  if (right.foundStart && right.foundDest) return right;

  const foundStart = left.foundStart ? true : right.foundStart ? true : root.val == start;
  const foundDest = left.foundDest ? true : right.foundDest ? true : root.val == dest;
  const startPath = left.foundStart ? `${left.path}U` : right.foundStart ? `${right.path}U` : "";
  const destPath = left.foundDest ? `L${left.path}` : right.foundDest ? `R${right.path}` : "";

  return { path: startPath + destPath, foundStart, foundDest };
};

const arr = [5, 1, 2, 3, null, 6, 4],
  startValue = 3,
  destValue = 6;
const root = buildTree(arr, null, 0);
console.log(getDirections(root, startValue, destValue));
