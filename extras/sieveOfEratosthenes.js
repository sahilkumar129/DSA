var getPrimes = function (n) {
  const primes = new Array(n + 1).fill(0);
  for (let j = 2; j <= Math.floor(n / 2); j++) {
    for (let k = 2; j * k <= n; k++) primes[j * k] = j;
  }
  return primes.map((p, i) => (p == 0 ? i : 0)).filter((p) => p);
};

const n = 100;
console.log(getPrimes(n));
