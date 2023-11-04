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
 * @return {number[]}
 */
var findMode = function (root) {
  let result = { ans: [], maxCount: 0, curr: null, count: 0 };
  preOrder(root, result);
  if (result.count > result.maxCount) result.ans = [result.curr];
  else if (result.count == result.maxCount) result.ans.push(result.curr);
  return result.ans;
};

var preOrder = function (root, result) {
  if (!root) return;
  preOrder(root.left, result);
  if (root.val != result.curr) {
    if (result.curr == null) {
    } else if (result.count > result.maxCount) {
      result.maxCount = result.count;
      result.ans = [result.curr];
    } else if (result.count == result.maxCount) {
      result.ans.push(result.curr);
    }
    result.curr = root.val;
    result.count = 1;
  } else result.count++;
  preOrder(root.right, result);
};
