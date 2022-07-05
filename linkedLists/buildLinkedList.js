function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var buildLL = function (arr) {
  let head = null,
    curr = null;
  arr.forEach((a) => {
    if (!head) {
      head = new ListNode(a);
      curr = head;
    } else {
      curr.next = new ListNode(a);
      curr = curr.next;
    }
  });
  return head;
};

var printLL = function (head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
};

module.exports = { buildLL, printLL };
