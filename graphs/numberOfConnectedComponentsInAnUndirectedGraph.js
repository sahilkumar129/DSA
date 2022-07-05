/**
 * Union-Find approach
 * @param {*} n
 * @param {*} edges
 */
var countComponents = function (n, edges) {
  let parent = [],
    rank = [];
  for (let i = 0; i < n; i++) {
    parent.push(i);
    rank.push(1);
  }

  var find = function (node) {
    let res = node;
    while (res != parent[res]) res = parent[res];
    return res;
  };

  var union = function (edge) {
    const [p1, p2] = [find(edge[0]), find(edge[1])];
    if (p1 == p2) return 0; // No union done
    if (rank[p1] >= rank[p2]) {
      parent[p2] = p1;
      rank[p1] += rank[p2];
    } else {
      parent[p1] = p2;
      rank[p2] += rank[p1];
    }
    return 1;
  };

  let connectedComponents = n;
  for (const edge of edges) connectedComponents -= union(edge);
  return connectedComponents;
};

const n = 5,
  edges = [
    [0, 1],
    [1, 2],
    [3, 4],
  ];

console.log(countComponents(n, edges));
