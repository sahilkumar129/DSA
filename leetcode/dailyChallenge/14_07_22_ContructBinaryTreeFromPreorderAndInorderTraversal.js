/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder?.length || !inorder?.length) return null;
  const ind = inorder.findIndex((x) => x === preorder[0]);
  const root = new TreeNode(
    preorder[0],
    buildTree(preorder.slice(1, 1 + ind), inorder.slice(0, ind)),
    buildTree(preorder.slice(1 + ind), inorder.slice(ind + 1))
  );
  return root;
};

const preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));
