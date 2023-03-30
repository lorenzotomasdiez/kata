/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
  let breakRecord = 0;
  let breakWorstRecord = 0;
  let lastBiggestNumber = scores[0];
  let worstNumber = scores[0];

  scores.forEach(e => {
    if(e > lastBiggestNumber){
      lastBiggestNumber = e;
      breakRecord++;
    }
    if(e < worstNumber){
      worstNumber = e;
      breakWorstRecord++;
    }
  })

  console.log(breakRecord, breakWorstRecord);
}

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
