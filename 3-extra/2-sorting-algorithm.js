/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/

function sortAges(arr) {
  let newArray = []; //1,3,6
  while (arr.length !== 0) {
    let currentCard = arr.pop(); //5
    console.log(arr);
    let insertedFlag = false;
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] > currentCard) {
        console.log(newArray.length);
        newArray.splice(i, 0, currentCard); //1,3,5,6
        insertedFlag = true;
        break;
      }
    }
    if (!insertedFlag) {
      newArray.push(currentCard);
    }
  }
  return newArray;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = [
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Sanyia",
  66,
  "James",
  23,
  "🎖",
  "Ismeal",
];
const agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Elamin"];

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

// test(
//   "sortAges function works - case 1",
//   arraysEqual(sortAges(agesCase1), [23, 45, 55, 66, 100])
// );

// test(
//   "sortAges function works - case 2",
//   arraysEqual(sortAges(agesCase2), [55, 60, 100])
// );
test(
  "We can sort an arbitrary list of cards",
  arraysEqual(sortAges([7, 5, 1, 6, 4, 2, 13, 3, 12, 11, 10, 9, 8]), [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
  ])
);
