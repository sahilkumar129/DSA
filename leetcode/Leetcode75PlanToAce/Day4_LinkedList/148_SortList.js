/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { buildLL, printLL } = require("../../../blind75/linkedLists/buildLinkedList");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) return head;
  const indRoot = getIndexRoot(head);
  return mergeSortList(0, indRoot.length - 1, indRoot);
};

var mergeSortList = function (start, end, indRoot) {
  if (start === end) return indRoot[start];
  const mid = Math.floor(start + (end - start) / 2);
  const left = mergeSortList(start, mid, indRoot);
  const right = mergeSortList(mid + 1, end, indRoot);
  const head = mergeList(left, right);
  return head;
};

var mergeList = function (left, right) {
  let head, curr;
  while (left && right) {
    if (left.val <= right.val) {
      if (!head) {
        head = left;
        curr = head;
      } else {
        curr.next = left;
        curr = curr.next;
      }
      left = left.next;
    } else {
      if (!head) {
        head = right;
        curr = head;
      } else {
        curr.next = right;
        curr = curr.next;
      }
      right = right.next;
    }
  }
  if (!curr) return left ?? right;
  if (left) curr.next = left;
  if (right) curr.next = right;
  return head;
};

var getIndexRoot = function (head) {
  let indRoot = [];
  while (head) {
    indRoot.push(head);
    const temp = head.next;
    head.next = null;
    head = temp;
  }
  return indRoot;
};

const head = [-1, 5, 3, 4, 0];
const root = buildLL(head);
console.log(printLL(sortList(root)));
