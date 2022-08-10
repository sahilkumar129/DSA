var SegmentTree = function (arr) {
  this.arrLength = arr.length;
  this.tree = new Array(2 * this.arrLength).fill(0);
  for (let i = 0; i < this.arrLength; i++) {
    this.tree[i + this.arrLength] = arr[i];
  }
  for (let i = 2 * this.arrLength - 1; i > 1; i--) {
    this.tree[parseInt(i / 2)] += this.tree[i];
  }
  console.log(this.tree);
};

SegmentTree.prototype.sum = function (a, b) {
  let sum = 0;
  a += this.arrLength;
  b += this.arrLength;
  while (a <= b) {
    if (a % 2 == 1) sum += this.tree[a++];
    if (b % 2 == 0) sum += this.tree[b--];

    a = parseInt(a / 2);
    b = parseInt(b / 2);
  }
  return sum;
};

SegmentTree.prototype.add = function (k, x) {
  k += this.arrLength;
  while (k > 0) {
    this.tree[k] += x;
    k = parseInt(k / 2);
  }
};

const segmentTree = new SegmentTree([5, 8, 6, 3, 2, 7, 2, 6]);
console.log(segmentTree.sum(1, 4));
segmentTree.add(2, 2);
console.log(segmentTree.tree);
