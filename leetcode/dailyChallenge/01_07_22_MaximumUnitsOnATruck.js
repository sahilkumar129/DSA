/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let ans = 0,
    i = 0;
  boxTypes.sort((a, b) => b[1] - a[1]);
  while (i < boxTypes.length && truckSize) {
    const num = Math.min(truckSize, boxTypes[i][0]);
    ans += boxTypes[i][1] * num;
    truckSize -= num;
    i++;
  }
  return ans;
};

const boxTypes = [
    [1, 3],
    [2, 2],
    [3, 1],
  ],
  truckSize = 4;
console.log(maximumUnits(boxTypes, truckSize));
