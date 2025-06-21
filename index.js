function isPalindrome(word) {
  // Reverse the word
  const reversedWord = word.split("").reverse().join("");

  // Check if original and reversed words are the same
  return word === reversedWord;
}

/* 
  Pseudocode:
  - Take the word
  - Split it into characters
  - Reverse the characters
  - Join them back into a string
  - Compare the reversed string to the original
  - Return true if equal, else false
*/

/*
  Explanation:
  A palindrome is a word that reads the same forwards and backwards.
  By reversing the string and comparing it to the original, 
  we can determine if it's a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // custom test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
