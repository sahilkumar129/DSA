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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ans = [];
  if (!root) return ans;
  let queue = new Queue();
  queue.enqueue(root);
  while (queue.size()) {
    let size = queue.size();
    const level = [];
    while (size--) {
      const curr = queue.dequeue();
      level.push(curr.val);
      if (curr.left) queue.enqueue(curr.left);
      if (curr.right) queue.enqueue(curr.right);
    }
    ans.push(level);
  }
  return ans;
};

const root = [3, 9, 20, null, null, 15, 7];
console.log(levelOrder(root));
