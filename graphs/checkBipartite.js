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

var isBipartite = function (root) {
  if (!root) return true;
  let queue = [root, null];
  const color = new Map([[root.val, 0]]);
  const visited = new Set([root.val]);
  let childColor = 1;
  while (queue.length) {
    const curr = queue.shift();
    if (!curr) {
      childColor = (childColor + 1) % 2;
      continue;
    }
    for (const child of curr.neighbors) {
      if (visited.has(child.val)) {
        if (color.get(child.val) != childColor) return false;
        continue;
      }
      queue.push(child);
      color.set(child.val, childColor);
      visited.add(child.val);
    }
    queue.push(null);
  }
  return true;
};

const adjList = [
  [2, 3],
  [1, 4],
  [1, 4],
  [2, 3],
];
const node = buildGraph(adjList);
console.log(isBipartite(node));
