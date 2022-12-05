export const stringsToNumbers = (arr) => arr.map((str) => Number(str));
export const stringsToNumbersMatrix = (matrix) =>
  matrix.map((row) => stringsToNumbers(row));
