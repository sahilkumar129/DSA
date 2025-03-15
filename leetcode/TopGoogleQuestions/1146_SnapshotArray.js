/**
 * @param {number} length
 */
var SnapshotArray = function (length) {};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.snapId = 0;
  this.elements = new Map();
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  if (!this.elements.has(index)) this.elements.set(index, []);
  this.elements.get(index).push([this.snapId, val]);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  this.snapId++;
  return this.snapId - 1;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  let res = 0;
  const snap = this.elements.get(index);
  let l = 0,
    h = (snap?.length ?? 0) - 1,
    m;
  while (l <= h) {
    m = Math.floor((l + h) / 2);
    if (snap[m][0] <= snap_id) {
      res = snap[m][1];
      l = m + 1;
    } else h = m - 1;
  }
  return res;
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

var obj = new SnapshotArray(length);
obj.set(index, val);
var param_2 = obj.snap();
var param_3 = obj.get(index, snap_id);
