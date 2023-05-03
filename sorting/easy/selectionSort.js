// 20. Selection Sort. Wed, 02/05/23

// Write a function that takes in an array of integers and returns a sorted version of that array. Use the selection Sort algorithm to sort the array.

// Sample Input

// array = [8, 5, 2, 9, 5, 6, 3]

// Sample Output

// [2, 3, 5, 5, 6, 8, 9]

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minimumIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimumIndex]) {
        minimumIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minimumIndex];
    arr[minimumIndex] = temp;
  }
  return arr;
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));
