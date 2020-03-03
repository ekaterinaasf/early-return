const evaluate = require("../evaluate");

const findOddsArray1 = [".", "1", "2", ":"];
const findOddsArray2 = ["1", "two", "three", "10"];
const findOddsArray3 = ["one", "2", "", "NaN"];
const findOddsArray4 = [".", 1, 2, NaN];

const oddsToFind = ["1", "3", "5"];
const evensToNotFind = ["2", "4", "6"];

const findAllOddsTests = [
  { name: "Test 1", args: [findOddsArray1], expected: ["1"] },
  { name: "Test 2", args: [findOddsArray2], expected: ["1"] },
  { name: "Test 3", args: [findOddsArray3], expected: [] },
  { name: "Test 4", args: [findOddsArray4], expected: null },
  { name: "Test 5", args: [[1, 2, 3]], expected: null },
  { name: "Test 6", args: [oddsToFind], expected: ["1", "3", "5"] },
  { name: "Test 7", args: [evensToNotFind], expected: [] }
];

const findAllOdds = arr => {
  // write me!
  if (arr.some(el => typeof el !== "string")) return null;
  let rez = [];
  arr.forEach(el => {
    if (!isNaN(el) && +el % 2 !== 0) {
      rez.push(el);
    }
  });
  return rez;
};

evaluate(findAllOdds, findAllOddsTests);
