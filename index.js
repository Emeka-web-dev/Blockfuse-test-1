function getCommonPrefix(words) {
  if (words.length === 0) return "";

  if (words.length === 1) return words[0];

  const shortestWord = words.reduce((a, b) => (a.length <= b.length ? a : b));

  // Iterate through characters of the shortest string
  for (let i = 0; i < shortestWord.length; i++) {
    // Check if this character matches in all strings
    for (let j = 1; j < words.length; j++) {
      if (words[j][i] !== shortestWord[i]) {
        // If mismatch found, return prefix up to this point
        return shortestWord.slice(0, i);
      }
    }
  }

  return prefix;
}

const result = getCommonPrefix(["flower", "flow", "flight"]);
console.log(result);
