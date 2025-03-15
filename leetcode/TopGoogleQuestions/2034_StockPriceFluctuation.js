var StockPrice = function () {
  this.maxTimestamp = 0;
  this.timePrice = new Map();
  this.minPrice = new Heap((a, b) => b - a);
  this.maxPrice = new Heap((a, b) => a - b);
};

/**
 * @param {number} timestamp
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function (timestamp, price) {
  this.maxTimestamp = Math.max(timestamp, this.maxTimestamp);
  this.minPrice.push([price, timestamp]);
  this.maxPrice.push([price, timestamp]);
  this.timePrice.set(timestamp, price);
  console.log(this.minPrice, this.maxPrice);
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
  return this.timePrice.get(this.maxTimestamp);
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
  // console.log(this.maxPrice, this.minPrice);
  while (true) {
    const curr = this.maxPrice.top();
    if (curr[0] == this.timePrice.get(curr[1])) return curr[0];
    this.maxPrice.pop();
  }
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
  while (true) {
    const curr = this.minPrice.top();
    if (curr[0] == this.timePrice.get(curr[1])) return curr[0];
    this.minPrice.pop();
  }
};

var Heap = function (cmp) {
  this.cmp = cmp;
  this.currSize = 0;
  this.elements = [];
};

Heap.prototype.top = function () {
  return this.elements[0];
};

Heap.prototype.push = function (element) {
  this.elements.push(element);
  this.heapifyUp(this.currSize);
  this.currSize++;
};

Heap.prototype.pop = function (element) {
  swap(this.elements, 0, this.currSize - 1);
  const returnVal = this.elements.pop();
  this.currSize--;
  this.heapifyDown(0);
  return returnVal;
};

Heap.prototype.heapifyUp = function (i) {
  if (i <= 0) return;
  const p = Math.floor((i - 1) / 2);
  if (this.cmp(this.elements[i][0], this.elements[p][0]) <= 0) return;
  swap(this.elements, i, p);
  this.heapifyUp(p);
};

Heap.prototype.heapifyDown = function (i) {
  if (i >= this.currSize) return;
  const l = 2 * i + 1,
    r = 2 * i + 2;
  let s = i;
  if (l < this.currSize && this.cmp(this.elements[l][0], this.elements[i][0]) > 0) s = l;
  if (r < this.currSize && this.cmp(this.elements[r][0], this.elements[s][0]) > 0) s = r;
  if (s == i) return;
  swap(this.elements, i, s);
  this.heapifyDown(s);
};

var swap = function (arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};

var obj = new StockPrice();
obj.update(1, 10);
obj.update(2, 5);
var param_2 = obj.current();
var param_3 = obj.maximum();
obj.update(1, 3);
var param_3 = obj.maximum();
obj.update(4, 2);
var param_4 = obj.minimum();
