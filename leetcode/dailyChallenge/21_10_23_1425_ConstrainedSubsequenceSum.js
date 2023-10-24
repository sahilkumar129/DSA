/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
   let ans = nums[nums.length-1]; 
   const heap = new Heap((a,b) => b.val - a.val);
   heap.push({val: nums[nums.length-1], ind: nums.length-1});
   for(let i=nums.length-2;i>=0;i--) {
       while(true && heap.size()) {
           const top = heap.top();
           if(top.ind <= i+k) {
                heap.push({val: Math.max(nums[i], nums[i]+top.val), ind: i});
                break;
           } else {
                ans = Math.max(ans, heap.pop().val);
           }
       }
   }
   
   ans = Math.max(ans, heap.top().val);
   return ans;
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


const nums = [10,2,-10,5,20], k = 2;
console.log(constrainedSubsetSum(nums, k));
