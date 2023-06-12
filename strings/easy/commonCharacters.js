// 29. Common Characters. Mon, 12/06/23

// Write a function that takes in a non-empty list of non-empty strings and returns a list of characters that are common to all strings in the list, ignoring multiplicity.

// Note that the strings are not guaranteed to only contain alphanumeric characters. The list you return can be in any order.

// Sample Input

// strings = ["abc", "bcd", "cbaccd"]

// Sample Output

// ["b", "c"] // The characters could be ordered differently.

// Time Complexity: O(n * m) time, where n is the number of strings, m is the length of the longest string

// Space Complexity: O(c) space, where c is the number of unique characters across all strings

function commonCharacters(strings) {
  const characterCounts = {};

  for (const string of strings) {
    let uniqueCharacters = new Set(string);

    for (const character of uniqueCharacters) {
      if (!(character in characterCounts)) {
        characterCounts[character] = 0;
      }

      characterCounts[character]++;
    }
  }

  let finalCharacters = [];

  for (const [character, count] of Object.entries(characterCounts)) {
    if (count === strings.length) {
      finalCharacters.push(character);
    }
  }

  return finalCharacters;
}

console.log(commonCharacters(["abc", "bcd", "cbaccd"]));
