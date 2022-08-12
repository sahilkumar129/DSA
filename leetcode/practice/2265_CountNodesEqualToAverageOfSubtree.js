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
 * @return {number}
 */
var averageOfSubtree = function (root) {
  return helper(root).ans;
};

var helper = function (root) {
  if (!root) return { count: 0, sum: 0, ans: 0 };
  const left = helper(root.left);
  const right = helper(root.right);
  const nodeSum = root.val + left.sum + right.sum,
    nodeCount = 1 + left.count + right.count,
    nodeAns = left.ans + right.ans,
    avg = Math.floor(nodeSum / nodeCount);
  if (avg === root.val) return { count: nodeCount, sum: nodeSum, ans: 1 + nodeAns };
  else return { count: nodeCount, sum: nodeSum, ans: nodeAns };
};

const root = [4, 8, 5, 0, 1, null, 6];
const head = buildTree(root, null, 0);
console.log(averageOfSubtree(head));
