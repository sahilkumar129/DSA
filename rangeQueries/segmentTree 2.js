var SegmentTree = function (array) {
  this.arrLen = array.length;
  // 1-indexed array
  this.tree = new Array(2 * this.arrLen).fill(0);
  for (let i = this.arrLen; i < 2 * this.arrLen; i++) this.tree[i] = array[i - this.arrLen];
  for (let i = 2 * this.arrLen - 1; i > 1; i--) {
    this.tree[parseInt(i / 2)] += this.tree[i];
  }
};

SegmentTree.prototype.sumRange = function (a, b) {
  a += this.arrLen;
  b += this.arrLen;
  let sum = 0;
  while (a <= b) {
    if (a % 2 == 1) sum += this.tree[a++];
    if (b % 2 == 0) sum += this.tree[b--];
    a = parseInt(a / 2);
    b = parseInt(b / 2);
  }
  return sum;
};

SegmentTree.prototype.add = function (k, x) {
  k += this.arrLen;
  while (k > 0) {
    this.tree[k] += x;
    k = parseInt(k / 2);
  }
};

// 0-indexed array
const segmentTree = new SegmentTree([1, 2, 3, 1, 2, 1, 0, 0]);
// console.log(segmentTree.tree);
console.log(segmentTree.sumRange(2, 5));
segmentTree.add(3, 2);
console.log(segmentTree.tree);
console.log(segmentTree.sumRange(2, 5));

// 			   			10
// 	  	7				   			3
//   3     	4       3 	  	0
// 1	 2	3		1		2		1		0		0
