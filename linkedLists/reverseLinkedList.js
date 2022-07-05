const { buildLL, printLL } = require("./buildLinkedList");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListRecursive = function (head) {
  if (!head || !head.next) return head;
  const next = head.next;
  head.next = null;
  const newHead = reverseListRecursive(next);
  next.next = head;
  return newHead;
};

var reverseListIterative = function (head) {
  if (!head) return null;
  let prev = null,
    curr = head,
    next = head.next;
  while (next) {
    curr.next = prev;
    let tempNext = next.next;
    next.next = curr;
    prev = curr;
    curr = next;
    next = tempNext;
  }
  return curr;
};

const arr = [1, 2, 3, 4, 5];
const head1 = buildLL(arr);
const head2 = buildLL(arr);
const time1 = new Date().getTime();
console.log(printLL(reverseListRecursive(head1)));
const time2 = new Date().getTime();
console.log("Recursive solution time(secs): ", (time2 - time1) / 1000);
console.log(printLL(reverseListIterative(head2)));
const time3 = new Date().getTime();
console.log("Iterative solution time(secs): ", (time3 - time2) / 1000);
