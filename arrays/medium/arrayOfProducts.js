// 12. Array Of Products. Thu, 27/04/23

// Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.

// In other words, the value at output[i] is equal to the product of every number in the input array other than input[i].

// Note that you'rer expected to solve this problem without using division.

// Sample Input

// array = [5, 1, 4, 2]

// Sample Output

// [8, 40, 10, 20]

// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 x 4 x 2]]
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4

// Solution 1, Brute Force Solution
// where Time O(n squared), Space O(n)

function arrayOfProducts(array) {
  let outputArr = [];

  for (let i = 0; i < array.length; i++) {
    let runningProduct = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        runningProduct *= array[j];
      }
      outputArr[i] = runningProduct;
    }
  }
  return outputArr;
}

console.log(arrayOfProducts([5, 1, 4, 2]));

// Solution Two, more optimal solutions
// Time Complexity: O(n)
// Space Complexity: O(n)

function arrayOfProductsTwo(array) {
  let products = new Array(array.length).fill(1);
  let leftProducts = new Array(array.length).fill(1);
  let rightProducts = new Array(array.length).fill(1);

  let leftRunningTotal = 1;
  for (let i = 0; i < array.length; i++) {
    leftProducts[i] = leftRunningTotal;
    leftRunningTotal *= array[i];
  }

  let rightRunningTotal = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    rightProducts[i] = rightRunningTotal;
    rightRunningTotal *= array[i];
  }

  for (let i = 0; i < array.length; i++) {
    products[i] = leftProducts[i] * rightProducts[i];
  }

  return products;
}

console.log(arrayOfProductsTwo([5, 1, 4, 2]));
