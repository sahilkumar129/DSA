function sudokuSolve(board) {
  if (!isValidBoard(board)) return false;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != ".") continue;
      for (let val = 1; val < 10; val++) {
        if (isSafe(board, `${val}`, i, j)) {
          board[i][j] = `${val}`;
          if (sudokuSolve(board)) return true;
          board[i][j] = ".";
        }
      }
      return false;
    }
  }
  return true;
}

// Check if it is safe to place value
function isSafe(board, val, row, col) {
  // Check Row and Col
  for (let i = 0; i < 9; i++) {
    if (board[i][col] == val || board[row][i] == val) return false;
  }

  // Check Sub Board
  const rowStart = Math.floor(row / 3) * 3,
    colStart = Math.floor(col / 3) * 3;

  for (let i = rowStart; i < rowStart + 3; i++) {
    for (let j = colStart; j < colStart + 3; j++) {
      if (board[i][j] == val) return false;
    }
  }
  return true;
}

const board = [
  [".", ".", ".", "7", ".", ".", "3", ".", "1"],
  ["3", ".", ".", "9", ".", ".", ".", ".", "."],
  [".", "4", ".", "3", "1", ".", "2", ".", "."],
  [".", "6", ".", "4", ".", ".", "5", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", "8", ".", "4", "."],
  [".", ".", "6", ".", "2", "1", ".", "5", "."],
  [".", ".", ".", ".", ".", "9", ".", ".", "8"],
  ["8", ".", "5", ".", ".", "4", ".", ".", "."],
];

console.log(sudokuSolve(board));
