var mergeSort = function (array) {
  if (array.length < 2) return array;
  const mid = parseInt(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
};

var merge = function (left, right) {
  let arr = [],
    i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) arr.push(left[i++]);
    else arr.push(right[j++]);
  }
  arr.push(...left.slice(i));
  arr.push(...right.slice(j));
  return arr;
};

const array = [3, 2, 5, 7, 1, 2, 5, 1];
console.log(mergeSort(array));
