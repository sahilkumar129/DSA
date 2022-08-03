var MyCalendar = function () {
  this.events = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  for (const [s1, e1] of this.events) if (isOverlapping(s1, e1, start, end)) return false;
  this.events.push([start, end]);
  return true;
};

var isOverlapping = function (s1, e1, s2, e2) {
  if (e1 <= s2 || s1 >= e2) return false;
  return true;
};

const myCalendar = new MyCalendar();
myCalendar.book(20, 29);
console.log(myCalendar.events);
myCalendar.book(13, 22);
console.log(myCalendar.events);
myCalendar.book(44, 50);
console.log(myCalendar.events);
myCalendar.book(1, 7);
console.log(myCalendar.events);
myCalendar.book(2, 10);
console.log(myCalendar.events);
myCalendar.book(14, 20);
console.log(myCalendar.events);
myCalendar.book(19, 25);
console.log(myCalendar.events);
myCalendar.book(36, 42);
console.log(myCalendar.events);
myCalendar.book(45, 50);
console.log(myCalendar.events);
myCalendar.book(47, 50);
console.log(myCalendar.events);
myCalendar.book(39, 45);
console.log(myCalendar.events);
myCalendar.book(44, 50);
console.log(myCalendar.events);
myCalendar.book(16, 25);
console.log(myCalendar.events);
myCalendar.book(45, 50);
console.log(myCalendar.events);
myCalendar.book(45, 50);
console.log(myCalendar.events);
myCalendar.book(12, 20);
console.log(myCalendar.events);
myCalendar.book(21, 29);
console.log(myCalendar.events);
myCalendar.book(11, 20);
console.log(myCalendar.events);
myCalendar.book(12, 17);
console.log(myCalendar.events);
myCalendar.book(34, 40);
console.log(myCalendar.events);
myCalendar.book(10, 18);
console.log(myCalendar.events);
myCalendar.book(38, 44);
console.log(myCalendar.events);
myCalendar.book(23, 32);
console.log(myCalendar.events);
myCalendar.book(38, 44);
console.log(myCalendar.events);
myCalendar.book(15, 20);
console.log(myCalendar.events);
myCalendar.book(27, 33);
console.log(myCalendar.events);
myCalendar.book(34, 42);
console.log(myCalendar.events);
myCalendar.book(44, 50);
console.log(myCalendar.events);
myCalendar.book(35, 40);
console.log(myCalendar.events);
myCalendar.book(24, 31);
console.log(myCalendar.events);
