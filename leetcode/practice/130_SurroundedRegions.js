/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const m = board.length,
    n = board[0].length;
  for (let i = 0; i < m; i++) {
    fillBoard(i, 0, board);
    fillBoard(i, n - 1, board);
  }
  for (let j = 0; j < n; j++) {
    fillBoard(0, j, board);
    fillBoard(m - 1, j, board);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = board[i][j] == "Y" ? "O" : "X";
    }
  }
};

var fillBoard = function (i, j, board) {
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] != "O") return;
  board[i][j] = "Y";
  fillBoard(i + 1, j, board);
  fillBoard(i - 1, j, board);
  fillBoard(i, j + 1, board);
  fillBoard(i, j - 1, board);
};

const board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];
console.log(solve(board));
