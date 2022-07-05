var topologicalSort = function (n, adjList) {
  let path = new Map(); // false: in current path, true: completed
  let ans = [];
  const dfs = function (node) {
    if (path.has(node)) return path.get(node);
    path.set(node, false);
    for (const child of adjList.get(node)) {
      if (!dfs(child)) return false;
    }
    path.set(node, true);
    ans.push(node);
    return true;
  };
  for (let i = 1; i <= n; i++) {
    if (path.has(i)) continue;
    if (!dfs(i)) {
      console.log("Cycle detected in the graph");
      return [];
    }
  }

  ans = reverse(ans);
  return ans;
};

var reverse = function (arr) {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

const n = 6,
  adjList = new Map([
    [1, [2]],
    [2, [3]],
    [3, [6]],
    [4, [1, 5]],
    [5, [2, 3]],
    [6, []],
  ]);

console.log(topologicalSort(n, adjList));
