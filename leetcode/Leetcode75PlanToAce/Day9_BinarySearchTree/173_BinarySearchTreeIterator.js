/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const buildTree = require("../../blind75/trees/buildTree");

/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.iter = inorder(root);
  this.currIndex = 0;
};

var inorder = function (root) {
  if (!root) return [];
  const left = inorder(root.left);
  const right = inorder(root.right);
  return [...left, root.val, ...right];
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.iter[this.currIndex++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.currIndex < this.iter.length ? true : false;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const bSTIterator = new BSTIterator(buildTree([7, 3, 15, null, null, 9, 20], null, 0));
console.log(bSTIterator.next()); // return 3
console.log(bSTIterator.next()); // return 7
console.log(bSTIterator.hasNext()); // return True
console.log(bSTIterator.next()); // return 9
console.log(bSTIterator.hasNext()); // return True
console.log(bSTIterator.next()); // return 15
console.log(bSTIterator.hasNext()); // return True
console.log(bSTIterator.next()); // return 20
console.log(bSTIterator.hasNext()); // return False
