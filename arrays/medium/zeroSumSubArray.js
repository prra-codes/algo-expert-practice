// 16. Zero Sum Subarray, Mon, 01/05/23

// You're given a list of integers nums. Write a function that returns a boolean representing whetehr there exists a zero-sum subarray of nums.

// A zero-sum subarray is any sub array where all of the values add up to zero. A subarray is any contiguous section of the array. For the purposes of this problem, a subarray can be as small as one element and as long as the original array.

// Sample Input

// nums = [-5, -5, 2, 3, -2]

// Sample Output

// True // The subarray [-5, 2, 3] has a sum of 0

// Time Complexity: O(n), since we iterate through the numbers array one time
// Space Complexity: O(n), since we may store up to n elements if there is no zero sum sub-array
function zeroSumSubarray(nums) {
  let currentSum = 0;
  let set = new Set([0]);

  for (let num of nums) {
    currentSum += num;
    if (set.has(currentSum)) {
      return true;
    } else {
      set.add(currentSum);
    }
  }

  return false;
}

console.log(zeroSumSubarray([-5, -5, 2, 3, -2]));
