//1. Two Number Sum (Day 1, Mon 17/04/23)

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

// Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

// You can assume that there will be at most one pair of numbers summing up to the target sum.

// Sample Input
// array = [3, 5, -4, 8, 11, 1, -1, 6]
//targetSum = 10

// Sample Output [-1, 11] // the numbers could be in reverse order

// Solution 1, using Two For Loops
// Time Complexity: O(n^2), Space Complexity: O(1)
// where n is the length of the input array

function twoNumberSum(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        return [arr[i], arr[j]];
      }
    }
  }

  return [];
}

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// Solution 2, using a Hash Table (in JavaScript, using an object)
// Time Complexity: O(n), Space Complexity: O(n)
// where n is the length of the input array

function twoNumberSumTwo(arr, targetSum) {
  // x + y === targetSum

  // y = targetSum - x

  const nums = {};

  for (const num of arr) {
    let potentialMatch = targetSum - num;

    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }

  return [];
}

// console.log(twoNumberSumTwo([3, 5, -4, 8, 11, 1, -1, 6], 10));

// Solution 3 (Day 3, Wed, 19/03/23)

/// Time Complexity: O(nlog(n))
// Space Complexity: O(1)

function twoNumberSumThree(arr, targetSum) {
  arr.sort((a, b) => a - b); // sorting the algorithm into ascending order

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let startValue = arr[left];
    let endValue = arr[right];
    if (startValue + endValue === targetSum) {
      return [startValue, endValue];
    } else if (startValue + endValue > targetSum) {
      --right;
    } else if (startValue + endValue < targetSum) {
      ++left;
    }
  }

  return [];
}
