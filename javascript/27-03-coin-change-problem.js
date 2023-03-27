/*
 * Complete the 'getWays' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. LONG_INTEGER_ARRAY c
 */

function getWays(number, coins) {
  const numbersToUse = coins.reduce(
    (acc, el) => !acc.includes(el) && el <= number ? [...acc,el] : acc, []);

  let count = 0;

  numbersToUse.forEach(e => {
    //number self-multiplication
    let isDividable = number%e === 0;
    if(isDividable){
      count++;
    }

    //number multiplications with other numbers;


  });


  console.log(count);
  return count;
}



getWays(4,[ 1, 2, 3, 5])
