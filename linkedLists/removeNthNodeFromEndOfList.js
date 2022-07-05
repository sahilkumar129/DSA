/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { buildLL, printLL } = require("./buildLinkedList");

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head || n == 0) return head;
  let curr = head,
    next = head;
  while (n--) next = next.next;
  if (!next) {
    let newHead = curr.next;
    curr.next = null;
    return newHead;
  }
  while (next.next) {
    curr = curr.next;
    next = next.next;
  }
  curr.next = curr.next.next;
  return head;
};

const arr = [1, 2, 3, 4, 5],
  n = 1;
const head = buildLL(arr);
console.log(printLL(removeNthFromEnd(head, n)));
