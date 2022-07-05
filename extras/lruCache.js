// LRU Cache

var DllNode = function (key, value) {
  this.key = key;
  this.val = value;
  this.next = null;
  this.prev = null;
};

var DLL = function () {
  this.head = null;
  this.tail = null;
};

DLL.prototype.add = function (key, value) {
  const dllNode = new DllNode(key, value);
  if (!this.head) this.head = this.tail = dllNode;
  else {
    const next = this.head;
    this.head = dllNode;
    this.head.next = next;
    next.prev = this.head;
  }
  return this.head;
};

DLL.prototype.remove = function (root) {
  if (!root) return;
  const next = root.next;
  const prev = root.prev;
  if (!next && !prev) this.head = this.tail = null;
  else if (next && !prev) {
    this.head = next;
    this.head.prev = null;
  } else if (!next && prev) {
    this.tail = prev;
    this.tail.next = null;
  } else {
    prev.next = next;
    next.prev = prev;
  }
};

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  this.cacheDLL = new DLL();
};

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const root = this.cache.get(key);
    this.cacheDLL.remove(root);
    this.cache.set(key, this.cacheDLL.add(key, root.val));
    return root.val;
  } else return -1;
};

LRUCache.prototype.set = function (key, value) {
  if (this.cache.size < this.capacity) {
    this.cache.set(key, this.cacheDLL.add(key, value));
  } else {
    // this.cache.delete(key);
    this.cacheDLL.remove(this.cacheDLL.tail);
    this.cache.set(key, this.cacheDLL.add(key, value));
  }
  return value;
};

LRUCache.prototype.printCache = function () {
  let root = this.cacheDLL.head;
  while (root) {
    console.log(`${root.key}: ${root.val}`);
    root = root.next;
  }
};

const lru = new LRUCache(3);
console.log(lru.get(1));
console.log(lru.printCache());
console.log(lru.set(1, 1));
console.log(lru.printCache());
console.log(lru.get(1));
console.log(lru.printCache());
console.log(lru.set(2, 2));
console.log(lru.printCache());
console.log(lru.get(1));
console.log(lru.printCache());
console.log(lru.set(3, 3));
console.log(lru.printCache());
console.log(lru.get(1));
console.log(lru.printCache());
console.log(lru.set(4, 4));
console.log(lru.printCache());
console.log(lru.get(1));
console.log(lru.printCache());
