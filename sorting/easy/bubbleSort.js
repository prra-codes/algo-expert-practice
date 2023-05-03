// 18. Bubble Sort, Tue, 02/05/23

// Write a function that takes in an array of integers and returns a sorted version of that array. Use the Bubble Sort algorithm to sort the array.

// Sample Input

// array = [8, 5, 2, 9, 5, 6, 3]

// Sample Output

// [2, 3, 5, 5, 6, 8, 9]

// Time Complexity: O(n^2) time
// Space Complexity: O(1) time

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(bubbleSort([8, 20, -2, 4, -6]));
