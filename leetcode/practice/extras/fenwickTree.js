// Fenwick or Binary indexed tree
var BIT = function (arr) {
  this.tree = new Array(arr.length + 1).fill(0);
  const prefixSum = [0];
  arr.forEach((a) => {
    prefixSum.push(a + prefixSum[prefixSum.length - 1]);
  });
  for (let i = 1; i <= arr.length; i++) {
    this.tree[i] = prefixSum[i] - prefixSum[i - (i & -i)];
  }
};

BIT.prototype.sum = function (k) {
  let sum = 0;
  while (k > 0) {
    sum += this.tree[k];
    k -= k & -k;
  }
  return sum;
};

BIT.prototype.rangeSum = function (a, b) {
  return this.sum(b) - this.sum(a - 1);
};

BIT.prototype.add = function (k, x) {
  while (k <= this.tree.length) {
    this.tree[k] += x;
    k += k & -k;
  }
};

const bit = new BIT([1, 2, 3, 1, 2, 1]);
console.log(bit.rangeSum(1, 1));
bit.add(2, 2);
console.log(bit.tree);
console.log(bit.rangeSum(1, 5));
