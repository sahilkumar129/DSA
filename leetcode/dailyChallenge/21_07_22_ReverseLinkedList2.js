/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || left === right) return head;
  let prev = null;
  while (left) {
    prev = head;
    head = head.next;
    left--;
    right--;
  }
  const { newHead, last } = reverse(head, right);
  head.next = last;
  if (!prev) {
    prev.next = newHead;
    return prev;
  }
  return newHead;
};

var reverse = function (head, end) {
  if (end === 0 || !head.next) return { newHead: head, last: head.next };
  const next = head.next;
  const { newHead, last } = reverse(head.next, end - 1);
  next.next = head;
  head.next = null;
  return { newHead, last };
};

// 1 -> 2 -> 3 -> 4 -> 5;
// 1 -> 4 -> 3 -> 2 -> 5;
