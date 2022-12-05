// import { stringsToNumbers } from '../helpers/helpers';

const fs = require("fs");

const DAY_NUMBER = "INSERT_DAY_HERE";

const sampleData = fs
  .readFileSync(`./sample-data/day${DAY_NUMBER}.txt`, "utf-8")
  .split("\n");
const realData = fs
  .readFileSync(`./real-data/day${DAY_NUMBER}.txt`, "utf-8")
  .split("\n");

// Part One -

const partOne = (data) => {};

// Part Two -

const partTwo = (data) => {};

console.log(`solution for part 1 with sample data: ${partOne(sampleData)}`);
// console.log(`solution for part 1 with real data: ${partOne(realData)}`);
// console.log(`solution for part 2 with sample data: ${partTwo(sampleData)}`);
// console.log(`solution for part 2 with real data: ${partTwo(realData)}`);
