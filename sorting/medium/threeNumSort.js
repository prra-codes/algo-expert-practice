// 21. Three Number Sort. Thu, 04/05/23

// You're given an array of integers and another array of three distinct integers. The first array is guaranteed to only contain integers that are in the second array, and the second array represents a desired order for the integers in the first array. For example, a second array of [x, y, z] represents a desired order of [x, x, ..., x, y, y, ..., z, z, ..., z] in the first array.

// Write a function that sorts the first array acoording to the desired order in the second array.

// The function should perform this in place (i.e., it should mutate the input array), and it shouldn't use any auxiliary space (i.e., it should run with constant space: O(1) space).

// Note that the desired order won't necessarily be ascending or descending and that the first array won't necessarily contain all three integers found in the second array--it might only contain one or two.

// Sample Input

// array = [1, 0, 0, -1, -1, 0, 1, 1]
// order = [0, 1, -1]

// Sample Output

// [0, 0, 0, 1, 1, 1, -1, -1]

// Time Complexity: O(n), for loop time twice so 2n, but as it tends to infinity O(n) since we drop the constant of 2
// Space Complexity: O(1) don't create new array, we move things in existing array

function threeNumberSort(arr, order) {
  let firstValue = order[0];
  let lastValue = order[2];

  let firstIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === firstValue) {
      let temp = arr[i];
      arr[i] = arr[firstIndex];
      arr[firstIndex] = temp;
      firstIndex++;
    }
  }

  let lastIndex = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === lastValue) {
      let temp = arr[i];
      arr[i] = arr[lastIndex];
      arr[lastIndex] = temp;
      --lastIndex;
    }
  }

  return arr;
}

console.log(threeNumberSort([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]));
