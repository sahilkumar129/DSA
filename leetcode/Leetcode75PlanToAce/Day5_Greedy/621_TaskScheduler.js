/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// var leastInterval = function (tasks, n) {
//   let currTime = 0;
//   const countMap = new Map();
//   for (const task of tasks) countMap.set(task, (countMap.get(task) ?? 0) + 1);
//   const free = new Heap((a, b) => b.count - a.count),
//     busy = new Heap((a, b) => a.time - b.time);
//   countMap.forEach((value, key) => free.push({ count: value, time: 0 }));
//   while (free.size() > 0 || busy.size() > 0) {
//     const busyTop = busy.top();
//     if (busyTop && busyTop.time <= currTime) {
//       free.push(busy.pop());
//       continue;
//     }
//     if (free.size() > 0) {
//       const top = free.pop();
//       currTime++;
//       if (top.count > 1) busy.push({ count: top.count - 1, time: currTime + n });
//     } else {
//       currTime += busyTop.time - currTime + 1;
//       if (busyTop.count > 1) busy.push({ count: busyTop.count - 1, time: currTime + n });
//       busy.pop();
//     }
//   }
//   return currTime;
// };

// var Heap = function (cmp) {
//   this.elements = [];
//   this.cmp = cmp ?? ((a, b) => a - b);
// };

// var swap = function (arr, i, j) {
//   const temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// };

// Heap.prototype.top = function () {
//   return this.elements[0] ?? null;
// };

// Heap.prototype.size = function () {
//   return this.elements.length;
// };

// Heap.prototype.push = function (val) {
//   this.elements.push(val);
//   this.pushHeapify();
// };

// Heap.prototype.pushHeapify = function () {
//   let child = this.elements.length - 1,
//     parent;
//   while (child > 0) {
//     parent = Math.floor((child - 1) / 2);
//     if (this.cmp(this.elements[child], this.elements[parent]) >= 0) return;
//     swap(this.elements, child, parent);
//     child = parent;
//   }
// };

// Heap.prototype.pop = function () {
//   if (!this.elements.length) return null;
//   const returnValue = this.elements[0];
//   this.elements[0] = this.elements[this.elements.length - 1];
//   this.elements.pop();
//   this.popHeapify();
//   return returnValue;
// };

// Heap.prototype.popHeapify = function () {
//   let parent = 0,
//     left,
//     right,
//     next = parent;
//   while (parent < this.elements.length - 1) {
//     left = 2 * parent + 1;
//     right = 2 * parent + 2;
//     if (left < this.elements.length && this.cmp(this.elements[left], this.elements[next]) < 0)
//       next = left;
//     if (right < this.elements.length && this.cmp(this.elements[right], this.elements[next]) < 0)
//       next = right;
//     if (parent == next) return;
//     swap(this.elements, parent, next);
//     parent = next;
//   }
// };

var leastInterval = function (tasks, n) {
  let l = tasks.length;
  if (n == 0) return l;
  let ans = 0,
    count = 0,
    m = new Map();
  for (let i = 0; i < l; i++) {
    let k = m.get(tasks[i]) ? m.get(tasks[i]) + 1 : 1;
    m.set(tasks[i], k);
  }
  let max = Math.max(...m.values());
  for (let [k, v] of m) if (v == max) count++;

  ans = n * (max - 1) + (max - 1) + count;
  return Math.max(l, ans);
};

const tasks = ["A", "A", "A", "B", "B", "B"],
  n = 2;
console.log(leastInterval(tasks, n));
