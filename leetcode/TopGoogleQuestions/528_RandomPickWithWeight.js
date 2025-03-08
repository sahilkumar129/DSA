/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.length = w.length;
  this.indexArr = [w[0]];
  for (let i = 1; i < w.length; i++) {
    this.indexArr.push(w[i] + this.indexArr[i - 1]);
  }
  this.sum = this.indexArr[w.length - 1];
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const ind = Math.random() * this.sum;
  let low = 0,
    high = this.length - 1,
    mid;
  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (this.indexArr[mid] == ind) return mid;
    else if (this.indexArr[mid] < ind) low = mid + 1;
    else if ((this.indexArr[mid - 1] ?? 0) < ind) return mid;
    else high = mid - 1;
  }
  return low;
};

/**
 * Your Solution object will be instantiated and called as such:
 */

const w = [1, 3];
var obj = new Solution(w);
var param1 = obj.pickIndex();
console.log(param1);
