/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 *  Determine all integers that satisfy the following two conditions:

The elements of the first array are all factors of the integer being considered
The integer being considered is a factor of all elements of the second array
 */

function getTotalX(a, b) {
    // Write your code here
  let result = 0;
  const numbers = [...a, ...b].sort((a,b) => a-b);
  
  for(let i = numbers[0]; i < numbers[numbers.length - 1] + 1; i++){
    let passFirstCondition = true;
    let passSecondCondition = true;
    for(let j = 0; j < a.length; j++){
      if(i%a[j] !== 0){
        passFirstCondition = false;
      }
    }
    for(let k = 0; k < b.length; k++){
      if(b[k]%i !== 0){
        passSecondCondition = false;
      }
    }

    if(passFirstCondition && passSecondCondition){
      result++;
    }
  }

  console.log(result);
  return result;
}


getTotalX([ 2, 4 ], [ 16, 32, 96 ]);
