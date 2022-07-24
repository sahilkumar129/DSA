// const Heap = require("heap");

// var MedianFinder = function () {
//   this.leftHeap = new Heap((a, b) => b - a); // MaxHeap
//   this.rightHeap = new Heap(); // MinHeap
// };

// /**
//  @param {number} num
//  * @return {void}
//  */
// MedianFinder.prototype.addNum = function (num) {
//   if (this.rightHeap.top() && this.rightHeap.top() < num) this.rightHeap.push(num);
//   else this.leftHeap.push(num);

//   // if the |leftHeap.length-righHeap.length| > 1, balance it
//   if (this.leftHeap.size() - this.rightHeap.size() > 1) {
//     this.rightHeap.push(this.leftHeap.pop());
//   } else if (this.rightHeap.size() - this.leftHeap.size() > 1) {
//     this.leftHeap.push(this.rightHeap.pop());
//   }
// };

// /**
//  * @return {number}
//  */
// MedianFinder.prototype.findMedian = function () {
//   if ((this.leftHeap.size() + this.rightHeap.size()) % 2) {
//     if (this.rightHeap.size() > 0 && this.leftHeap.size() % 2) return this.rightHeap.top();
//     return this.leftHeap.top();
//   } else return (this.leftHeap.top() + this.rightHeap.top()) / 2;
// };

var MedianFinder = function () {
  this.leftHeap = new Heap((a, b) => b - a); // MaxHeap
  this.rightHeap = new Heap(); // MinHeap
};

/**
 @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.rightHeap.top() && this.rightHeap.top() < num) this.rightHeap.push(num);
  else this.leftHeap.push(num);

  // if the |leftHeap.length-righHeap.length| > 1, balance it
  if (this.leftHeap.size() - this.rightHeap.size() > 1) {
    this.rightHeap.push(this.leftHeap.pop());
  } else if (this.rightHeap.size() - this.leftHeap.size() > 1) {
    this.leftHeap.push(this.rightHeap.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if ((this.leftHeap.size() + this.rightHeap.size()) % 2) {
    return this.leftHeap.size() > this.rightHeap.size()
      ? this.leftHeap.top()
      : this.rightHeap.top();
  } else return ((this.leftHeap.top() ?? 0) + (this.rightHeap.top() ?? 0)) / 2;
};

var defaultCmp = function (a, b) {
  return a - b;
};

var Heap = function (cmp) {
  this.elements = [];
  this.cmp = cmp ?? defaultCmp;
};

Heap.prototype.push = function (item) {
  this.elements.push(item);
  return this._siftdown(0, this.elements.length - 1);
};

Heap.prototype.pop = function () {
  let lastelt, returnitem;
  lastelt = this.elements.pop();
  if (this.elements.length) {
    returnitem = this.elements[0];
    this.elements[0] = lastelt;
    this._siftup(0);
  } else {
    returnitem = lastelt;
  }
  return returnitem;
};

Heap.prototype.top = function () {
  return this.elements[0];
};

Heap.prototype.size = function () {
  return this.elements.length;
};

Heap.prototype._siftdown = function (startpos, pos) {
  let newitem, parent, parentpos;
  newitem = this.elements[pos];
  while (pos > startpos) {
    parentpos = (pos - 1) >> 1;
    parent = this.elements[parentpos];
    if (this.cmp(newitem, parent) < 0) {
      this.elements[pos] = parent;
      pos = parentpos;
      continue;
    }
    break;
  }
  return (this.elements[pos] = newitem);
};

Heap.prototype._siftup = function (pos) {
  let childpos, endpos, newitem, rightpos, startpos;
  endpos = this.elements.length;
  startpos = pos;
  newitem = this.elements[pos];
  childpos = 2 * pos + 1;
  while (childpos < endpos) {
    rightpos = childpos + 1;
    if (rightpos < endpos && !(this.cmp(this.elements[childpos], this.elements[rightpos]) < 0)) {
      childpos = rightpos;
    }
    this.elements[pos] = this.elements[childpos];
    pos = childpos;
    childpos = 2 * pos + 1;
  }
  this.elements[pos] = newitem;
  return this._siftdown(startpos, pos);
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 */

var obj = new MedianFinder();
obj.addNum(1);
console.log(obj.findMedian());
obj.addNum(2);
console.log(obj.findMedian());
obj.addNum(3);
console.log(obj.findMedian());
obj.addNum(6);
console.log(obj.findMedian());
obj.addNum(5);
console.log(obj.findMedian());
obj.addNum(0);
console.log(obj.findMedian());
obj.addNum(6);
console.log(obj.findMedian());
obj.addNum(3);
console.log(obj.findMedian());
obj.addNum(1);
console.log(obj.findMedian());
obj.addNum(0);
console.log(obj.findMedian());
obj.addNum(0);
console.log(obj.findMedian());
