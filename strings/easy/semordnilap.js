// 32. Semordnilap. Wed, 14/06/23

// Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.

// A semordnilap pair is defined as a set of different strings where the reverse of one word is the same as the forward version of the other. For example the words "diaper" and "repaid" are a semordnilap pair, as are the words "palindromes" and "semordnilap"

// The order of the returned pairs and the order of the strings within each pair does not matter.

// Sample Input

// words = ["diaper", "abc", "test", "cba", "repaid"]

// Sample Output

// [["diaper, "repaid"], ["abc", "cba"]]

function semordnilap(words) {
  const wordSet = new Set(words);
  const semordnilapPairs = [];

  for (const word of words) {
    const reverse = word.split("").reverse().join("");

    if (wordSet.has(reverse) && reverse !== word) {
      semordnilapPairs.push([word, reverse]);
      wordSet.delete(word);
      wordSet.delete(reverse);
    }
  }

  return semordnilapPairs;
}

console.log(semordnilap(["diaper", "abc", "test", "cba", "repaid"]));
