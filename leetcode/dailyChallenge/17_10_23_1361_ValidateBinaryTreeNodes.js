/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
 
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
   let visited = new Set();
   let root = -1;
   for(let i=0; i<n; i++) {
       visited.add(leftChild[i]);
       visited.add(rightChild[i]);
   }
   for(let i=0; i<n; i++) {
       if(!visited.has(i)) {
           if(root != -1) return false;
           root = i;
       }
   }

    visited = new Set([root]);
    let i=0;
    const next = [root];
    while(i < next.length) {
        const curr = next[i]
        if(leftChild[curr] != -1) {
            if(visited.has(leftChild[curr]))
                    return false;
            visited.add(leftChild[curr]);
            next.push(leftChild[curr]);
        }
            if(rightChild[curr] != -1) {
            if(visited.has(rightChild[curr]))
                    return false;
            visited.add(rightChild[curr]);
            next.push(rightChild[curr]);
        }
        i++;
    }
    for(let i=0; i<n; i++) {
       if(!visited.has(i))
           return false;
   }
    return true;
}

const n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1];
console.log(validateBinaryTreeNodes(n, leftChild, rightChild));

// var validateBinaryTreeNodes2 = function(n, leftChild, rightChild) {
//    const isNotRepeated = checkRepetition(n, leftChild, rightChild);
//    const allConnected = checkIfAllConnected(n, leftChild, rightChild);
//    console.log(isNotRepeated, allConnected);
//    return isNotRepeated && allConnected
// };

// var checkRepetition = function(n, leftChild, rightChild) {
//     let visited = new Set();
//    for(let j=0; j<n; j++) {
//        if(visited.has(j)) continue;
//         let i=0;
//         const next = [j];
//         while(i < next.length) {
//             const curr = next[i]
//             if(leftChild[curr] != -1) {
//                 if(visited.has(leftChild[curr]))
//                         return false;
//                 visited.add(leftChild[curr]);
//                 next.push(leftChild[curr]);
//             }
//                 if(rightChild[curr] != -1) {
//                 if(visited.has(rightChild[curr]))
//                         return false;
//                 visited.add(rightChild[curr]);
//                 next.push(rightChild[curr]);
//             }
//             i++;
//         }
//    }
//     return true;
// }

// var checkIfAllConnected = function(n, leftChild, rightChild) {
//       const edges = createEdges(leftChild, rightChild);
//     const unionFind = new UnionFind(n);
//     edges.forEach(edge => {
//         unionFind.union(edge);
//     })
//     console.log(edges, unionFind);
//     let parent = unionFind.parents[0];
//     for(let i=1; i<n; i++) {
//         if(unionFind.parents[i] != parent)
//             return false;
//     }
//     return true;
// }


// var createEdges = function(left, right) {
//     const edges = [];
//     for(let i=0; i<left.length; i++) {
//         if(left[i] != -1)
//             edges.push([i,left[i]]);
//         if(right[i] != -1)
//             edges.push([i,right[i]]);
//     }
//     return edges;
// }

// var UnionFind = function(n) {
//     this.parents = [];
//     this.ranks = [];

//     for(let i=0; i<n; i++) {
//         this.parents.push(i);
//         this.ranks.push(1);
//     }
// }

// UnionFind.prototype.union = function(edge) {
//     const [p1, p2] = [this.find(edge[0]), this.find(edge[1])];
//     if(p1 == p2) return;
//     if(this.ranks[p1] > this.ranks[p2]) {
//         this.parents[p2] = p1;
//         this.ranks[p1] += this.ranks[p2];
//     } else {
//         this.parents[p1] = p2;
//         this.ranks[p2] += this.ranks[p1];
//     }
// }

// UnionFind.prototype.find = function(v) {
//     while(v != this.parents[this.parents[v]])
//         v = this.parents[v];
//     return v;
// }
