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
 * @return {number}
 */
var averageOfSubtree = function (root) {
  let result = { ans: 0 };
  helper(root, result);
  return result.ans;
};

var helper = function (root, result) {
  if (!root) return { sum: 0, count: 0 };
  const left = helper(root.left, result),
    right = helper(root.right, result),
    sum = left.sum + right.sum + root.val,
    count = left.count + right.count + 1;
  const avg = Math.floor(sum / count);
  if (avg == root.val) {
    result.ans += 1;
  }
  return { sum, count };
};

const arr = [4, 8, 5, 0, 1, null, 6];
const root = buildTree(arr, null, 0);
console.log(averageOfSubtree(root));
