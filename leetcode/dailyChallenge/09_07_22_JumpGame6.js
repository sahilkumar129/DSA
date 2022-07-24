/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
  let ans;
  const n = nums.length,
    heap = new Heap((a, b) => b.sum - a.sum);
  heap.push({ sum: nums[n - 1], ind: n - 1 });
  ans = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    while (heap.top().ind > i + k) heap.pop();
    if (i === 0) ans = heap.top().sum + nums[i];
    heap.push({ sum: heap.top().sum + nums[i], ind: i });
  }
  return ans;
};

var Heap = function (cmp) {
  this.cmp = cmp;
  this.elements = [];
};

Heap.prototype.top = function () {
  return this.elements[0];
};

Heap.prototype.push = function (val) {
  this.elements.push(val);
  this.pushHeapify();
};

Heap.prototype.pop = function () {
  let val = this.elements[0];
  this.elements[0] = this.elements[this.elements.length - 1];
  this.elements.pop();
  this.popHeapify();
  return val;
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

Heap.prototype.popHeapify = function () {
  let parent = 0,
    left,
    right,
    next;
  while (parent < this.elements.length - 1) {
    left = 2 * parent + 1;
    right = 2 * parent + 2;
    next = parent;
    if (left < this.elements.length && this.cmp(this.elements[left], this.elements[next]) < 0)
      next = left;
    if (right < this.elements.length && this.cmp(this.elements[right], this.elements[next]) < 0)
      next = right;
    if (next === parent) return;
    swap(this.elements, parent, next);
    parent = next;
  }
};

var swap = function (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const nums = [1, -1, -2, 4, -7, 3],
  k = 2;
console.log(maxResult(nums, k));
