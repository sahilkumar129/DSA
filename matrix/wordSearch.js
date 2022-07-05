/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!board?.length || !board[0].length) return false;
  const rows = board.length,
    cols = board[0].length,
    path = new Set();

  const dfs = function (i, j, w) {
    if (w == word.length) return true;
    if (i < 0 || j < 0 || i >= rows || j >= cols || word[w] != board[i][j] || path.has(`${i}-${j}`))
      return false;

    path.add(`${i}-${j}`);
    res =
      dfs(i - 1, j, w + 1) || dfs(i + 1, j, w + 1) || dfs(i, j - 1, w + 1) || dfs(i, j + 1, w + 1);
    path.delete(`${i}-${j}`);
    return res;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;
};

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "SEEN";
console.log(exist(board, word));
