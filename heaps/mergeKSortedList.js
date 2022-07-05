const Heap = require("heap");

/**
 * Definition for singly-linked list.
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
  const heap = new Heap((a, b) => a.val - b.val);
  for (let i = 0; i < lists.length; i++) heap.push({ val: lists[i][0], index: i });

  const res = [];
  while (heap.size()) {
    const next = heap.pop();
    res.push(next.val);
    lists[next.index].shift();
    if (lists[next.index].length == 0) continue;
    else heap.push({ val: lists[next.index][0], index: next.index });
  }
  return res;
};

const lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];

console.log(mergeKLists(lists));
