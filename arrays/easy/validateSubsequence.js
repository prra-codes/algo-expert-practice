// 2. Validate Subsequence (Easy ranking)

// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

// Sample Input
// array = [5, 1, 22, 25, 6, -1, 8, 10]
// sequence = [1, 6, -1, 10]

// Sample Output
// true

//  Time Complexity: O(n) where n is the length of the main array
// Space Complexity: O(1)

function isValidSubsequence(arr, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < arr.length && seqIdx < sequence.length) {
    if (arr[arrIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    arrIdx++;
  }
  return sequence.length === seqIdx;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
