const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
const OUTPUT = new Array(QUERY.length).fill(0);

QUERY.forEach((query, index) => {
  INPUT.forEach((input) => {
    if (query === input) {
      OUTPUT[index] += 1;
    }
  });
});

console.log(OUTPUT);
