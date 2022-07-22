const { buildLL, printLL } = require("../../blind75/linkedLists/buildLinkedList");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return head;
  let start = null,
    curr = head,
    newHead = head;
  if (head.val < x) {
    start = head;
    newHead = head;
  }
  while (curr?.next) {
    if (curr.next.val < x) {
      if (!start) {
        start = curr.next;
        newHead = start;
        curr.next = curr.next.next;
        newHead.next = head;
      } else {
        if (start === curr) {
          start = start.next;
          curr = curr.next;
          continue;
        }
        let temp = start.next;
        start.next = curr.next;
        curr.next = curr.next.next;
        if (start.next) start.next.next = temp;
        start = start.next;
      }
    } else curr = curr.next;
  }
  return newHead;
};

const head = [1, 4, 3, 0, 2, 5, 2],
  x = 3;
const root = buildLL(head);
console.log(printLL(partition(root, x)));
