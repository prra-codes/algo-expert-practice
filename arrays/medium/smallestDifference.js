// 6. Smallest Difference. (Day 3. Wed, 19/04/23)

// Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these numbers, with the number from the first array in the first position.

// Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 -4 is 1.

// You can assume that there will only be one pair of numbers with the smallest difference.

// Sample Input

// arrayOne = [-1, 5, 10, 20, 28, 3]
// arrayTwo = [26, 134, 135, 15, 17]

// Sample Output [28, 26]

// Time Complexity: O(nlog(n) + mlog(m)), using two sorting algorithms and the two arrays can be of different length
// Space Complexity: O(1)
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let smallestDif = Infinity;
  let currentDif = Infinity;
  let smallestPair = [];
  let idxOne = 0;
  let idxTwo = 0;

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let valOne = arrayOne[idxOne];
    let valTwo = arrayTwo[idxTwo];

    if (valOne === valTwo) {
      return [valOne, valTwo];
    } else if (valOne > valTwo) {
      idxTwo++;
      currentDif = valOne - valTwo;
    } else if (valOne < valTwo) {
      idxOne++;
      currentDif = valTwo - valOne;
    }

    if (smallestDif > currentDif) {
      smallestDif = currentDif;
      smallestPair = [valOne, valTwo];
    }
  }

  return smallestPair;
}
