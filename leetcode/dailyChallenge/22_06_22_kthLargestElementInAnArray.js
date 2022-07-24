/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let heap = new Heap(k);
  for (let i = 0; i < nums.length; i++) heap.push(nums[i]);
  return heap.top();
};

var Heap = function (n) {
  this.elements = [];
  this.maxSize = n;
};

Heap.prototype.push = function (value) {
  if (this.elements.length == this.maxSize) {
    if (this.elements[0] < value) this.pop();
    else return;
  }
  this.elements.push(value);
  this.pushHeapify();
};

Heap.prototype.pop = function () {
  const value = this.elements[0];
  this.elements[0] = this.elements[this.elements.length - 1];
  this.elements.pop();
  this.popHeapify();
  return value;
};

Heap.prototype.top = function () {
  return this.elements[0];
};

Heap.prototype.pushHeapify = function () {
  let child = this.elements.length - 1,
    parent;
  while (child > 0) {
    parent = Math.floor((child - 1) / 2);
    if (this.elements[child] >= this.elements[parent]) return;
    swap(this.elements, parent, child);
    child = parent;
  }
};

Heap.prototype.popHeapify = function () {
  let parent = 0,
    left,
    right,
    next = parent;
  while (parent < this.elements.length - 1) {
    left = 2 * parent + 1;
    right = 2 * parent + 2;
    if (left < this.elements.length && this.elements[next] > this.elements[left]) next = left;
    if (right < this.elements.length && this.elements[next] > this.elements[right]) next = right;
    if (parent == next) return;
    swap(this.elements, parent, next);
    parent = next;
  }
};

var swap = function (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 4;
console.log(findKthLargest(nums, k));
