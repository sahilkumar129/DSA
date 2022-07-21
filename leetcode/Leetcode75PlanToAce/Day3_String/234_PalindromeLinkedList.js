/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { buildLL } = require("../../../blind75/linkedLists/buildLinkedList");

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome1 = function (head) {
  if (!head.next) return true;
  let start = head;
  const dfs = function (curr) {
    if (!curr) return true;
    if (!dfs(curr.next)) return false;
    if (start.val !== curr.val) return false;
    start = start.next;
    return true;
  };
  return dfs(head);
};

var reverseLL = function (head) {
  let prev = null,
    curr = head,
    next;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head,
    fast = head;

  while (fast) {
    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
  }

  let newHead = reverseLL(slow);

  while (head && newHead) {
    if (head.val != newHead.val) return false;
    head = head.next;
    newHead = newHead.next;
  }
  return true;
};

const head = [1, 2, 2, 1];
const root = buildLL(head);
console.log(isPalindrome(root));
