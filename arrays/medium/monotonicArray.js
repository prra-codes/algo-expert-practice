// 4. Medium. Monotonic Array

// Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

// An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

// Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Simply, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.

// Note that empty arrays and arrays of one element are monotonic.

// Sample Input

// array = [-1, -5, -10, -1100, -1100, -1101, -1102, - 9001]

// Sample Output

// true

// O(n) time | O(1) space - where n is the length of the array

function isMonotonic(array) {
  let isNonIncreasing = true;
  let isNonDecreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      isNonIncreasing = false;
    }

    if (array[i] < array[i - 1]) {
      isNonDecreasing = false;
    }
  }

  return isNonDecreasing || isNonIncreasing;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
