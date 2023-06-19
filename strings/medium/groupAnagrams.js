// 35. Group Anagrams,         Mon, 19/06/23

// Write a function that takes in an array of strings and groups anagrams together.

// Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, "cinema" and "iceman" are anagrams; similary, "foo" and "ofo" are anagrams.

// Your function should return a list of anagram groups in no particular order.

// Sample Input

// words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

// Sample Output

// [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]

// Time Complexity: (w * n * log(N))
// Space Complexity: O(wn) space
// where w is the number of words and n is the length of the longest word
function groupAnagrams(words) {
  const anagram = {};

  for (const word of words) {
    const sortedWord = word.split("").sort().join("");

    if (sortedWord in anagram) {
      anagram[sortedWord].push(word);
    } else {
      anagram[sortedWord] = [word];
    }
  }
  return Object.values(anagram);
}

console.log(
  groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])
);
