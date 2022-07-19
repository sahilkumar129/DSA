// Used to get Minimum/Maximum Spanning Tree
var prims = function (adjList) {};

const adjList = new Map([
  [
    1,
    [
      [2, 3],
      [5, 5],
    ],
  ],
  [
    2,
    [
      [1, 3],
      [3, 5],
      [5, 6],
    ],
  ],
  [
    3,
    [
      [2, 5],
      [4, 9],
      [6, 3],
    ],
  ],
  [
    4,
    [
      [3, 9],
      [6, 7],
    ],
  ],
  [
    5,
    [
      [1, 5],
      [2, 6],
      [6, 2],
    ],
  ],
  [
    6,
    [
      [3, 3],
      [4, 7],
      [5, 2],
    ],
  ],
]);

console.log(prims(adjList));
