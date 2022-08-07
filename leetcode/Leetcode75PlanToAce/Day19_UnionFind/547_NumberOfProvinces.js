/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  let ans = n;
  const graph = new Graph(n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && isConnected[i][j]) ans -= graph.union(i, j);
    }
  }
  return ans;
};

var Graph = function (n) {
  this.parents = new Array(n).fill(0).map((val, i) => i);
  this.ranks = new Array(n).fill(1);
};

Graph.prototype.find = function (city) {
  while (this.parents[city] !== city) city = this.parents[city];
  return city;
};

Graph.prototype.union = function (city1, city2) {
  const [p1, p2] = [this.find(city1), this.find(city2)];
  if (p1 === p2) return 0;
  if (this.ranks[p1] >= this.ranks[p2]) {
    this.parents[p2] = p1;
    this.ranks[p1] += this.ranks[p2];
  } else {
    this.parents[p1] = p2;
    this.ranks[p2] += this.ranks[p1];
  }
  return 1;
};

const isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
console.log(findCircleNum(isConnected));
