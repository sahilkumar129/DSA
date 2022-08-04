/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function (p, q) {
  while (p % 2 == 0 && q % 2 == 0) {
    p = p >> 1;
    q = q >> 1;
  }

  p = p % 2;
  q = q % 2;

  if (q === 0 && p === 1) return 0;
  else if (q === 1 && p === 0) return 2;
  else if (q === 1 && p === 1) return 1;
  else return -1;
};

const p = 3,
  q = 1;
console.log(mirrorReflection(p, q));
