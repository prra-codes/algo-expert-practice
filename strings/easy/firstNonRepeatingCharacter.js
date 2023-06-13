// 31. First Non-Repeating Character, Tue, 13/06/23

// Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.

// The first non-repeating character is the first character in a string that occurs only once.

// If the input string doesn't have any non-repeating characters, your function should return -1.

// Sample Input

// string = "abcdcaf"

// Sample Output

// 1 // The first non-repeating character is "b" and is found at index 1.

function firstNonRepeatingCharacter(string) {
  // Write your code here.

  const stringArr = string.split("");

  let characterCounts = {};

  for (const char of stringArr) {
    if (!(char in characterCounts)) {
      characterCounts[char] = 0;
    }

    characterCounts[char]++;
  }

  const nonRepeatedChars = [];

  for (const [char, count] of Object.entries(characterCounts)) {
    if (count === 1) {
      nonRepeatedChars.push(char);
    }
  }

  if (nonRepeatedChars.length === 0) {
    return -1;
  }

  const indexesArr = [];

  for (const char of nonRepeatedChars) {
    let charIndex = stringArr.indexOf(char);
    indexesArr.push(charIndex);
  }

  const smallestIndex = Math.min(...indexesArr);

  return smallestIndex;
}
console.log(firstNonRepeatingCharacter("abcdcaf"));
