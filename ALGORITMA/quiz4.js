const Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const firstDiagonal = Matrix.reduce(
  (total, value, index) => total + value[index],
  0
);

const secondDiagonal = Matrix.reduce(
  (total, value, index) => total + value.reverse()[index],
  0
);

console.log(firstDiagonal - secondDiagonal);
