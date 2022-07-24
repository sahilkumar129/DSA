/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.push(0, h);
  verticalCuts.push(0, w);
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);
  let maxHD = 0,
    maxVD = 0;
  for (let i = 0; i < horizontalCuts.length - 1; i++)
    maxHD = Math.max(maxHD, horizontalCuts[i + 1] - horizontalCuts[i]);
  for (let i = 0; i < verticalCuts.length - 1; i++)
    maxVD = Math.max(maxVD, verticalCuts[i + 1] - verticalCuts[i]);
  const res = (BigInt(maxHD) * BigInt(maxVD)) % BigInt(1000000007);
  return res;
};

const h = 5,
  w = 4,
  horizontalCuts = [1, 2, 4],
  verticalCuts = [1, 3];
console.log(maxArea(h, w, horizontalCuts, verticalCuts));
