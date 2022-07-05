var dijkstra = function (source, adjList) {
  const distance = createDistanceArray(source, adjList);
  const processed = new Set();
  const pq = new Heap((a, b) => a.weight - b.weight);
  pq.push({ node: source, weight: 0 });
  while (pq.size()) {
    const curr = pq.pop();
    if (processed.has(curr.node)) continue;
    processed.add(curr.node);
    for (const neighbor of adjList[curr.node - 1]) {
      if (distance[neighbor.node] <= distance[curr.node] + neighbor.weight) continue;
      distance[neighbor.node] = distance[curr.node] + neighbor.weight;
      pq.push({ node: neighbor.node, weight: distance[neighbor.node] });
    }
  }
  return distance;
};

var createDistanceArray = function (source, adjList) {
  const distance = new Map();
  for (let i = 0; i < adjList.length; i++) {
    if (i + 1 == source) distance[source] = 0;
    else distance[i + 1] = Number.MAX_VALUE;
  }
  return distance;
};

var swap = function (arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

var Heap = function (cmp) {
  this.elements = [];
  this.cmp = cmp;
};

Heap.prototype.size = function () {
  return this.elements.length;
};

Heap.prototype.push = function (element) {
  this.elements.push(element);
  this.pushHeapify();
};

Heap.prototype.pushHeapify = function () {
  let child = this.size() - 1,
    parent;
  while (child > 0) {
    parent = parseInt((child - 1) / 2);
    if (this.cmp(this.elements[child], this.elements[parent]) >= 0) return;
    swap(this.elements, child, parent);
    child = parent;
  }
};

Heap.prototype.pop = function () {
  if (this.size() == 0) return;
  let valueToBeReturned = (value = this.elements.pop());
  if (this.size()) {
    valueToBeReturned = this.elements[0];
    this.elements[0] = value;
  }
  this.popHeapify();
  return valueToBeReturned;
};

Heap.prototype.popHeapify = function () {
  let parent = 0,
    left,
    right,
    next;
  while (parent < this.size()) {
    left = 2 * parent + 1;
    right = 2 * parent + 1;
    if (left < this.size() && this.cmp(this.elements[parent], this.elements[left])) next = left;
    if (right < this.size() && this.cmp(this.elements[next], this.elements[right])) next = right;
    if (next == parent) return;
    parent = next;
  }
};

const adjList = [
  [
    { node: 2, weight: 5 },
    { node: 4, weight: 9 },
    { node: 5, weight: 1 },
  ],
  [
    { node: 1, weight: 5 },
    { node: 3, weight: 2 },
  ],
  [
    { node: 2, weight: 2 },
    { node: 4, weight: 7 },
  ],
  [
    { node: 1, weight: 9 },
    { node: 3, weight: 7 },
    { node: 5, weight: 2 },
  ],
  [
    { node: 1, weight: 1 },
    { node: 4, weight: 2 },
  ],
];

console.log(dijkstra(1, adjList));
