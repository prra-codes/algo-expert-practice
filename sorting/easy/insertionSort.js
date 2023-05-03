// 19. Insertion Sort. Wed, 02/05/23

// Write a function that takes in an array of integers and returns a sorted version of that array. Use the Insertion Sort algorithm to sort the array.

// Sample Input

// array = [8, 5, 2, 9, 5, 6, 3]

// Sample Output

// [2, 3, 5, 5, 6, 8, 9]

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];

    j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = numberToInsert;
  }
  return arr;
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));
