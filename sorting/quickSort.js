var quickSort = function (array, low, high) {
  if (low >= high) return array;
  const pivot = partition(array, low, high);
  quickSort(array, low, pivot - 1);
  quickSort(array, pivot + 1, high);
  return array;
};

var partition = function (array, low, high) {
  const pivot = array[high];
  let i = low;
  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) swap(array, i++, j);
  }
  swap(array, i, high);
  return i;
};

var swap = function (array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const array = [3, 2, 5, 7, 1, 2, 5, 1];
console.log(quickSort(array, 0, array.length - 1));
