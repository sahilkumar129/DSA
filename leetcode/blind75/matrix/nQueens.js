/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let ans = [];
  const dfs = function (board, row) {
    if (row == board.length) {
      ans.push(board.map((b) => b.join("")));
      return;
    }
    for (let i = 0; i < n; i++) {
      if (board[row][i] == "." && isSafe(board, row, i)) {
        board[row][i] = "Q";
        dfs(board, row + 1);
        board[row][i] = ".";
      }
    }
  };
  dfs(constructBoard(n), 0);
  return ans;
};

var constructBoard = function (n) {
  const board = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) row.push(".");
    board.push(row);
  }
  return board;
};

var isSafe = function (board, row, col) {
  // validate rows and columns
  for (let i = row - 1; i >= 0; i--) {
    if (board[i][col] === "Q") return false;
  }
  // validate diagonals
  for (let i = 1; i <= row; i++) {
    if (
      (row - i >= 0 && col - i >= 0 && board[row - i][col - i] === "Q") ||
      (row - i >= 0 && col + i < board.length && board[row - i][col + i] === "Q")
    )
      return false;
  }
  return true;
};

const n = 4;
console.log(solveNQueens(n));
