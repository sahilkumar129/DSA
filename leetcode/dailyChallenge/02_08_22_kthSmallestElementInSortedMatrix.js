/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length,
    heap = new Heap((a, b) => a[0] - b[0]),
    index = new Array(n).fill(0);
  let ind = 0;
  for (let i = 0; i < n; i++) heap.push([matrix[i][0], i]);
  while (heap.size()) {
    const top = heap.pop();
    ind++;
    if (ind === k) return top[0];
    index[top[1]]++;
    if (index[top[1]] < n) heap.push([matrix[top[1]][index[top[1]]], top[1]]);
  }
};

var Heap = function (cmp) {
  this.elements = [];
  this.cmp = cmp ?? ((a, b) => a - b);
};

var swap = function (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

Heap.prototype.top = function () {
  return this.elements[0] ?? null;
};

Heap.prototype.size = function () {
  return this.elements.length;
};

Heap.prototype.push = function (val) {
  this.elements.push(val);
  this.pushHeapify();
};

Heap.prototype.pushHeapify = function () {
  let child = this.elements.length - 1,
    parent;
  while (child > 0) {
    parent = Math.floor((child - 1) / 2);
    if (this.cmp(this.elements[child], this.elements[parent]) >= 0) return;
    swap(this.elements, child, parent);
    child = parent;
  }
};

Heap.prototype.pop = function () {
  if (!this.elements.length) return null;
  const returnValue = this.elements[0];
  this.elements[0] = this.elements[this.elements.length - 1];
  this.elements.pop();
  this.popHeapify();
  return returnValue;
};

Heap.prototype.popHeapify = function () {
  let parent = 0,
    left,
    right,
    next = parent;
  while (parent < this.elements.length - 1) {
    left = 2 * parent + 1;
    right = 2 * parent + 2;
    if (left < this.elements.length && this.cmp(this.elements[left], this.elements[next]) < 0)
      next = left;
    if (right < this.elements.length && this.cmp(this.elements[right], this.elements[next]) < 0)
      next = right;
    if (parent == next) return;
    swap(this.elements, parent, next);
    parent = next;
  }
};

const matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  k = 8;
console.log(kthSmallest(matrix, k));
