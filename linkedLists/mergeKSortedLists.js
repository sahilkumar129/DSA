/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function (lists) {
  if (!lists.length) return null;
  while (lists.length > 1) {
    let tempList = [];
    for (let i = 0; i < lists.length; i += 2) {
      let list1 = lists[i];
      let list2 = lists[i + 1] ?? null;
      tempList.push(mergeLists(list1, list2));
    }
    // console.log(tempList);
    lists = tempList;
  }
  return lists[0] ?? null;
};

var mergeLists = function (list1, list2) {
  let head = null,
    curr = null;
  while (list1 && list2) {
    // console.log(list1, list2);
    if (list1.val < list2.val) {
      if (!head) {
        head = list1;
        curr = head;
      } else {
        curr.next = list1;
        curr = list1;
      }
      list1 = list1.next;
    } else {
      if (!head) {
        head = list2;
        curr = head;
      } else {
        curr.next = list2;
        curr = list2;
      }
      list2 = list2.next;
    }
  }
  if (!head) return list1 ?? list2;
  curr.next = list1 ?? list2;
  return head;
};

const lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];

const lLists = lists.map((list) => {
  const root = new ListNode(list[0]);
  let curr = root;
  for (let i = 1; i < list.length; i++) {
    curr.next = new ListNode(list[i]);
    curr = curr.next;
  }
  return root;
});

var convertToArray = function (list) {
  const res = [];
  while (list) {
    res.push(list.val);
    list = list.next;
  }
  return res;
};

console.log(convertToArray(mergeKLists(lLists)));
