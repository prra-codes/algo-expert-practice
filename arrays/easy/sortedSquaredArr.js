// 3. Sorted Squared Array (Day 2, 18/04/23)

// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

// Sample Input

// array = [1, 2, 3, 5, 6, 8, 9]

// Sample Output

// [1, 4, 9, 25, 36, 64, 81]

// Time Complexity: O(n(log(n))
// Space Complexity: O(n)

// where n is the number of elements in the input array
// reason nlog(n), we need to sort out output array

// Solution 1, Brute Force approach

function sortedSquaredArray(array) {
  let squaredArr = [];
  for (let i = 0; i < array.length; i++) {
    let square = array[i] * array[i];
    squaredArr.push(square);
  }

  let sorted = squaredArr.sort((a, b) => a - b);
  return sorted;
}

// console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
//////

// SOLUTION 2,
// Time Complexity: O(n), where n is the length of the input array
// Space Complexity: O(n)

function sortedSquaredArrayTwo(array) {
  let sortedArray = [];

  let idxOne = 0;
  let idxTwo = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    if (Math.abs(array[idxOne]) > Math.abs(array[idxTwo])) {
      sortedArray[i] = array[idxOne] * array[idxOne];
      idxOne++;
    } else {
      sortedArray[i] = array[idxTwo] * array[idxTwo];
      idxTwo--;
    }
  }
  return sortedArray;
}

console.log(sortedSquaredArrayTwo([1, 2, 3, 5, 6, 8, 9]));
