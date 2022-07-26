/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const buildTree = require("../blind75/trees/buildTree");

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  return helper(root, p, q).lca;
};

var helper = function (root, p, q) {
  if (!root) return { lca: null, first: false, second: false };
  const left = helper(root.left, p, q);
  if (left.lca) return left;
  const right = helper(root.right, p, q);
  if (right.lca) return right;
  if (root.val === p.val) {
    if (left.second || right.second) return { lca: root, first: true, second: true };
    else return { lca: null, first: true, second: false };
  }
  if (root.val === q.val) {
    if (left.first || right.first) return { lca: root, first: true, second: true };
    else return { lca: null, first: false, second: true };
  }
  const first = left.first || right.first,
    second = left.second || right.second;
  return { lca: first && second ? root : null, first, second };
};

const root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = 5,
  q = 1;
const head = buildTree(root, null, 0);
console.log(lowestCommonAncestor(head, p, q));
