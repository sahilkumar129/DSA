var furthestBuilding = function (heights, bricks, ladders) {
  let i,
    heap = new Heap((a, b) => a - b);
  for (i = 0; i < heights.length - 1; i++) {
    const jump = heights[i + 1] - heights[i];
    if (jump <= 0) continue;
    if (ladders > 0) {
      heap.push(jump);
      ladders--;
      continue;
    }
    if (jump > heap.top() ?? Number.MAX_SAFE_INTEGER) {
      bricks -= heap.pop();
      heap.push(jump);
    } else bricks -= jump;
    if (bricks < 0) return i;
  }
  return i;
};

var swap = function (arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

var Heap = function (cmp) {
  this.elements = [];
  this.cmp = cmp;
};

Heap.prototype.size = function () {
  return this.elements.length;
};

Heap.prototype.push = function (element) {
  this.elements.push(element);
  this.pushHeapify();
};

Heap.prototype.pushHeapify = function () {
  let child = this.size() - 1,
    parent;
  while (child > 0) {
    parent = parseInt((child - 1) / 2);
    if (this.cmp(this.elements[child], this.elements[parent]) >= 0) return;
    swap(this.elements, child, parent);
    child = parent;
  }
};

Heap.prototype.pop = function () {
  if (this.size() == 0) return;
  let valueToBeReturned = (value = this.elements.pop());
  if (this.size()) {
    valueToBeReturned = this.elements[0];
    this.elements[0] = value;
  }
  this.popHeapify();
  return valueToBeReturned;
};

Heap.prototype.popHeapify = function () {
  let parent = 0,
    left,
    right,
    next;
  while (parent < this.size()) {
    left = 2 * parent + 1;
    right = 2 * parent + 1;
    if (left < this.size() && this.cmp(this.elements[parent], this.elements[left])) next = left;
    if (right < this.size() && this.cmp(this.elements[next], this.elements[right])) next = right;
    if (next == parent) return;
    parent = next;
  }
};

Heap.prototype.top = function () {
  return this.elements[0];
};

const heights = [14, 3, 19, 3],
  bricks = 17,
  ladders = 0;
console.log(furthestBuilding(heights, bricks, ladders));
