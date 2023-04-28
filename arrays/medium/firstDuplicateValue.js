// 13. First Duplicate Value. 28/04/23

// Give an array of integers between 1 and n, inclusive, where n is the length of the array, write a function that returns the first integer that appears more than once (when the array is read from left to right).

// In other words, out of all the integers that might occur more than once in the inpute array, your function should return the one whose first duplicate value has the minimum index. If no integer appears more than once, your function should return -1.

// Note that you're allowed to mutate the input array.

// Sample Input #1

// array = [2, 1, 5, 2, 3, 3, 4]

// Sample Output #1

// 2 // 2 is the first integer that appears more than once.
// 3 also appears more than once, but the second 3 appears after the second 2.

// SOLUTION 1, Brute Force Approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function firstDuplicateValue(array) {
  let minimumSecondIndex = array.length;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        minimumSecondIndex = Math.min(minimumSecondIndex, j);
      }
    }
  }

  if (minimumSecondIndex === array.length) return -1;

  return array[minimumSecondIndex];
}

// SOLUTION 2, More Optimal Solution
// Time Complexity: O(n), need to perform one iteration through the array
// Space Complexity: O(n), since we create a new set which could have up to n values if there are no duplicates

function firstDuplicateValueTwo(array) {
  const seen = new Set();

  for (const item of array) {
    if (seen.has(item)) {
      return item;
    }

    seen.add(item);
  }

  return -1;
}

console.log(firstDuplicateValueTwo([2, 1, 5, 2, 3, 3, 4]));
