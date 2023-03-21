/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  if(arr.length !== 5){
    throw new Error('Please provide proper arrary')
  }

  let result = arr.map((e) => {
    let element = arr.reduce((acc, el) => acc+el,0) - e;
    return element;
  })

  let min = result.reduce((acc, el) => el < acc ? el : acc, result[0]);
  let max = result.reduce((acc, el) => el > acc ? el : acc, result[0]);

  return min + ' ' + max

}

let arr = [ 1, 2, 3, 4, 5];

miniMaxSum(arr);
