/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const buildTree = require("../blind75/trees/buildTree");

/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
  if (!root) return 0;
  let ans = { ans: 0 };
  helper(root, distance, ans);
  return ans.ans;
};

var helper = function (root, distance, ans) {
  if (!root) return new Map();
  if (!root.left && !root.right) {
    return new Map([[1, 1]]);
  }
  const left = helper(root.left, distance, ans);
  const right = helper(root.right, distance, ans);

  const returnMap = updateAns(left, right, distance, ans);
  // console.log(root.val, left, right, ans.ans);
  return returnMap;
};

var updateAns = function (left, right, distance, ans) {
  const returnMap = new Map();
  left.forEach((val, key) => {
    returnMap.set(key + 1, val);
    right.forEach((val2, key2) => {
      if (key + key2 <= distance) {
        ans.ans += val * val2;
      }
    });
  });

  right.forEach((val, key) => {
    returnMap.set(key + 1, (returnMap.get(key + 1) ?? 0) + val);
  });

  return returnMap;
};

const arr = [78, 15, 81, 73, 98, 36, null, 30, null, 63, 32],
  distance = 6;
const root = buildTree(arr, null, 0);
console.log(countPairs(root, distance));
