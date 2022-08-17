/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let transformations = new Set();
  for (const word of words) transformations.add(transform(word));
  return transformations.size;
};

var transform = function (word) {
  let tran = "";
  for (const c of word) tran += getMorseCode(c);
  return tran;
};

var getMorseCode = function (c) {
  const morseCodeMap = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  return morseCodeMap[c.charCodeAt(0) - "a".charCodeAt(0)];
};

const words = ["gin", "zen", "gig", "msg"];
console.log(uniqueMorseRepresentations(words));
