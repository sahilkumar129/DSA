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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let ans = [];
  const dfs = function (r, level) {
    if (!r) return;
    if (ans.length === level) ans.push(r.val);
    dfs(r.right, level + 1);
    dfs(r.left, level + 1);
  };
  dfs(root, 0);
  return ans;
};

const root = [1, 2, 3, null, 5, null, 4];
const head = buildTree(root, null, 0);
console.log(head);
