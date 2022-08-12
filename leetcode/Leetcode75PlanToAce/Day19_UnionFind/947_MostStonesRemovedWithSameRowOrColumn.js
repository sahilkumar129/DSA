/**
 * @param {number[][]} stones
 * @return {number}
 */
// var removeStones = function (stones) {
//   let ans = 0;
//   const vis = new Set();
//   for (let i = 0; i < stones.length; i++) if (!vis.has(i)) ans += dfs(i, stones, vis);
//   return ans;
// };

// var dfs = function (ind, stones, vis) {
//   let count = 0;
//   vis.add(ind);
//   for (let i = 0; i < stones.length; i++)
//     if (!vis.has(i) && (stones[i][0] === stones[ind][0] || stones[i][1] === stones[ind][1]))
//       count += dfs(i, stones, vis) + 1;
//   return count;
// };

class UnionFind {
  constructor(n) {
    this.graph = [...Array(n)].map((_, i) => i);
    this.sizes = new Array(n).fill(0);
    this.count = n;
  }

  union(a, b) {
    let A = this.find(a);
    let B = this.find(b);
    if (A === B) return;
    //weighting optimization part
    if (this.sizes[A] < this.sizes[B]) {
      this.graph[A] = B;
      this.sizes[B] += this.sizes[A];
    } else {
      this.graph[B] = A;
      this.sizes[A] += this.sizes[B];
    }
    this.count--;
  }

  find(id) {
    let root = id;
    // finding root
    while (root !== this.graph[root]) {
      root = this.graph[root];
    }
    // path compression
    while (id !== root) {
      const nextId = this.graph[id];
      this.graph[id] = root;
      id = nextId;
    }
    return root;
  }
}

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const sizes = stones.length;
  const uf = new UnionFind(sizes);

  // if any two points are on the same column or row, they are connected as a
  // edge.
  // count the number of disjoint components (all - connected).
  for (let i = 0; i < sizes; i++) {
    for (let j = i + 1; j < sizes; j++) {
      if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
        uf.union(i, j);
      }
    }
  }
  return sizes - uf.count;
};

const stones = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 2],
  [2, 1],
  [2, 2],
];
console.log(removeStones(stones));
