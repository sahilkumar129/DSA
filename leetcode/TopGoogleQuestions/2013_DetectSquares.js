var DetectSquares = function () {
  this.coordinates = new Map();
  this.pointsCountMap = new Map();
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  const coordinateSet = this.coordinates.get(point[0]) ?? new Set();
  coordinateSet.add(point[1]);
  this.coordinates.set(point[0], coordinateSet);
  const pointStr = `${point[0]}-${point[1]}`;
  this.pointsCountMap.set(pointStr, (this.pointsCountMap.get(pointStr) ?? 0) + 1);
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  let ans = 0;
  this.coordinates.get(point[0])?.forEach((y) => {
    if (y !== point[1]) {
      const side = Math.abs(point[1] - y);
      const points = [
        [`${point[0]}-${y}`, `${point[0] - side}-${y}`, `${point[0] - side}-${point[1]}`],
        [`${point[0] + side}-${point[1]}`, `${point[0] + side}-${y}`, `${point[0]}-${y}`],
      ];
      for (const p of points) {
        ans +=
          (this.pointsCountMap.get(p[0]) ?? 0) *
          (this.pointsCountMap.get(p[1]) ?? 0) *
          (this.pointsCountMap.get(p[2]) ?? 0);
      }
    }
  });
  return ans;
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */

var obj = new DetectSquares();
obj.add([3, 10]);
obj.add([11, 2]);
obj.add([3, 2]);
var param_2 = obj.count([11, 10]);
