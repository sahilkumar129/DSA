/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function (targets) {
  let sum = 0,
    heap = new Heap((a, b) => b - a);
  for (const target of targets) {
    heap.push(target);
    sum += target;
  }
  while (heap.top() != 1) {
    sum -= heap.top();
    if (sum === 0 || sum > heap.top()) return false;
    const old = heap.pop() % sum;
    if (sum != 1 && old === 0) return false;
    heap.push(old);
    sum += old;
  }
  return true;
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

const target = [9, 3, 5];
console.log(isPossible(target));
