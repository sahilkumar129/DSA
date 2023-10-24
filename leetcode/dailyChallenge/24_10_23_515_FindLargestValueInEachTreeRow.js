/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const buildTree = require("../blind75/trees/buildTree");

var largestValues = function(root) {
   const ans = [];
   if(!root) return ans;
   const queue = [root];
   let i=0;
   while(i<queue.length) {
       let j=queue.length, rowAns=queue[i].val;
       while(i<j) {
           rowAns = Math.max(rowAns, queue[i].val);
           if(queue[i].left)
            queue.push(queue[i].left);
           if(queue[i].right)
            queue.push(queue[i].right); 
           i++; 
       }
       ans.push(rowAns);
   }
   return ans;
};

const arr = [1,3,2,5,3,null,9];
const root = buildTree(arr, null, 0);
console.log(largestValues(root));
