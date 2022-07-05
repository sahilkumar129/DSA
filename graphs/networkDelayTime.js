// const { MinHeap } = require("../heaps/implementHeap");
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  let ans = 0,
    visited = new Set();
  const adj = createAdjList(times, n);
  let heap = new Heap((a, b) => a.weight - b.weight);
  heap.push({ neighbor: k, weight: 0 });
  while (heap.elements.length > 0) {
    const curr = heap.pop();
    if (visited.has(curr.neighbor)) continue;
    visited.add(curr.neighbor);
    ans = Math.max(ans, curr.weight);
    for (const nei of adj.get(curr.neighbor) ?? []) {
      if (visited.has(nei.neighbor)) continue;
      heap.push({ neighbor: nei.neighbor, weight: curr.weight + nei.weight });
    }
  }
  return visited.size === n ? ans : -1;
};

var createAdjList = function (arr, n) {
  const adj = new Map();
  arr.forEach((ar) => {
    const val = adj.get(ar[0]) ?? [];
    val.push({ neighbor: ar[1], weight: ar[2] });
    adj.set(ar[0], val);
  });
  return adj;
};

var Heap = function (cmp) {
  this.elements = [];
  this.cmp = cmp;
};

Heap.prototype.push = function (element) {
  this.elements.push(element);
  this.bubbleUp();
};

Heap.prototype.bubbleUp = function () {
  let ele = this.elements.length - 1,
    parent = Math.ceil(ele / 2) - 1;
  while (parent >= 0) {
    if (this.cmp(this.elements[ele], this.elements[parent]) >= 0) break;
    const temp = this.elements[ele];
    this.elements[ele] = this.elements[parent];
    this.elements[parent] = temp;
    ele = parent;
    parent = Math.ceil(ele / 2) - 1;
  }
};

Heap.prototype.pop = function () {
  if (!this.elements.length) return null;
  const returnValue = this.elements[0];
  this.elements[0] = this.elements[this.elements.length - 1];
  this.elements.pop();
  this.bubbleDown();
  return returnValue;
};

Heap.prototype.bubbleDown = function () {
  let ele = 0,
    left,
    right,
    next;
  while (ele < this.elements.length - 1) {
    next = ele;
    left = 2 * ele + 1;
    right = 2 * ele + 2;
    if (left < this.elements.length && this.cmp(this.elements[next], this.elements[left]) > 0)
      next = left;
    if (right < this.elements.length && this.cmp(this.elements[next], this.elements[right]) > 0)
      next = right;
    if (ele === next) return;
    const temp = this.elements[ele];
    this.elements[ele] = this.elements[next];
    this.elements[next] = temp;
    ele = next;
  }
};

const times = [
    [3, 5, 78],
    [2, 1, 1],
    [1, 3, 0],
    [4, 3, 59],
    [5, 3, 85],
    [5, 2, 22],
    [2, 4, 23],
    [1, 4, 43],
    [4, 5, 75],
    [5, 1, 15],
    [1, 5, 91],
    [4, 1, 16],
    [3, 2, 98],
    [3, 4, 22],
    [5, 4, 31],
    [1, 2, 0],
    [2, 5, 4],
    [4, 2, 51],
    [3, 1, 36],
    [2, 3, 59],
  ],
  n = 5,
  k = 5;
console.log(networkDelayTime(times, n, k));
