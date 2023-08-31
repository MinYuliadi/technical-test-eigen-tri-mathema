const text = "NEGIE1";
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charsGroup = [];
const numbersGroup = [];

for (const char of text) {
  if (!numbers.includes(char)) {
    charsGroup.push(char);
  } else {
    numbersGroup.push(char);
  }
}

const result = [...charsGroup.reverse(), ...numbersGroup].join("");
console.log(result);
