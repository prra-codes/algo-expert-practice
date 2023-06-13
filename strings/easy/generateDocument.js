// 30. Generate Document, Tue, 13/06/23

// You're given a string of available characters and a string representing a document that you need to generate. Write a function that determines if you can generate the document using the available characters. If you can generate the document, your function should return true; otherwise, it should return false.

// You're only able to generate the document if the frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters in the document string. For example, if you're given characters === "abcabc" and document = "aabbccc" you cannot generate the document because you're missing one c.

// The document that you need to create may contain any characters, including special cahracters, capital letters, numbers, and spaces.

// Note: you can always generate the empty string ("")

// Sample Input

// characters = "Bste!hetsi ogEAxpelrt x "
// document = "AlgoExpert is the Best!"

// Sample Output

// true

// O(n + m) time | O(c) space - where n is the number of characters, m is the length of the document, and c is the number of unique characters in the characters string

function generateDocument(characters, document) {
  const characterCounts = {};

  for (const character of characters) {
    if (!(character in characterCounts)) {
      characterCounts[character] = 0;
    }

    characterCounts[character]++;
  }

  for (const character of document) {
    if (!(character in characterCounts) || characterCounts[character] === 0) {
      return false;
    }

    characterCounts[character]--;
  }

  return true;
}

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);

console.log(generateDocument("abcabc", "aabbccc"));
