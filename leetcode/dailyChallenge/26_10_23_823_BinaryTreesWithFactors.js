/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  arr.sort((a, b) => a - b);
  const map = new Map(arr.map((x) => [x, 1]));
  let ans = 0;
  for (let i = 1; i < arr.length; i++) {
    let temp = map.get(arr[i]);
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < Math.pow(arr[i], 0.5)) break;
      let left = 0,
        right = 0;
      left = map.get(arr[j]);
      const other = arr[i] / arr[j];
      if (map.has(other)) {
        right = map.get(other);
      }
      temp += left * right * (arr[j] == other ? 1 : 2);
    }
    map.set(arr[i], temp);
  }
  map.forEach((v) => {
    ans = (ans + v) % 1000000007;
  });
  //   console.log(map);
  return ans;
};

const arr = [2, 4, 5, 10];
console.log(numFactoredBinaryTrees(arr));
