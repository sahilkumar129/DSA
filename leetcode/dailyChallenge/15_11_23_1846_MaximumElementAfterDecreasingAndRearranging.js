/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
  arr.sort((a, b) => a - b);
  arr[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] + 1) arr[i] = arr[i - 1] + 1;
  }
  return arr[arr.length - 1];
};

const arr = [100, 1, 1000];
console.log(maximumElementAfterDecrementingAndRearranging(arr));
