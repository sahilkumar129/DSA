/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const buildTree = require("../blind75/trees/buildTree");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
  if (!head) return null;
  let curr = head,
    iter = head.next;
  let sum = 0;
  while (iter.next) {
    if (iter.val === 0) {
      curr.val = sum;
      curr = curr.next;
      sum = 0;
    } else sum += iter.val;
    iter = iter.next;
  }
  curr.val = sum;
  curr.next = null;
  return head;
};

const head = [0, 3, 1, 0, 4, 5, 2, 0];
const root = buildTree(head, null, 0);
console.log(mergeNodes(root));
