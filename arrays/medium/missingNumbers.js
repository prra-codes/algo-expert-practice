// 17. Missing Numbers, 02/05/23

// You're given an unordered list of unique integers nums in the range [1, n], where n represents the length of nums + 2. This means that two numbers in this range are missing from the list.

// Write a function that takes in this list and returns a new list with the two missing numbers, sorted numerically.

// Sample Input

// nums = [1, 4, 3]

// Sample Output

// [2, 5] // n is 5, meaning the completed list should be [1, 2, 3, 4, 5]

// A solution
// Time Complexity: O(n)
// Space Complexity: O(n)
function missingNumbers(nums) {
  const set = new Set(nums);

  const missingNums = [];
  for (let i = 1; i <= nums.length + 2; i++) {
    if (!set.has(i)) {
      missingNums.push(i);
    }
  }
  return missingNums;
}

console.log(missingNumbers([1, 4, 3]));
