const buildTree = require("./buildTree");
const Queue = require("queue-fifo");

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
  const result = [];
  if (!root) return result;
  let queue = new Queue(),
    tempQueue = new Queue();
  queue.enqueue(root);
  tempRes = [];
  while (queue.size()) {
    const curr = queue.dequeue();
    tempRes.push(curr.val);
    if (curr.left) tempQueue.enqueue(curr.left);
    if (curr.right) tempQueue.enqueue(curr.right);
    if (queue.size() == 0) {
      result.push(tempRes);
      queue = tempQueue;
      tempRes = [];
      tempQueue = new Queue();
    }
  }
  return result;
};

const arr = []; //[3, 9, 20, null, null, 15, 7];
const root = buildTree(arr, null, 0);
console.log(levelOrder(root));
