var wIntervals = function (N, items) {
  let maxScore = 0;
  const dfs = function (str) {
    if (str.length === N) {
      maxScore = Math.max(maxScore, calculateScore(str, items));
      return;
    }
    dfs(`${str}0`);
    dfs(`${str}1`);
  };
  dfs("");
  return maxScore;
};

var calculateScore = function (string, items) {
  let score = 0;
  items.forEach((item) => {
    if (parseInt(string.slice(item[0] - 1, item[1]))) {
      score += item[2];
    }
  });
  return score;
};

console.log(
  wIntervals(3, [
    [1, 3, 100],
    [1, 1, -10],
    [2, 2, -20],
    [3, 3, -30],
  ])
);
