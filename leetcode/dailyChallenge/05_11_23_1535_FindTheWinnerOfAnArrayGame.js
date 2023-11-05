/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  let curr = arr[0],
    nextInd = 1,
    count = 0;
  while (nextInd < arr.length && count < k) {
    if (curr > arr[nextInd]) count++;
    else {
      curr = arr[nextInd];
      count = 1;
    }
    nextInd++;
  }
  return curr;
};

const arr = [2, 1, 3, 5, 4, 6, 7],
  k = 2;
console.log(getWinner(arr, k));
