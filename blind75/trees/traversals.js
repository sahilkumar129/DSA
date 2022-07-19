const buildTree = require("./buildTree");

var preorderRec = function (root) {
  if (!root) return;
  console.log(root.val);
  preorderRec(root.left);
  preorderRec(root.right);
};

var preorderIter = function (root) {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    let curr = stack.pop();
    while (curr) {
      console.log(curr.val);
      if (curr.right) stack.push(curr.right);
      curr = curr.left;
    }
  }
};

var inorderRec = function (root) {
  if (!root) return;
  inorderRec(root.left);
  console.log(root.val);
  inorderRec(root.right);
};

var inorderIter = function (root) {
  if (!root) return;
  const stack = [];
  let curr = root;
  while (stack.length || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      console.log(curr.val);
      curr = curr.right;
    }
  }
};

var postorderRec = function (root) {
  if (!root) return;
  postorderRec(root.left);
  postorderRec(root.right);
  console.log(root.val);
};

var postorderIter = function (root) {
  if (!root) return;
  let stack = [],
    curr = root,
    pre = null;
  while (stack.length || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack[stack.length - 1];
      if (!curr.right || curr.right == pre) {
        console.log(curr.val);
        stack.pop();
        pre = curr;
        curr = null;
      } else curr = curr.right;
    }
  }
};

const arr = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
const root = buildTree(arr, null, 0);
// preorderRec(root);
// preorderIter(root);
// inorderRec(root);
// inorderIter(root);
// postorderRec(root);
postorderIter(root);

/*
						6
			2							8
	0				4			7				9
				3		5
*/
