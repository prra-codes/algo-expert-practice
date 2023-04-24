// 9. Spiral Traverse, Mon, 24/04/23

// Write a function that takes in a n x m two-dimensional array (that can be square-shaped when n == m) and returns a one-dimensional array of all the array's elements in spiral order.

// Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a spiral pattern all the way until every element has been visited.

// Sample Input

// array = [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]

// Sample Output

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

// Time Complexity: O(n) where n is the total number of elements in the entire 2D array, as we traverse through every single value once

// Space Complexity:  O(n) since we are storing all N values in another array

function spiralTraverse(array) {
  const results = []; // this is the array we return at the end, filled with elements in spiral order

  // startRow, endRow, startCol, endCol are used to traverse through array
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      results.push(array[startRow][col]); // traversing through top row, pushing elements in top row into results
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      // startRow + 1, so that we don't push top-right element again
      results.push(array[row][endCol]);
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      // endCol - 1, so we don't push bottom-right element again
      if (startRow === endRow) break;
      results.push(array[endRow][col]);
    }

    for (let row = endRow - 1; row >= startRow + 1; row--) {
      if (startCol === endCol) break;
      results.push(array[row][startCol]);
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return results;
}

console.log(
  spiralTraverse([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ])
);
