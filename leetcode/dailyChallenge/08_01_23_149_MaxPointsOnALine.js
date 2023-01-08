/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let slope,
    maxPoints = 1;
  for (let i = 0; i < points.length - 1; i++) {
    const lineMap = new Map();
    for (let j = i + 1; j < points.length; j++) {
      slope = (points[j][1] - points[i][1]) / (points[j][0] - points[i][0]);
      if (points[i][0] === points[j][0])
        lineMap.set(Math.abs(slope), (lineMap.get(Math.abs(slope)) ?? 0) + 1);
      else lineMap.set(slope, (lineMap.get(slope) ?? 0) + 1);
    }
    console.log(lineMap);
    for (const [_, value] of lineMap) maxPoints = Math.max(maxPoints, value + 1);
  }
  return maxPoints;
};
