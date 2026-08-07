// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.

//
// =============================================================================
const readlineSync = require('readline-sync');

/**
 * PART A — Prints the multiplication table for a single number from 1 to 12.
 * @param {number} num - The base number for the multiplication table.
 */
function printSingleTable(num) {
  console.log(`\nMultiplication Table for ${num}:`);
  for (let i = 1; i <= 12; i++) {
    console.log(`${num}  x  ${i}  =  ${num * i}`);
  }
}

/**
 * PART B — Prints multiplication tables for every number from 1 to N.
 * @param {number} n - The maximum number up to which tables are printed.
 */
function printMultipleTables(n) {
  for (let i = 1; i <= n; i++) {
    printSingleTable(i);
    if (i < n) {
      console.log('---------------------------');
    }
  }
}

/**
 * Main execution function.
 */
function main() {
  console.log('--- PART A: Single Multiplication Table ---');
  const numA = readlineSync.questionInt('Enter a number: ');

  if (numA <= 0 || !Number.isInteger(numA)) {
    console.log('Error: Please enter a positive integer.');
    return;
  }

  printSingleTable(numA);

  console.log('\n===========================================');
  console.log('--- PART B: Tables from 1 to N ---');
  const numB = readlineSync.questionInt('Enter N: ');

  if (numB <= 0 || !Number.isInteger(numB)) {
    console.log('Error: Please enter a positive integer.');
    return;
  }

  printMultipleTables(numB);
}

// Execute the main function
main();
// =============================================================================


