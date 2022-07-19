/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { buildLL, printLL } = require("./buildLinkedList");

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = null,
    curr = null;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      if (!head) {
        head = list1;
        curr = head;
      } else {
        curr.next = list1;
        curr = curr.next;
      }
      list1 = list1.next;
    } else {
      if (!head) {
        head = list2;
        curr = head;
      } else {
        curr.next = list2;
        curr = curr.next;
      }
      list2 = list2.next;
    }
  }
  if (!curr) return list1 ?? list2;
  curr.next = list1 ?? list2;
  return head;
};

const list1 = [1, 2, 4],
  list2 = [1, 3, 4];
const head1 = buildLL(list1);
const head2 = buildLL(list2);
console.log(printLL(mergeTwoLists(head1, head2)));
