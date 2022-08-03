/**
 * @param {number[]} nums
 * Segment Tree(1-indexed)
 */
var NumArray = function (nums) {
  this.tree = new Array(nums.length + 1).fill(0);
  this.nums = nums;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = i; j > i - (i & -i); j--) {
      this.tree[i] += this.nums[j - 1];
    }
  }
  // console.log(this.tree,this.nums);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  const oldVal = this.nums[index];
  this.nums[index] = val;
  index++;
  while (index < this.tree.length) {
    this.tree[index] = this.tree[index] - oldVal + val;
    index += index & -index;
  }
  // console.log(this.tree);
};

/**
 * @param {number} index
 * @return {number}
 */
NumArray.prototype.sum = function (index) {
  let sum = 0;
  while (index > 0) {
    sum += this.tree[index];
    index -= index & -index;
  }
  return sum;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  left;
  right++;
  return this.sum(right) - this.sum(left);
};

const numArray = new NumArray([1, 3, 5]);
console.log(numArray.sumRange(0, 2));
console.log(numArray.update(1, 2));
console.log(numArray.sumRange(0, 2));
console.log(numArray.update(1, 5));
console.log(numArray.sumRange(0, 2));
