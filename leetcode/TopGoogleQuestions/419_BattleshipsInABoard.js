/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let ans = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == ".") continue;
      ans++;
      removeBattleship(board, i, j);
    }
  }
  return ans;
};

var removeBattleship = function (board, i, j) {
  board[i][j] = ".";
  if (i < board.length - 1 && board[i + 1][j] === "X") {
    i++;
    while (i < board.length && board[i][j] == "X") board[i++][j] = ".";
  } else if (j < board[i].length - 1 && board[i][j + 1] === "X") {
    j++;
    while (j < board[i].length && board[i][j] == "X") board[i][j++] = ".";
  }
};

const board = [
  ["X", ".", ".", "X"],
  [".", ".", ".", "X"],
  [".", ".", ".", "X"],
];
console.log(countBattleships(board));
