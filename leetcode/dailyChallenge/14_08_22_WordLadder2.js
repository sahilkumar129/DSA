var findLadders = function (beginWord, endWord, wordList) {
  let idxEndWord = wordList.indexOf(endWord);
  if (idxEndWord < 0) return []; // Target is not in list

  // Create graph
  let nodes = wordList
    .concat(beginWord)
    .map((word) => ({ word, neighbors: new Set(), comeFrom: [], visited: false, paths: null }));
  let edges = new Map();
  for (let n = 0; n < nodes.length; n++) {
    let node = nodes[n];
    let word = node.word;
    for (let i = 0; i < word.length; i++) {
      let edge = word.slice(0, i) + "*" + word.slice(i + 1); // Turn one character into wild-card
      let neighbors = edges.get(edge);
      if (neighbors === undefined) {
        edges.set(edge, [node]);
      } else {
        for (let k = 0; k < neighbors.length; k++) {
          let neighbor = neighbors[k];
          node.neighbors.add(neighbor);
          neighbor.neighbors.add(node);
        }
        neighbors.push(node);
      }
    }
  }

  // BFS
  let target = nodes[idxEndWord];
  let source = nodes[nodes.length - 1];
  let frontier = [source];
  while (frontier.length && !target.comeFrom.length) {
    for (let i = 0; i < frontier.length; i++) frontier[i].visited = true;
    let newFrontier = [];
    for (let i = 0; i < frontier.length; i++) {
      let node = frontier[i];
      for (let neighbor of node.neighbors) {
        if (neighbor.visited) continue;
        if (!neighbor.comeFrom.length) newFrontier.push(neighbor);
        neighbor.comeFrom.push(node);
      }
    }
    frontier = newFrontier;
  }

  if (!target.comeFrom.length) return []; // Target is unreachable

  // Build the solution paths via DFS through the back-references made during the BFS
  source.paths = [[source.word]];
  return (function pathsTo(node) {
    if (node.paths) return node.paths;
    let result = [].concat(...node.comeFrom.map(pathsTo)); // recurse & flatMap
    for (let i = 0; i < result.length; i++) result[i] = result[i].concat(node.word);
    return (node.paths = result); // memoization
  })(target);
};

const beginWord = "hit",
  endWord = "cog",
  wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(findLadders(beginWord, endWord, wordList));
