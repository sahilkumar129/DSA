var sushi = function (dishes) {
  let ans = 0,
    nonZero = dishes.reduce((a, b) => (b != 0 ? a + 1 : a), 0);
  if (!nonZero) return 0;
  const numOfOperations = dishes.length / nonZero;
  for (let i = 0; i < dishes.length; i++) {
    if (dishes[i]) {
      dishes[i]--;
      ans += sushi(dishes) + numOfOperations;
      dishes[i]++;
    }
  }
  return ans;
};

console.log(sushi([1, 2, 1]));

1 + 5.5 + 3 + 3 + 3;
15.5;

1, 2;
0, 2;
0, 1;
0, 0;
1 + 2 + 2;

1, 2;
1, 1;
1, 0;
0, 0;
1 + 1 + 2;

4.5;
