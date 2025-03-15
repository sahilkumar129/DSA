/**
 * @param {number[]} encoding
 */
var RLEIterator = function (encoding) {
  this.encoding = encoding;
  this.index = 0;
};

/**
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function (n) {
  let curr = 0;
  while (this.index < this.encoding.length && curr < n) {
    if (this.encoding[this.index] >= n - curr) {
      this.encoding[this.index] = this.encoding[this.index] - (n - curr);
      curr = n;
      break;
    }
    curr += this.encoding[this.index];
    this.index += 2;
  }
  return curr == n ? this.encoding[this.index + 1] : -1;
};

const encoding = [3, 8, 0, 9, 2, 5];
var obj = new RLEIterator(encoding);
console.log(obj.next(2));
console.log(obj.next(3));
console.log(obj.next(1));
console.log(obj.next(3));
