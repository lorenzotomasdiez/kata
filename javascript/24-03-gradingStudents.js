/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
const newGrades = grades.map((e) => {
    if(e < 38){
      return e;
    }
    let numOf5 = e;
    for(let i = e; i < e+5; i++){
      if(i%5 === 0){
        numOf5 = i
      }
    }
    let rest = numOf5 - e;
    if(rest < 3){
      return numOf5;
    }else{
      return(e);
    }
  });
    return newGrades
}

gradingStudents([ 73, 67, 38, 33 ]);
