/**
 *
 * @param {*} houses
 * @param {*} facilities
 * @returns
 */
var houseWithClosestFacilities = function (houses, facilities) {
  const houseWeights = [];
  for (let i = 0; i < houses.length; i++) {
    houseWeights[i] = {};
    facilities.forEach((facility) => {
      houseWeights[i] = { ...houseWeights[i], [facility]: -1 };
    });
  }

  const setFacilityDistance = function (facility) {
    let prevMin = houses.length;
    const leftDistance = new Array(houses.length).fill(0),
      rightDistance = new Array(houses.length).fill(0);
    for (let i = 0; i < houses.length; i++) {
      leftDistance[i] = houses[i][facility] ? 0 : prevMin + 1;
      prevMin = leftDistance[i];
    }
    prevMin = houses.length;
    for (let i = houses.length - 1; i >= 0; i--) {
      rightDistance[i] = houses[i][facility] ? 0 : prevMin + 1;
      prevMin = rightDistance[i];
    }
    for (let i = 0; i < houses.length; i++)
      houseWeights[i][facility] = Math.min(leftDistance[i], rightDistance[i]);
  };

  for (let i = 0; i < facilities.length; i++) setFacilityDistance(facilities[i]);
  console.log(houseWeights);
  return findBestHouse(houseWeights);
};

var findBestHouse = function (houseWeights) {
  let house = { index: -1, sum: Number.MAX_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER };
  for (let i = 0; i < houseWeights.length; i++) {
    let currSum = 0,
      currMax = 0;
    for (const facility of Object.entries(houseWeights[i])) {
      currSum += facility[1];
      currMax = Math.max(currMax, facility[1]);
    }
    if (currSum < house.sum) house = { index: i, sum: currSum, max: currMax };
    else if (currSum == house.sum && currMax < house.max)
      house = { index: i, sum: currSum, max: currMax };
  }
  return house.index;
};

const houses = [
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: true,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: true,
  },
];

const facilities = ["gym", "school", "store"];
console.log(`House Number: ${houseWithClosestFacilities(houses, facilities)}`);
