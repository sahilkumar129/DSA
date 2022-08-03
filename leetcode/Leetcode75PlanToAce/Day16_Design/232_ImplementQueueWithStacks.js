var MyQueue = function () {
  this.elements = [];
  this.start = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.elements.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const value = this.elements[this.start];
  this.start++;
  if (this.empty()) {
    this.elements = [];
    this.start = 0;
  }
  return value;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.elements[this.start];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.start === this.elements.length;
};

const myQueue = new MyQueue();
console.log(myQueue.push(1)); // queue is: [1]
console.log(myQueue.push(2)); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.peek()); // return 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.empty()); // return false
