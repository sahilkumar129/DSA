// Heuristic function
var hamiltonDistance = function (start, end) {
  return Math.pow(Math.pow(end[1] - start[1], 2) + Math.pow(end[0], start[0], 2), 0.5);
};

// Position node
var Node = function (position, parent, target, maze) {
  this.position = position;
  this.parent = parent?.position;
  this.g = parent ? parent.g + maze[position[0]][position[1]] : 0;
  this.h = hamiltonDistance(position, target);
  this.f = this.g + this.h;
};

var createPath = function (map, target) {
  let path = [target];
  let curr = map.get(target.join(":"));
  while (curr.parent) {
    path.push(curr.parent);
    curr = map.get(curr.parent.join(":"));
  }
  for (let i = 0, j = path.length; i < j; i++, j--) {
    let temp = path[i];
    path[i] = path[j];
    path[j] = temp;
  }
  return path;
};

// A*
var astar = function (maze, start, end) {
  // Initialize
  const map = new Map(),
    open = new Map(),
    closed = new Set();
  open.set([0, 0].join(":"), new Node(start, null, end, maze));
  // Start BFS
  while (open.size) {
    let currNode = open.values().next().value;
    // Find the next least distance node with least g(x) value
    // This can further be optimized by using a MinHeap
    for (const value of open.values()) {
      if (value.f < currNode.f) currNode = value;
    }
    const currPos = currNode.position.join(":");
    map.set(currPos, open.get(currPos));
    if (currPos == end.join(":")) return createPath(map, end);
    open.delete(currPos);
    closed.add(currPos);

    // Get all children of current node
    for (const neighbor of [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ]) {
      const neighborPosition = [
        currNode.position[0] + neighbor[0],
        currNode.position[1] + neighbor[1],
      ];
      if (
        neighborPosition[0] < 0 ||
        neighborPosition[1] < 0 ||
        neighborPosition[0] >= maze.length ||
        neighborPosition[1] >= maze[0].length ||
        closed.has(neighborPosition.join(":"))
      )
        continue;

      const newValue = new Node(neighborPosition, currNode, end, maze);
      if (open.has(neighborPosition.join(":"))) {
        const oldValue = open.get(neighborPosition.join(":"));
        if (oldValue.g <= newValue.g) continue;
      }
      open.set(neighborPosition.join(":"), newValue);
    }
  }
  return [];
};

const maze = [
    [1, 1, 2, 1],
    [1, 1, 3, 1],
    [1, 5, 1, 3],
    [2, 1, 1, 1],
  ],
  start = [0, 0],
  end = [3, 3];

console.log(astar(maze, start, end));
