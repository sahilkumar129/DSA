const Queue = require("queue-fifo");
/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
  if (source === target) return 0;
  const queue = new Queue(),
    busMap = new Map(),
    visited = new Set();
  for (let i = 0; i < routes.length; i++)
    for (const stop of routes[i]) busMap.set(stop, [...(busMap.get(stop) ?? []), i]);
  for (const bus of busMap.get(source)) queue.enqueue([bus, 1]);
  while (queue.size()) {
    let size = queue.size();
    while (size--) {
      const [bus, count] = queue.dequeue();
      if (visited.has(bus)) continue;
      if (routes[bus].findIndex((x) => x === target) !== -1) return count;
      visited.add(bus);
      for (const stop of routes[bus])
        for (const bus of busMap.get(stop)) if (!visited.has(bus)) queue.enqueue([bus, count + 1]);
    }
  }
  return -1;
};

const routes = [
    [1, 9, 12, 20, 23, 24, 35, 38],
    [10, 21, 24, 31, 32, 34, 37, 38, 43],
    [10, 19, 28, 37],
    [8],
    [14, 19],
    [11, 17, 23, 31, 41, 43, 44],
    [21, 26, 29, 33],
    [5, 11, 33, 41],
    [4, 5, 8, 9, 24, 44],
  ],
  source = 37,
  target = 28;

console.log(numBusesToDestination(routes, source, target));
