const { buildLL, printLL } = require("../../../blind75/linkedLists/buildLinkedList");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let start = head,
    end = head;
  while (n--) end = end.next;
  if (!end) return head.next;
  while (end.next) {
    start = start.next;
    end = end.next;
  }
  start.next = start.next.next;
  return head;
};

const head = [1, 2, 3, 4, 5],
  n = 2;
const root = buildLL(head);
console.log(printLL(removeNthFromEnd(root, n)));
