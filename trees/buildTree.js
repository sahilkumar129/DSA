// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var buildTree = function (arr, root, i) {
  if (i < arr.length) {
    if (arr[i] == null) return null;
    root = new TreeNode(arr[i]);
    root.left = buildTree(arr, root, 2 * i + 1);
    root.right = buildTree(arr, root, 2 * i + 2);
    return root;
  }
  return null;
};

module.exports = buildTree;
