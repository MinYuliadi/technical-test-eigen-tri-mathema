const sentence = "Saya sangat senang mengerjakan soal algoritma";

const splittedSentence = sentence.split(" ");
let longestWord = "";

splittedSentence.forEach((word) => {
  if (longestWord.length <= word.length) {
    longestWord = word;
  }
});

console.log(`${longestWord}: ${longestWord.length} character`);
