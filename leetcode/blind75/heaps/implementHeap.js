/**
 * Min Heap
 * @param {number} maxSize
 */
const MinHeap = function (maxSize, cmp) {
  this.elements = [];
  this.maxSize = maxSize;
  this.cmp = cmp ?? ((a, b) => a - b);
};

MinHeap.prototype.top = function () {
  return this.elements[0];
};

MinHeap.prototype.size = function () {
  return this.elements.length;
};

MinHeap.prototype.push = function (element) {
  if (this.elements.length < this.maxSize) {
    this.elements.push(element);
    this.pushHeapify(this.elements.length - 1);
  } else {
    console.log("Error: Heap Overflow!");
  }
};

MinHeap.prototype.pop = function () {
  if (this.elements.length == 0) console.log("Error: Heap Underflow!");
  else {
    let temp = this.elements[0];
    this.elements[0] = this.elements[this.elements.length - 1];
    this.elements.pop();
    this.popHeapify(0);
    return temp;
  }
};

MinHeap.prototype.pushHeapify = function (index) {
  if (index < 1) return;
  const parent = Math.ceil(index / 2) - 1;
  if (parent < 0 || this.cmp(this.elements[index], this.elements[parent]) >= 0) return;
  let temp = this.elements[parent];
  this.elements[parent] = this.elements[index];
  this.elements[index] = temp;
  this.pushHeapify(parent);
};

MinHeap.prototype.popHeapify = function (index) {
  if (index >= this.elements.length) return;
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let minIndex = index;
  if (left < this.elements.length)
    minIndex = this.cmp(this.elements[left], this.elements[minIndex]) < 0 ? left : minIndex;
  if (right < this.elements.length)
    minIndex = this.cmp(this.elements[right], this.elements[minIndex]) < 0 ? right : minIndex;
  if (minIndex == index) return;
  let temp = this.elements[minIndex];
  this.elements[minIndex] = this.elements[index];
  this.elements[index] = temp;
  this.popHeapify(minIndex);
};

/**
 * Max Heap
 * @param {number} maxSize
 */
const MaxHeap = function (maxSize) {
  this.elements = [];
  this.maxSize = maxSize;
};

MaxHeap.prototype.push = function (element) {
  if (this.elements.length < this.maxSize) {
    this.elements.push(element);
    this.pushHeapify(this.elements.length - 1);
  } else {
    console.log("Error: Heap Overflow!");
  }
};

MaxHeap.prototype.pop = function () {
  if (this.elements.length == 0) console.log("Error: Heap Underflow!");
  else {
    let temp = this.elements[0];
    this.elements[0] = this.elements[this.elements.length - 1];
    this.elements.pop();
    this.popHeapify(0);
    return temp;
  }
};

MaxHeap.prototype.pushHeapify = function (index) {
  if (index < 1) return;
  const parent = Math.ceil(index / 2) - 1;
  if (parent < 0 || this.elements[index] <= this.elements[parent]) return;
  let temp = this.elements[parent];
  this.elements[parent] = this.elements[index];
  this.elements[index] = temp;
  this.pushHeapify(parent);
};

MaxHeap.prototype.popHeapify = function (index) {
  if (index >= Math.floor(this.elements.length)) return;
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let maxIndex = index;
  if (left < this.elements.length)
    maxIndex = this.elements[left] > this.elements[maxIndex] ? left : maxIndex;
  if (left < this.elements.right)
    maxIndex = this.elements[right] > this.elements[maxIndex] ? right : maxIndex;
  if (maxIndex == index) return;
  let temp = this.elements[maxIndex];
  this.elements[maxIndex] = this.elements[index];
  this.elements[index] = temp;
  this.popHeapify(maxIndex);
};

module.exports = { MinHeap, MaxHeap };

// const minHeap = new MinHeap(10);
// minHeap.push(5);
// console.log(minHeap);
// minHeap.push(2);
// console.log(minHeap);
// minHeap.push(5);
// console.log(minHeap);
// minHeap.push(3);
// console.log(minHeap);
// minHeap.push(5);
// console.log(minHeap);
// minHeap.push(3);
// console.log(minHeap);
// minHeap.push(1);
// console.log(minHeap);
// minHeap.push(1);
// console.log(minHeap);
// minHeap.push(3);
// console.log(minHeap);

// const maxHeap = new MaxHeap(5);
// maxHeap.push(1);
// console.log(maxHeap);
// maxHeap.push(8);
// console.log(maxHeap);
// maxHeap.push(4);
// console.log(maxHeap);
// maxHeap.pop();
// console.log(maxHeap);
// maxHeap.push(2);
// console.log(maxHeap);
// maxHeap.push(2);
// console.log(maxHeap);
// maxHeap.push(2);
// console.log(maxHeap);
// maxHeap.pop();
// console.log(maxHeap);
// maxHeap.pop();
// maxHeap.pop();
// maxHeap.pop();
// maxHeap.pop();

var swap = function (arr, i, j) {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
};

const Heap = function (cmp) {
  this.elements = [];
  this.cmp = cmp ?? ((a, b) => a - b);
};

Heap.prototype.size = function () {
  return this.elements.length;
};

Heap.prototype.top = function () {
  return this.elements?.[0] ?? null;
};

Heap.prototype.push = function (val) {
  this.elements.push(val);
  this.pushHeapify();
};

Heap.prototype.pop = function () {
  const val = this.elements?.[0] ?? null;
  if (val === null) return val;
  this.elements[0] = this.elements[this.elements.length - 1];
  this.elements.pop();
  this.popHeapify();
  return val;
};

Heap.prototype.pushHeapify = function () {
  let curr = this.elements.length - 1,
    parent;
  while (curr > 0) {
    parent = Math.floor((curr - 1) / 2);
    if (this.cmp(this.elements[curr], this.elements[parent]) < 0) swap(this.elements, curr, parent);
    else break;
    curr = parent;
  }
};

Heap.prototype.popHeapify = function () {
  let curr = 0,
    left,
    right,
    next = curr;
  while (curr < this.elements.length - 1) {
    left = 2 * curr + 1;
    right = 2 * curr + 2;
    if (left < this.elements.length && this.cmp(this.elements[left], this.elements[curr]) < 0)
      next = left;
    if (right < this.elements.length && this.cmp(this.elements[right], this.elements[next]) < 0)
      next = right;
    if (next === curr) break;
    swap(this.elements, curr, next);
    curr = next;
  }
};

const maxHeap = new Heap((a, b) => b - a);
maxHeap.push(1);
console.log(maxHeap.elements);
maxHeap.push(8);
console.log(maxHeap.elements);
maxHeap.push(4);
console.log(maxHeap.elements);
maxHeap.pop();
console.log(maxHeap.elements);
maxHeap.push(2);
console.log(maxHeap.elements);
maxHeap.push(2);
console.log(maxHeap.elements);
maxHeap.push(2);
console.log(maxHeap.elements);
maxHeap.pop();
console.log(maxHeap.elements);
maxHeap.pop();
maxHeap.pop();
maxHeap.pop();
maxHeap.pop();
