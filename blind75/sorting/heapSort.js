var heapSort = function (array) {
  const n = array.length;
  for (let i = Math.floor(n / 2); i >= 0; i--) heapify(array, i, n - 1);
  for (let i = n - 1; i > 0; i--) {
    swap(array, 0, i);
    heapify(array, 0, i);
  }
  return array;
};

heapify = function (heap, low, high) {
  let parent = low,
    next = parent,
    left,
    right;
  while (parent < high) {
    left = 2 * parent + 1;
    right = 2 * parent + 2;
    if (left < high && heap[left] > heap[parent]) next = left;
    if (right < high && heap[right] > heap[next]) next = right;
    if (parent == next) return;
    swap(heap, parent, next);
    parent = next;
  }
};

var swap = function (array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const array = [3, 2, 5, 7, 1, 2, 5, 1];
console.log(heapSort(array));
