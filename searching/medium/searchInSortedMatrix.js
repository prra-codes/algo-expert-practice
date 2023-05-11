// 24. Search In Sorted Matrix, 11/05/23

// You're given a two-dimensional array (a matrix) of distinct integers and a target integer. Each row in the matrix is sorted, and each column is also sorted; the matrix doesn't necessarily have the same height and width.

// Write a function that returns an array of the row and column indices of the target integer if it's containded in the matrix, otherwise [-1, -1]

// Sample Input

// matrix = [[1, 4, 7, 12, 15, 1000], [2, 5, 19, 31, 32, 1001], [3, 8, 24, 33, 35, 1002], [40, 41, 42, 44, 45, 1003], [99, 100, 103, 106, 128, 1004]]
// target = 44

// Sample Output
// [3, 3]

// A solution I thought of
// Time Complexity: O(1)

function searchInSortedMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

console.log(
  searchInSortedMatrix(
    [
      [1, 4, 7, 12, 15, 1000],
      [2, 5, 19, 31, 32, 1001],
      [3, 8, 24, 33, 35, 1002],
      [40, 41, 42, 44, 45, 1003],
      [99, 100, 103, 106, 128, 1004],
    ],
    55555
  )
);

// console.log(
//   searchInSortedMatrix(
//     [
//       [1, 4, 7, 12, 15, 1000],
//       [2, 5, 19, 31, 32, 1001],
//       [3, 8, 24, 33, 35, 1002],
//       [40, 41, 42, 44, 45, 1003],
//       [99, 100, 103, 106, 128, 1004],
//     ],
//     44
//   )
// );
