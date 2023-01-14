/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  const uf = new UnionFind();
  for (let i = 0; i < s1.length; i++) uf.union(s1[i].charCodeAt(0) - 97, s2[i].charCodeAt(0) - 97);
  let ans = "";
  for (const c of baseStr) ans += String.fromCharCode(uf.find(c.charCodeAt(0) - 97) + 97);
  return ans;
};

var UnionFind = function () {
  this.parents = [];
  for (let i = 0; i < 26; i++) this.parents.push(i);
};

UnionFind.prototype.union = function (a, b) {
  const [parent1, parent2] = [this.find(a), this.find(b)];
  if (parent1 === parent2) return;
  if (parent1 < parent2) this.parents[parent2] = parent1;
  else this.parents[parent1] = parent2;
};

UnionFind.prototype.find = function (a) {
  let parent = this.parents[a];
  while (parent !== this.parents[parent]) parent = this.parents[parent];
  return parent;
};

const s1 = "hello",
  s2 = "world",
  baseStr = "hold";
console.log(smallestEquivalentString(s1, s2, baseStr));
