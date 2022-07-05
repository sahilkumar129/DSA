/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Returns max depth of the tree
 *
 * @param {TreeNode} root
 * @return {number}
 */
var getMaxDepth = function (root) {
  if (!root) return 0;
  return Math.max(getMaxDepth(root.left), getMaxDepth(root.right)) + 1;
};

/**
 * helper function for serializing
 */
var serializeHelper = function (root, ans) {
  if (!root) {
    ans.push("null");
    return;
  }
  ans.push(`${root.val}`);
  serializeHelper(root.left, ans);
  serializeHelper(root.right, ans);
};

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const ans = [];
  serializeHelper(root, ans);
  return ans.join(",");
};

/**
 * helper function for deserializing
 */
var deserializeHelper = function (data, index) {
  if (index.i >= data.length || data[index.i] == null) {
    index.i++;
    return null;
  }
  const root = new TreeNode(data[index.i++]);
  root.left = deserializeHelper(data, index);
  root.right = deserializeHelper(data, index);
  return root;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  data = data.split(",").map((d) => (d == "null" ? null : parseInt(d)));
  const index = { i: 0 };
  const root = deserializeHelper(data, index);
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const data = "1,2,null,null,3,4,null,null,5,null,null";
// console.log(deserialize(data));
console.log(serialize(deserialize(data)));
