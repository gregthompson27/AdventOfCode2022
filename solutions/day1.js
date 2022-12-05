// import { stringsToNumbers } from '../helpers/helpers';
export const stringsToNumbers = (arr) => arr.map((str) => Number(str));

const fs = require("fs");

const DAY_NUMBER = 1;

const sampleData = fs
  .readFileSync(`./sample-data/day${DAY_NUMBER}.txt`, "utf-8")
  .split("\n\n")
  .map((c) => c.split("\n"))
  .map(stringsToNumbers);
const realData = fs
  .readFileSync(`./real-data/day${DAY_NUMBER}.txt`, "utf-8")
  .split("\n\n")
  .map((c) => c.split("\n"))
  .map(stringsToNumbers);

console.log(sampleData);
// Part One -

const partOne = (data) => {
  return data.map((cals) => {
    return cals.reduce((p, c) => p + c);
  });
};

// Part Two -

const partTwo = (data) => {
  const totals = partOne(data).sort((a, b) => b - a);
  return totals[0] + totals[1] + totals[2];
};

console.log(
  `solution for part 1 with sample data: ${Math.max(...partOne(sampleData))}`
);
console.log(
  `solution for part 1 with real data: ${Math.max(...partOne(realData))}`
);
console.log(`solution for part 2 with sample data: ${partTwo(sampleData)}`);
console.log(`solution for part 2 with real data: ${partTwo(realData)}`);
