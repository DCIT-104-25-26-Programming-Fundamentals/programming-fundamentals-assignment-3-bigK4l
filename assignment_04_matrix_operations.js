// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
const readlineSync = require('readline-sync');

/**
 * Reads a matrix from user input.
 * @param {number} rows - Number of rows.
 * @param {number} cols - Number of columns.
 * @param {string} matrixName - Optional label for prompting the user.
 * @returns {number[][]} - 2D array representing the matrix.
 */
function readMatrix(rows, cols, matrixName = '') {
  const nameLabel = matrixName ? ` for ${matrixName}` : '';
  console.log(`\nEnter values${nameLabel} (${rows}x${cols}):`);
  
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const input = readlineSync.question(`Enter row ${i + 1}: `);
    // Split input by space, trim whitespace, and map to numbers
    const row = input.trim().split(/\s+/).map(Number);
    
    if (row.length !== cols || row.some(isNaN)) {
      console.log(`Invalid input. Please enter exactly ${cols} numbers separated by spaces.`);
      i--; // Retry this row
      continue;
    }
    
    matrix.push(row);
  }
  return matrix;
}

/**
 * Displays a matrix in a neat grid format.
 * @param {number[][]} matrix - The matrix to print.
 */
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join('\t'));
  }
}

/**
 * PART A: Computes the transpose of an M x N matrix.
 * @param {number[][]} matrix - Original matrix.
 * @returns {number[][]} - Transposed matrix (N x M).
 */
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

/**
 * PART B: Adds two matrices of the same dimensions (M x N).
 * @param {number[][]} A - Matrix A.
 * @param {number[][]} B - Matrix B.
 * @returns {number[][]} - Resultant sum matrix.
 */
function addMatrices(A, B) {
  const rows = A.length;
  const cols = A[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(A[i][j] + B[i][j]);
    }
    result.push(row);
  }

  return result;
}

/**
 * PART C: Multiplies two matrices (A: M x N, B: N x P).
 * @param {number[][]} A - Matrix A (M x N).
 * @param {number[][]} B - Matrix B (N x P).
 * @returns {number[][]} - Resultant product matrix (M x P).
 */
function multiplyMatrices(A, B) {
  const M = A.length;
  const N = A[0].length;
  const P = B[0].length;
  const result = [];

  for (let i = 0; i < M; i++) {
    const row = [];
    for (let j = 0; j < P; j++) {
      let sum = 0;
      for (let k = 0; k < N; k++) {
        sum += A[i][k] * B[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}

/**
 * Main execution function demonstrating all three parts.
 */
function main() {
  console.log('--- PART A: Transpose Matrix ---');
  const rowsA = readlineSync.questionInt('Enter number of rows: ');
  const colsA = readlineSync.questionInt('Enter number of columns: ');
  const matrixA = readMatrix(rowsA, colsA);

  console.log('\nOriginal Matrix:');
  printMatrix(matrixA);

  console.log('\nTransposed Matrix:');
  printMatrix(transposeMatrix(matrixA));

  console.log('\n-----------------------------------');
  console.log('--- PART B: Add Two Matrices ---');
  const rowsB = readlineSync.questionInt('Enter number of rows for matrices: ');
  const colsB = readlineSync.questionInt('Enter number of columns for matrices: ');
  
  const m1 = readMatrix(rowsB, colsB, 'Matrix 1');
  const m2 = readMatrix(rowsB, colsB, 'Matrix 2');

  console.log('\nMatrix Sum:');
  printMatrix(addMatrices(m1, m2));

  console.log('\n-----------------------------------');
  console.log('--- PART C: Multiply Two Matrices ---');
  const M = readlineSync.questionInt('Enter rows for Matrix A (M): ');
  const N = readlineSync.questionInt('Enter cols for Matrix A / rows for Matrix B (N): ');
  const P = readlineSync.questionInt('Enter cols for Matrix B (P): ');

  const matA = readMatrix(M, N, 'Matrix A');
  const matB = readMatrix(N, P, 'Matrix B');

  console.log('\nMatrix Product (A x B):');
  printMatrix(multiplyMatrices(matA, matB));
}

// Execute the program
main();
// =============================================================================

const readlineSync = require('readline-sync');

