/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let mostWater = 0;
  for (let i = 0, j = height.length - 1; i < j; ) {
    const currContainerCapacity = (j - i) * Math.min(height[i], height[j]);
    mostWater = Math.max(mostWater, currContainerCapacity);
    height[i] < height[j] ? i++ : j--;
  }
  return mostWater;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
