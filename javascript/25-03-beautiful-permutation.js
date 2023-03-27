/*
 * Complete the 'beautifulPermutations' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function beautifulPermutations(arr) {
  // Write your code here
  const object = {};
  arr.forEach(e => {
    if(object[e]){
      object[e].count += 1;
    }else{
      let element = {
        count: 1
      }
      object[e] = element;
    }
  }); 

  console.log(object)

  //https://www.hackerrank.com/challenges/taras-beautiful-permutations/problem

}

beautifulPermutations([ 1, 1, 2 ]);
