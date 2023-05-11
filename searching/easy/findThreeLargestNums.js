// 23. Find Three Largest Numbers, Thu, 11/05/23

// Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array.

// The function should return duplicate integers if necessary; for example it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].

// Sample Input

// array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

// Sample Output

// [18, 141, 541]

// Time Complexity: O(n)
// Space Complexity: O(1)

function findThreeLargestNumbers(array) {
  const threeLargest = [null, null, null];

  for (const num of array) {
    updateLargest(num, threeLargest);
  }

  return threeLargest;
}

function updateLargest(num, threeLargest) {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndUpdate(num, threeLargest, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftAndUpdate(num, threeLargest, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftAndUpdate(num, threeLargest, 0);
  }
}

function shiftAndUpdate(num, threeLargest, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      threeLargest[i] = num;
    } else {
      threeLargest[i] = threeLargest[i + 1];
    }
  }
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);
