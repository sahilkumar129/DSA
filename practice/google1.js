// A pattern is defined as 3 exactly same tiles, or 3 tiles with the same color and consecutive digits.

// (red, 5) (red, 5) (red, 5) is a pattern
// (black, 1), (black 2), (black 3) is a pattern
// (black, 8), (black, 9), (black, 1) is not a pattern
// (red, 2), (black, 2), (green, 2) is not a pattern
// (red, 7), (black, 8), (green, 9) is not a pattern

// A hand is 12 tiles. A winning hand is 12 tiles that can make 4 patterns by using each tile exactly once.

// R,1 R,1 R,1  G,2 G,4

// R1 - 2
// R2 - 3
// R3 - 3
// R4 - 1

// R1 - 3
// R2 - 1
// R3 - 1
// R4 - 1

// R: [1 1 2 2 3 3 3]
// G: [1:7 ,2:1, 3:1]
// B: [1,1,1]

// [[0,1],[1,1],[2,1]]
// where 0=green, 1=red, 2=black
var checkIfWinningHand = function (hand) {
  const tiles = Array.from(Array(3), () => []);
  for (const tile of hand) tiles[tile[0]].push(tile[1]);
  let patterns = 0;
  for (const colorTiles of tiles) patterns += getPatternCount(colorTiles.sort());
  console.log(patterns);
  return patterns === 4;
};

var getPatternCount = function (tiles) {
  let patterns = 0,
    i = 0,
    visited = new Set();
  while (i < tiles.length) {
    if (visited.has(tiles[i])) {
      i++;
      continue;
    }
    if (isTripplet(tiles, i, visited)) patterns++;
    else if (isSequence(tiles, i, visited)) patterns++;
    i++;
  }
  return patterns;
};

var isTripplet = function (tiles, i, visited) {
  let count = 1,
    included = [i];
  for (let j = i + 1; j < tiles.length; j++) {
    if (visited.has(j)) continue;
    else if (tiles[i] !== tiles[j]) return false;
    included.push(j);
    count++;
    if (count === 3) {
      for (const k of included) visited.add(k);
      return true;
    }
  }
  return false;
};

var isSequence = function (tiles, i, visited) {
  let count = 1,
    included = [i],
    prev = tiles[i];
  for (let j = i + 1; j < tiles.length; j++) {
    if (visited.has(j) || tiles[j] === prev) continue;
    if (tiles[j] === prev + 1) {
      included.push(j);
      count++;
      prev = tiles[j];
      if (count === 3) {
        for (const k of included) visited.add(k);
        return true;
      }
    }
  }
  return false;
};

const hand = [
  [1, 1],
  [1, 1],
  [1, 2],
  [2, 1],
  [2, 2],
  [2, 3],
  [1, 2],
  [1, 2],
  [1, 3],
  [1, 3],
  [1, 3],
  [1, 4],
];
console.log(checkIfWinningHand(hand));

// // [[G,1],[R,1]]
// var checkIfWinningHand = function(hand) {
//   const red = [], green = [], black = [];
//   for(const tile of hand) {
//     if(tile[0] === 'G')
//        green.push(tile[1]);
//     if(tile[0] === 'B')
//        black.push(tile[1]);
//     if(tile[0] === 'R')
//        red.push(tile[1]);
//     green.sort();
//     black.sort();
//     red.sort();
//     let patterns=0,prev=green[0],count=1;
//     for(let i=1;i<green.length;) {
//       if(green[i]===prev)
//         count++;
//       if(count === 3) {
//         patterns++;
//         i++;
//         count=1
//         prev=green[i];
//       } else if(green[i] !== prev && checkSequence(green,i, prev)){
//           pattern++;
//           i = findNextI();
//           prev = green[i];
//           count = 1;
//       } else i++;
//     }

//     return patterns === 4;
//   }
// }
