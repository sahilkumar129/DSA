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
var serializeHelper = function (root, ans, i) {
  if (!root) return;
  ans[i] = root.val;
  serializeHelper(root.left, ans, 2 * i + 1);
  serializeHelper(root.right, ans, 2 * i + 2);
};

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let maxDepth = getMaxDepth(root);
  const ans = [];
  while (maxDepth--) ans.push(null);
  serializeHelper(root, ans, 0);
  return ans.map((a) => `${a}`).join(",");
};

/**
 * helper function for deserializing
 */
var deserializeHelper = function (data, root, i) {
  if (i < data.length) {
    root = new TreeNode(data[i]);
    root.left = deserializeHelper(data, root.left, 2 * i + 1);
    root.right = deserializeHelper(data, root.right, 2 * i + 2);
  }
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
  const root = deserializeHelper(data, null, 0);
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const data = "1,2,3,null,null,4,5";
// console.log(deserialize(data));
console.log(serialize(deserialize(data)));
