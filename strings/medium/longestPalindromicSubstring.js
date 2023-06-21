// 34. Longest Palindromic Substring, Fri, 16/06/23

// Write a function that, given a string, returns its longest palindromic substring.

// A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

// You can assume that there will only be one longest palindromic substring.

// Sample Input

// string = "abaxyzzyxf"

// Sample Output

// "xyzzyx"

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function longestPalindromicSubstring(string) {
  if (string.length < 2) return string;
  let start = 0;
  let maxLength = 1;

  function expandAroundCenter(left, right) {
    while (
      string[left] === string[right] &&
      left >= 0 &&
      right < string.length
    ) {
      if (right - left + 1 > maxLength) {
        start = left;
        maxLength = right - left + 1;
      }
      left -= 1;
      right += 1;
    }
  }

  for (let i = 0; i < string.length; i++) {
    expandAroundCenter(i - 1, i + 1);
    expandAroundCenter(i, i + 1);
  }
  return string.substring(start, start + maxLength);
}

console.log(longestPalindromicSubstring("babad"));
console.log(longestPalindromicSubstring("cbbd"));
