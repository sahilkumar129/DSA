/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var placeWordInCrossword = function (board, word) {
  const n = board.length,
    m = board[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] == " " || board[i][j] == word[0]) {
        // check left
        if (compare(board, i, j, 0, -1, word)) return true;
        // check right
        if (compare(board, i, j, 0, 1, word)) return true;
        // check up
        if (compare(board, i, j, -1, 0, word)) return true;
        // check down
        if (compare(board, i, j, 1, 0, word)) return true;
      }
    }
  }
  return false;
};

var compare = function (board, i, j, rowDir, colDir, word) {
  if (
    (rowDir !== 0 && i - rowDir >= 0 && i - rowDir < board.length && board[i - rowDir][j] != "#") ||
    (colDir !== 0 && j - colDir >= 0 && j - colDir < board[0].length && board[i][j - colDir] != "#")
  )
    return false;
  let k = 0;
  while (
    i >= 0 &&
    j >= 0 &&
    i < board.length &&
    j < board[0].length &&
    k < word.length &&
    board[i][j] != "#"
  ) {
    if (board[i][j] == " " || board[i][j] == word[k]) {
      i += rowDir;
      j += colDir;
      k++;
    } else break;
  }
  if (
    k == word.length &&
    (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] == "#")
  )
    return true;
  return false;
};

const board = [[" "], ["#"], ["o"], [" "], ["t"], ["m"], ["o"], [" "], ["#"], [" "]],
  word = "octmor";
console.log(placeWordInCrossword(board, word));

/**
Another approach:
for B in [board, rotatedBoard]:
    for row in B: 
        q = ''.join(row).split('#')
        for str in [word, reversedWord]:
            for s in q:
                if len(s) == len(word) and all(s[i]==w[i] or s[i]==' ' for i in [0,len(word)]):
                    return true;
return false;
 */
