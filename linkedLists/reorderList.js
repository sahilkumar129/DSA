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
 * @return {void} Do not return anything, modify head in-place instead.
 */
// var reorderList = function (head) {
//   if (!head?.next?.next) return head;
//   let curr = head,
//     temp,
//     nextCurr,
//     reorderCompleted = true;
//   const helper = function (currHead) {
//     if (!currHead?.next) return;
//     if (helper(currHead.next)) return reorderCompleted;
//     if (currHead == curr || currHead.next == curr || currHead.next?.next == curr)
//       return reorderCompleted;
//     nextCurr = currHead.next;
//     currHead.next = null;
//     temp = curr.next;
//     curr.next = nextCurr;
//     nextCurr.next = temp;
//     curr = temp;
//     return !reorderCompleted;
//   };
//   helper(head.next);
//   return head;
// };

var reorderList = function (head) {
  if (!head?.next?.next) return head;
  let secondHead = getHeadOfSecondList(head);
  secondHead = reverse(secondHead);
  // console.log(printLL(head), printLL(secondHead));
  let c1 = head,
    c2 = secondHead,
    n1,
    n2;
  while (c1 != c2 && c1?.next != c2) {
    n1 = c1.next;
    n2 = c2.next;
    c1.next = c2;
    c2.next = n1;
    c1 = n1;
    c2 = n2;
  }
  return head;
};

getHeadOfSecondList = function (head) {
  if (!head?.next) return head;
  let slow = head,
    fast = head;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

reverse = function (head) {
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

const arr = [1, 2, 3, 4];
const head = buildLL(arr);
console.log(printLL(reorderList(head)));
