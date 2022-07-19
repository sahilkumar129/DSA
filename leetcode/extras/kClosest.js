var kClosest = function (arr, k, x) {
  const ans = [];
  let [i, j] = findStartingIndexes(arr, x);
  const cmp = (indI, indJ) => {
    if (indI < 0) return 1;
    if (indJ >= arr.length) return 0;
    return Math.abs(arr[indI] - x) - Math.abs(arr[indJ] - x);
  };
  while (k--) {
    if (i == j) {
      ans.push(arr[i--]);
      j++;
    } else if (cmp(i, j) <= 0) ans.push(arr[i--]);
    else ans.push(arr[j++]);
  }
  return ans.sort();
};

var findStartingIndexes = function (arr, x) {
  let s = 0,
    e = arr.length - 1,
    mid,
    i,
    j;
  while (s <= e) {
    mid = parseInt(s + (e - s) / 2);
    if (arr[mid] === x || (arr[mid] < x && (mid + 1 > e || arr[mid + 1] > x))) {
      i = mid;
      j = mid + 1;
      break;
    }
    if (arr[mid] > x) e = mid - 1;
    else s = mid + 1;
  }
  return [i, j];
};

const arr = [1, 3, 4, 6, 9, 10],
  x = 5,
  k = 3;
console.log(kClosest(arr, k, x));
