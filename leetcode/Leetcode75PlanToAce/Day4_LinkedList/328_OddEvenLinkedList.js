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
var oddEvenList = function (head) {
  if (!head) return head;
  const oddHead = head,
    evenHead = head.next;
  let odd = oddHead,
    even = evenHead,
    oddNode = true;
  while (odd && even) {
    if (oddNode) {
      if (!even.next) break;
      odd.next = even.next;
      odd = odd.next;
    } else {
      even.next = odd.next;
      even = even.next;
    }
    oddNode = !oddNode;
  }
  odd.next = evenHead;
  return head;
};

const head = [2, 1, 3, 5, 6, 4, 7];
const root = buildLL(head);
console.log(printLL(oddEvenList(root)));
