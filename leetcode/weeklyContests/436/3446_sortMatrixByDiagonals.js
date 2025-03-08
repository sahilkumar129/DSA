/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
    let  currArr;

    // get top half diagonals
    for(let j=grid.length-1; j>0; j--) {
       currArr = getDiagonalElements(grid, 0, j);
       currArr.sort((a,b) => a-b);
       setDiagonalElements(currArr, grid, 0, j);
    }

    // get below half diagonals
    for(let i=0; i<grid.length; i++) {
       currArr = getDiagonalElements(grid, i, 0);
       currArr.sort((a,b) => b-a);
       setDiagonalElements(currArr, grid, i, 0);
    }

    return grid;
};

var getDiagonalElements = function(grid, i, j) {
    const N = grid.length, diagonalElements = [];
    while(i<N && j<N) 
        diagonalElements.push(grid[i++][j++]);
    return diagonalElements;
}


var setDiagonalElements = function(currArr, grid, i, j) {
    let k=0;
    const N = grid.length, diagonalElements = [];
    while(i<N && j<N) 
        grid[i++][j++] = currArr[k++];
}

const grid = [[1,7,3],[9,8,2],[4,5,6]];
console.log(sortMatrix(grid));
