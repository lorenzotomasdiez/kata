'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    const length = arr.length; // Store the length of the input array
    const hourglassSums = []; // Array to store the sums of hourglasses

    // Iterate through the rows of the array, excluding the last two rows
    for (let i = 0; i < length - 2; i++) {
        // Iterate through the columns of the array, excluding the last two columns
        for (let j = 0; j < length - 2; j++) {
            let hourglassSum = 0; // Variable to accumulate the sum of the current hourglass

            // Nested loops to traverse each element of the 3x3 hourglass centered at (i, j)
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    // Exclude unwanted elements in the middle row, except for the middle element
                    if (!(k === 1 && l !== 1)) {
                        hourglassSum += arr[i + k][j + l]; // Accumulate valid elements into hourglassSum
                    }
                }
            }

            // Store the calculated sum of the current hourglass in the array
            hourglassSums.push(hourglassSum);
        }
    }

    // Find the maximum value among the sums of hourglasses
    const maxSum = Math.max(...hourglassSums);

    // Return the maximum sum as the result
    return maxSum;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}

