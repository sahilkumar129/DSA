/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const { buildLL } = require("./buildLinkedList");

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head,
    fast = head;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
};

const arr = [3, 2, 0, -4],
  pos = 1;
const head = buildLL(arr);
head.next.next.next.next = head.next;
console.log(hasCycle(head, pos));
