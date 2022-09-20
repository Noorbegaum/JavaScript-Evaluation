const number = 3;
const alphabet = [];
const matrix = [];
let count = -1;
function printAlpha(n) {
  for (i = 10; i < n * n + 10; i++) {
    alphabet.push(i.toString(36));
  }

  return alphabet;
}
function printMatrix(n) {
  let alpha = printAlpha(n);
  for (let i = 0; i < alpha.length; i++) {
    if (i % n === 0) {
      count++;
      matrix[count] = [];
    }
    matrix[count].push(alpha[i]);
  }

  return matrix;
}
function transposeMatrix(matrix, n) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
  return matrix;
}
console.log(transposeMatrix(printMatrix(number), number));
