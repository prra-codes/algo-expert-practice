// 27. Palindrome Check. Sat, 27/05/23

// Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.

// A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

// Saple Input

// string = "abcdcba"

// Sample Output

// true // it's written the same forward and backward

// Time Complexity: O(n)
// Space Complexity: O(n)

function isPalindrome(str) {
  let lowerCaseStr = str.toLowerCase();
  let strToArr = lowerCaseStr.split("");
  let reversedArr = strToArr.reverse();
  let reversedString = reversedArr.join("");

  if (str === reversedString) {
    return true;
  } else {
    return false;
  }
}

// console.log(isPalindrome("hannah"));

// ANOTHER METHOD

// Time Complexity: O(n^2), Space Complexity: O(n)
function isPalindromeTwo(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  if (reversedStr === str) {
    return true;
  } else {
    return false;
  }
}

// console.log(isPalindromeTwo("hannah"));

// ANOTHER MORE OPTIMAL METHOD
// Time Complexity: O(n)
// Space Complexity: O(1)

function isPalindromeThree(str) {
  // Write your code here.

  let leftIdx = 0;
  let rightIdx = str.length - 1;

  while (leftIdx < rightIdx) {
    if (str[leftIdx] !== str[rightIdx]) {
      return false;
    }
    leftIdx++;
    rightIdx--;
  }

  return true;
}

console.log(isPalindromeThree("hannah"));
