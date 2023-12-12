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
    const glass = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if((i < arr.length - 2 ) && (j < arr[i].length - 2)){
                const newArray = [];
                for(let k = 0; k < 3; k++){
                    for(let h = 0; h < 3; h++){
                        if(k === 1 && h === 0)continue;
                        if(k === 1 && h === 2)continue;
                        newArray.push(
                            arr[i+k][j+h]
                        );
                    }
                }
                glass.push(newArray)
            }
        }
    }
    
    const reducedGlass = glass
        .reduce((acc, e) => {
            const sum = e.reduce((acc, el) => el+acc, 0);
            return [...acc, sum];
        },[])
    
    console.log(reducedGlass);
    
    return reducedGlass
        .reduce((acc, e) => e > acc ? e : acc, 0)
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

