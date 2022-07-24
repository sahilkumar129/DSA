/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
  courses.sort((a, b) => a[1] - b[1]);
  let currTime = 0;
  const heap = new MaxHeap(100000);
  for (const course of courses) {
    heap.push(course[0]);
    currTime += course[0];
    if (currTime > course[1]) currTime -= heap.pop();
  }
  return heap.size();
};

/**
 * Max Heap
 * @param {number} maxSize
 */
const MaxHeap = function (maxSize) {
  this.elements = [];
  this.maxSize = maxSize;
};

MaxHeap.prototype.size = function () {
  return this.elements.length;
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

const courses = [
  [100, 200],
  [200, 1300],
  [1000, 1250],
  [2000, 3200],
];
console.log(scheduleCourse(courses));
