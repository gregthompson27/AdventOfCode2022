// import { stringsToNumbers } from '../helpers/helpers';

const fs = require("fs");

const DAY_NUMBER = 2;

const sampleData = fs
  .readFileSync(`./sample-data/day${DAY_NUMBER}.txt`, "utf-8")
  .split("\n");
const realData = fs
  .readFileSync(`./real-data/day${DAY_NUMBER}.txt`, "utf-8")
  .split("\n");

/**
 * Part One
 * Opponent:
 * A - Rock
 * B - Paper
 * C - Scissors
 *
 * Me:
 * X - Rock (1 pt)
 * Y - Paper (2 pts)
 * Z - Scissors (3 pts)
 *
 * Results:
 * Win - 6 pts
 * Draw - 3 pts
 * Loss - 0 pts
 */

const scores = {
  X: {
    A: 4,
    B: 1,
    C: 7,
  },
  Y: {
    A: 8,
    B: 5,
    C: 2,
  },
  Z: {
    A: 3,
    B: 9,
    C: 6,
  },
};

/*
 * Part Two
 * Opponent:
 * A - Rock
 * B - Paper
 * C - Scissors
 *
 * Points for picking:
 * Rock: 1 pt
 * Paper: 2 pts
 * Scissors: 3 pts
 *
 * Me:
 * X - Lose (0 pts)
 * Y - Draw (3 pts)
 * Z - Win (6 pts)
 */

const newScores = {
  X: {
    A: 3,
    B: 1,
    C: 2,
  },
  Y: {
    A: 4,
    B: 5,
    C: 6,
  },
  Z: {
    A: 8,
    B: 9,
    C: 7,
  },
};

// Part One -

const getRows = (data, scoreGuide) => {
  return data.map((r) => {
    const opp = r[0];
    const me = r[2];
    return scoreGuide[me][opp];
  });
};

const partOne = (data) => {
  return getRows(data, scores).reduce((p, c) => p + c);
};

// Part Two -

const partTwo = (data) => {
  return getRows(data, newScores).reduce((p, c) => p + c);
};

console.log(`solution for part 1 with sample data: ${partOne(sampleData)}`);
console.log(`solution for part 1 with real data: ${partOne(realData)}`);
console.log(`solution for part 2 with sample data: ${partTwo(sampleData)}`);
console.log(`solution for part 2 with real data: ${partTwo(realData)}`);
