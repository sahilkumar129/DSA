function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

var buildGraph = function (adjList) {
  let i = 1,
    currNode,
    root = null,
    visited = new Map();
  adjList.forEach((neighbors) => {
    currNode = visited.get(i) ?? new Node(i);
    neighbors.forEach((neighbor) => {
      let currNeighbor = null;
      if (visited.has(neighbor)) currNeighbor = visited.get(neighbor);
      else {
        currNeighbor = new Node(neighbor);
        visited.set(neighbor, currNeighbor);
      }
      currNode.neighbors.push(currNeighbor);
    });
    i++;
    root = root ?? currNode;
  });
  return root;
};

var printGraph = function (node) {
  const adjList = [];
  if (!node) return adjList;
  let stack = [node],
    curr,
    visited = new Set();
  while (stack.length) {
    curr = stack.pop();
    if (visited.has(curr.val)) continue;
    visited.add(curr.val);
    let currNeighbors = [curr.val];
    curr.neighbors.forEach((neighbor) => {
      currNeighbors.push(neighbor.val);
      if (!visited.has(neighbor.val)) stack.push(neighbor);
    });
    adjList.push(currNeighbors);
  }
  console.log(adjList);
};

var cloneGraph = function (node) {
  const visited = new Map();
  const dfs = function (oldRoot) {
    if (!oldRoot) return oldRoot;
    // console.log(oldRoot.val, ":", visited.has(oldRoot.val));
    if (visited.has(oldRoot.val)) return visited.get(oldRoot.val);
    const newRoot = new Node(oldRoot.val);
    visited.set(oldRoot.val, newRoot);
    for (const neighbor of oldRoot.neighbors) newRoot.neighbors.push(dfs(neighbor));
    return newRoot;
  };
  return dfs(node);
};

const adjList = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3],
];
const node = buildGraph(adjList);
// console.log(node);
// printGraph(node);
console.log(printGraph(cloneGraph(node)));
