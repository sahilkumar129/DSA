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
 * @return {TreeNode}
 */
var replaceValueInTree = function (root) {
  if (!root) return root;
  const levelSums = getLevelSums(root);
  replaceValues(0, root, levelSums);
  root.val -= root.val;
  return root;
};

var getLevelSums = function (root) {
  let i = 0;
  const levelSums = [],
    queue = [root];
  while (i < queue.length) {
    let levelLength = queue.length,
      levelSum = 0;
    while (i < levelLength) {
      const curr = queue[i++];
      levelSum += curr.val;
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    levelSums.push(levelSum);
  }
  return levelSums;
};

var replaceValues = function (level, root, levelSums) {
  if (!root?.left && !root?.right) return;
  replaceValues(level + 1, root.left, levelSums);
  replaceValues(level + 1, root.right, levelSums);
  const rootLeft = root.left?.val ?? 0,
    rootRight = root.right?.val ?? 0;
  if (root.left) root.left.val = levelSums[level + 1] - rootLeft - rootRight;
  if (root.right) root.right.val = levelSums[level + 1] - rootLeft - rootRight;
};

const arr = [5, 4, 9, 1, 10, null, 7];
const root = buildTree(arr, null, 0);
console.log(replaceValueInTree(root));
