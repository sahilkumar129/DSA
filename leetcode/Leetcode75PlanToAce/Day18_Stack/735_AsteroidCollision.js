/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const result = [];
  for (const asteroid of asteroids) {
    if (asteroid >= 0) result.push(asteroid);
    else {
      let include = true;
      while (result.length) {
        const top = result[result.length - 1];
        if (top < 0) {
          result.push(asteroid);
          break;
        } else {
          if (top <= Math.abs(asteroid)) result.pop();
          if (top === Math.abs(asteroid)) include = false;
          if (top >= Math.abs(asteroid)) break;
        }
      }
      if (include && result.length === 0) result.push(asteroid);
    }
  }
  return result;
};

const asteroids = [-5, 10, 8, -12, 24, -10, 36, -20];
console.log(asteroidCollision(asteroids));
